import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { generateQRMatrix } from '../utils/qr';
import { speakText } from '../utils/speech';
import { Check, ShieldAlert, Sparkles, Volume2, ArrowRight, RotateCcw, AlertTriangle, Image as ImageIcon } from 'lucide-react';

interface SimulatorsProps {
  currentLang: Language;
}

export const Simulators: React.FC<SimulatorsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeSim, setActiveSim] = useState<'upi' | 'catalog' | 'photo'>('upi');

  // --- UPI Simulator State ---
  const [paymentAmount, setPaymentAmount] = useState('250');
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [soundboxPlayed, setSoundboxPlayed] = useState(false);
  const [fraudSimOpen, setFraudSimOpen] = useState(false);
  const [fraudChoice, setFraudChoice] = useState<'correct' | 'wrong' | null>(null);

  // --- WhatsApp Catalog Simulator State ---
  const [catalogItem, setCatalogItem] = useState({
    title: currentLang === 'mr' ? 'गावरान हळद (शुद्ध पावडर)' : currentLang === 'hi' ? 'देसी शुद्ध हल्दी' : 'Pure Organic Turmeric',
    price: '180',
    weight: '250 gm',
    desc: currentLang === 'mr' ? 'घरगुती जात्यावर दळलेली, कोणताही भेसळ नसलेली पिवळीधमक हळद.' : 'घर की चक्की पर पिसी शुद्ध हल्दी।',
  });
  const [catalogPublished, setCatalogPublished] = useState(false);

  // --- Photo Practice State ---
  const [selectedPhotoChoice, setSelectedPhotoChoice] = useState<'a' | 'b' | null>(null);

  // QR Code generation
  const qrMatrix = generateQRMatrix(`upi://pay?pa=udyogini.sakhi@bank&pn=Udyogini&am=${paymentAmount}&cu=INR`);

  const handleSimulatePayment = () => {
    setPaymentReceived(true);
    setSoundboxPlayed(true);
    const soundText =
      currentLang === 'mr'
        ? `फोनपे वर ${paymentAmount} रुपये प्राप्त झाले!`
        : currentLang === 'hi'
        ? `फोनपे पर ${paymentAmount} रुपये प्राप्त हुए!`
        : `Received ${paymentAmount} rupees on PhonePe!`;
    speakText(soundText, currentLang);
  };

  const handleResetUPI = () => {
    setPaymentReceived(false);
    setSoundboxPlayed(false);
    setFraudChoice(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-6 shadow-xs">
      {/* Simulator Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E8DFD3]">
        <div>
          <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">
            {currentLang === 'mr' ? 'प्रत्यक्ष सराव लॅब' : currentLang === 'hi' ? 'प्रैक्टिस लैब' : 'Interactive Practice Lab'}
          </span>
          <h3 className="text-lg font-bold text-[#292524] mt-0.5">
            {currentLang === 'mr'
              ? 'डिजिटल साधने वापरण्याचा सोपा सराव'
              : currentLang === 'hi'
              ? 'डिजिटल टूल्स का आसान हैंड्स-ऑन अभ्यास'
              : 'Hands-on Practice with Real Business Tools'}
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl">
          <button
            onClick={() => setActiveSim('upi')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeSim === 'upi' ? 'bg-[#C85A32] text-white shadow-2xs' : 'text-[#78716C] hover:text-[#292524]'
            }`}
          >
            {currentLang === 'mr' ? '१. युपीआय व ध्वनीपेटी' : currentLang === 'hi' ? '1. यूपीआई व साउंडबॉक्स' : '1. UPI & Soundbox'}
          </button>
          <button
            onClick={() => setActiveSim('catalog')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeSim === 'catalog' ? 'bg-[#C85A32] text-white shadow-2xs' : 'text-[#78716C] hover:text-[#292524]'
            }`}
          >
            {currentLang === 'mr' ? '२. व्हॉट्सॲप कॅटलॉग' : currentLang === 'hi' ? '2. व्हाट्सएप कैटलॉग' : '2. WhatsApp Catalog'}
          </button>
          <button
            onClick={() => setActiveSim('photo')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeSim === 'photo' ? 'bg-[#C85A32] text-white shadow-2xs' : 'text-[#78716C] hover:text-[#292524]'
            }`}
          >
            {currentLang === 'mr' ? '३. वस्तूचा फोटो सराव' : currentLang === 'hi' ? '3. फोटो प्रैक्टिस' : '3. Product Photo'}
          </button>
        </div>
      </div>

      {/* --- SIMULATOR 1: UPI & SOUNDBOX --- */}
      {activeSim === 'upi' && (
        <div className="pt-5 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Merchant QR Counter */}
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DFD3] flex flex-col items-center text-center">
              <div className="w-full bg-[#1A365D] text-white py-2 px-3 rounded-lg mb-3 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide">BHIM UPI / MERCHANT QR</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">सुरक्षित</span>
              </div>

              <div className="p-3 bg-white rounded-xl shadow-xs border border-[#E8DFD3]">
                <svg width="150" height="150" viewBox="0 0 21 21" className="shape-rendering-crispEdges">
                  {qrMatrix.map((row, rIdx) =>
                    row.map((cell, cIdx) => (
                      <rect
                        key={`${rIdx}-${cIdx}`}
                        x={cIdx}
                        y={rIdx}
                        width="1"
                        height="1"
                        fill={cell ? '#1E293B' : '#FFFFFF'}
                      />
                    ))
                  )}
                </svg>
              </div>

              <span className="font-bold text-[#292524] mt-2 text-sm">
                लक्ष्मी गृह उद्योग (Lakshmi Gruh Udyog)
              </span>
              <span className="text-xs text-[#78716C]">UPI ID: lakshmi.udyog@upi</span>

              {/* Amount Setter */}
              <div className="mt-4 w-full flex items-center gap-2 justify-center">
                <span className="text-xs font-medium text-[#57534E]">रक्कम / Amount:</span>
                <div className="flex items-center bg-white border border-[#D6CEBE] rounded-lg px-2 py-1">
                  <span className="text-xs font-bold text-[#292524]">₹</span>
                  <input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="w-16 text-center text-sm font-bold text-[#292524] focus:outline-none"
                  />
                </div>
              </div>

              <button
                onClick={handleSimulatePayment}
                disabled={paymentReceived}
                className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  paymentReceived
                    ? 'bg-[#15803D] text-white cursor-default'
                    : 'bg-[#C85A32] hover:bg-[#B54E28] text-white shadow-xs'
                }`}
              >
                {paymentReceived ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>
                      {currentLang === 'mr' ? 'पेमेंट यशस्वीरित्या जमा झाले!' : 'भुगतान सफलतापूर्वक प्राप्त!'}
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {currentLang === 'mr'
                        ? 'ग्राहकाकडून पेमेंटचा सराव करा (Simulate)'
                        : 'ग्राहक से भुगतान प्राप्त करने का अभ्यास करें'}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated Voice Soundbox & Safety Rules */}
            <div className="space-y-4">
              
              {/* Virtual Soundbox Device */}
              <div className="bg-[#1C1917] text-white p-4 rounded-2xl shadow-md border border-neutral-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#C85A32] flex items-center justify-center text-white">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                        {currentLang === 'mr' ? 'डिजिटल ध्वनीपेटी (Smart Soundbox)' : 'डिजिटल साउंडबॉक्स (Smart Soundbox)'}
                      </h4>
                      <span className="text-[10px] text-emerald-400 font-medium">● 4G नेटवर्क सुरू आहे</span>
                    </div>
                  </div>
                  {paymentReceived && (
                    <button
                      onClick={handleResetUPI}
                      className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-1 rounded"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>रिसेट</span>
                    </button>
                  )}
                </div>

                <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800 text-center my-3">
                  {soundboxPlayed ? (
                    <div className="space-y-1">
                      <span className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1">
                        <Volume2 className="w-4 h-4 animate-bounce" />
                        <span>आवाज आला (Voice Alert):</span>
                      </span>
                      <p className="text-base font-bold text-white">
                        {currentLang === 'mr'
                          ? `"फोनपे वर ₹${paymentAmount} प्राप्त झाले!"`
                          : currentLang === 'hi'
                          ? `"फोनपे पर ₹${paymentAmount} प्राप्त हुए!"`
                          : `"Received ₹${paymentAmount} on PhonePe!"`}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-400 italic">
                      {currentLang === 'mr'
                        ? 'डावीकडील बटनावर क्लिक करून पेमेंटची घोषणा ऐका'
                        : 'बाईं तरफ क्लिक करके भुगतान की आवाज सुनें'}
                    </p>
                  )}
                </div>

                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  {currentLang === 'mr'
                    ? 'फायदा: ध्वनीपेटीमुळे दुकानात गर्दी असतानाही आवाज येतो, स्क्रीन पाहण्याची गरज उरत नाही आणि बनावट स्क्रीनशॉटची फसवणूक टळते.'
                    : 'फायदा: साउंडबॉक्स से फर्जी स्क्रीनशॉट का धोखा खत्म हो जाता है और व्यस्त समय में फोन देखने की जरूरत नहीं पड़ती।'}
                </p>
              </div>

              {/* Fraud Simulation Test */}
              <div className="bg-[#FEF3C7] border border-[#FDE68A] p-4 rounded-xl text-[#92400E]">
                <div className="flex items-start gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#92400E]">
                      {currentLang === 'mr' ? 'फसवणूक चाचणी: ग्राहक म्हणतो...' : 'धोखाधड़ी परीक्षण: ग्राहक कहता है...'}
                    </h5>
                    <p className="text-xs mt-1 font-medium text-[#78350F]">
                      {currentLang === 'mr'
                        ? '"ताई, मी तुम्हाला ₹५०० पाठवत आहे. पैसे मिळवण्यासाठी तुमचा ६ अंकी यूपीआय पिन टाका." तुम्ही काय कराल?'
                        : '"दीदी, मैं आपको ₹500 भेज रहा हूं, पैसे पाने के लिए अपना यूपीआई पिन डालें।" आप क्या करेंगी?'}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <button
                        onClick={() => setFraudChoice('wrong')}
                        className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                          fraudChoice === 'wrong'
                            ? 'bg-rose-100 border-rose-300 text-rose-800'
                            : 'bg-white border-[#FDE68A] text-[#78350F] hover:bg-amber-50'
                        }`}
                      >
                        {currentLang === 'mr' ? 'पिन टाकेन' : 'पिन डालूंगी'}
                      </button>
                      <button
                        onClick={() => setFraudChoice('correct')}
                        className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                          fraudChoice === 'correct'
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                            : 'bg-white border-[#FDE68A] text-[#78350F] hover:bg-amber-50'
                        }`}
                      >
                        {currentLang === 'mr' ? 'पिन कधीही टाकणार नाही!' : 'पिन कभी नहीं डालूंगी!'}
                      </button>
                    </div>

                    {fraudChoice === 'correct' && (
                      <div className="mt-2.5 p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-medium">
                        ✓ {currentLang === 'mr'
                          ? 'अगदी बरोबर! पैसे घेण्यासाठी कधीही पिन लागत नाही. हा मोठा सायबर घोटाळा आहे.'
                          : 'बिल्कुल सही! पैसे प्राप्त करने के लिए कभी पिन नहीं लगता।'}
                      </div>
                    )}
                    {fraudChoice === 'wrong' && (
                      <div className="mt-2.5 p-2 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs font-medium">
                        ✗ {currentLang === 'mr'
                          ? 'सावध राहा! पिन टाकल्यास तुमच्या खात्यातून पैसे कट होतात! पैसे घेण्यासाठी कधीही पिन लागत नाही.'
                          : 'सावधान! पिन डालने से आपके खाते से पैसे कट जाएंगे।'}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* --- SIMULATOR 2: WHATSAPP BUSINESS CATALOG --- */}
      {activeSim === 'catalog' && (
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Edit Form */}
          <div className="space-y-4 bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DFD3]">
            <h4 className="text-sm font-bold text-[#292524]">
              {currentLang === 'mr' ? 'नवीन उत्पादनाची माहिती भरा' : 'नए उत्पाद की जानकारी भरें'}
            </h4>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                {currentLang === 'mr' ? 'उत्पादनाचे नाव' : 'उत्पाद का नाम'}
              </label>
              <input
                type="text"
                value={catalogItem.title}
                onChange={(e) => setCatalogItem({ ...catalogItem, title: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#57534E] mb-1">
                  {currentLang === 'mr' ? 'किंमत (₹)' : 'कीमत (₹)'}
                </label>
                <input
                  type="number"
                  value={catalogItem.price}
                  onChange={(e) => setCatalogItem({ ...catalogItem, price: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#57534E] mb-1">
                  {currentLang === 'mr' ? 'वजन / नग' : 'वजन / मात्रा'}
                </label>
                <input
                  type="text"
                  value={catalogItem.weight}
                  onChange={(e) => setCatalogItem({ ...catalogItem, weight: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                {currentLang === 'mr' ? 'वर्णन व वैशिष्ट्ये' : 'विवरण व विशेषताएं'}
              </label>
              <textarea
                rows={2}
                value={catalogItem.desc}
                onChange={(e) => setCatalogItem({ ...catalogItem, desc: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <button
              onClick={() => setCatalogPublished(true)}
              className="w-full py-2.5 bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{currentLang === 'mr' ? 'कॅटलॉगमध्ये जोडा' : 'कैटलॉग में जोड़ें'}</span>
            </button>
          </div>

          {/* WhatsApp Mobile Preview */}
          <div className="flex justify-center">
            <div className="w-72 bg-[#075E54] text-white rounded-3xl p-3 shadow-xl border-4 border-[#128C7E]">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-2 pb-2 border-b border-white/20">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  ल
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">लक्ष्मी गृह उद्योग</div>
                  <div className="text-[10px] text-emerald-200">Official Business Account</div>
                </div>
              </div>

              {/* Product Card Preview inside WhatsApp */}
              <div className="bg-white text-[#292524] rounded-xl mt-3 overflow-hidden shadow-md">
                <div className="h-32 bg-amber-100 flex items-center justify-center text-amber-800">
                  <div className="text-center p-3">
                    <ImageIcon className="w-8 h-8 mx-auto text-amber-600 mb-1" />
                    <span className="text-[11px] font-bold block">{catalogItem.title}</span>
                    <span className="text-[10px] text-[#78716C]">१००% नैसर्गिक शेतमाल</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#C85A32]">₹{catalogItem.price}</span>
                    <span className="text-[10px] bg-[#FAF7F2] border border-[#E8DFD3] px-2 py-0.5 rounded text-[#78716C]">
                      {catalogItem.weight}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#57534E] mt-1.5 leading-snug line-clamp-2">
                    {catalogItem.desc}
                  </p>
                  <button className="mt-2.5 w-full py-1.5 bg-[#25D366] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1">
                    <span>Message Business</span>
                  </button>
                </div>
              </div>

              <div className="text-center mt-3 text-[10px] text-white/80">
                {currentLang === 'mr'
                  ? 'ग्राहकांना हा कॅटलॉग एका लिंकद्वारे पाठवता येतो!'
                  : 'ग्राहकों को यह कैटलॉग एक लिंक से भेजा जा सकता है!'}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* --- SIMULATOR 3: PRODUCT PHOTO PRACTICE --- */}
      {activeSim === 'photo' && (
        <div className="pt-5 space-y-4">
          <p className="text-xs text-[#57534E]">
            {currentLang === 'mr'
              ? 'खालीलपैकी कोणता फोटो ग्राहकांना वस्तू खरेदी करण्यासाठी अधिक आकर्षित करेल आणि का? एकावर क्लिक करा:'
              : 'नीचे दिए गए विकल्पों में से कौन सा फोटो ग्राहक को आकर्षित करेगा? चुनें:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Option A: Bad Photo */}
            <button
              onClick={() => setSelectedPhotoChoice('a')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedPhotoChoice === 'a'
                  ? 'border-rose-400 bg-rose-50/50'
                  : 'border-[#E8DFD3] hover:border-[#D6CEBE] bg-white'
              }`}
            >
              <div className="h-36 bg-stone-300 rounded-lg flex flex-col items-center justify-center text-stone-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-medium">
                  अंधारी खोली + धुसर कॅमेरा + कडक फ्लॅश
                </div>
              </div>
              <div className="mt-3">
                <span className="text-xs font-bold text-[#292524]">पर्याय अ (Option A)</span>
                <p className="text-[11px] text-[#78716C] mt-0.5">
                  अंधारात फ्लॅश मारून काढलेला फोटो, वस्तूचा खरा रंग दिसत नाही.
                </p>
              </div>
            </button>

            {/* Option B: Good Photo */}
            <button
              onClick={() => setSelectedPhotoChoice('b')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedPhotoChoice === 'b'
                  ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500'
                  : 'border-[#E8DFD3] hover:border-[#D6CEBE] bg-white'
              }`}
            >
              <div className="h-36 bg-amber-50 rounded-lg border border-amber-200 flex flex-col items-center justify-center text-amber-900 relative overflow-hidden">
                <div className="text-center p-3">
                  <span className="text-xs font-bold block text-emerald-800 mb-1">
                    ✓ स्वच्छ सूर्यप्रकाश + पांढरी पार्श्वभूमी
                  </span>
                  <span className="text-[11px] text-amber-700 font-medium">
                    पापड बरणी + किंमत टॅग (₹१२० / ५००g)
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-xs font-bold text-emerald-800">पर्याय ब (Option B - आदर्श)</span>
                <p className="text-[11px] text-[#78716C] mt-0.5">
                  स्वच्छ नैसर्गिक प्रकाश, किंमत स्पष्ट आणि आकर्षक मांडणी.
                </p>
              </div>
            </button>

          </div>

          {selectedPhotoChoice === 'b' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {currentLang === 'mr'
                  ? 'अतिशय बरोबर! स्वच्छ प्रकाश आणि स्पष्ट किमतीमुळे ग्राहक एका सेकंदात विश्वास ठेवतात व ऑर्डर देतात.'
                  : 'शाबाश! साफ रोशनी और स्पष्ट मूल्य से ग्राहक तुरंत आकर्षित होते हैं।'}
              </span>
            </div>
          )}

          {selectedPhotoChoice === 'a' && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                {currentLang === 'mr'
                  ? 'अंधारात काढलेल्या किंवा धुरकट फोटोंमुळे वस्तूची गुणवत्ता खराब वाटते आणि विक्री होत नाही. नेहमी नैसर्गिक उजेडात फोटो काढा.'
                  : 'धुंधली फोटो से ग्राहक खरीदारी करने से बचते हैं। प्राकृतिक रोशनी में ही फोटो खींचें।'}
              </span>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
