export interface Lesson {
  id: number;
  date: string;
  time: string;
  title: string;
  type: 'Вебинар' | 'Лекция' | 'Практика' | 'Созвон' | 'Карьера' | 'Защита';
  speaker: string;
  module: string;
  description?: string;
}

export interface Teacher {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  tag?: string;
}

export interface Review {
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
}

export interface IndustryQuote {
  author: string;
  role: string;
  company: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
