// TypeScript interfaces for the IELTS Course API

export interface Medium {
  id: number;
  title: string;
  type: 'video' | 'image';
  url: string;
  thumbnail?: string;
  duration?: string;
}

export interface Checklist {
  id: number;
  title: string;
  description?: string;
  icon?: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export interface CtaText {
  primary: string;
  secondary?: string;
}

export interface SectionContent {
  title?: string;
  description?: string;
  html?: string;
  items?: string[];
  image?: string;
}

export interface Instructor {
  id: number;
  name: string;
  bio: string;
  credentials: string;
  image: string;
  rating?: number;
}

export interface Section {
  id: number;
  type: 'instructor' | 'features' | 'pointers' | 'about' | 'exclusive';
  title: string;
  content: SectionContent;
  instructors?: Instructor[];
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface ApiResponse {
  data: CourseData;
  success: boolean;
  message?: string;
}