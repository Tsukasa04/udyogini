/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserProfile, Language, MentorshipRequest } from './types';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoursePlayer } from './components/CoursePlayer';
import { BusinessToolkit } from './components/BusinessToolkit';
import { MentorsDirectory } from './components/MentorsDirectory';
import { MentorChatModal } from './components/MentorChatModal';
import { GuidanceAdvisor } from './components/GuidanceAdvisor';
import { ProgressTracker } from './components/ProgressTracker';
import { RegistrationModal } from './components/RegistrationModal';
import { Heart, PhoneCall, Shield, Sparkles } from 'lucide-react';

export default function App() {
  // User profile with Marathi as default regional language
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('udyogini_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      name: 'अनिता सुनील पाटील',
      phone: '9822012345',
      district: 'पुणे',
      village: 'बारामती',
      businessType: 'गृह उद्योग (पापड, लोणची, मसाले, शेवया)',
      businessStage: 'started',
      language: 'mr',
      registered: false,
    };
  });

  const [activeTab, setActiveTab] = useState<'learn' | 'toolkit' | 'mentors' | 'schemes' | 'progress' | 'advisor'>('learn');
  const [completedModules, setCompletedModules] = useState<string[]>(['mod-1', 'mod-3']);
  const [completedLessons, setCompletedLessons] = useState<string[]>(['les-1-1', 'les-1-2', 'les-3-1']);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(!userProfile.registered);
  
  // Mentorship requests
  const [mentorshipRequests, setMentorshipRequests] = useState<MentorshipRequest[]>([
    {
      id: 'req-init-1',
      mentorId: 'men-1',
      mentorName: 'अंजली देशमुख',
      mentorRole: 'महिला बचत गट महासंघ अध्यक्षा व FSSAI तज्ज्ञ',
      topic: 'माझ्या पापड व लोणच्याच्या व्यवसायासाठी FSSAI परवाना व ब्रँडिंग सल्ला हवा आहे.',
      mode: 'whatsapp',
      status: 'accepted',
      date: 'आज (Today)',
      timeSlot: 'दुपारी २ ते ४',
      notes: 'माझ्या पापड व लोणच्याच्या व्यवसायासाठी FSSAI परवाना व ब्रँडिंग सल्ला हवा आहे.',
    },
  ]);

  const [activeChatRequest, setActiveChatRequest] = useState<MentorshipRequest | null>(null);

  // Sync profile to localStorage
  useEffect(() => {
    localStorage.setItem('udyogini_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  const handleLanguageChange = (lang: Language) => {
    setUserProfile((prev) => ({ ...prev, language: lang }));
  };

  const handleSaveProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const handleToggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  const handleModuleComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules((prev) => [...prev, moduleId]);
    }
  };

  const handleAddMentorshipRequest = (req: MentorshipRequest) => {
    setMentorshipRequests((prev) => [req, ...prev]);
  };

  const t = translations[userProfile.language];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#292524]">
      
      {/* Top Navigation */}
      <Navbar
        currentLang={userProfile.language}
        onLanguageChange={handleLanguageChange}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        userProfile={userProfile}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Hero Section (Always visible on Learn/Home or compact toggle) */}
        <HeroSection
          currentLang={userProfile.language}
          userProfile={userProfile}
          onNavigateTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 380, behavior: 'smooth' });
          }}
        />

        {/* Tab 1: Learn & Skills */}
        {activeTab === 'learn' && (
          <CoursePlayer
            currentLang={userProfile.language}
            completedLessons={completedLessons}
            onToggleLessonComplete={handleToggleLessonComplete}
            completedModules={completedModules}
            onModuleComplete={handleModuleComplete}
          />
        )}

        {/* Tab 2: Business Toolkit */}
        {activeTab === 'toolkit' && (
          <BusinessToolkit
            currentLang={userProfile.language}
            userProfile={userProfile}
          />
        )}

        {/* Tab 3: Mentors Directory */}
        {activeTab === 'mentors' && (
          <MentorsDirectory
            currentLang={userProfile.language}
            userProfile={userProfile}
            requests={mentorshipRequests}
            onRequestMentor={handleAddMentorshipRequest}
            onOpenConversation={(req) => setActiveChatRequest(req)}
          />
        )}

        {/* Tab 4: Schemes (Opens schemes view) */}
        {activeTab === 'schemes' && (
          <BusinessToolkit
            currentLang={userProfile.language}
            userProfile={userProfile}
          />
        )}

        {/* Tab 5: Advisor & Personalized Guidance */}
        {activeTab === 'advisor' && (
          <GuidanceAdvisor
            currentLang={userProfile.language}
            userProfile={userProfile}
            onNavigateToCourse={(modId) => {
              setActiveTab('learn');
            }}
            onNavigateToMentors={(specialty) => {
              setActiveTab('mentors');
            }}
          />
        )}

        {/* Tab 6: Progress & Certificate */}
        {activeTab === 'progress' && (
          <ProgressTracker
            currentLang={userProfile.language}
            userProfile={userProfile}
            completedModules={completedModules}
            completedLessons={completedLessons}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-[#E8DFD3] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#C85A32] text-white flex items-center justify-center font-bold text-xs">
                उ
              </div>
              <span className="font-semibold text-[#292524]">
                {t.appName} — {t.appTagline}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <span>महाराष्ट्र ग्रामीण महिला उद्योजकता पुढाकार</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-[#C85A32] font-semibold">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>सायबर सुरक्षा मदत: 1930</span>
              </span>
              <span>·</span>
              <span>महिला हेल्पलाइन: 181</span>
            </div>

            <div>
              <span>© २०२६ उद्योगिनी मंच. सर्व हक्क सुरक्षित.</span>
            </div>

          </div>
        </div>
      </footer>

      {/* Interactive Mentor Chat Modal */}
      {activeChatRequest && (
        <MentorChatModal
          request={activeChatRequest}
          onClose={() => setActiveChatRequest(null)}
          currentLang={userProfile.language}
          userProfile={userProfile}
        />
      )}

      {/* Registration & Language Picker Modal */}
      <RegistrationModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentProfile={userProfile}
        onSaveProfile={handleSaveProfile}
        isInitialSetup={!userProfile.registered}
      />

    </div>
  );
}
