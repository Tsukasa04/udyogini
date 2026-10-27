import React, { useState } from 'react';
import { Mentor, MentorshipRequest, Language, UserProfile } from '../types';
import { MENTORS_DATA } from '../data/mentors';
import { translations } from '../data/translations';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Star,
  Users,
  Video,
  X,
  Volume2
} from 'lucide-react';
import { speakText } from '../utils/speech';

interface MentorsDirectoryProps {
  currentLang: Language;
  userProfile: UserProfile;
  requests: MentorshipRequest[];
  onRequestMentor: (req: MentorshipRequest) => void;
  onOpenConversation: (request: MentorshipRequest) => void;
}

export const MentorsDirectory: React.FC<MentorsDirectoryProps> = ({
  currentLang,
  userProfile,
  requests,
  onRequestMentor,
  onOpenConversation,
}) => {
  const t = translations[currentLang];

  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [activeModalMentor, setActiveModalMentor] = useState<Mentor | null>(null);

  // Connection request modal form state
  const [selectedMode, setSelectedMode] = useState<'call' | 'whatsapp' | 'meeting'>('whatsapp');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('morning');
  const [selectedDate, setSelectedDate] = useState<string>('उद्या (Tomorrow)');
  const [questionText, setQuestionText] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredMentors = MENTORS_DATA.filter((mentor) => {
    const matchDistrict =
      selectedDistrict === 'all' ||
      mentor.district.toLowerCase().includes(selectedDistrict.toLowerCase());
    const matchSpecialty =
      selectedSpecialty === 'all' || mentor.specialty === selectedSpecialty;
    return matchDistrict && matchSpecialty;
  });

  const handleOpenRequestModal = (mentor: Mentor) => {
    setActiveModalMentor(mentor);
    setQuestionText(
      currentLang === 'mr'
        ? `मी ${userProfile.village || 'माझ्या गावातून'} ${userProfile.name} बोलत आहे. मला ${userProfile.businessType || 'माझ्या व्यवसायासाठी'} योग्य मार्गदर्शन हवे आहे.`
        : currentLang === 'hi'
        ? `मैं ${userProfile.name} बोल रही हूं। मुझे मेरे व्यवसाय के लिए सलाह चाहिए।`
        : `Hello, I am ${userProfile.name}. I would like guidance on my business.`
    );
  };

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModalMentor) return;

    const newRequest: MentorshipRequest = {
      id: `req-${Date.now()}`,
      mentorId: activeModalMentor.id,
      mentorName: activeModalMentor.name,
      mentorRole: activeModalMentor.role[currentLang],
      topic: questionText,
      mode: selectedMode,
      status: 'pending',
      date: selectedDate,
      timeSlot:
        selectedTimeSlot === 'morning'
          ? t.mentors.morning
          : selectedTimeSlot === 'afternoon'
          ? t.mentors.afternoon
          : t.mentors.evening,
      notes: questionText,
    };

    onRequestMentor(newRequest);
    setActiveModalMentor(null);
    setToastMessage(t.mentors.requestSent);
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="space-y-6">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm font-semibold flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)}>
            <X className="w-4 h-4 text-emerald-700" />
          </button>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
              {currentLang === 'mr' ? 'स्थानिक व राज्यस्तरीय तज्ज्ञ' : 'स्थानीय व राज्यस्तरीय विशेषज्ञ'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292524] mt-1">
              {t.mentors.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-1">
              {t.mentors.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl px-3 py-2 text-xs text-[#57534E]">
            <Users className="w-4 h-4 text-[#C85A32]" />
            <span>{MENTORS_DATA.length} {currentLang === 'mr' ? 'प्रमाणित मार्गदर्शक उपलब्ध' : 'प्रमाणित मेंटर्स उपलब्ध'}</span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-5 pt-4 border-t border-[#E8DFD3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          
          {/* District Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
              {t.mentors.filterDistrict}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD3] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
            >
              <option value="all">{t.mentors.allDistricts}</option>
              {t.districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Specialty Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
              {t.mentors.filterSpecialty}
            </label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD3] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
            >
              <option value="all">{t.mentors.allSpecialties}</option>
              <option value="fssai_food">FSSAI व खाद्य प्रक्रिया (Food/Agro)</option>
              <option value="finance">बँक कर्ज व मुद्रा योजना (Finance/Loans)</option>
              <option value="marketing">डिजिटल मार्केटिंग व व्हॉट्सॲप (Marketing)</option>
              <option value="textiles">हातमाग व शिलाई (Textiles/Boutique)</option>
              <option value="agro">दुग्धव्यवसाय व पोल्ट्री (Dairy/Poultry)</option>
            </select>
          </div>

          {/* Reset button */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedDistrict('all');
                setSelectedSpecialty('all');
              }}
              className="w-full sm:w-auto px-4 py-2 border border-[#D6CEBE] rounded-lg text-xs font-semibold text-[#57534E] hover:bg-[#FAF7F2] transition-colors"
            >
              {currentLang === 'mr' ? 'सर्व फिल्टर्स हटवा' : 'फिल्टर रीसेट करें'}
            </button>
          </div>

        </div>
      </div>

      {/* Active Requests Strip if user has submitted requests */}
      {requests.length > 0 && (
        <div className="bg-[#FAF7F2] border border-[#E8DFD3] p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#292524] flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#C85A32]" />
              <span>{t.mentors.myConnections} ({requests.length})</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white p-3.5 rounded-xl border border-[#E8DFD3] flex items-center justify-between gap-3 shadow-2xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-[#292524]">{req.mentorName}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                      {req.status === 'pending'
                        ? (currentLang === 'mr' ? 'नियोजित / प्रलंबित' : 'प्रतीक्षारत')
                        : (currentLang === 'mr' ? 'सुरू आहे' : 'सक्रिय')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-0.5 line-clamp-1">
                    {req.topic}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-[#A8A29E]">
                    <span>{req.date}</span>
                    <span>·</span>
                    <span>{req.timeSlot}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConversation(req)}
                  className="px-3 py-1.5 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-lg text-xs font-semibold shrink-0 transition-colors"
                >
                  {t.mentors.openChat}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
          >
            <div>
              {/* Photo & Badge header */}
              <div className="p-4 flex items-start gap-3.5 border-b border-[#FAF7F2]">
                <img
                  src={mentor.photoUrl}
                  alt={mentor.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#E8DFD3] shadow-xs"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm text-[#292524] truncate">
                      {mentor.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#C85A32] font-medium leading-snug line-clamp-2 mt-0.5">
                    {mentor.role[currentLang]}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-[#78716C]">
                    <span className="flex items-center gap-0.5 text-amber-600 font-semibold">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{mentor.rating}</span>
                    </span>
                    <span>·</span>
                    <span>{mentor.experienceYears} {t.mentors.experience}</span>
                  </div>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-4 space-y-3 text-xs">
                
                {/* District */}
                <div className="flex items-center gap-1.5 text-[#57534E]">
                  <MapPin className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
                  <span className="truncate">{mentor.district}</span>
                </div>

                {/* About Bio */}
                <p className="text-[#44403C] leading-relaxed line-clamp-3">
                  {mentor.about[currentLang]}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mentor.badges.map((b, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-[#FAF7F2] text-[#57534E] border border-[#E8DFD3] px-2 py-0.5 rounded-md"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Availability */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#78716C] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
                  <span className="truncate">{mentor.availability[currentLang]}</span>
                </div>

              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-4 pt-0">
              <button
                onClick={() => handleOpenRequestModal(mentor)}
                className="w-full py-2.5 px-4 bg-[#C85A32] hover:bg-[#B54E28] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.mentors.requestGuidance}</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* --- Request Guidance Modal --- */}
      {activeModalMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-[#E8DFD3] overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-[#FAF7F2] border-b border-[#E8DFD3] p-5 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={activeModalMentor.photoUrl}
                  alt={activeModalMentor.name}
                  className="w-12 h-12 rounded-xl object-cover border border-[#E8DFD3]"
                />
                <div>
                  <h3 className="font-bold text-base text-[#292524]">
                    {activeModalMentor.name}
                  </h3>
                  <p className="text-xs text-[#C85A32]">
                    {activeModalMentor.role[currentLang]}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalMentor(null)}
                className="text-[#78716C] hover:text-[#292524] p-1 rounded-full hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendRequest} className="p-5 space-y-4">
              
              {/* Preferred Mode of Communication */}
              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-2">
                  {t.mentors.preferredMode}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'whatsapp', label: t.mentors.modeWhatsapp, icon: MessageCircle },
                    { id: 'call', label: t.mentors.modeCall, icon: Phone },
                    { id: 'meeting', label: t.mentors.modeMeeting, icon: Users },
                  ].map((mode) => {
                    const isSelected = selectedMode === mode.id;
                    const Icon = mode.icon;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setSelectedMode(mode.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                          isSelected
                            ? 'bg-[#C85A32]/10 border-[#C85A32] text-[#C85A32] font-bold shadow-2xs ring-1 ring-[#C85A32]'
                            : 'bg-[#FAF7F2] border-[#E8DFD3] text-[#57534E] hover:bg-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[11px] leading-tight">{mode.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Convenient Day / Date */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] mb-1">
                    {t.mentors.selectDate}
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD3] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value="उद्या (Tomorrow)">उद्या (Tomorrow)</option>
                    <option value="पुढील २ दिवसांत (Next 2 Days)">पुढील २ दिवसांत (Next 2 Days)</option>
                    <option value="या शनिवारी (This Saturday)">या शनिवारी (This Saturday)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] mb-1">
                    {t.mentors.selectTime}
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD3] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value="morning">{t.mentors.morning}</option>
                    <option value="afternoon">{t.mentors.afternoon}</option>
                    <option value="evening">{t.mentors.evening}</option>
                  </select>
                </div>
              </div>

              {/* Your Specific Business Question / Need */}
              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.mentors.yourQuestion}
                </label>
                <textarea
                  rows={3}
                  required
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder={t.mentors.questionPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFD3] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              {/* Pre-translated Quick Question Pills */}
              <div className="space-y-1">
                <span className="text-[10px] text-[#78716C] font-semibold">
                  {currentLang === 'mr' ? 'किंवा तयार विषय निवडा:' : 'या तैयार प्रश्न चुनें:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    currentLang === 'mr' ? 'FSSAI परवाना कसा काढायचा?' : 'FSSAI लाइसेंस कैसे लें?',
                    currentLang === 'mr' ? 'मुद्रा कर्जासाठी काय कागदपत्रे लागतात?' : 'मुद्रा लोन के दस्तावेज क्या हैं?',
                    currentLang === 'mr' ? 'व्हॉट्सॲपवर ऑर्डर कशा वाढवायच्या?' : 'व्हाट्सएप पर ऑर्डर कैसे बढ़ाएं?',
                  ].map((quickQ, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      onClick={() => setQuestionText(quickQ)}
                      className="text-[10px] bg-white border border-[#D6CEBE] hover:border-[#C85A32] text-[#57534E] px-2 py-1 rounded-md"
                    >
                      {quickQ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C85A32] hover:bg-[#B54E28] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.mentors.sendRequest}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
