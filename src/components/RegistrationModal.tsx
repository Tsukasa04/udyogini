import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
import { translations } from '../data/translations';
import { CheckCircle2, Globe, Sparkles, X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: UserProfile;
  onSaveProfile: (profile: UserProfile) => void;
  isInitialSetup?: boolean;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSaveProfile,
  isInitialSetup = false,
}) => {
  const [formData, setFormData] = useState<UserProfile>(currentProfile);
  const t = translations[formData.language];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile({
      ...formData,
      registered: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DFD3] overflow-hidden my-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#C85A32] to-[#D96B43] px-6 py-5 text-white">
          {!isInitialSetup && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-sm font-bold">उ</span>
            <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">
              {formData.language === 'mr' ? 'नोंदणी व भाषा निवड' : formData.language === 'hi' ? 'पंजीकरण व भाषा चयन' : 'Registration & Language'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            {t.registration.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/90 mt-1">
            {t.registration.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Language Selection Card (Requirement 1) */}
          <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] shadow-2xs">
            <label className="flex items-center gap-2 text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-2.5">
              <Globe className="w-4 h-4 text-[#C85A32]" />
              <span>{t.registration.selectLanguage}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'mr', name: 'मराठी', sub: 'महाराष्ट्र' },
                { code: 'hi', name: 'हिंदी', sub: 'भारत' },
                { code: 'en', name: 'English', sub: 'Global' },
              ].map((lang) => {
                const isSelected = formData.language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setFormData({ ...formData, language: lang.code as Language })}
                    className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg border text-center transition-all ${
                      isSelected
                        ? 'bg-[#C85A32]/10 border-[#C85A32] text-[#C85A32] font-bold shadow-2xs ring-1 ring-[#C85A32]'
                        : 'bg-[#FAF7F2] border-[#E8DFD3] text-[#44403C] hover:bg-white hover:border-[#D6CEBE]'
                    }`}
                  >
                    <span className="text-sm">{lang.name}</span>
                    <span className="text-[10px] text-[#78716C] font-normal">{lang.sub}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-[#44403C] mb-1.5">
              {t.registration.fullName} <span className="text-[#C85A32]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.registration.fullNamePlaceholder}
              className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD3] rounded-lg text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32]"
            />
          </div>

          {/* Mobile & District */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#44403C] mb-1.5">
                {t.registration.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.registration.phonePlaceholder}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD3] rounded-lg text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#44403C] mb-1.5">
                {t.registration.district}
              </label>
              <select
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD3] rounded-lg text-sm text-[#292524] focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32]"
              >
                {t.districts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Village / Taluka */}
          <div>
            <label className="block text-xs font-semibold text-[#44403C] mb-1.5">
              {t.registration.village}
            </label>
            <input
              type="text"
              value={formData.village}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              placeholder={t.registration.villagePlaceholder}
              className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD3] rounded-lg text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32]"
            />
          </div>

          {/* Business Category */}
          <div>
            <label className="block text-xs font-semibold text-[#44403C] mb-1.5">
              {t.registration.businessType}
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD3] rounded-lg text-sm text-[#292524] focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32]"
            >
              {t.businessCategories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Business Stage */}
          <div>
            <label className="block text-xs font-semibold text-[#44403C] mb-1.5">
              {t.registration.businessStage}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'planning', label: t.registration.stagePlanning },
                { id: 'started', label: t.registration.stageStarted },
                { id: 'expanding', label: t.registration.stageExpanding },
              ].map((stage) => {
                const isSelected = formData.businessStage === stage.id;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, businessStage: stage.id as any })}
                    className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                      isSelected
                        ? 'bg-[#C85A32]/10 border-[#C85A32] text-[#C85A32] font-semibold'
                        : 'bg-white border-[#E8DFD3] text-[#57534E] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-[#C85A32] bg-[#C85A32]' : 'border-[#A8A29E]'}`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="leading-snug">{stage.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#C85A32] hover:bg-[#B54E28] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#C85A32]/25 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.registration.submit}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
