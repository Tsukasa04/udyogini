export type Language = 'mr' | 'hi' | 'en';

export interface UserProfile {
  name: string;
  phone: string;
  district: string;
  village: string;
  businessType: string;
  businessStage: 'planning' | 'started' | 'expanding';
  language: Language;
  registered: boolean;
  avatarUrl?: string;
}

export interface QuizQuestion {
  id: string;
  question: {
    mr: string;
    hi: string;
    en: string;
  };
  options: {
    id: string;
    text: {
      mr: string;
      hi: string;
      en: string;
    };
  }[];
  correctAnswerId: string;
  explanation: {
    mr: string;
    hi: string;
    en: string;
  };
}

export interface CourseLesson {
  id: string;
  title: {
    mr: string;
    hi: string;
    en: string;
  };
  duration: string;
  content: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  practicalTips: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  activityType?: 'upi-sim' | 'catalog-sim' | 'photo-sim' | 'none';
}

export interface CourseModule {
  id: string;
  title: {
    mr: string;
    hi: string;
    en: string;
  };
  category: 'digital-basics' | 'internet' | 'payments' | 'social-marketing' | 'promotion' | 'entrepreneurship';
  description: {
    mr: string;
    hi: string;
    en: string;
  };
  iconName: string;
  lessons: CourseLesson[];
  quiz: QuizQuestion[];
}

export interface Mentor {
  id: string;
  name: string;
  photoUrl: string;
  role: {
    mr: string;
    hi: string;
    en: string;
  };
  district: string;
  languages: string[];
  specialty: 'finance' | 'fssai_food' | 'marketing' | 'textiles' | 'agro';
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  about: {
    mr: string;
    hi: string;
    en: string;
  };
  availability: {
    mr: string;
    hi: string;
    en: string;
  };
  badges: string[];
}

export interface MentorshipRequest {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorRole: string;
  topic: string;
  mode: 'call' | 'whatsapp' | 'meeting';
  status: 'pending' | 'accepted' | 'completed';
  date: string;
  timeSlot: string;
  notes: string;
  unreadCount?: number;
}

export interface CashbookEntry {
  id: string;
  date: string;
  type: 'income' | 'expense' | 'credit'; // credit = udhaar
  partyName: string;
  amount: number;
  description: string;
  isPaid?: boolean;
}

export interface GovtScheme {
  id: string;
  name: {
    mr: string;
    hi: string;
    en: string;
  };
  sponsor: string;
  loanAmount: string;
  subsidy: string;
  category: 'gruh-udyog' | 'all' | 'food' | 'handicrafts' | 'manufacturing';
  eligibility: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  benefits: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  documentsRequired: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  contactOffice: {
    mr: string;
    hi: string;
    en: string;
  };
}
