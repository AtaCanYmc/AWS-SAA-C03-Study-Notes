export interface QuestionOption {
  key: string;
  text: string;
}

export interface Question {
  id: string;
  module: string;
  moduleTitle: string;
  questionNumber: number;
  questionText: string;
  options: QuestionOption[];
  correctAnswers: string[];
  explanation: string;
  officialDocs: string[];
  services: string[];
  domain: string;
}

export type FilterStatus = 'all' | 'unanswered' | 'correct' | 'incorrect' | 'bookmarked';
