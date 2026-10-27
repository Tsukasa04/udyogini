import React from 'react';
import { UserProfile, Language } from '../types';
import { translations } from '../data/translations';
import { BookOpen, Briefcase, Users, Volume2, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { speakText } from '../utils/speech';

interface HeroSectionProps {
  currentLang: Language;
  userProfile: UserProfile;
  onNavigateTab: (tab: 'learn' | 'toolkit' | 'mentors' | 'schemes' | 'progress' | 'advisor') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  userProfile,
  onNavigateTab,
}) => {
  const t = translations[currentLang];

  const handleHeroSpeech = () => {
    const speech = `${t.appName}. ${t.welcomeBanner}. ${userProfile.name ? `नमस्कार ${userProfile.name} ताई!` : ''}`;
    speakText(speech, currentLang);
  };

  return (
    <div className="relative rounded-3xl bg-white border border-[#E8DFD3] overflow-hidden shadow-xs">
      
      {/* 2-Column Split Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            
            {/* Trust badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] text-xs font-semibold text-[#C85A32]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'mr'
                    ? 'महाराष्ट्र शासन व ग्रामीण महिला सक्षमीकरण'
                    : 'महाराष्ट्र ग्रामीण महिला उद्यमिता मिशन'}
                </span>
              </span>

              <button
                onClick={handleHeroSpeech}
                title={t.readAloud}
                className="p-1.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] text-[#C85A32] hover:bg-[#F3ECE0] transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Personalized Greeting Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292524] tracking-tight leading-tight">
              {userProfile.name ? (
                <>
                  <span className="block text-lg sm:text-xl font-medium text-[#78716C]">
                    {currentLang === 'mr' ? 'सस्नेह नमस्कार,' : 'नमस्ते,'} {userProfile.name} ताई!
                  </span>
                  <span>{t.welcomeBanner}</span>
                </>
              ) : (
                <span>{t.welcomeBanner}</span>
              )}
            </h1>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
              {currentLang === 'mr'
                ? 'स्मार्टफोन हाताळणी, फोनपे/गुगल पे, व्हॉट्सॲपवर वस्तू विकणे, हिशोब वही आणि मुद्रा व अन्नपूर्णा योजनांची संपूर्ण माहिती आता तुमच्या मातृभाषेत!'
                : 'स्मार्टफोन उपयोग, सुरक्षित यूपीआई, व्हाट्सएप कैटलॉग और मुद्रा लोन की संपूर्ण जानकारी सरल भाषा में सीखें।'}
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateTab('learn')}
              className="py-3 px-5 bg-[#C85A32] hover:bg-[#B54E28] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md shadow-[#C85A32]/20 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.dashboard.continueLearning}</span>
            </button>

            <button
              onClick={() => onNavigateTab('toolkit')}
              className="py-3 px-4 bg-[#FAF7F2] hover:bg-[#F3ECE0] text-[#292524] border border-[#D6CEBE] font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-[#C85A32]" />
              <span>{t.toolkit.tabCard}</span>
            </button>

            <button
              onClick={() => onNavigateTab('advisor')}
              className="py-3 px-4 bg-white hover:bg-[#FAF7F2] text-[#C85A32] border border-[#E8DFD3] font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.advisor.title}</span>
            </button>
          </div>

        </div>

        {/* Right Column: High Fidelity Documentary Image Banner (5 Cols) */}
        <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#F5EFE6]">
          <img
            src="/src/assets/images/hero_udyogini_1793103931061.jpg"
            alt="Rural Woman Entrepreneur Maharashtra"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
            <span className="text-xs font-semibold bg-[#C85A32] px-2.5 py-1 rounded-md">
              उद्योगिनी स्वाभिमान
            </span>
            <p className="text-xs text-white/90 mt-1 font-medium">
              स्थानिक उत्पादन, जागतिक ओळख
            </p>
          </div>
        </div>

      </div>

      {/* KPI Proof Strip */}
      <div className="border-t border-[#E8DFD3] bg-[#FAF7F2] px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
        <div>
          <span className="text-xl sm:text-2xl font-black text-[#292524] font-mono block">
            १,२५०+
          </span>
          <span className="text-xs text-[#78716C]">
            {currentLang === 'mr' ? 'प्रशिक्षित ग्रामीण महिला' : 'प्रशिक्षित महिलाएं'}
          </span>
        </div>

        <div>
          <span className="text-xl sm:text-2xl font-black text-[#292524] font-mono block">
            ₹३.५ कोटी
          </span>
          <span className="text-xs text-[#78716C]">
            {currentLang === 'mr' ? 'मुद्रा व बँक कर्ज मंजुरी' : 'लोन स्वीकृति'}
          </span>
        </div>

        <div>
          <span className="text-xl sm:text-2xl font-black text-[#292524] font-mono block">
            १४+ जिल्हे
          </span>
          <span className="text-xs text-[#78716C]">
            {currentLang === 'mr' ? 'महाराष्ट्र कार्यक्षेत्र' : 'कार्यक्षेत्र (महाराष्ट्र)'}
          </span>
        </div>

        <div>
          <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono block">
            १००% मोफत
          </span>
          <span className="text-xs text-[#78716C]">
            {currentLang === 'mr' ? 'कौशल्य व मार्गदर्शन' : 'कौशल्य व मार्गदर्शन'}
          </span>
        </div>
      </div>

    </div>
  );
};
