// Type definitions for Art History data

export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface ArtHistoryCard {
  type: 'intro' | 'concept' | 'example' | 'quiz';
  title?: string;
  content?: string;
  question?: string;
  options?: QuizOption[];
  explanation?: string;
  visual?: {
    svg: string;
  };
}

export interface ArtHistoryLesson {
  id: number;
  title: string;
  duration: number;
  completed: boolean;
  cards: ArtHistoryCard[];
}

export interface ArtHistoryBook {
  id: string;
  title: string;
  author: string;
  description: string;
  lessons: number;
  duration: number;
  progress: number;
  category: string;
  featured: boolean;
  lessonList: ArtHistoryLesson[];
}

export interface ArtHistoryCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  books: ArtHistoryBook[];
}
