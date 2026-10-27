import { CourseModule } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'mod-1',
    category: 'digital-basics',
    iconName: 'Smartphone',
    title: {
      mr: '१. मूलभूत डिजिटल कौशल्ये आणि फोन हाताळणी',
      hi: '1. बुनियादी डिजिटल कौशल और फोन का सही उपयोग',
      en: '1. Basic Digital Skills & Smartphone Essentials',
    },
    description: {
      mr: 'स्मार्टफोनचे मुख्य भाग, बोलून मराठीत टाईप करणे, संपर्क सेव्ह करणे आणि फोन फास्ट ठेवणे.',
      hi: 'स्मार्टफोन के मुख्य बटन, बोलकर टाइप करना, संपर्क सुरक्षित रखना और फोन स्टोरेज संभालना।',
      en: 'Phone navigation buttons, Gboard voice typing in regional languages, contacts backup, and phone maintenance.',
    },
    lessons: [
      {
        id: 'les-1-1',
        title: {
          mr: 'फोनमधील महत्त्वाचे पर्याय व आवाज नियंत्रण',
          hi: 'फोन के मुख्य बटन और आवाज नियंत्रण',
          en: 'Key Phone Controls & Screen Gestures',
        },
        duration: '5 min',
        content: {
          mr: [
            'स्मार्टफोनमध्ये खाली ३ मुख्य चिन्हे असतात: होम (मध्यभागी गोल/चौकोन), बॅक (मागे जाण्यासाठी बाण), आणि रिसेंट ॲप्स (चालू ॲप्स बंद करण्यासाठी).',
            'स्क्रीनवर दोन बोटांनी झूम करून लहान अक्षरे किंवा फोटो मोठे करून वाचता येतात.',
            'मोबाईलचा प्रकाश (Brightness) आणि आवाज (Volume) नियंत्रित करण्यासाठी स्क्रीन वरून खाली ओढावी (Notification bar).'
          ],
          hi: [
            'स्मार्टफोन में नीचे 3 मुख्य बटन होते हैं: होम (मुख्य स्क्रीन), बैक (पीछे जाने का तीर), और हालिया ऐप्स (Recent Apps)।',
            'स्क्रीन पर दो उंगलियों से ज़ूम करके छोटे अक्षर या फोटो बड़े करके आसानी से पढ़े जा सकते हैं।',
            'फोन की रोशनी और आवाज को ऊपर से नीचे स्वाइप करके तुरंत बदला जा सकता है।'
          ],
          en: [
            'Smartphones feature 3 main navigation controls: Home button, Back button, and Recent Apps switch.',
            'Pinch to zoom with two fingers to easily enlarge small product photos or bills.',
            'Swipe down from the top to toggle Wi-Fi, Mobile Data, Flashlight, and Brightness.'
          ]
        },
        practicalTips: {
          mr: [
            'रात्री किंवा दुकानात काम करताना डोळ्यांवर ताण येऊ नये म्हणून फोनमध्ये "Dark Mode" किंवा "Eye Comfort" सुरू ठेवा.',
            'स्क्रीन बंद होण्याचा वेळ (Screen timeout) १ ते २ मिनिटे सेट करा जेणेकरून वाचताना सारखा फोन बंद होणार नाही.'
          ],
          hi: [
            'आंखों पर जोर न पड़े इसके लिए फोन में "Eye Comfort Shield" चालू रखें।',
            'स्क्रीन टाइमआउट 2 मिनट सेट करें ताकि पढ़ते समय स्क्रीन बार-बार लॉक न हो।'
          ],
          en: [
            'Set your screen timeout to 2 minutes so your screen remains awake while checking orders.',
            'Use Eye Comfort mode during night accounting work to reduce eye strain.'
          ]
        }
      },
      {
        id: 'les-1-2',
        title: {
          mr: 'गुगल व्हॉईस टायपिंग - न लिहिता बोलून मेसेज पाठवणे',
          hi: 'गूगल वॉइस टाइपिंग - बिना लिखे बोलकर मैसेज भेजना',
          en: 'Google Voice Typing - Talk to Type in Your Language',
        },
        duration: '6 min',
        content: {
          mr: [
            'कीबोर्डवर लहान मायक्रोफोनचे (माईक) चिन्ह असते. त्यावर एकदा दाबून तुम्ही मराठीत बोलल्यास फोन आपोआप मराठीत लिहून घेतो!',
            'यामुळे ग्राहकांना उत्पादनांची नावे, दर आणि उत्तरे देणे खूप सोपे व जलद होते.',
            'स्पष्ट आणि शांत आवाजात बोला. वाक्य पूर्ण झाल्यावर माईक पुन्हा बंद करा.'
          ],
          hi: [
            'कीबोर्ड पर छोटे माइक आइकन को दबाकर आप अपनी भाषा में बोल सकते हैं और फोन खुद लिख देगा।',
            'इससे ग्राहकों को संदेश भेजना या बिल का विवरण लिखना बहुत तेज और आसान हो जाता है।',
            'शांत जगह पर साफ आवाज में बोलें। वाक्य पूरा होने पर माइक फिर से दबाएं।'
          ],
          en: [
            'Tap the small microphone icon on your Gboard keyboard to speak your message naturally in Marathi or Hindi.',
            'Voice typing saves time when sending product descriptions, prices, and greetings to customers.',
            'Speak clearly at a normal conversational pace for 100% accurate transcription.'
          ]
        },
        practicalTips: {
          mr: [
            'कीबोर्ड सेटिंगमध्ये जावून "मराठी (Marathi)" भाषा जोडून घ्या.',
            'मोबाईल नंबर सांगताना एकेक अंक स्पष्ट उच्चारा.'
          ],
          hi: [
            'कीबोर्ड सेटिंग्स में अपनी पसंदीदा भाषा हिंदी या मराठी जोड़ें।',
            'संख्याएं बोलते समय एक-एक अंक स्पष्ट बोलें।'
          ],
          en: [
            'Ensure your primary keyboard language includes Marathi or Hindi in device settings.',
            'Dictate phone numbers and order numbers digit by digit for accuracy.'
          ]
        }
      }
    ],
    quiz: [
      {
        id: 'q-1',
        question: {
          mr: 'मोबाईल कीबोर्डवर न लिहिता बोलून मराठीत मेसेज टाईप करण्यासाठी कोणत्या चिन्हाचा वापर करावा?',
          hi: 'मोबाइल कीबोर्ड पर बिना लिखे बोलकर मैसेज टाइप करने के लिए किस आइकन का उपयोग किया जाता है?',
          en: 'Which icon on the smartphone keyboard is used to speak and type text without manual typing?'
        },
        options: [
          { id: 'opt-a', text: { mr: 'मायक्रोफोन (माईक) चिन्ह', hi: 'माइक्रोफोन (माइक) का चिह्न', en: 'Microphone (Mic) icon' } },
          { id: 'opt-b', text: { mr: 'कॅमेरा चिन्ह', hi: 'कैमरा चिह्न', en: 'Camera icon' } },
          { id: 'opt-c', text: { mr: 'ब्लूटूथ चिन्ह', hi: 'ब्लूटूथ चिह्न', en: 'Bluetooth icon' } }
        ],
        correctAnswerId: 'opt-a',
        explanation: {
          mr: 'बरोबर! कीबोर्डवरील माईक चिन्ह दाबून बोलल्यास फोन आपल्या बोलण्यानुसार अचूक मराठी किंवा हिंदीमध्ये टाईप करतो.',
          hi: 'सही! कीबोर्ड पर माइक आइकन दबाकर बोलने से फोन तुरंत आपकी भाषा में लिख देता है।',
          en: 'Correct! Tapping the microphone icon activates speech-to-text voice typing in your chosen regional language.'
        }
      }
    ]
  },
  {
    id: 'mod-2',
    category: 'internet',
    iconName: 'Globe',
    title: {
      mr: '२. स्मार्टफोन आणि इंटरनेटचा सुरक्षित वापर व सायबर सुरक्षा',
      hi: '2. स्मार्टफोन और इंटरनेट का सुरक्षित उपयोग और साइबर सुरक्षा',
      en: '2. Safe Internet Browsing, Google Search & Fraud Prevention',
    },
    description: {
      mr: 'इंटरनेटवर बाजारभाव शोधणे, गुगल लेन्सने वाचणे आणि लॉटरी/ओटीपी फसवणूक ओळखणे.',
      hi: 'इंटरनेट पर मंडी भाव खोजना, गूगल लेंस से अनुवाद करना और फर्जी कॉल व ओटीपी फ्रॉड से बचना।',
      en: 'Finding market rates online, using Google Lens for text translation, and recognizing phishing scams and lottery fraud.',
    },
    lessons: [
      {
        id: 'les-2-1',
        title: {
          mr: 'गुगल लेन्सचा वापर - इंग्रजी लेबलचे मराठीत भाषांतर',
          hi: 'गूगल लेंस का उपयोग - अंग्रेजी लेबल का तुरंत अनुवाद',
          en: 'Google Lens - Instant Label Translation & Price Checking',
        },
        duration: '7 min',
        content: {
          mr: [
            'कच्च्या मालाच्या पाकिटावर किंवा सरकारी अर्जावर इंग्रजी मजकूर असल्यास गुगल लेन्स कॅमेरा वापरून तो लगेच मराठीत वाचता येतो.',
            'गुगल सर्च बारमधील कॅमेरा चिन्हावर (Google Lens) दाबा, पाकिटाचा फोटो घ्या आणि "Translate (भाषांतर)" वर क्लिक करा.',
            'तसेच एखाद्या वस्तूचा फोटो काढून बाजारात त्याचा सध्याचा काय दर सुरू आहे हेही गुगलवर शोधता येते.'
          ],
          hi: [
            'कच्चे माल के पैकेट या सरकारी फॉर्म पर अंग्रेजी लिखी हो तो गूगल लेंस से तुरंत अपनी भाषा में अनुवाद हो जाता है।',
            'गूगल सर्च बार में कैमरा आइकन पर टैप करें और फोटो खींचकर "Translate" पर क्लिक करें।',
            'किसी भी उत्पाद की तस्वीर खींचकर बाजार में उसकी मौजूदा कीमत का पता लगाया जा सकता है।'
          ],
          en: [
            'Use Google Lens to instantly translate English ingredient labels, packaging instructions, and government forms into Marathi.',
            'Open Google Search, tap the Camera icon, point at any document, and select Translate.',
            'You can also snap photos of products to discover wholesale suppliers and current market prices.'
          ]
        },
        practicalTips: {
          mr: [
            'बियाणे, खते किंवा अन्न प्रक्रिया रसायनांवरील अंतिम तारीख (Expiry Date) तपासण्यासाठी गुगल लेन्स अतिशय उपयुक्त आहे.'
          ],
          hi: [
            'सामग्री की एक्सपायरी डेट और उपयोग के निर्देश पढ़ने के लिए गूगल लेंस बहुत उपयोगी है।'
          ],
          en: [
            'Check manufacturing and expiry dates on wholesale packaging easily with Google Lens.'
          ]
        }
      },
      {
        id: 'les-2-2',
        title: {
          mr: 'सायबर सुरक्षा: फसव्या कॉल्स आणि ओटीपी चोरांपासून सावधान!',
          hi: 'साइबर सुरक्षा: फर्जी कॉल, लॉटरी और ओटीपी चोरी से बचाव',
          en: 'Cyber Safety: Preventing Phone Frauds & OTP Theft',
        },
        duration: '8 min',
        content: {
          mr: [
            'नियम १: बँक, सरकार किंवा कोणताही अधिकारी कधीही फोनवर तुमचा ओटीपी (OTP), बँक पासवर्ड किंवा एटीएम पिन मागत नाही.',
            'नियम २: "तुम्हाला २५ लाखांची लॉटरी लागली आहे" किंवा "वीज बिल न भरल्याने वीज खंडित होईल" अशा कोणत्याही मेसेजमधील लिंकवर क्लिक करू नका.',
            'नियम ३: अनोळखी व्यक्तीच्या सांगण्यावरून फोनमध्ये AnyDesk, TeamViewer किंवा RustDesk सारखे ॲप कधीही डाऊनलोड करू नका; यामुळे तुमचा पूर्ण फोन त्यांच्या हातात जातो!'
          ],
          hi: [
            'नियम 1: बैंक या सरकारी विभाग कभी भी फोन पर ओटीपी (OTP), पासवर्ड या पिन नहीं मांगते।',
            'नियम 2: "25 लाख की लॉटरी" या "बिजली कटने" वाले किसी भी संदिग्ध लिंक पर क्लिक न करें।',
            'नियम 3: किसी भी अज्ञात कॉलर के कहने पर एनीडेस्क (AnyDesk) या स्क्रीन शेयर ऐप डाउनलोड न करें।'
          ],
          en: [
            'Golden Rule 1: No official bank or government body will ever ask for your OTP, ATM PIN, or password over a phone call.',
            'Golden Rule 2: Never click on suspicious SMS links claiming lottery winnings, electric power disconnection, or free gifts.',
            'Golden Rule 3: Never install screen-sharing apps like AnyDesk on instruction from an unknown caller.'
          ]
        },
        practicalTips: {
          mr: [
            'कधीही संशय आल्यास त्वरित १९३० या राष्ट्रीय सायबर क्राईम हेल्पलाईनवर संपर्क साधा किंवा जवळच्या पोलीस ठाण्यात कळवा.'
          ],
          hi: [
            'धोखाधड़ी का संदेह होने पर तुरंत 1930 राष्ट्रीय साइबर हेल्पलाइन पर कॉल करें।'
          ],
          en: [
            'In case of any suspicious cyber transaction, immediately dial 1930 (National Cyber Crime Helpline).'
          ]
        }
      }
    ],
    quiz: [
      {
        id: 'q-2',
        question: {
          mr: 'एखाद्या अनोळखी व्यक्तीने फोन करून स्वतःला बँक मॅनेजर सांगितले आणि तुमच्या मोबाईलवर आलेला ओटीपी (OTP) मागितला, तर तुम्ही काय कराल?',
          hi: 'किसी अज्ञात कॉलर ने बैंक मैनेजर बनकर आपसे आपके मोबाइल पर आया ओटीपी (OTP) मांगा, तो आप क्या करेंगी?',
          en: 'If an unknown caller claiming to be a bank official asks for an OTP sent to your phone, what should you do?'
        },
        options: [
          { id: 'opt-a', text: { mr: 'कधीही ओटीपी देणार नाही आणि फोन कट करेन', hi: 'ओटीपी कभी नहीं दूंगी और फोन काट दूंगी', en: 'Never give the OTP and disconnect the call' } },
          { id: 'opt-b', text: { mr: 'लगेच ओटीपी सांगेन', hi: 'तुरंत ओटीपी बता दूंगी', en: 'Share the OTP immediately' } },
          { id: 'opt-c', text: { mr: 'नातेवाईकांना विचारून देईन', hi: 'रिश्तेदारों से पूछकर दूंगी', en: 'Ask neighbors and then share' } }
        ],
        correctAnswerId: 'opt-a',
        explanation: {
          mr: 'उत्तम! बँक कधीही ओटीपी मागत नाही. ओटीपी देणे म्हणजे स्वतःच्या खात्यातील पैसे चोरट्यांना देण्यासारखे आहे.',
          hi: 'शाबाश! बैंक कभी ओटीपी नहीं मांगता। ओटीपी साझा करने से खाते से पैसे कट सकते हैं।',
          en: 'Spot on! Never share OTP with anyone under any pretext. Banks never solicit OTPs.'
        }
      }
    ]
  },
  {
    id: 'mod-3',
    category: 'payments',
    iconName: 'CreditCard',
    title: {
      mr: '३. डिजिटल पेमेंट्स, युपीआय आणि ध्वनीपेटी (Soundbox)',
      hi: '3. डिजिटल पेमेंट, यूपीआई और साउंडबॉक्स की पूरी समझ',
      en: '3. Digital Payments, UPI & Soundbox Safety',
    },
    description: {
      mr: 'फोनपे/गुगल पे वापरणे, क्यूआर कोड कसा काम करतो आणि सर्वात महत्त्वाचे: पैसे घेण्यासाठी पिन कधीही टाकावा लागत नाही!',
      hi: 'फोनपे, गूगल पे, क्यूआर कोड और सबसे महत्वपूर्ण नियम: पैसे प्राप्त करने के लिए कभी पिन नहीं डालना होता!',
      en: 'Accepting UPI payments, setting up merchant QR codes, understanding Soundboxes, and essential fraud prevention rules.',
    },
    lessons: [
      {
        id: 'les-3-1',
        title: {
          mr: 'सुवर्ण नियम: पैसे घेण्यासाठी युपीआय पिन (UPI PIN) लागत नाही!',
          hi: 'स्वर्ण नियम: पैसे लेने के लिए यूपीआई पिन की जरूरत नहीं होती!',
          en: 'Golden Rule: You NEVER enter UPI PIN to receive money!',
        },
        duration: '6 min',
        activityType: 'upi-sim',
        content: {
          mr: [
            'ग्रामीण भागात महिलांची सर्वात मोठी फसवणूक यात होते: तोतया ग्राहक म्हणतो "मी तुम्हाला ५०० रुपये पाठवले आहेत, पैसे खात्यात जमा होण्यासाठी तुमचा यूपीआय पिन टाका".',
            'लक्षात ठेवा: यूपीआय पिन हा फक्त आणि फक्त तुमच्या खात्यातून पैसे **दुसऱ्याला पाठवताना** लागतो!',
            'जेव्हा कोणी तुम्हाला पैसे पाठवतो, तेव्हा ते आपोआप तुमच्या खात्यात जमा होतात. तुम्हाला कोणताही पिन टाकण्याची गरज नसते.'
          ],
          hi: [
            'सबसे बड़ी धोखाधड़ी तब होती है जब कोई कहता है: "मैंने आपको पैसे भेजे हैं, खाते में लेने के लिए अपना यूपीआई पिन डालें।"',
            'याद रखें: यूपीआई पिन केवल तब डाला जाता है जब आप अपने खाते से किसी को पैसे भेज रहे हों।',
            'जब कोई ग्राहक आपको पैसे भेजता है, तो रकम सीधे आपके खाते में जुड़ जाती है। आपको कोई पिन नहीं डालना पड़ता!'
          ],
          en: [
            'The number one scam targeting rural sellers is when a fraudster says: "I sent you money, enter your UPI PIN to accept it into your bank."',
            'Always remember: You ONLY enter your secret UPI PIN when money is LEAVING your account.',
            'When a customer pays you, the money lands directly in your bank account with an instant SMS/voice alert. You do NOT enter a PIN to receive.'
          ]
        },
        practicalTips: {
          mr: [
            'ग्राहकाने पैसे दिल्यावर केवळ स्क्रीनशॉट पाहू नका; तुमच्या स्वतःच्या फोनवर आलेला बँकेचा किंवा फोनपेचा अधिकृत मेसेज किंवा ध्वनीपेटीचा आवाज ऐका.'
          ],
          hi: [
            'केवल स्क्रीनशॉट न देखें; अपने फोन में बैंक का संदेश या साउंडबॉक्स की आवाज सुनकर ही सामान दें।'
          ],
          en: [
            'Never rely on a customer showing you a static screenshot; check your own phone notification or listen to your Soundbox.'
          ]
        }
      },
      {
        id: 'les-3-2',
        title: {
          mr: 'दुकानासाठी मोफत व्यापारी क्यूआर कोड (Merchant QR) व ध्वनीपेटी',
          hi: 'दुकान के लिए मर्चेंट क्यूआर कोड और साउंडबॉक्स',
          en: 'Free Business QR Code & Voice Soundbox Setup',
        },
        duration: '7 min',
        content: {
          mr: [
            'वैयक्तिक नंबरऐवजी गुगल पे फॉर बिझनेस (Google Pay for Business) किंवा फोनपे बिझनेस (PhonePe Business) वर मोफत क्यूआर कोड मिळवा.',
            'याचे फायदे: १) ग्राहकांना तुमचा वैयक्तिक नंबर दिसत नाही, २) व्यवसायाचे नाव बोर्डवर दिसते, ३) दररोजचे हिशोब ॲपमध्ये आपोआप नोंदवले जातात.',
            'ध्वनीपेटी (Soundbox) दुकानात असल्यास "PhonePe वर ₹२०० प्राप्त झाले" अशी मराठीत स्पष्ट घोषणा होते, त्यामुळे बनावट पेमेंटची भीती राहत नाही.'
          ],
          hi: [
            'व्यक्तिगत नंबर के बजाय PhonePe Business या Google Pay Business का फ्री मर्चेंट क्यूआर कोड लगाएं।',
            'फायदे: 1) ग्राहक को आपका व्यक्तिगत नंबर नहीं दिखता, 2) बोर्ड पर व्यवसाय का नाम दिखता है, 3) दैनिक बिक्री का अपने आप ब्योरा रहता है।',
            'साउंडबॉक्स लगाने से ग्राहक द्वारा पैसे भेजते ही स्थानीय भाषा में तुरंत आवाज आती है, जिससे नकली पेमेंट का खतरा खत्म हो जाता है।'
          ],
          en: [
            'Set up a merchant business QR code instead of using your personal phone number.',
            'Benefits: Protects your personal privacy, prints your shop name neatly on the counter, and automatically logs daily sales ledger.',
            'A voice Soundbox announces incoming payments aloud in Marathi immediately, eliminating fake payment screenshots.'
          ]
        },
        practicalTips: {
          mr: [
            'बचत गटातील महिला एकत्र येऊन सामायिक स्टॉलसाठी एकाच अधिकृत बँक खात्याचा क्यूआर वापरू शकतात.'
          ],
          hi: [
            'महिला समूह अपने साझा स्टॉल के लिए एक आधिकारिक बैंक खाते का क्यूआर कोड इस्तेमाल कर सकते हैं।'
          ],
          en: [
            'Self-help groups can link their joint SHG bank account to a single merchant QR code for village exhibitions.'
          ]
        }
      }
    ],
    quiz: [
      {
        id: 'q-3',
        question: {
          mr: 'एका ग्राहकाने तुमच्याकडून ५०० रुपयांचे लोणचे घेतले आणि म्हणाला: "पैसे खात्यात येण्यासाठी तुम्ही तुमचा यूपीआय पिन टाका". तुम्ही काय कराल?',
          hi: 'ग्राहक ने आपसे ₹500 का अचार लिया और कहा: "पैसे खाते में पाने के लिए आप अपना यूपीआई पिन डालें।" आप क्या करेंगी?',
          en: 'A customer bought ₹500 worth of pickles and told you: "Please enter your UPI PIN so the money reaches your account." What should you do?'
        },
        options: [
          { id: 'opt-a', text: { mr: 'पिन टाकणार नाही, कारण पैसे घेण्यासाठी कधीही पिन लागत नाही', hi: 'पिन नहीं डालूंगी, क्योंकि पैसे प्राप्त करने के लिए पिन नहीं लगता', en: 'Refuse to enter PIN, because receiving money never requires a PIN' } },
          { id: 'opt-b', text: { mr: 'लगेच पिन टाकेन', hi: 'तुरंत पिन डाल दूंगी', en: 'Enter my PIN immediately' } },
          { id: 'opt-c', text: { mr: 'दुकानदाराला पिन सांगेन', hi: 'दूसरे दुकानदार को पिन बता दूंगी', en: 'Tell PIN to a neighbor' } }
        ],
        correctAnswerId: 'opt-a',
        explanation: {
          mr: 'अगदी बरोबर! पैसे मिळवण्यासाठी कधीही पिन लागत नाही. पिन टाकला तर तुमच्या खात्यातून पैसे कट होतात.',
          hi: 'बिल्कुल सही! पैसे प्राप्त करने के लिए कभी पिन नहीं डालना होता। पिन डालने पर पैसे कट जाते हैं।',
          en: 'Exactly right! Entering a PIN authorizes money leaving your account. Receiving funds requires no PIN entry whatsoever.'
        }
      }
    ]
  },
  {
    id: 'mod-4',
    category: 'social-marketing',
    iconName: 'Share2',
    title: {
      mr: '४. व्हॉट्सॲप बिझनेस व सोशल मीडिया मार्केटिंग',
      hi: '4. व्हाट्सएप बिजनेस और सोशल मीडिया से ग्राहकों तक पहुंच',
      en: '4. WhatsApp Business & Social Media Marketing',
    },
    description: {
      mr: 'व्हॉट्सॲपवर उत्पादनांचे कॅटलॉग बनवणे, फेस्टिव्हल ऑफर्स पाठवणे आणि इन्स्टाग्रामवर फोटो शेअर करणे.',
      hi: 'व्हाट्सएप बिजनेस पर कैटलॉग बनाना, त्योहारों पर संदेश भेजना और इंस्टाग्राम पर फोटो पोस्ट करना।',
      en: 'Building a WhatsApp Business catalog, crafting festive broadcasts, and showcasing handmade products on social media.',
    },
    lessons: [
      {
        id: 'les-4-1',
        title: {
          mr: 'व्हॉट्सॲप बिझनेसवर उत्पादनांचे डिजिटल कॅटलॉग बनवणे',
          hi: 'व्हाट्सएप बिजनेस पर डिजिटल कैटलॉग बनाना',
          en: 'Creating a WhatsApp Business Digital Catalog',
        },
        duration: '8 min',
        activityType: 'catalog-sim',
        content: {
          mr: [
            'साध्या व्हॉट्सॲप ऐवजी मोफत "WhatsApp Business" ॲप वापरा. यामध्ये तुम्हाला व्यवसायाचे प्रोफाईल, कामाचे तास आणि कॅटलॉग बनवता येतो.',
            'कॅटलॉगमध्ये उत्पादनाचा सुंदर फोटो, त्याचे नाव (उदा. "गावरान हळद - २५० ग्रॅम"), किंमत आणि वजन स्पष्ट टाका.',
            'ग्राहकाने विचारल्यावर एका क्लिकवर पूर्ण कॅटलॉग पाठवता येतो. ग्राहकाला सर्व वस्तू आणि भाव एकाच जागी दिसतात.'
          ],
          hi: [
            'सामान्य व्हाट्सएप की जगह मुफ्त "WhatsApp Business" ऐप का उपयोग करें। इसमें बिजनेस प्रोफाइल और कैटलॉग की सुविधा मिलती है।',
            'कैटलॉग में उत्पाद की अच्छी फोटो, नाम (उदा. "देसी हल्दी - 250 ग्राम") और सही कीमत जोड़ें।',
            'ग्राहक द्वारा पूछते ही एक क्लिक में पूरा कैटलॉग भेजा जा सकता है।'
          ],
          en: [
            'Upgrade from standard WhatsApp to free WhatsApp Business for catalog showcases, business hours, and automated quick replies.',
            'Add crisp photos, clear item names (e.g. "Pure Stone-ground Turmeric - 250g"), pricing, and weight in the Catalog manager.',
            'Customers can browse your items, add them to a cart, and send an order directly within chat.'
          ]
        },
        practicalTips: {
          mr: [
            'कॅटलॉग लिंक कॉपी करून तुमच्या व्हॉट्सॲप स्टेटसवर ठेवा जेणेकरून ओळखीचे सर्व लोक त्यावर क्लिक करून वस्तू पाहू शकतील.'
          ],
          hi: [
            'कैटलॉग लिंक को अपने व्हाट्सएप स्टेटस पर लगाएं ताकि सभी लोग आसानी से उत्पाद देख सकें।'
          ],
          en: [
            'Share your catalog link on your WhatsApp Status and local housing society groups.'
          ]
        }
      },
      {
        id: 'les-4-2',
        title: {
          mr: 'सण-उत्सव आणि लग्नसराईसाठी ब्रॉडकास्ट मेसेज पाठवणे',
          hi: 'त्योहारों और शादियों के लिए ब्रॉडकास्ट मैसेज भेजना',
          en: 'Festive Broadcast Messages & Customer Engagement',
        },
        duration: '6 min',
        content: {
          mr: [
            'दिवाळी, मकर संक्रांत, गणेशोत्सव किंवा लग्नसराईच्या १५ दिवस आधी ग्राहकांना नवीन उत्पादनांची माहिती पाठवा.',
            'ग्रूप बनवण्याऐवजी "New Broadcast List" वापरा. यामुळे प्रत्येकाला वैयक्तिक मेसेज जातो आणि इतरांना एकमेकांचे नंबर दिसत नाहीत.',
            'मेसेजमध्ये नेहमी नम्र भाषा आणि ऑर्डर देण्याची शेवटची तारीख नमूद करा.'
          ],
          hi: [
            'त्योहारों से 15 दिन पहले ग्राहकों को नए उत्पाद और ऑफर की जानकारी भेजें।',
            'ग्रुप बनाने के बजाय "New Broadcast" का उपयोग करें ताकि हर ग्राहक को निजी मैसेज मिले और किसी का नंबर लीक न हो।',
            'संदेश में हमेशा आदरपूर्ण भाषा और बुकिंग की अंतिम तिथि लिखें।'
          ],
          en: [
            'Send seasonal advance previews 2 weeks ahead of Diwali, Sankranti, or wedding seasons.',
            'Always use "Broadcast Lists" rather than public groups to safeguard customer phone numbers and privacy.',
            'Include respectful greetings, clear delivery cutoff dates, and your UPI payment QR.'
          ]
        },
        practicalTips: {
          mr: [
            'उदा. "सस्नेह नमस्कार! दिवाळी फराळाच्या आगाऊ ऑर्डर्स सुरू झाल्या आहेत. शुद्ध तुपातील करंज्या व चविष्ट चकलीसाठी आजच संपर्क करा."'
          ],
          hi: [
            'उदा. "नमस्ते! दिवाली के विशेष फलाहार के ऑर्डर शुरू हो चुके हैं। शुद्ध घी की मिठाइयों के लिए आज ही ऑर्डर बुक करें।"'
          ],
          en: [
            'Example template: "Warm Greetings! Advance festive bookings for our homemade organic laddoos and snacks are now open. Order early for fresh festival delivery!"'
          ]
        }
      }
    ],
    quiz: [
      {
        id: 'q-4',
        question: {
          mr: 'ग्राहकांना वैयक्तिक मेसेज पाठवण्यासाठी आणि त्यांचा मोबाईल नंबर इतरांना दिसू नये यासाठी व्हॉट्सॲपवर काय वापरावे?',
          hi: 'ग्राहकों को व्यक्तिगत मैसेज भेजने और उनका नंबर गोपनीय रखने के लिए व्हाट्सएप पर क्या इस्तेमाल करना चाहिए?',
          en: 'To message multiple customers privately without exposing their numbers to each other, what WhatsApp feature should you use?'
        },
        options: [
          { id: 'opt-a', text: { mr: 'ब्रॉडकास्ट लिस्ट (Broadcast List)', hi: 'ब्रॉडकास्ट लिस्ट (Broadcast List)', en: 'Broadcast List' } },
          { id: 'opt-b', text: { mr: 'ओपन व्हॉट्सॲप ग्रुप (Open Group)', hi: 'ओपन व्हाट्सएप ग्रुप', en: 'Public Open Group' } },
          { id: 'opt-c', text: { mr: 'ब्लॉक लिस्ट', hi: 'ब्लॉक लिस्ट', en: 'Block List' } }
        ],
        correctAnswerId: 'opt-a',
        explanation: {
          mr: 'बरोबर! ब्रॉडकास्ट लिस्टमुळे एकाच वेळी अनेक ग्राहकांना खाजगीरीत्या मेसेज जातो आणि नंबर सुरक्षित राहतात.',
          hi: 'सही! ब्रॉडकास्ट लिस्ट से सभी को अलग-अलग व्यक्तिगत संदेश जाता है और गोपनीयता बनी रहती है।',
          en: 'Correct! Broadcast Lists deliver one-to-one individual chats, protecting everyone’s contact privacy.'
        }
      }
    ]
  },
  {
    id: 'mod-5',
    category: 'promotion',
    iconName: 'Megaphone',
    title: {
      mr: '५. ऑनलाइन व्यवसाय जाहिरात व डिजिटल प्रोफाईल तयार करणे',
      hi: '5. ऑनलाइन व्यापार प्रचार और गूगल बिजनेस प्रोफाइल',
      en: '5. Online Business Promotion & Local Google Discovery',
    },
    description: {
      mr: 'गुगल मॅपवर दुकान नोंदवणे, स्पष्ट फोटो काढणे, ग्राहक प्रतिक्रिया मिळवणे व डिजिटल कार्ड वाटणे.',
      hi: 'गूगल मैप पर दुकान जोड़ना, साफ फोटो खींचना, ग्राहक समीक्षाएं और डिजिटल कार्ड का उपयोग।',
      en: 'Adding your shop to Google Maps, product photography techniques, customer reviews, and digital business cards.',
    },
    lessons: [
      {
        id: 'les-5-1',
        title: {
          mr: 'गुगल मॅपवर आपल्या व्यवसायाचे नाव कसे आणावे (Google Business Profile)',
          hi: 'गूगल मैप पर अपनी दुकान या व्यवसाय कैसे जोड़ें',
          en: 'Listing Your Shop on Google Maps (Google Business Profile)',
        },
        duration: '7 min',
        content: {
          mr: [
            'जेव्हा शहरातून किंवा इतर गावातून लोक तुमच्या तालुक्यात येतात, तेव्हा ते गुगलवर "tailor near me" किंवा "homemade spices in Pune" असे शोधतात.',
            'गुगल बिझनेस प्रोफाईल पूर्णपणे मोफत असते. यात तुमच्या दुकानाचे नाव, गावाचा पत्ता, कामाचे तास आणि फोन नंबर नोंदवता येतो.',
            'समाधानी ग्राहकांना गुगलवर ५ स्टार रेटिंग आणि चांगली प्रतिक्रिया (Review) देण्याची विनंती करा.'
          ],
          hi: [
            'आसपास के लोग अक्सर गूगल पर "पापड़ दुकान" या "महिला बुटीक" खोजते हैं।',
            'गूगल बिजनेस प्रोफाइल पूरी तरह मुफ्त है। इसमें दुकान का नाम, समय, फोन नंबर और स्थान दर्ज करें।',
            'खुश ग्राहकों से गूगल पर 5-स्टार रेटिंग और अच्छी समीक्षा देने का अनुरोध करें।'
          ],
          en: [
            'Nearby travelers and local residents search Google for "homemade spices" or "best boutique nearby".',
            'Google Business Profile is 100% free to list your shop, location on Maps, operating hours, and contact details.',
            'Encourage delighted clients to leave 5-star ratings and written reviews with photos.'
          ]
        },
        practicalTips: {
          mr: [
            'दुकानाचा समोरून स्वच्छ बोर्ड असलेला फोटो आणि आतल्या सामानाचे २-३ फोटो गुगल प्रोफाईलवर नक्की अपलोड करा.'
          ],
          hi: [
            'दुकान के बोर्ड का साफ फोटो और सामान की 2-3 तस्वीरें जरूर अपलोड करें।'
          ],
          en: [
            'Upload a clear storefront exterior picture with the signboard and bright interior photos.'
          ]
        }
      },
      {
        id: 'les-5-2',
        title: {
          mr: 'उत्पादनांचे आकर्षक फोटो काढण्याचे ५ सोपे नियम',
          hi: 'उत्पाद की सुंदर तस्वीरें खींचने के 5 आसान नियम',
          en: '5 Simple Rules for High-Quality Product Photography',
        },
        duration: '6 min',
        activityType: 'photo-sim',
        content: {
          mr: [
            'नियम १: नेहमी नैसर्गिक सूर्यप्रकाशात फोटो काढा (खिडकीजवळ किंवा सकाळी उन्हात). फोनचा फ्लॅश वापरू नका.',
            'नियम २: कॅमेऱ्याची लेन्स मऊ कापडाने पुसून स्वच्छ करा. बऱ्याचदा बोटांच्या ठशांमुळे फोटो धुरकट येतो.',
            'नियम ३: मागे पांढरी किंवा स्वच्छ पार्श्वभूमी (उदा. पांढरा कागद किंवा लाकडी पाट) ठेवा.',
            'नियम ४: आकाराचा अंदाज येण्यासाठी शेजारी एक ओळखीची वस्तू (उदा. नाणे किंवा कप) ठेवा.',
            'नियम ५: फोटोसोबत नेहमी किंमत, वजन आणि ऑर्डर नंबर स्पष्ट लिहा.'
          ],
          hi: [
            'नियम 1: प्राकृतिक रोशनी (खिड़की के पास या सुबह) में फोटो लें। फ्लैश न चलाएं।',
            'नियम 2: कैमरे के लेंस को साफ कपड़े से पोंछ लें। उंगलियों के निशान से फोटो धुंधली हो जाती है।',
            'नियम 3: पीछे साफ सफेद या लकड़ी का बैकग्राउंड रखें।',
            'नियम 4: वजन और आकार स्पष्ट रूप से कैप्शन में लिखें।',
            'नियम 5: कीमत और संपर्क नंबर हमेशा फोटो के साथ लिखें।'
          ],
          en: [
            'Rule 1: Always photograph under natural morning daylight near a window; avoid harsh artificial flash.',
            'Rule 2: Wipe your smartphone camera lens gently with soft fabric before clicking to avoid blur.',
            'Rule 3: Use an uncluttered neutral background such as white handmade paper or rustic wood.',
            'Rule 4: Keep a familiar scale reference (like a small brass bowl or spoon) next to the jar.',
            'Rule 5: Always attach clear prices, weight tags, and your WhatsApp contact info.'
          ]
        },
        practicalTips: {
          mr: [
            'कधीही फोटो एडिट करताना रंगात खूप बदल करू नका; ग्राहकाला खरी वस्तू दिसायला हवी.'
          ],
          hi: [
            'तस्वीरों को ज्यादा एडिट न करें ताकि असली रंग ग्राहकों को दिखे।'
          ],
          en: [
            'Avoid heavy filters so customers receive the exact color and texture they see on screen.'
          ]
        }
      }
    ],
    quiz: [
      {
        id: 'q-5',
        question: {
          mr: 'उत्पादनाचा स्पष्ट व आकर्षक फोटो काढण्यासाठी खालीलपैकी सर्वात महत्त्वाची गोष्ट कोणती?',
          hi: 'उत्पाद की साफ और आकर्षक तस्वीर खींचने के लिए सबसे जरूरी क्या है?',
          en: 'What is the most important factor when clicking an attractive product photograph on a phone?'
        },
        options: [
          { id: 'opt-a', text: { mr: 'नैसर्गिक स्वच्छ सूर्यप्रकाश आणि कॅमेरा लेन्स पुसणे', hi: 'प्राकृतिक रोशनी और कैमरे का लेंस साफ करना', en: 'Natural soft daylight and a clean lens' } },
          { id: 'opt-b', text: { mr: 'अंधारात फोनचा कडक फ्लॅश मारणे', hi: 'अंधेरे में तेज फ्लैश चलाना', en: 'Harsh flash in the dark' } },
          { id: 'opt-c', text: { mr: 'अस्तव्यस्त खोलीत कसाही फोटो काढणे', hi: 'अस्त-व्यस्त जगह में फोटो खींचना', en: 'Cluttered room background' } }
        ],
        correctAnswerId: 'opt-a',
        explanation: {
          mr: 'अगदी बरोबर! नैसर्गिक प्रकाश आणि स्वच्छ लेन्समुळे फोटो व्यावसायिक दिसतो आणि ग्राहकांचा विश्वास वाढतो.',
          hi: 'बिल्कुल सही! प्राकृतिक रोशनी और साफ लेंस से उत्पाद असली और खूबसूरत दिखता है।',
          en: 'Spot on! Natural daylight paired with a wiped clean camera lens yields high-converting professional product photos.'
        }
      }
    ]
  },
  {
    id: 'mod-6',
    category: 'entrepreneurship',
    iconName: 'TrendingUp',
    title: {
      mr: '६. महिला उद्योजकता, नफा व्यवस्थापन व शासकीय योजना',
      hi: '6. महिला उद्यमिता, मुनाफा प्रबंधन व सरकारी योजनाएं',
      en: '6. Women Entrepreneurship, Profit Accounting & Govt Schemes',
    },
    description: {
      mr: 'खरा नफा कसा काढायचा, उधारी कशी टाळायची, आणि मुद्रा, अन्नपूर्णा, उद्योगिनी योजनांचा लाभ कसा घ्यायचा.',
      hi: 'असली मुनाफा निकालना, उधारी का प्रबंधन, और मुद्रा, अन्नपूर्णा, उद्योगिनी योजनाओं का लाभ।',
      en: 'Calculating true profit margins including labor, managing customer credit, and accessing government loan schemes.',
    },
    lessons: [
      {
        id: 'les-6-1',
        title: {
          mr: 'खरा नफा काढण्याचे सूत्र: स्वतःच्या श्रमाचे मूल्य जोडणे',
          hi: 'असली मुनाफा निकालने का सूत्र: अपनी मेहनत का मूल्य जोड़ना',
          en: 'True Profit Formula: Pricing Your Own Labor Hours',
        },
        duration: '8 min',
        content: {
          mr: [
            'अनेक ग्रामीण महिला म्हणतात "मी १०० रुपयांचे साहित्य आणले आणि १२० ला विकले, मला २० रुपये नफा झाला". हे चुकीचे आहे!',
            'तुम्ही ते बनवण्यासाठी स्वतःचे ३ तास दिले, गॅस/इंधन वापरले, आणि पिशवी दिली. हे खर्च जोडले नाहीत तर तुम्ही तोट्यात काम करताय.',
            'अचूक सूत्र: विक्री किंमत = कच्चा माल + स्वतःची मजुरी + इंधन/वाहतूक + पॅकिंग + ३०% निव्वळ नफा.'
          ],
          hi: [
            'कई महिलाएं केवल कच्चे माल का खर्च जोड़ती हैं और अपनी मेहनत भूल जाती हैं। यह गलत है!',
            'आपने उत्पाद बनाने में 3 घंटे मेहनत की, गैस और बिजली का उपयोग किया। इसका मूल्य भी लागत में जोड़ना जरूरी है।',
            'सही सूत्र: कुल लागत = कच्चा माल + अपनी मजदूरी + बिजली/ईंधन + पैकिंग + 30% शुद्ध मुनाफा।'
          ],
          en: [
            'Many rural artisans only count raw ingredients and forget their own 3-4 hours of labor, gas, and electricity.',
            'If you don’t pay yourself an honest hourly wage inside the product cost, the enterprise will never be sustainable.',
            'Correct formula: Selling Price = Raw Materials + Labor Hours + Fuel/Transport + Packaging + 30% Healthy Margin.'
          ]
        },
        practicalTips: {
          mr: [
            'स्वतःला कमीत कमी ताशी ₹५० ते ₹८० मजुरीचा दर गृहीत धरून उत्पादन खर्चात त्याचा समावेश करा.'
          ],
          hi: [
            'कम से कम ₹50 से ₹80 प्रति घंटे की मजदूरी उत्पादन लागत में अवश्य शामिल करें।'
          ],
          en: [
            'Factor in at least ₹50 to ₹80 per hour of your personal labor as a non-negotiable cost item.'
          ]
        }
      },
      {
        id: 'les-6-2',
        title: {
          mr: 'महाराष्ट्रातील महिलांसाठी प्रमुख शासकीय योजनांचा लाभ',
          hi: 'महाराष्ट्र में महिलाओं के लिए प्रमुख सरकारी योजनाओं का लाभ',
          en: 'Key Maharashtra & Central Schemes for Women Entrepreneurs',
        },
        duration: '9 min',
        content: {
          mr: [
            '१. प्रधानमंत्री मुद्रा योजना (MUDRA): शिशु कर्जात ₹५०,००० पर्यंत विनातारण कर्ज मिळते. यंत्रे खरेदीसाठी किशोर कर्जात ₹५ लाखांपर्यंत मिळते.',
            '२. अन्नपूर्णा योजना (Annapurna Scheme): खाद्यपदार्थ, डबा किंवा केटरिंग सुरू करण्यासाठी ₹५०,००० पर्यंत भांडवल व सवलतीचे व्याज.',
            '३. उद्योगिनी योजना (Udyogini): ग्रामीण महिलांना व्यवसाय सुरू करण्यासाठी ₹३ लाखांपर्यंत कर्ज आणि ३०% पर्यंत शासकीय अनुदान.',
            '४. उमेद / महिला बचत गट (MSRLM): बचत गटांच्या माध्यमातून ५ लाख ते १० लाखांचे खेळते भांडवल अत्यंत कमी व्याजदरात उपलब्ध.'
          ],
          hi: [
            '1. प्रधानमंत्री मुद्रा योजना: शिशु श्रेणी में ₹50,000 तक बिना किसी गारंटी के आसान ऋण।',
            '2. अन्नपूर्णा योजना: टिफिन, कैटरिंग व खाद्य व्यवसाय के लिए ₹50,000 तक का सस्ता कर्ज।',
            '3. उद्योगिनी योजना: ग्रामीण महिलाओं को व्यवसाय के लिए ₹3 लाख तक का ऋण और 30% तक सरकारी सब्सिडी।',
            '4. स्वयंसहायता समूह (SHG/उमेद): समूहों के माध्यम से कम ब्याज दर पर चक्रीय निधि और बैंक लिंकेज ऋण।'
          ],
          en: [
            '1. PM Mudra Yojana: Shishu loan provides up to ₹50,000 collateral-free loan for micro equipment and raw materials.',
            '2. Annapurna Scheme: Up to ₹50,000 specifically targeted for catering, snack stalls, and packaged foods.',
            '3. Udyogini Scheme: Up to ₹3 Lakh subsidized loan with up to 30% government capital subsidy for women.',
            '4. MSRLM (Umed) / SHG Bank Linkage: Low-interest revolving credit and CCL loans ranging from ₹5 to ₹10 Lakhs for self-help groups.'
          ]
        },
        practicalTips: {
          mr: [
            'कोणत्याही कर्जासाठी बँक खात्याचे ६ महिन्यांचे पासबुक आणि आधार-पॅन कार्ड नेहमी अपडेट ठेवा.'
          ],
          hi: [
            'लोन आवेदन के लिए 6 महीने का बैंक पासबुक और आधार कार्ड हमेशा तैयार रखें।'
          ],
          en: [
            'Maintain an active bank passbook with regular UPI or cash deposits to establish a clean credit trail.'
          ]
        }
      }
    ],
    quiz: [
      {
        id: 'q-6',
        question: {
          mr: 'उत्पादनाची योग्य विक्री किंमत ठरवताना खालीलपैकी काय जोडणे सर्वात महत्त्वाचे असते?',
          hi: 'उत्पाद की सही बिक्री कीमत तय करते समय सबसे जरूरी क्या जोड़ना चाहिए?',
          en: 'What critical element must be factored into the selling price along with raw materials?'
        },
        options: [
          { id: 'opt-a', text: { mr: 'स्वतःचे श्रम, पॅकिंग, वाहतूक आणि अपेक्षित नफा', hi: 'अपनी मेहनत, पैकिंग, परिवहन और उचित मुनाफा', en: 'Labor hours, packaging, electricity, and profit margin' } },
          { id: 'opt-b', text: { mr: 'केवळ कच्च्या मालाची किंमत', hi: 'केवल कच्चे माल की लागत', en: 'Only raw materials cost' } },
          { id: 'opt-c', text: { mr: 'शेजाऱ्यांनी सांगितलेली अंदाजे किंमत', hi: 'दूसरों की कही सुनी कीमत', en: 'Random guess based on neighbor' } }
        ],
        correctAnswerId: 'opt-a',
        explanation: {
          mr: 'उत्कृष्ट! स्वतःचे श्रम आणि पॅकिंग जोडल्याशिवाय कोणताही व्यवसाय दीर्घकाळ नफ्यात चालू शकत नाही.',
          hi: 'बधाई! अपनी मेहनत और लागत जोड़े बिना व्यवसाय लाभ में नहीं चल सकता।',
          en: 'Brilliant! Factoring in your own labor hours and packaging ensures genuine profitability.'
        }
      }
    ]
  }
];
