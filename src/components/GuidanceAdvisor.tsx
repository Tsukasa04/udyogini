import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, CheckCircle2, Target, BookOpen, Users, Compass } from 'lucide-react';

interface GuidanceAdvisorProps {
  currentLang: Language;
  userProfile: UserProfile;
  onNavigateToCourse: (moduleId: string) => void;
  onNavigateToMentors: (specialty: string) => void;
}

export const GuidanceAdvisor: React.FC<GuidanceAdvisorProps> = ({
  currentLang,
  userProfile,
  onNavigateToCourse,
  onNavigateToMentors,
}) => {
  const t = translations[currentLang];
  const [topChallenge, setTopChallenge] = useState<'customers' | 'money' | 'digital' | 'legal'>('customers');

  const getRecommendation = () => {
    switch (topChallenge) {
      case 'customers':
        return {
          title: currentLang === 'mr' ? 'ग्राहक आणि ऑर्डर्स वाढवण्यासाठी कृती आराखडा' : 'ग्राहकों और बिक्री बढ़ाने का रोडमैप',
          step1: {
            title: currentLang === 'mr' ? 'व्हॉट्सॲप बिझनेस कॅटलॉग व डिजिटल व्हिजिटिंग कार्ड' : 'व्हाट्सएप बिजनेस कैटलॉग और विजिटिंग कार्ड',
            desc: currentLang === 'mr' ? 'उत्पादनांची स्वच्छ छायाचित्रे आणि किमतीसह व्हॉट्सॲपवर कॅटलॉग तयार करा.' : 'उत्पादों की फोटो और सही कीमत के साथ कैटलॉग बनाएं।',
            moduleId: 'mod-4',
          },
          mentorSpecialty: 'marketing',
          mentorName: 'प्रिया जोशी (डिजिटल मार्केटिंग ट्रेनर)',
          actionPoints: [
            currentLang === 'mr' ? 'गावातील ५० ओळखीच्या लोकांची व्हॉट्सॲप ब्रॉडकास्ट लिस्ट बनवा.' : '50 संपर्कों की व्हाट्सएप ब्रॉडकास्ट सूची बनाएं।',
            currentLang === 'mr' ? 'गुगल मॅपवर तुमच्या दुकानाचे मोफत गुगल बिझनेस प्रोफाईल उघडा.' : 'गूगल मैप पर अपनी दुकान का नाम जोड़ें।',
            currentLang === 'mr' ? 'समाधानी ग्राहकांना व्हॉट्सॲपवर मित्रांना संदर्भ देण्याची विनंती करा.' : 'संतुष्ट ग्राहकों से अपने मित्रों को बताने का अनुरोध करें।',
          ],
        };
      case 'money':
        return {
          title: currentLang === 'mr' ? 'नफा व्यवस्थापन आणि खेळत्या भांडवलाचा आराखडा' : 'मुनाफा और पूंजी प्रबंधन रोडमैप',
          step1: {
            title: currentLang === 'mr' ? 'उत्पादनाचे अचूक मूल्य निर्धारण व दैनंदिन हिशोब वही' : 'लागत-मूल्य निर्धारण और दैनिक बहीखाता',
            desc: currentLang === 'mr' ? 'स्वतःच्या मजुरीचा खर्च जोडून योग्य विक्री किंमत ठरवा आणि उधारी बंद करा.' : 'अपनी मजदूरी जोड़कर सही कीमत निकालें।',
            moduleId: 'mod-6',
          },
          mentorSpecialty: 'finance',
          mentorName: 'सुनिता पाटील (बँक कर्ज व मुद्रा सल्लागार)',
          actionPoints: [
            currentLang === 'mr' ? 'उत्पादनात स्वतःचे ताशी ₹६० मजुरीचे श्रम जोडा.' : 'लागत में कम से कम ₹60 प्रति घंटा अपनी मेहनत जोड़ें।',
            currentLang === 'mr' ? 'प्रधानमंत्री मुद्रा योजनेच्या ₹५०,००० शिशु कर्जासाठी बँकेत संपर्क करा.' : 'मुद्रा योजना के ₹50,000 शिशु लोन के लिए बैंक में आवेदन करें।',
            currentLang === 'mr' ? 'उधारी बंद करून ५% रोख सवलत देणे सुरू करा.' : 'उधारी बंद करें और तुरंत नकद भुगतान पर छूट दें।',
          ],
        };
      case 'digital':
        return {
          title: currentLang === 'mr' ? 'डिजिटल पेमेंट्स आणि सुरक्षित स्मार्टफोन वापर' : 'डिजिटल पेमेंट और सुरक्षित फोन उपयोग',
          step1: {
            title: currentLang === 'mr' ? 'व्यापारी क्यूआर कोड व ध्वनीपेटी' : 'मर्चेंट क्यूआर और साउंडबॉक्स',
            desc: currentLang === 'mr' ? 'दुकान किंवा स्टॉलवर फोनपे बिझनेसचा क्यूआर कोड लावा.' : 'दुकान या स्टॉल पर आधिकारिक मर्चेंट क्यूआर लगाएं।',
            moduleId: 'mod-3',
          },
          mentorSpecialty: 'marketing',
          mentorName: 'प्रिया जोशी (डिजिटल कॉमर्स कोच)',
          actionPoints: [
            currentLang === 'mr' ? 'पैसे मिळवण्यासाठी कधीही यूपीआय पिन टाकू नका हा नियम लक्षात ठेवा.' : 'पैसे लेने के लिए कभी पिन नहीं डालना होता।',
            currentLang === 'mr' ? 'गुगल जीबोर्ड व्हॉईस टायपिंग शिकून बोलून मेसेज पाठवणे सुरू करा.' : 'बोलकर टाइप करना शुरू करें।',
            currentLang === 'mr' ? 'कोणत्याही संशयास्पद लॉटरी किंवा बँक ओटीपी कॉल्सला उत्तर देऊ नका.' : 'फर्जी लॉटरी व ओटीपी कॉल्स से बचें।',
          ],
        };
      case 'legal':
      default:
        return {
          title: currentLang === 'mr' ? 'FSSAI परवाना, पॅकिंग व ब्रँडिंग मार्गदर्शक' : 'FSSAI लाइसेंस, पैकेजिंग और ब्रांडिंग',
          step1: {
            title: currentLang === 'mr' ? 'अन्न सुरक्षा नोंदणी व शासकीय महिला योजना' : 'खाद्य सुरक्षा पंजीकरण व सरकारी योजनाएं',
            desc: currentLang === 'mr' ? 'घरगुती खाद्यपदार्थांसाठी ₹१०० मध्ये वार्षिक FSSAI रजिस्ट्रेशन मिळते.' : 'खाद्य उत्पादों के लिए ₹100 में वार्षिक FSSAI रजिस्ट्रेशन लें।',
            moduleId: 'mod-6',
          },
          mentorSpecialty: 'fssai_food',
          mentorName: 'अंजली देशमुख (बचत गट महासंघ अध्यक्षा)',
          actionPoints: [
            currentLang === 'mr' ? 'FSSAI FoSCoS पोर्टलवरून बेसिक नोंदणी प्रमाणपत्र मिळवा.' : 'FSSAI FoSCoS पोर्टल से बेसिक पंजीकरण प्राप्त करें।',
            currentLang === 'mr' ? 'खाद्यपदार्थांच्या पाकिटावर उत्पादन तारीख व वजन स्पष्ट छापा.' : 'पैकेट पर निर्माण तिथि और शुद्ध वजन लिखें।',
            currentLang === 'mr' ? 'उमेद अभियानांतर्गत स्थानिक कृषी प्रदर्शनात मोफत स्टॉलसाठी नोंदणी करा.' : 'उमेद व सरस प्रदर्शनी में स्टॉल के लिए आवेदन करें।',
          ],
        };
    }
  };

  const currentRec = getRecommendation();

  return (
    <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-7 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#C85A32] uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4 text-[#C85A32]" />
          <span>{t.advisor.title}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#292524]">
          {userProfile.name
            ? `${userProfile.name} ताईंसाठी व्यक्तिगत व्यावसायिक सल्ला`
            : t.advisor.subtitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#78716C] mt-1">
          {currentLang === 'mr'
            ? 'तुमचा सध्याचा व्यवसाय आणि अडचण निवडून नेमकी पुढची दिशा ठरवा.'
            : 'अपनी वर्तमान चुनौती चुनें और सही दिशा प्राप्त करें।'}
        </p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#44403C] mb-2.5">
          {currentLang === 'mr' ? 'सध्या तुम्हाला व्यवसायात कोणती सर्वात मोठी मदत हवी आहे?' : 'वर्तमान में सबसे बड़ी चुनौती क्या है?'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { id: 'customers', label: currentLang === 'mr' ? 'नवीन ग्राहक व विक्री वाढवणे' : 'नए ग्राहक व बिक्री बढ़ाना', icon: Target },
            { id: 'money', label: currentLang === 'mr' ? 'नफा काढणे व बँक कर्ज' : 'मुनाफा व बैंक लोन', icon: Sparkles },
            { id: 'digital', label: currentLang === 'mr' ? 'फोन व युपीआय शिकणे' : 'डिजिटल टूल्स व फोन', icon: Compass },
            { id: 'legal', label: currentLang === 'mr' ? 'FSSAI व पॅकिंग सल्ला' : 'FSSAI व पैकेजिंग', icon: CheckCircle2 },
          ].map((item) => {
            const isSelected = topChallenge === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setTopChallenge(item.id as any)}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#C85A32]/10 border-[#C85A32] text-[#C85A32] font-bold shadow-2xs ring-1 ring-[#C85A32]'
                    : 'bg-[#FAF7F2] border-[#E8DFD3] text-[#57534E] hover:bg-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs leading-snug">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD3] space-y-4">
        <h3 className="font-bold text-base text-[#292524]">
          {currentRec.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
                {t.advisor.step1}
              </span>
              <h4 className="font-bold text-sm text-[#292524]">
                {currentRec.step1.title}
              </h4>
              <p className="text-xs text-[#78716C] mt-1 leading-relaxed">
                {currentRec.step1.desc}
              </p>
            </div>
            <button
              onClick={() => onNavigateToCourse(currentRec.step1.moduleId)}
              className="mt-3 py-1.5 px-3 bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#D6CEBE] rounded-lg text-xs font-semibold text-[#C85A32] flex items-center justify-center gap-1 self-start"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{currentLang === 'mr' ? 'हा धडा सुरू करा' : 'यह पाठ शुरू करें'}</span>
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
                {t.advisor.step2}
              </span>
              <h4 className="font-bold text-sm text-[#292524]">
                {currentRec.mentorName}
              </h4>
              <p className="text-xs text-[#78716C] mt-1 leading-relaxed">
                {currentLang === 'mr'
                  ? 'या विषयातील अनुभवी तज्ज्ञ थेट सल्ला देण्यासाठी उपलब्ध आहेत.'
                  : 'इस विषय की अनुभवी विशेषज्ञ सीधी सलाह देने के लिए उपलब्ध हैं।'}
              </p>
            </div>
            <button
              onClick={() => onNavigateToMentors(currentRec.mentorSpecialty)}
              className="mt-3 py-1.5 px-3 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 self-start shadow-2xs"
            >
              <Users className="w-3.5 h-3.5" />
              <span>{currentLang === 'mr' ? 'मार्गदर्शकांशी संपर्क साधा' : 'सलाहकार से जुड़ें'}</span>
            </button>
          </div>
        </div>

        <div className="pt-2">
          <span className="text-xs font-bold text-[#44403C] uppercase tracking-wider block mb-2">
            {t.advisor.step3}:
          </span>
          <div className="space-y-2">
            {currentRec.actionPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-[#E8DFD3] text-xs text-[#292524]">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
