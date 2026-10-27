import React from 'react';
import { UserProfile, Language } from '../types';
import { COURSE_MODULES } from '../data/courses';
import { translations } from '../data/translations';
import { Award, CheckCircle2, Download, Flame, Lock, Printer, Share2, Sparkles, Star, Trophy } from 'lucide-react';

interface ProgressTrackerProps {
  currentLang: Language;
  userProfile: UserProfile;
  completedModules: string[];
  completedLessons: string[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentLang,
  userProfile,
  completedModules,
  completedLessons,
}) => {
  const t = translations[currentLang];
  const totalModules = COURSE_MODULES.length;
  const progressPercent = Math.round((completedModules.length / totalModules) * 100);
  const isCertificateUnlocked = completedModules.length >= 3; // unlock when 3+ or all modules completed for encouraging experience

  const badges = [
    {
      id: 'b1',
      title: currentLang === 'mr' ? 'डिजिटल सखी' : currentLang === 'hi' ? 'डिजिटल सखी' : 'Digital Sakhi',
      desc: currentLang === 'mr' ? 'मूलभूत फोन व व्हॉईस टायपिंग शिकली' : 'बुनियादी फोन कौशल पूरा किया',
      earned: completedModules.includes('mod-1'),
      icon: '📱',
    },
    {
      id: 'b2',
      title: currentLang === 'mr' ? 'स्मार्ट पेमेंट्स मास्टर' : currentLang === 'hi' ? 'स्मार्ट पेमेंट प्रो' : 'Payment Pro',
      desc: currentLang === 'mr' ? 'युपीआय व ध्वनीपेटी सराव पूर्ण केला' : 'यूपीआई व साउंडबॉक्स सराव पूर्ण',
      earned: completedModules.includes('mod-3'),
      icon: '💳',
    },
    {
      id: 'b3',
      title: currentLang === 'mr' ? 'सोशल मीडिया स्टार' : currentLang === 'hi' ? 'सोशल मीडिया स्टार' : 'Social Star',
      desc: currentLang === 'mr' ? 'व्हॉट्सॲप बिझनेस कॅटलॉग बनवला' : 'व्हाट्सएप बिजनेस कैटलॉग बनाया',
      earned: completedModules.includes('mod-4'),
      icon: '🛍️',
    },
    {
      id: 'b4',
      title: currentLang === 'mr' ? 'उद्योगरत्न महिला' : currentLang === 'hi' ? 'उद्योगरत्न महिला' : 'Certified Entrepreneur',
      desc: currentLang === 'mr' ? 'नफा व्यवस्थापन व योजना अभ्यास पूर्ण' : 'मुनाफा व योजना अध्ययन पूर्ण',
      earned: completedModules.includes('mod-6'),
      icon: '🏆',
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Progress % */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8DFD3] shadow-2xs">
          <span className="text-xs font-semibold text-[#78716C] uppercase tracking-wider block">
            {t.progress.totalProgress}
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-[#C85A32] font-mono">
              {progressPercent}%
            </span>
            <span className="text-xs text-[#78716C]">
              ({completedModules.length} / {totalModules} {t.progress.modulesCompleted})
            </span>
          </div>
          <div className="w-full h-2 bg-[#EFE8DD] rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-[#C85A32] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8DFD3] shadow-2xs">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#78716C] uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>सराव सातत्य (Streak)</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-[#292524] font-mono">
              ५
            </span>
            <span className="text-xs text-[#78716C]">
              {t.dashboard.daysStreak} 🔥
            </span>
          </div>
          <p className="text-[11px] text-[#78716C] mt-3">
            {currentLang === 'mr' ? 'दररोज १० मिनिटे नवीन कौशल्य शिकल्याने प्रगती होते!' : 'रोज 10 मिनट सीखने से प्रगति होती है!'}
          </p>
        </div>

        {/* Badges Count */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8DFD3] shadow-2xs">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#78716C] uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-[#C85A32]" />
            <span>{t.dashboard.badgesEarned}</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-[#292524] font-mono">
              {badges.filter((b) => b.earned).length} / {badges.length}
            </span>
            <span className="text-xs text-[#78716C]">
              {currentLang === 'mr' ? 'बिल्ले अनलॉक झाले' : 'बैज अनलॉक'}
            </span>
          </div>
          <p className="text-[11px] text-[#78716C] mt-3">
            {currentLang === 'mr' ? 'पुढील विभाग पूर्ण करून नवीन सन्मान मिळवा.' : 'अगला मॉड्यूल पूरा करके नए बैज प्राप्त करें।'}
          </p>
        </div>

      </div>

      {/* Badges Grid */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DFD3] shadow-2xs">
        <h3 className="font-bold text-base text-[#292524] mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#C85A32]" />
          <span>{currentLang === 'mr' ? 'मिळालेले सन्मान व पदके' : 'अर्जित सम्मान व पदक'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                b.earned
                  ? 'bg-[#FAF7F2] border-[#C85A32]/40 shadow-xs ring-1 ring-[#C85A32]/30'
                  : 'bg-neutral-50 border-[#E8DFD3] opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{b.icon}</span>
                  {b.earned ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-stone-400" />
                  )}
                </div>
                <h4 className="font-bold text-xs text-[#292524]">{b.title}</h4>
                <p className="text-[11px] text-[#78716C] mt-0.5 leading-snug">{b.desc}</p>
              </div>

              <span
                className={`text-[9px] font-bold uppercase tracking-wider mt-3 block ${
                  b.earned ? 'text-emerald-700' : 'text-stone-400'
                }`}
              >
                {b.earned ? '✓ अनलॉक झाले' : 'लॉक्ड'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Section */}
      <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E8DFD3] shadow-2xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8DFD3]">
          <div>
            <h3 className="text-lg font-bold text-[#292524]">
              {t.progress.certificateTitle}
            </h3>
            <p className="text-xs text-[#78716C] mt-0.5">
              {t.progress.certificateDesc}
            </p>
          </div>

          {isCertificateUnlocked && (
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors self-start sm:self-auto"
            >
              <Printer className="w-4 h-4" />
              <span>{t.progress.downloadCertificate}</span>
            </button>
          )}
        </div>

        {/* Certificate Card Render */}
        <div className="relative border-4 border-double border-[#C85A32]/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F3ECE0] p-6 sm:p-10 rounded-3xl shadow-md text-center max-w-2xl mx-auto overflow-hidden">
          
          {/* Traditional motif header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px bg-[#C85A32]/40 flex-1" />
            <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              उ
            </div>
            <div className="h-px bg-[#C85A32]/40 flex-1" />
          </div>

          <span className="text-[11px] font-bold text-[#C85A32] uppercase tracking-widest block mb-1">
            उद्योगिनी मंच - महाराष्ट्र ग्रामीण उद्योजकता
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#292524] tracking-tight">
            {t.progress.certificateTitle}
          </h2>

          <p className="text-xs text-[#78716C] mt-3">
            {t.progress.issuedTo}
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-[#C85A32] underline decoration-wavy decoration-[#C85A32]/40 underline-offset-8 mt-2">
            {userProfile.name || 'अनिता सुनील पाटील'}
          </h3>

          <p className="text-xs sm:text-sm text-[#44403C] max-w-md mx-auto mt-4 leading-relaxed">
            {t.progress.certificateBody}
          </p>

          <div className="mt-8 pt-6 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#78716C]">
            <div className="text-left">
              <span className="block font-bold text-[#292524]">
                {userProfile.village || 'बारामती'}, जि. {userProfile.district || 'पुणे'}
              </span>
              <span className="text-[10px]">नोंदणीकृत प्रशिक्षणार्थी</span>
            </div>

            {/* Official seal */}
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#C85A32] p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#C85A32]/10 flex flex-col items-center justify-center text-[8px] font-bold text-[#C85A32] uppercase">
                <span>★ SEAL ★</span>
                <span>{t.progress.sealText}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="block font-bold text-[#292524]">
                २७ ऑक्टोबर २०२६
              </span>
              <span className="text-[10px]">प्रमाणपत्र दिनांक</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
