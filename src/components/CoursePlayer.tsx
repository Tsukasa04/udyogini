import React, { useState } from 'react';
import { CourseModule, CourseLesson, Language, QuizQuestion } from '../types';
import { COURSE_MODULES } from '../data/courses';
import { translations } from '../data/translations';
import { speakText, stopSpeaking, isSpeaking } from '../utils/speech';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  Award,
  Smartphone,
  Globe,
  CreditCard,
  Share2,
  Megaphone,
  TrendingUp,
} from 'lucide-react';
import { Simulators } from './Simulators';

interface CoursePlayerProps {
  currentLang: Language;
  completedLessons: string[];
  onToggleLessonComplete: (lessonId: string) => void;
  completedModules: string[];
  onModuleComplete: (moduleId: string) => void;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({
  currentLang,
  completedLessons,
  onToggleLessonComplete,
  completedModules,
  onModuleComplete,
}) => {
  const t = translations[currentLang];
  const [selectedModuleId, setSelectedModuleId] = useState<string>('mod-1');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('les-1-1');
  const [readingLesson, setReadingLesson] = useState(false);
  
  // Quiz state
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeModule = COURSE_MODULES.find((m) => m.id === selectedModuleId) || COURSE_MODULES[0];
  const activeLesson =
    activeModule.lessons.find((l) => l.id === selectedLessonId) || activeModule.lessons[0];

  const handleReadLesson = () => {
    if (readingLesson || isSpeaking()) {
      stopSpeaking();
      setReadingLesson(false);
    } else {
      const title = activeLesson.title[currentLang];
      const body = activeLesson.content[currentLang].join('. ');
      const tips = activeLesson.practicalTips[currentLang].join('. ');
      const fullText = `${title}. ${body}. महत्त्वाच्या टिप्स: ${tips}`;
      setReadingLesson(true);
      speakText(fullText, currentLang, () => setReadingLesson(false));
    }
  };

  const handleStartQuiz = () => {
    setQuizActive(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerChecked(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;
    setAnswerChecked(true);
    const currentQ = activeModule.quiz[currentQuestionIndex];
    if (selectedAnswer === currentQ.correctAnswerId) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeModule.quiz.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerChecked(false);
    } else {
      setQuizFinished(true);
      onModuleComplete(activeModule.id);
    }
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#C85A32]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#C85A32]" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-[#C85A32]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#C85A32]" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-[#C85A32]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#C85A32]" />;
      default: return <BookOpen className="w-5 h-5 text-[#C85A32]" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header & Interactive Simulators shortcut */}
      <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
              {t.courses.allModules}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292524] mt-1">
              {currentLang === 'mr'
                ? 'ग्रामीण महिलांसाठी सोपे डिजिटल व व्यवसाय शिक्षण'
                : currentLang === 'hi'
                ? 'ग्रामीण महिलाओं के लिए सरल डिजिटल व व्यापारिक प्रशिक्षण'
                : 'Digital & Entrepreneurship Learning Modules'}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-1">
              {currentLang === 'mr'
                ? 'प्रत्येक धडा ऐका, प्रत्यक्ष सराव करा आणि क्विझ पूर्ण करून प्रमाणपत्र मिळवा.'
                : currentLang === 'hi'
                ? 'हर पाठ सुनें, अभ्यास करें और क्विज़ पूरा करके सर्टिफिकेट पाएं।'
                : 'Listen to lessons in your language, practice with simulators, and earn certifications.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-[#57534E] font-medium">
              {completedModules.length} / {COURSE_MODULES.length} {t.courses.completed}
            </span>
            <div className="w-24 h-2 bg-[#EFE8DD] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C85A32] transition-all duration-300"
                style={{ width: `${(completedModules.length / COURSE_MODULES.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Learning Hub Split: Sidebar Modules + Active Lesson Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Modules List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider">
              {currentLang === 'mr' ? 'अभ्यासक्रम सूची' : 'पाठ्यक्रम सूची'}
            </span>
            <span className="text-xs text-[#78716C]">
              {COURSE_MODULES.length} {t.dashboard.skillsMastered}
            </span>
          </div>

          <div className="space-y-2.5">
            {COURSE_MODULES.map((mod, idx) => {
              const isSelected = mod.id === selectedModuleId;
              const isComplete = completedModules.includes(mod.id);

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setSelectedModuleId(mod.id);
                    setSelectedLessonId(mod.lessons[0]?.id || '');
                    setQuizActive(false);
                    stopSpeaking();
                    setReadingLesson(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white border-[#C85A32] shadow-sm ring-1 ring-[#C85A32]'
                      : 'bg-white/80 hover:bg-white border-[#E8DFD3]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF7F2] shrink-0">
                      {getModuleIcon(mod.iconName)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-[#292524] truncate">
                          {mod.title[currentLang]}
                        </span>
                        {isComplete && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#78716C] mt-1 line-clamp-2 leading-relaxed">
                        {mod.description[currentLang]}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-[#A8A29E]">
                        <span>{mod.lessons.length} {t.courses.lessonsCount}</span>
                        <span>·</span>
                        <span>{mod.quiz.length} {t.courses.quizAvailable}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Lesson View OR Quiz Runner (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* If Quiz is NOT active, show lesson reader */}
          {!quizActive ? (
            <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-7 shadow-xs">
              
              {/* Module Title Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E8DFD3]">
                <div>
                  <span className="text-xs font-bold text-[#C85A32]">
                    {activeModule.title[currentLang]}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#292524] mt-0.5">
                    {activeLesson.title[currentLang]}
                  </h3>
                </div>

                {/* Audio Read-Aloud Button */}
                <button
                  onClick={handleReadLesson}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    readingLesson
                      ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#292524] border-[#D6CEBE] hover:bg-[#F3ECE0]'
                  }`}
                >
                  {readingLesson ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span>{t.stopReading}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#C85A32]" />
                      <span>{t.courses.listenLesson}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Lesson Switcher Tabs if multiple lessons in this module */}
              {activeModule.lessons.length > 1 && (
                <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
                  {activeModule.lessons.map((lesson, lIdx) => {
                    const isCurrent = lesson.id === activeLesson.id;
                    const isDone = completedLessons.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setSelectedLessonId(lesson.id);
                          stopSpeaking();
                          setReadingLesson(false);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                          isCurrent
                            ? 'bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]'
                            : 'bg-[#FAF7F2] text-[#57534E] border border-[#E8DFD3] hover:bg-white'
                        }`}
                      >
                        {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                        <span>भाग {lIdx + 1}: {lesson.title[currentLang]}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Lesson Narrative Content */}
              <div className="pt-4 space-y-3">
                {activeLesson.content[currentLang].map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Practical Takeaways Box */}
              {activeLesson.practicalTips[currentLang].length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C85A32] uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-[#C85A32]" />
                    <span>{t.courses.tipsTitle}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#44403C]">
                    {activeLesson.practicalTips[currentLang].map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-[#C85A32] font-bold mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons: Mark Complete & Start Quiz */}
              <div className="mt-8 pt-5 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onToggleLessonComplete(activeLesson.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                    completedLessons.includes(activeLesson.id)
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-white text-[#57534E] border-[#D6CEBE] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    {completedLessons.includes(activeLesson.id)
                      ? (currentLang === 'mr' ? 'धडा शिकून झाला' : 'पाठ पूरा हुआ')
                      : (currentLang === 'mr' ? 'धडा पूर्ण म्हणून नोंदवा' : 'पाठ पूरा मार्क करें')}
                  </span>
                </button>

                <button
                  onClick={handleStartQuiz}
                  className="px-5 py-2.5 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{t.courses.takeQuiz}</span>
                </button>
              </div>

            </div>
          ) : (
            /* Quiz Runner Interface */
            <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-7 shadow-xs">
              
              {!quizFinished ? (
                <div>
                  {/* Quiz Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD3]">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#C85A32]" />
                      <span className="font-bold text-sm text-[#292524]">
                        {t.quiz.title} ({currentQuestionIndex + 1} / {activeModule.quiz.length})
                      </span>
                    </div>
                    <button
                      onClick={() => setQuizActive(false)}
                      className="text-xs text-[#78716C] hover:text-[#292524] underline"
                    >
                      {currentLang === 'mr' ? 'धड्यावर परत जा' : 'पाठ पर वापस जाएं'}
                    </button>
                  </div>

                  {/* Question */}
                  <div className="my-6">
                    <h4 className="text-base sm:text-lg font-bold text-[#292524] leading-snug">
                      {activeModule.quiz[currentQuestionIndex].question[currentLang]}
                    </h4>
                  </div>

                  {/* Options */}
                  <div className="space-y-3 mb-6">
                    {activeModule.quiz[currentQuestionIndex].options.map((opt) => {
                      const isChosen = selectedAnswer === opt.id;
                      const isCorrect = opt.id === activeModule.quiz[currentQuestionIndex].correctAnswerId;

                      let btnStyle = 'bg-white border-[#E8DFD3] hover:border-[#D6CEBE] text-[#292524]';
                      if (answerChecked) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold';
                        } else if (isChosen && !isCorrect) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-[#C85A32]/10 border-[#C85A32] text-[#C85A32] font-semibold ring-1 ring-[#C85A32]';
                      }

                      return (
                        <button
                          key={opt.id}
                          disabled={answerChecked}
                          onClick={() => setSelectedAnswer(opt.id)}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt.text[currentLang]}</span>
                          {answerChecked && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation */}
                  {answerChecked && (
                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] mb-6 text-xs sm:text-sm text-[#44403C]">
                      <span className="font-bold text-[#C85A32] block mb-1">
                        {selectedAnswer === activeModule.quiz[currentQuestionIndex].correctAnswerId
                          ? t.quiz.congratulations
                          : t.quiz.tryAgain}
                      </span>
                      {activeModule.quiz[currentQuestionIndex].explanation[currentLang]}
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8DFD3]">
                    {!answerChecked ? (
                      <button
                        onClick={handleCheckAnswer}
                        disabled={!selectedAnswer}
                        className="px-5 py-2.5 bg-[#C85A32] hover:bg-[#B54E28] disabled:opacity-50 text-white rounded-xl text-xs font-bold"
                      >
                        {t.quiz.checkAnswer}
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-5 py-2.5 bg-[#15803D] hover:bg-[#166534] text-white rounded-xl text-xs font-bold"
                      >
                        {currentQuestionIndex + 1 < activeModule.quiz.length
                          ? t.quiz.nextQuestion
                          : t.quiz.finishQuiz}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Quiz Finished Celebration */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#292524]">
                    {t.quiz.congratulations}
                  </h4>
                  <p className="text-sm text-[#78716C] max-w-md mx-auto">
                    {t.quiz.passedMsg}
                  </p>
                  <div className="p-3 bg-[#FAF7F2] rounded-xl inline-block border border-[#E8DFD3]">
                    <span className="text-xs text-[#78716C]">{t.quiz.score}: </span>
                    <span className="text-base font-bold text-[#C85A32]">
                      {quizScore} / {activeModule.quiz.length}
                    </span>
                  </div>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={handleStartQuiz}
                      className="px-4 py-2 border border-[#D6CEBE] rounded-xl text-xs font-semibold text-[#57534E] hover:bg-[#FAF7F2] flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.quiz.retakeQuiz}</span>
                    </button>
                    <button
                      onClick={() => setQuizActive(false)}
                      className="px-5 py-2 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-xl text-xs font-bold"
                    >
                      {currentLang === 'mr' ? 'पुढील अभ्यासक्रमाकडे जा' : 'अगले मॉड्यूल पर जाएं'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Practical Simulation Lab Box */}
          <Simulators currentLang={currentLang} />

        </div>

      </div>

    </div>
  );
};
