export interface User {
  id: string;
  email: string;
  username: string;
  created_at: string;
}

export interface CyberTerm {
  id: string;
  title: string;
  definition: string;
  description: string;
  examples: string[];
  prevention: string[];
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
}

export interface QuizResult {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  category_scores: Record<string, { correct: number; total: number }>;
  completed_at: string;
  time_taken: number;
}

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  video_url: string;
  category: string;
  duration: string;
  summary: string;
  key_points: string[];
}

export interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}