import React, { useState } from 'react';
import { Language, UserProfile, CashbookEntry, GovtScheme } from '../types';
import { translations } from '../data/translations';
import { GOVT_SCHEMES_DATA } from '../data/schemes';
import { generateQRMatrix } from '../utils/qr';
import { speakText } from '../utils/speech';
import {
  CreditCard,
  Calculator,
  BookOpen,
  FileText,
  Share2,
  Printer,
  Download,
  Plus,
  Trash2,
  Check,
  Search,
  ExternalLink,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Building,
  HelpCircle,
} from 'lucide-react';

interface BusinessToolkitProps {
  currentLang: Language;
  userProfile: UserProfile;
}

export const BusinessToolkit: React.FC<BusinessToolkitProps> = ({
  currentLang,
  userProfile,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'card' | 'pricing' | 'cashbook' | 'schemes'>('card');

  // --- 1. Visiting Card State ---
  const [cardData, setCardData] = useState({
    businessName: userProfile.businessType ? `${userProfile.name.split(' ')[0] || 'लक्ष्मी'} गृह उद्योग` : 'लक्ष्मी गृह उद्योग',
    ownerName: userProfile.name || 'अनिता सुनील पाटील',
    phone: userProfile.phone || '9822012345',
    upiId: 'anita.patil@upi',
    productsList: currentLang === 'mr' ? 'उडीद पापड, गावरान लोणचे, खमंग चकली, शुद्ध हळद' : 'उड़द पापड़, आम का अचार, चकली, शुद्ध हल्दी',
    address: `${userProfile.village || 'बारामती'}, जि. ${userProfile.district || 'पुणे'}`,
  });

  // --- 2. Pricing Calculator State ---
  const [rawCost, setRawCost] = useState('450');
  const [laborCost, setLaborCost] = useState('200');
  const [packagingCost, setPackagingCost] = useState('60');
  const [transportCost, setTransportCost] = useState('40');
  const [units, setUnits] = useState('10');
  const [marginPercent, setMarginPercent] = useState('30');

  // Calculation results
  const totalBatchCost =
    (parseFloat(rawCost) || 0) +
    (parseFloat(laborCost) || 0) +
    (parseFloat(packagingCost) || 0) +
    (parseFloat(transportCost) || 0);
  const unitsCount = parseFloat(units) || 1;
  const costPerUnit = unitsCount > 0 ? totalBatchCost / unitsCount : 0;
  const marginRatio = (parseFloat(marginPercent) || 0) / 100;
  const profitPerUnit = costPerUnit * marginRatio;
  const suggestedSellingPrice = costPerUnit + profitPerUnit;

  // --- 3. Cashbook Ledger State ---
  const [entries, setEntries] = useState<CashbookEntry[]>([
    {
      id: 'entry-1',
      date: 'आज (Today)',
      type: 'income',
      partyName: 'सुमन काकी (हळद विक्री)',
      amount: 360,
      description: '२ पाकिटे हळद रोख',
    },
    {
      id: 'entry-2',
      date: 'आज (Today)',
      type: 'expense',
      partyName: 'अशोक किराणा (मसाला खरेदी)',
      amount: 150,
      description: 'धने व लवंग खरेदी',
    },
    {
      id: 'entry-3',
      date: 'काल (Yesterday)',
      type: 'credit',
      partyName: 'रेखा भोईर (उधारी)',
      amount: 240,
      description: '२ किलो पोहे व शेवया (उधारी)',
      isPaid: false,
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    type: 'income' as 'income' | 'expense' | 'credit',
    partyName: '',
    amount: '',
    description: '',
  });

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.partyName || !newEntry.amount) return;

    const entry: CashbookEntry = {
      id: `ent-${Date.now()}`,
      date: 'आज (Today)',
      type: newEntry.type,
      partyName: newEntry.partyName,
      amount: parseFloat(newEntry.amount) || 0,
      description: newEntry.description,
      isPaid: false,
    };

    setEntries([entry, ...entries]);
    setNewEntry({
      type: 'income',
      partyName: '',
      amount: '',
      description: '',
    });
  };

  const handleMarkCreditPaid = (id: string) => {
    setEntries(
      entries.map((item) => {
        if (item.id === id) {
          return { ...item, isPaid: true, type: 'income' };
        }
        return item;
      })
    );
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  // Cashbook Totals
  const totalIncome = entries
    .filter((e) => e.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = entries
    .filter((e) => e.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalPendingCredit = entries
    .filter((e) => e.type === 'credit' && !e.isPaid)
    .reduce((acc, curr) => acc + curr.amount, 0);
  const netCashInHand = totalIncome - totalExpense;

  // --- 4. Schemes State ---
  const [schemeSearch, setSchemeSearch] = useState('');
  const [schemeFilter, setSchemeFilter] = useState('all');

  const filteredSchemes = GOVT_SCHEMES_DATA.filter((sch) => {
    const matchText =
      sch.name[currentLang].toLowerCase().includes(schemeSearch.toLowerCase()) ||
      sch.sponsor.toLowerCase().includes(schemeSearch.toLowerCase());
    const matchCategory = schemeFilter === 'all' || sch.category === schemeFilter || sch.category === 'all';
    return matchText && matchCategory;
  });

  // Pure SVG QR for visiting card
  const upiQRMatrix = generateQRMatrix(`upi://pay?pa=${cardData.upiId}&pn=${encodeURIComponent(cardData.businessName)}&cu=INR`);

  return (
    <div className="space-y-6">
      
      {/* Toolkit Header with Tabs */}
      <div className="bg-white rounded-2xl border border-[#E8DFD3] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
              {currentLang === 'mr' ? 'मोफत उद्योजकता साधने' : 'मुफ्त उद्यमिता टूल्स'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292524] mt-1">
              {t.toolkit.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-1">
              {t.toolkit.subtitle}
            </p>
          </div>

          {/* Segmented Controls for 4 Tools */}
          <div className="flex items-center gap-1 p-1 bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl overflow-x-auto scrollbar-none">
            {[
              { id: 'card', label: t.toolkit.tabCard, icon: CreditCard },
              { id: 'pricing', label: t.toolkit.tabPricing, icon: Calculator },
              { id: 'cashbook', label: t.toolkit.tabCashbook, icon: BookOpen },
              { id: 'schemes', label: t.toolkit.tabSchemes, icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C85A32] text-white shadow-2xs'
                      : 'text-[#78716C] hover:text-[#292524]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- TAB 1: DIGITAL VISITING CARD BUILDER --- */}
      {activeTab === 'card' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Card Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#E8DFD3] space-y-4 shadow-xs">
            <h3 className="font-bold text-sm text-[#292524] flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#C85A32]" />
              <span>{t.toolkit.cardMaker.title}</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                {t.toolkit.cardMaker.businessName}
              </label>
              <input
                type="text"
                value={cardData.businessName}
                onChange={(e) => setCardData({ ...cardData, businessName: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                {t.toolkit.cardMaker.ownerName}
              </label>
              <input
                type="text"
                value={cardData.ownerName}
                onChange={(e) => setCardData({ ...cardData, ownerName: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#57534E] mb-1">
                  {t.toolkit.cardMaker.phone}
                </label>
                <input
                  type="text"
                  value={cardData.phone}
                  onChange={(e) => setCardData({ ...cardData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#57534E] mb-1">
                  {t.toolkit.cardMaker.upiId}
                </label>
                <input
                  type="text"
                  value={cardData.upiId}
                  onChange={(e) => setCardData({ ...cardData, upiId: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                {t.toolkit.cardMaker.productsList}
              </label>
              <textarea
                rows={2}
                value={cardData.productsList}
                onChange={(e) => setCardData({ ...cardData, productsList: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                {t.toolkit.cardMaker.address}
              </label>
              <input
                type="text"
                value={cardData.address}
                onChange={(e) => setCardData({ ...cardData, address: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2 px-3 border border-[#D6CEBE] rounded-xl text-xs font-semibold text-[#57534E] hover:bg-[#FAF7F2] flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>{t.toolkit.cardMaker.downloadCard}</span>
              </button>
              <button
                onClick={() => {
                  const shareText = `*${cardData.businessName}*\nमालकीण: ${cardData.ownerName}\nउत्पादने: ${cardData.productsList}\nसंपर्क: ${cardData.phone}\nपत्ता: ${cardData.address}\nUPI: ${cardData.upiId}`;
                  const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                  window.open(url, '_blank');
                }}
                className="flex-1 py-2 px-3 bg-[#15803D] hover:bg-[#166534] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Share2 className="w-4 h-4" />
                <span>{t.toolkit.cardMaker.shareWhatsApp}</span>
              </button>
            </div>
          </div>

          {/* Interactive Card Canvas Preview (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <span className="text-xs font-semibold text-[#78716C] mb-2 uppercase tracking-wider">
              {currentLang === 'mr' ? 'कार्डचे थेट पूर्वावलोकन (Live Preview)' : 'लाइव कार्ड प्रिव्यू'}
            </span>

            {/* Realistic Physical Card Representation */}
            <div className="w-full max-w-md bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F2EAE0] p-6 rounded-3xl border-2 border-[#D6CEBE] shadow-xl relative overflow-hidden">
              
              {/* Decorative traditional corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C85A32]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#C85A32] font-bold uppercase tracking-wider">
                    <span>★</span>
                    <span>{currentLang === 'mr' ? 'शुद्ध व दर्जेदार उत्पादने' : 'शुद्ध एवं गुणवत्तापूर्ण'}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#292524] tracking-tight mt-1">
                    {cardData.businessName}
                  </h3>
                  <p className="text-xs font-medium text-[#78716C] mt-0.5">
                    {currentLang === 'mr' ? 'सौ.' : 'श्रीमती'} {cardData.ownerName}
                  </p>
                </div>

                {/* QR Code Container */}
                <div className="bg-white p-2 rounded-xl border border-[#E8DFD3] shadow-xs flex flex-col items-center shrink-0">
                  <svg width="76" height="76" viewBox="0 0 21 21">
                    {upiQRMatrix.map((row, r) =>
                      row.map((cell, c) => (
                        <rect
                          key={`${r}-${c}`}
                          x={c}
                          y={r}
                          width="1"
                          height="1"
                          fill={cell ? '#292524' : '#FFFFFF'}
                        />
                      ))
                    )}
                  </svg>
                  <span className="text-[9px] font-bold text-[#C85A32] mt-1">
                    {t.toolkit.cardMaker.scanToPay}
                  </span>
                </div>
              </div>

              {/* Products List Pills */}
              <div className="mt-4 pt-3 border-t border-[#E8DFD3]">
                <span className="text-[10px] font-bold text-[#78716C] uppercase tracking-wider block mb-1.5">
                  {currentLang === 'mr' ? 'आमची उत्पादने:' : 'हमारे उत्पाद:'}
                </span>
                <p className="text-xs text-[#44403C] font-medium leading-relaxed">
                  {cardData.productsList}
                </p>
              </div>

              {/* Footer: Phone, Address, UPI */}
              <div className="mt-5 pt-3 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between gap-2 text-xs text-[#57534E]">
                <div className="font-semibold text-[#292524]">
                  📞 {cardData.phone}
                </div>
                <div className="text-[11px] text-[#78716C]">
                  📍 {cardData.address}
                </div>
              </div>

            </div>

            <p className="text-[11px] text-[#78716C] text-center mt-3 max-w-sm">
              {currentLang === 'mr'
                ? 'हे कार्ड तुमच्या दुकानात प्रिंट करून लावा किंवा प्रत्येक नवीन ग्राहकाला व्हॉट्सॲपवर पाठवा!'
                : 'यह कार्ड दुकान पर लगाएं या नए ग्राहकों को व्हाट्सएप पर भेजें!'}
            </p>
          </div>

        </div>
      )}

      {/* --- TAB 2: PRICING & PROFIT CALCULATOR --- */}
      {activeTab === 'pricing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DFD3] space-y-4 shadow-xs">
            <div>
              <h3 className="font-bold text-base text-[#292524]">
                {t.toolkit.calculator.title}
              </h3>
              <p className="text-xs text-[#78716C] mt-0.5">
                {t.toolkit.calculator.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.toolkit.calculator.rawMaterial}
                </label>
                <input
                  type="number"
                  value={rawCost}
                  onChange={(e) => setRawCost(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold text-[#292524]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.toolkit.calculator.laborCost}
                </label>
                <input
                  type="number"
                  value={laborCost}
                  onChange={(e) => setLaborCost(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold text-[#292524]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.toolkit.calculator.packagingCost}
                </label>
                <input
                  type="number"
                  value={packagingCost}
                  onChange={(e) => setPackagingCost(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold text-[#292524]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.toolkit.calculator.transportCost}
                </label>
                <input
                  type="number"
                  value={transportCost}
                  onChange={(e) => setTransportCost(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold text-[#292524]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.toolkit.calculator.unitsProduced}
                </label>
                <input
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold text-[#292524]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] mb-1">
                  {t.toolkit.calculator.desiredMargin}
                </label>
                <input
                  type="number"
                  value={marginPercent}
                  onChange={(e) => setMarginPercent(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold text-[#292524]"
                />
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
              💡 {t.toolkit.calculator.marginAdvice}
            </div>
          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#292524] to-[#1C1917] text-white p-6 rounded-2xl shadow-lg space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E07A5F]">
              {currentLang === 'mr' ? 'अचूक नफा विश्लेषण' : 'सटीक मुनाफा विश्लेषण'}
            </span>

            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <span className="text-stone-300">{t.toolkit.calculator.totalCost}</span>
                <span className="font-mono font-bold text-sm">₹{totalBatchCost.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <span className="text-stone-300">{t.toolkit.calculator.costPerUnit}</span>
                <span className="font-mono font-bold text-sm">₹{costPerUnit.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <span className="text-stone-300">{t.toolkit.calculator.profitPerUnit}</span>
                <span className="font-mono font-bold text-sm text-emerald-400">+₹{profitPerUnit.toFixed(2)}</span>
              </div>
            </div>

            {/* Suggested Selling Price Big Callout */}
            <div className="p-4 bg-white/10 rounded-xl border border-white/15 text-center">
              <span className="text-xs text-stone-300 block mb-1">
                {t.toolkit.calculator.suggestedPrice}
              </span>
              <div className="text-3xl font-black text-white font-mono">
                ₹{Math.ceil(suggestedSellingPrice)}
              </div>
              <span className="text-[10px] text-stone-400 mt-1 block">
                {currentLang === 'mr' ? '(प्रति नग किंवा प्रति किलो विक्री दर)' : '(प्रति पीस या प्रति किलो बिक्री मूल्य)'}
              </span>
            </div>

            <div className="text-[11px] text-stone-300 text-center leading-relaxed">
              {currentLang === 'mr'
                ? `जर तुम्ही ${units} नग विकले, तर तुम्हाला सर्व खर्च व स्वतःची मजुरी वजा जाता एकूण ₹${(profitPerUnit * unitsCount).toFixed(0)} निव्वळ नफा होईल!`
                : `यदि आप ${units} पीस बेचेंगी, तो सभी खर्च निकालकर आपको कुल ₹${(profitPerUnit * unitsCount).toFixed(0)} शुद्ध मुनाफा मिलेगा!`}
            </div>
          </div>

        </div>
      )}

      {/* --- TAB 3: DAILY HISAB-KITAB / CASHBOOK --- */}
      {activeTab === 'cashbook' && (
        <div className="space-y-5">
          
          {/* Summary Stat Strips */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] shadow-2xs">
              <span className="text-[11px] font-semibold text-[#78716C] block">
                {t.toolkit.cashbook.todayBalance}
              </span>
              <span className={`text-xl font-bold font-mono mt-1 block ${netCashInHand >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                ₹{netCashInHand}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] shadow-2xs">
              <span className="text-[11px] font-semibold text-[#78716C] block">
                {t.toolkit.cashbook.totalIncome}
              </span>
              <span className="text-xl font-bold font-mono text-emerald-700 mt-1 block">
                +₹{totalIncome}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] shadow-2xs">
              <span className="text-[11px] font-semibold text-[#78716C] block">
                {t.toolkit.cashbook.totalExpense}
              </span>
              <span className="text-xl font-bold font-mono text-rose-700 mt-1 block">
                -₹{totalExpense}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] shadow-2xs">
              <span className="text-[11px] font-semibold text-[#78716C] block">
                {t.toolkit.cashbook.totalCredit}
              </span>
              <span className="text-xl font-bold font-mono text-amber-700 mt-1 block">
                ₹{totalPendingCredit}
              </span>
            </div>
          </div>

          {/* Quick Entry Form */}
          <form onSubmit={handleAddEntry} className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DFD3] shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-3">
              {t.toolkit.cashbook.addEntry}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              {/* Type Switcher */}
              <div className="sm:col-span-3">
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">प्रकार</label>
                <select
                  value={newEntry.type}
                  onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value as any })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-semibold"
                >
                  <option value="income">{t.toolkit.cashbook.typeIncome}</option>
                  <option value="expense">{t.toolkit.cashbook.typeExpense}</option>
                  <option value="credit">{t.toolkit.cashbook.typeCredit}</option>
                </select>
              </div>

              {/* Party Name */}
              <div className="sm:col-span-3">
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                  {t.toolkit.cashbook.partyName}
                </label>
                <input
                  type="text"
                  required
                  value={newEntry.partyName}
                  onChange={(e) => setNewEntry({ ...newEntry, partyName: e.target.value })}
                  placeholder="उदा. सुनीता ताई"
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs"
                />
              </div>

              {/* Amount */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                  {t.toolkit.cashbook.amount}
                </label>
                <input
                  type="number"
                  required
                  value={newEntry.amount}
                  onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
                  placeholder="₹ 0"
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs font-bold"
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-3">
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                  {t.toolkit.cashbook.description}
                </label>
                <input
                  type="text"
                  value={newEntry.description}
                  onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                  placeholder="उदा. ५ किलो पापड"
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-1">
                <button
                  type="submit"
                  className="w-full py-2 bg-[#C85A32] hover:bg-[#B54E28] text-white rounded-lg text-xs font-bold flex items-center justify-center shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Transactions Ledger Table */}
          <div className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-2xs">
            <div className="divide-y divide-[#E8DFD3]">
              {entries.map((entry) => {
                const isIncome = entry.type === 'income';
                const isExpense = entry.type === 'expense';
                const isCredit = entry.type === 'credit';

                return (
                  <div key={entry.id} className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-[#FAF7F2]/60">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs sm:text-sm text-[#292524] truncate">
                          {entry.partyName}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                            isIncome
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : isExpense
                              ? 'bg-rose-50 text-rose-800 border border-rose-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {isIncome ? 'जमा (विक्री)' : isExpense ? 'खर्च' : 'उधारी (Credit)'}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#78716C] mt-0.5 truncate">
                        {entry.description || '-'} · {entry.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`font-mono font-bold text-sm ${
                          isIncome
                            ? 'text-emerald-700'
                            : isExpense
                            ? 'text-rose-700'
                            : 'text-amber-700'
                        }`}
                      >
                        {isIncome ? '+' : isExpense ? '-' : ''}₹{entry.amount}
                      </span>

                      {/* If credit and unpaid, show quick collect button */}
                      {isCredit && !entry.isPaid && (
                        <button
                          onClick={() => handleMarkCreditPaid(entry.id)}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[10px] font-semibold shadow-2xs"
                        >
                          {t.toolkit.cashbook.markPaid}
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="text-[#A8A29E] hover:text-rose-600 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* --- TAB 4: GOVT SCHEMES EXPLORER --- */}
      {activeTab === 'schemes' && (
        <div className="space-y-5">
          {/* Search & Filter */}
          <div className="bg-white p-4 rounded-xl border border-[#E8DFD3] flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-2.5" />
              <input
                type="text"
                value={schemeSearch}
                onChange={(e) => setSchemeSearch(e.target.value)}
                placeholder={t.toolkit.schemes.searchPlaceholder}
                className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="sm:w-56">
              <select
                value={schemeFilter}
                onChange={(e) => setSchemeFilter(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D6CEBE] rounded-lg text-xs text-[#292524]"
              >
                <option value="all">सर्व योजना (All)</option>
                <option value="gruh-udyog">गृह उद्योग व बचत गट (SHG)</option>
                <option value="food">खाद्यपदार्थ व केटरिंग (Food)</option>
              </select>
            </div>
          </div>

          {/* Schemes Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredSchemes.map((sch) => (
              <div
                key={sch.id}
                className="bg-white rounded-2xl border border-[#E8DFD3] p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base text-[#292524]">
                      {sch.name[currentLang]}
                    </h3>
                  </div>

                  <span className="text-xs text-[#C85A32] font-semibold mt-1 block">
                    {sch.sponsor}
                  </span>

                  <div className="grid grid-cols-2 gap-2 my-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD3] text-xs">
                    <div>
                      <span className="text-[10px] text-[#78716C] block">{t.toolkit.schemes.loanAmount}</span>
                      <span className="font-bold text-[#292524]">{sch.loanAmount}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716C] block">{t.toolkit.schemes.subsidy}</span>
                      <span className="font-bold text-emerald-700">{sch.subsidy}</span>
                    </div>
                  </div>

                  {/* Documents & Eligibility */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-[#44403C] block mb-1">
                        {t.toolkit.schemes.eligibility}:
                      </span>
                      <ul className="space-y-1 text-[#57534E]">
                        {sch.eligibility[currentLang].map((el, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#C85A32]">•</span>
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-[#E8DFD3]">
                      <span className="font-bold text-[#44403C] block mb-1">
                        {t.toolkit.schemes.howToApply}:
                      </span>
                      <p className="text-[11px] text-[#78716C] leading-snug">
                        {sch.contactOffice[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DFD3]">
                  <button
                    onClick={() => {
                      const msg = `${sch.name[currentLang]}. कर्ज मर्यादा: ${sch.loanAmount}. अनुदान: ${sch.subsidy}. अर्ज कुठे करावा: ${sch.contactOffice[currentLang]}`;
                      speakText(msg, currentLang);
                    }}
                    className="w-full py-2 px-3 bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#D6CEBE] rounded-xl text-xs font-semibold text-[#292524] flex items-center justify-center gap-1.5"
                  >
                    <span>माहिती ऐका (Listen)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
