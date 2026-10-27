import { GovtScheme } from '../types';

export const GOVT_SCHEMES_DATA: GovtScheme[] = [
  {
    id: 'sch-1',
    name: {
      mr: 'प्रधानमंत्री मुद्रा योजना (PMMY) - महिला विशेष',
      hi: 'प्रधानमंत्री मुद्रा योजना (PMMY) - महिला विशेष',
      en: 'Pradhan Mantri MUDRA Yojana (PMMY) for Women',
    },
    sponsor: 'भारत सरकार (Govt of India) / राष्ट्रीयकृत बँका',
    loanAmount: '₹५०,००० ते ₹१० लाख',
    subsidy: 'विना गॅरंटी कर्ज, महिलांसाठी ०.२५% व्याज सवलत',
    category: 'all',
    eligibility: {
      mr: [
        '१८ वर्षे पूर्ण असलेली कोणतीही महिला उद्योजिका.',
        'कोणत्याही बँकेची थकबाकी नसलेली (स्वच्छ CIBIL).',
        'लहान व्यवसाय, दुकान, शिलाई किंवा उत्पादक उद्योग करणारी.'
      ],
      hi: [
        '18 वर्ष से अधिक आयु की महिला उद्यमी।',
        'किसी भी बैंक का पुराना कर्ज बकाया न हो।',
        'विनिर्माण, व्यापार या सेवा क्षेत्र का व्यवसाय।'
      ],
      en: [
        'Any woman entrepreneur aged 18 and above.',
        'No prior loan default history.',
        'Micro or small enterprise in manufacturing, service or trading.'
      ]
    },
    benefits: {
      mr: [
        'शिशू कर्ज: ₹५०,००० पर्यंत विनातारण.',
        'किशोर कर्ज: ₹५०,००० ते ₹५ लाख मशिनरीसाठी.',
        'तरुण कर्ज: ₹५ लाख ते ₹१० लाख विस्तारासाठी.'
      ],
      hi: [
        'शिशु: ₹50,000 तक बिना गारंटी।',
        'किशोर: ₹50,000 से ₹5 लाख तक मशीनरी हेतु।',
        'तरुण: ₹5 लाख से ₹10 लाख तक विस्तार हेतु।'
      ],
      en: [
        'Shishu Category: Loans up to ₹50,000 for startup capital.',
        'Kishore Category: Loans from ₹50,000 to ₹5 Lakhs for equipment.',
        'Tarun Category: Loans up to ₹10 Lakhs for enterprise scaling.'
      ]
    },
    documentsRequired: {
      mr: ['आधार कार्ड व पॅन कार्ड', 'बँक पासबुक ६ महिन्यांची प्रत', 'दुकान/जागेचा पत्ता पुरावा', 'यंत्रसामग्री कोटेशन'],
      hi: ['आधार व पैन कार्ड', '6 माह का बैंक स्टेटमेंट', 'दुकान का पता प्रमाण', 'मशीनरी कोटेशन'],
      en: ['Aadhaar Card & PAN Card', '6 months bank statement', 'Address proof of shop/home', 'Machinery quotation']
    },
    contactOffice: {
      mr: 'जवळची राष्ट्रीयकृत बँक (Bank of Maharashtra, SBI) किंवा udyamimitra.in',
      hi: 'नजदीकी बैंक शाखा या udyamimitra.in',
      en: 'Nearest public bank branch or udyamimitra.in'
    }
  },
  {
    id: 'sch-2',
    name: {
      mr: 'अन्नपूर्णा योजना (खाद्य, टिफिन व केटरिंग उद्योग)',
      hi: 'अन्नपूर्णा योजना (कैटरिंग व टिफिन सेवा)',
      en: 'Annapurna Scheme for Food & Catering Enterprises',
    },
    sponsor: 'स्टेट बँक ऑफ इंडिया व संलग्न बँका',
    loanAmount: '₹५०,००० पर्यंत',
    subsidy: '३६ महिने सुलभ हप्ते, पहिल्या महिन्याची ईएमआय सवलत',
    category: 'food',
    eligibility: {
      mr: [
        'डबा/टिफिन सर्व्हिस, हॉटेल, खाणावळ, पापड-लोणची व्यवसाय करणाऱ्या महिला.',
        'भांडी, गॅस स्टोव्ह, मिक्सर व अन्न साठवणूक साहित्य खरेदीसाठी.'
      ],
      hi: [
        'टिफिन, कैटरिंग, नाश्ता केंद्र, पापड़-अचार का काम करने वाली महिलाएं।',
        'रसोई उपकरण, बर्तन व गैस कनेक्शन खरीदने के लिए।'
      ],
      en: [
        'Women running catering, tiffin services, food stalls, or homemade packaged snacks.',
        'Utilized for purchasing commercial utensils, gas connections, and refrigerators.'
      ]
    },
    benefits: {
      mr: ['कमी व्याजदर आणि १ महिन्याची सवलत मुदत.', 'महिलांच्या नावाने त्वरित मंजुरी.'],
      hi: ['कम ब्याज दर और 3 वर्ष तक की आसान किस्तें।', 'महिलाओं के नाम पर त्वरित स्वीकृति।'],
      en: ['Concessional interest rate and flexible 36-month repayment tenure.']
    },
    documentsRequired: {
      mr: ['ओळख व पत्ता पुरावा', '२ पासपोर्ट फोटो', 'भांडी/साहित्य दरपत्रक'],
      hi: ['पहचान व पता प्रमाण', '2 पासपोर्ट फोटो', 'सामग्री कोटेशन'],
      en: ['Identity & residence proof', 'Two passport size photos', 'Appliance quotations']
    },
    contactOffice: {
      mr: 'स्टेट बँक ऑफ इंडिया (SBI) किंवा ग्रामीण बँक शाखा',
      hi: 'भारतीय स्टेट बैंक (SBI) या नजदीकी बैंक',
      en: 'State Bank of India (SBI) or regional cooperative bank'
    }
  },
  {
    id: 'sch-3',
    name: {
      mr: 'उद्योगिनी योजना (महिला उद्योजकता ३०% अनुदान)',
      hi: 'उद्योगिनी योजना (महिला उद्यमिता 30% सब्सिडी)',
      en: 'Udyogini Scheme with 30% Capital Subsidy',
    },
    sponsor: 'महिला विकास महामंडळ व बँका',
    loanAmount: '₹३ लाखांपर्यंत',
    subsidy: '३०% थेट शासकीय भांडवली अनुदान (कमाल ₹९०,०००)',
    category: 'all',
    eligibility: {
      mr: ['वय १८ ते ५५ वर्षे.', 'कुटुंबाचे वार्षिक उत्पन्न ₹१.५ लाखांपेक्षा कमी.', '८८ मान्यताप्राप्त कुटीर उद्योगांसाठी.'],
      hi: ['आयु 18 से 55 वर्ष।', 'पारिवारिक आय सीमा ₹1.5 लाख से कम।', '88 मान्यता प्राप्त कुटीर व्यवसायों हेतु।'],
      en: ['Women aged between 18 to 55 years.', 'Family income within prescribed threshold.', 'Covers 88 designated rural trades.']
    },
    benefits: {
      mr: ['३०% थेट शासकीय अनुदान.', 'मध्यस्थ विरहीत थेट बँक खात्यात मदत.'],
      hi: ['30% तक सरकारी सब्सिडी मिलने से लोन चुकाना बेहद आसान।'],
      en: ['Up to 30% direct capital subsidy credited to reduce loan repayment.']
    },
    documentsRequired: {
      mr: ['तहसीलदारांचा उत्पन्नाचा दाखला', 'आधार कार्ड, रेशन कार्ड', 'प्रकल्प अंदाज अहवाल'],
      hi: ['तहसीलदार आय प्रमाण पत्र', 'आधार व राशन कार्ड', 'बिजनेस प्रोजेक्ट रिपोर्ट'],
      en: ['Income certificate from Tehsildar', 'Aadhaar & Ration card', 'Project estimate report']
    },
    contactOffice: {
      mr: 'तालुका पंचायत समिती / जिल्हा उद्योग केंद्र (DIC) कार्यालय',
      hi: 'तालुका पंचायत समिति / जिला उद्योग केंद्र (DIC)',
      en: 'Taluka Panchayat Samiti / District Industries Centre (DIC)'
    }
  },
  {
    id: 'sch-4',
    name: {
      mr: 'उमेद - महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियान (MSRLM)',
      hi: 'उमेद - महाराष्ट्र राज्य ग्रामीण आजीविका मिशन (MSRLM)',
      en: 'UMED - Maharashtra State Rural Livelihoods Mission',
    },
    sponsor: 'महाराष्ट्र शासन ग्रामविकास विभाग',
    loanAmount: '₹५ लाख ते ₹२० लाख (बचत गट)',
    subsidy: 'केवळ ४% ते ७% नाममात्र व्याजदर (व्याज परतावा अनुदान)',
    category: 'gruh-udyog',
    eligibility: {
      mr: ['गावातील नोंदणीकृत महिला बचत गटातील सक्रिय सदस्य.', 'नियमित पंचसूत्रीचे पालन करणारे गट.'],
      hi: ['पंजीकृत महिला स्वयं सहायता समूह की सक्रिय सदस्य।', 'नियमित बैठकों और बचत का रिकॉर्ड।'],
      en: ['Active members of a registered Self-Help Group (SHG) under Umed.', 'Groups adhering to Panchasutri.']
    },
    benefits: {
      mr: ['फिरता निधी ₹१५,००० मोफत अनुदान.', 'सामुदायिक गुंतवणूक निधी ₹१.५ लाख थेट गटाला.', 'महालक्ष्मी सरस प्रदर्शनात मोफत स्टॉल!'],
      hi: ['रिवॉल्विंग फंड ₹15,000 व निवेश कोष ₹1.5 लाख।', 'प्रदर्शनियों में फ्री स्टॉल की सुविधा।'],
      en: ['Revolving fund grant + Community Investment Fund.', 'Free marketing stalls at Mahalaxmi Saras and district fairs.']
    },
    documentsRequired: {
      mr: ['बचत गट ठराव वही प्रत', 'बचत गट बँक पासबुक प्रत', 'सदस्यांचे आधार कार्ड'],
      hi: ['समूह बैठक प्रस्ताव रजिस्टर', 'समूह पासबुक', 'सदस्यों के आधार कार्ड'],
      en: ['SHG Resolution copy', 'SHG Bank passbook', 'Members Aadhaar cards']
    },
    contactOffice: {
      mr: 'ग्रामपंचायत प्रभाग समन्वयक (CRP) किंवा तालुका अभियान व्यवस्थापक, पंचायत समिती',
      hi: 'ग्राम पंचायत प्रभाग समन्वयक (CRP) अथवा ब्लॉक मिशन मैनेजर',
      en: 'Village CRP or Block Mission Manager at Panchayat Samiti'
    }
  }
];
