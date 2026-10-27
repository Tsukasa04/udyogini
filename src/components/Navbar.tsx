import React, { useState } from 'react';
import { Volume2, VolumeX, Globe, User, Award, BookOpen, Briefcase, Users, FileText } from 'lucide-react';
import { Language, UserProfile } from '../types';
import { translations } from '../data/translations';
import { speakText, stopSpeaking, isSpeaking } from '../utils/speech';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'learn' | 'toolkit' | 'mentors' | 'schemes' | 'progress' | 'advisor';
  onTabChange: (tab: 'learn' | 'toolkit' | 'mentors' | 'schemes' | 'progress' | 'advisor') => void;
  userProfile: UserProfile;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  userProfile,
  onOpenProfile,
}) => {
  const [speaking, setSpeaking] = useState(false);
  const t = translations[currentLang];

  const handleToggleSpeech = () => {
    if (speaking || isSpeaking()) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      const welcomeText = `${t.appName}. ${t.appTagline}. ${t.welcomeBanner}`;
      speakText(welcomeText, currentLang, () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  const navItems = [
    { id: 'learn', label: t.nav.learn, icon: BookOpen },
    { id: 'toolkit', label: t.nav.toolkit, icon: Briefcase },
    { id: 'mentors', label: t.nav.mentors, icon: Users },
    { id: 'schemes', label: t.nav.schemes, icon: FileText },
    { id: 'progress', label: t.nav.progress, icon: Award },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onTabChange('learn')}
              className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#E07A5F] flex items-center justify-center text-white shadow-sm shadow-[#C85A32]/20 font-bold text-lg">
                उ
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[#292524] tracking-tight leading-tight">
                  {t.appName}
                </span>
                <span className="text-[11px] text-[#78716C] font-medium hidden sm:inline">
                  {t.appTagline}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#EFE8DD] text-[#C85A32] font-semibold'
                      : 'text-[#57534E] hover:text-[#292524] hover:bg-[#F3ECE0]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Utility Controls (Audio Reader, Language, Profile) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Reader Trigger */}
            <button
              onClick={handleToggleSpeech}
              title={speaking ? t.stopReading : t.readAloud}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                speaking
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                  : 'bg-white text-[#57534E] border-[#E8DFD3] hover:bg-[#F3ECE0]'
              }`}
            >
              {speaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C85A32]" />}
              <span className="hidden sm:inline">{speaking ? t.stopReading : t.readAloud}</span>
            </button>

            {/* Language Selector */}
            <div className="relative flex items-center bg-white border border-[#E8DFD3] rounded-lg px-2 py-1 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#78716C] mr-1.5 shrink-0" />
              <select
                aria-label="Language selection"
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-[#292524] focus:outline-none cursor-pointer pr-1"
              >
                <option value="mr">मराठी</option>
                <option value="hi">हिंदी</option>
                <option value="en">English</option>
              </select>
            </div>

            {/* Profile Avatar / Settings */}
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 bg-white border border-[#E8DFD3] rounded-lg text-xs font-medium text-[#292524] hover:border-[#C85A32]/40 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#EFE8DD] text-[#C85A32] flex items-center justify-center font-bold text-xs">
                {userProfile.name ? userProfile.name.charAt(0) : <User className="w-3.5 h-3.5" />}
              </div>
              <span className="hidden lg:inline max-w-[100px] truncate">
                {userProfile.name || t.nav.profile}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden border-t border-[#E8DFD3] bg-[#FAF7F2] overflow-x-auto scrollbar-none px-2 py-1.5 flex gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-[#C85A32] text-white shadow-2xs'
                  : 'bg-white border border-[#E8DFD3] text-[#57534E]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
