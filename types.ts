export type AppState = 'landing' | 'setup' | 'interview' | 'feedback' | 'loading' | 'error' | 'login' | 'signup' | 'resume_upload';

export interface InterviewSetupData {
  jobTitle: string;
  jobDescription: string;
  resume: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feedback {
  strengths: string[];
  improvements: string[];
  overallScore: number;
  summary: string;
}