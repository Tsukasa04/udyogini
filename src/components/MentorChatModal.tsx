import React, { useState } from 'react';
import { MentorshipRequest, Language, UserProfile } from '../types';
import { translations } from '../data/translations';
import { speakText, stopSpeaking, isSpeaking } from '../utils/speech';
import { MessageCircle, Phone, Send, Volume2, VolumeX, X, UserCheck, Sparkles, Mic } from 'lucide-react';

interface MentorChatModalProps {
  request: MentorshipRequest;
  onClose: () => void;
  currentLang: Language;
  userProfile: UserProfile;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  time: string;
  isVoice?: boolean;
}

export const MentorChatModal: React.FC<MentorChatModalProps> = ({
  request,
  onClose,
  currentLang,
  userProfile,
}) => {
  const t = translations[currentLang];
  const [inputText, setInputText] = useState('');
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);

  // Initial greeting and response based on requested topic
  const initialMessages: ChatMessage[] = [
    {
      id: 'msg-1',
      sender: 'user',
      text: request.notes,
      time: '१०:१५ AM',
    },
    {
      id: 'msg-2',
      sender: 'mentor',
      text:
        currentLang === 'mr'
          ? `सस्नेह नमस्कार ${userProfile.name} ताई! मला तुमची विचारणा मिळाली. तुमच्या ${userProfile.businessType || 'व्यवसायाची'} प्रगती पाहून आनंद झाला. तुमच्या प्रश्नाचे सविस्तर उत्तर खालीलप्रमाणे आहे.`
          : currentLang === 'hi'
          ? `नमस्ते ${userProfile.name} जी! आपका संदेश मिला। मुझे खुशी है कि आप अपने व्यवसाय को आगे बढ़ाना चाहती हैं।`
          : `Hello ${userProfile.name}! I received your request. I am happy to guide you on scaling your business.`,
      time: '१०:१८ AM',
    },
    {
      id: 'msg-3',
      sender: 'mentor',
      text:
        currentLang === 'mr'
          ? `१) सर्वप्रथम तुमच्या मालाचे स्वच्छ पॅकिंग व वजनाचे स्टिकर लावा. २) स्थानिक ग्राहकांसाठी व्हॉट्सॲप कॅटलॉग तयार ठेवा. ३) बँकेत जाऊन मुद्रा योजनेच्या शिशु कर्जासाठी कोटेशन जमा करा. मी तुम्हाला संपूर्ण फॉर्म भरण्यात मदत करेन.`
          : currentLang === 'hi'
          ? `1) उत्पादों की अच्छी पैकेजिंग और वजन का स्टिकर लगाएं। 2) व्हाट्सएप कैटलॉग तैयार रखें। 3) मुद्रा शिशु लोन का फॉर्म भरने में मैं आपकी पूरी मदद करूंगी।`
          : `1) Ensure clean packaging with exact net weight tags. 2) Set up your WhatsApp business catalog. 3) Apply for the Mudra Shishu loan; I can guide your paperwork step-by-step.`,
      time: '१०:१९ AM',
      isVoice: true,
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: inputText,
      time: '१०:२५ AM',
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulated mentor reply after 1.5s
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: `msg-reply-${Date.now()}`,
        sender: 'mentor',
        text:
          currentLang === 'mr'
            ? `नक्कीच ताई! तुम्ही उद्या सकाळी ११ वाजता मला थेट फोन करू शकता किंवा गावात बचत गट बैठकीत भेटू शकता. काळजी करू नका, आपण मिळून तुमचा व्यवसाय नक्की मोठा करू!`
            : currentLang === 'hi'
            ? `बिल्कुल! आप कल सुबह 11 बजे मुझसे फोन पर बात कर सकती हैं। हम मिलकर आपके व्यवसाय को आगे बढ़ाएंगे!`
            : `Certainly! You can call me at 11 AM tomorrow or we can connect during the local SHG meeting.`,
        time: '१०:२६ AM',
        isVoice: true,
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1200);
  };

  const handlePlayVoice = (msg: ChatMessage) => {
    if (playingVoiceId === msg.id || isSpeaking()) {
      stopSpeaking();
      setPlayingVoiceId(null);
    } else {
      setPlayingVoiceId(msg.id);
      speakText(msg.text, currentLang, () => setPlayingVoiceId(null));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DFD3] flex flex-col h-[560px] overflow-hidden">
        
        {/* Chat Header */}
        <div className="bg-[#FAF7F2] border-b border-[#E8DFD3] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-bold text-sm">
              {request.mentorName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-[#292524]">{request.mentorName}</span>
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-[11px] text-[#78716C] block truncate max-w-[220px]">
                {request.mentorRole}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const callText =
                  currentLang === 'mr'
                    ? `${request.mentorName} यांच्याशी थेट संपर्क साधत आहे...`
                    : `Connecting call with ${request.mentorName}...`;
                speakText(callText, currentLang);
              }}
              title="Phone Call"
              className="p-2 rounded-lg bg-white border border-[#E8DFD3] text-[#C85A32] hover:bg-[#F3ECE0]"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#78716C] hover:text-[#292524] rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F8F4EE]">
          <div className="text-center my-1">
            <span className="text-[10px] bg-white border border-[#E8DFD3] text-[#78716C] px-2.5 py-0.5 rounded-full">
              {currentLang === 'mr' ? 'अधिकृत मार्गदर्शन संभाषण' : 'आधिकारिक मार्गदर्शन बातचीत'}
            </span>
          </div>

          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    isUser
                      ? 'bg-[#C85A32] text-white rounded-br-none'
                      : 'bg-white text-[#292524] border border-[#E8DFD3] rounded-bl-none'
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Audio Voice Note Player for mentor messages */}
                  {!isUser && (
                    <div className="mt-2 pt-2 border-t border-[#E8DFD3]/60 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handlePlayVoice(m)}
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-[#C85A32] hover:text-[#B54E28]"
                      >
                        {playingVoiceId === m.id ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>{t.stopReading}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>{currentLang === 'mr' ? 'सल्ला ऐका (Voice Note)' : 'सलाह सुनें (Voice Note)'}</span>
                          </>
                        )}
                      </button>
                      <span className="text-[10px] text-[#A8A29E]">{m.time}</span>
                    </div>
                  )}

                  {isUser && (
                    <span className="text-[10px] text-white/70 block text-right mt-1">
                      {m.time}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#E8DFD3] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              currentLang === 'mr'
                ? 'येथे प्रश्न विचारा किंवा बोला...'
                : currentLang === 'hi'
                ? 'यहां अपना प्रश्न लिखें...'
                : 'Type your message or question...'
            }
            className="flex-1 px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl text-xs text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#C85A32]"
          />
          <button
            type="submit"
            className="p-2.5 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
