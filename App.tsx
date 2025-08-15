
import React, { useState, useCallback } from 'react';
import type { AppState, InterviewSetupData, Message, Feedback } from './types';
import { startInterviewSession, getInterviewFeedback } from './services/geminiService';
import type { Chat } from '@google/genai';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SetupPage from './components/SetupPage';
import InterviewPage from './components/InterviewPage';
import FeedbackPage from './components/FeedbackPage';
import Loader from './components/Loader';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ResumeUploadPage from './components/ResumeUploadPage';


const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [interviewSetup, setInterviewSetup] = useState<Partial<InterviewSetupData & { isNewUser: boolean }>>({});
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartSetup = () => {
    setInterviewSetup({});
    setAppState('setup');
  };
  
  const handleGoToLogin = () => setAppState('login');
  const handleGoToSignup = () => setAppState('signup');
  
  const handleLoginSuccess = () => {
    setInterviewSetup({});
    setAppState('setup');
  };

  const handleSignupSuccess = () => {
    setInterviewSetup({ isNewUser: true });
    setAppState('resume_upload');
  };

  const startInterview = useCallback(async (setupData: InterviewSetupData) => {
    setAppState('loading');
    setError(null);
    setInterviewSetup(setupData);
    setMessages([]);
    try {
      const { chat, firstQuestion } = await startInterviewSession(setupData);
      setChatSession(chat);
      setMessages([{ role: 'model', text: firstQuestion }]);
      setAppState('interview');
    } catch (err) {
      console.error(err);
      setError('Failed to start interview session. Please check your API key and try again.');
      setAppState('error');
    }
  }, []);

  const handleJobDetailsSubmit = useCallback((data: { jobTitle: string; jobDescription: string }) => {
    const currentSetup = { ...interviewSetup, ...data };
    if (currentSetup.isNewUser) {
        // New user flow: they already provided a resume, now start the interview
        startInterview(currentSetup as InterviewSetupData);
    } else {
        // Existing user flow: save job details, then go to resume upload
        setInterviewSetup(currentSetup);
        setAppState('resume_upload');
    }
  }, [interviewSetup, startInterview]);

  const handleResumeSubmit = useCallback((resume: string) => {
    const currentSetup = { ...interviewSetup, resume };
    if (currentSetup.isNewUser) {
        // New user flow: save resume, then go to job details setup
        setInterviewSetup(currentSetup);
        setAppState('setup');
    } else {
        // Existing user flow: resume is the last step, start the interview
        startInterview(currentSetup as InterviewSetupData);
    }
  }, [interviewSetup, startInterview]);

  const handleEndInterview = useCallback(async () => {
    if (messages.length === 0) {
        setError("Cannot generate feedback for an empty interview.");
        setAppState('error');
        return;
    }
    setAppState('loading');
    setError(null);
    try {
        const fullTranscript = messages.map(m => `${m.role === 'user' ? 'Candidate' : 'Interviewer'}: ${m.text}`).join('\n');
        const generatedFeedback = await getInterviewFeedback(fullTranscript);
        setFeedback(generatedFeedback);
        setAppState('feedback');
    } catch (err) {
        console.error(err);
        setError('Failed to generate feedback. Please try again.');
        setAppState('error');
    }
  }, [messages]);

  const handleRestart = () => {
    setAppState('setup');
    setInterviewSetup({});
    setChatSession(null);
    setMessages([]);
    setFeedback(null);
    setError(null);
  };
  
  const handleGoHome = () => {
    setAppState('landing');
    setInterviewSetup({});
    setChatSession(null);
    setMessages([]);
    setFeedback(null);
    setError(null);
  }

  const handleBackToSetup = () => {
    setAppState('setup');
  }
  
  const showHeaderFooter = !['login', 'signup', 'resume_upload'].includes(appState);

  const renderContent = () => {
    switch (appState) {
      case 'landing':
        return <LandingPage onStart={handleStartSetup} />;
      case 'login':
        return <LoginPage onLogin={handleLoginSuccess} onGoToSignup={handleGoToSignup} />;
      case 'signup':
        return <SignupPage onSignup={handleSignupSuccess} onGoToLogin={handleGoToLogin} />;
      case 'setup':
        return <SetupPage onJobDetailsSubmit={handleJobDetailsSubmit} initialData={interviewSetup} />;
      case 'resume_upload':
        return <ResumeUploadPage onResumeSubmit={handleResumeSubmit} onBack={interviewSetup.isNewUser ? handleGoHome : handleBackToSetup} />;
      case 'interview':
        if (!chatSession) return <Loader text="Initializing..." />;
        return (
          <InterviewPage
            chatSession={chatSession}
            messages={messages}
            setMessages={setMessages}
            onEndInterview={handleEndInterview}
            jobTitle={interviewSetup?.jobTitle || 'Interview'}
          />
        );
      case 'feedback':
        if (!feedback) return <Loader text="Analyzing..." />;
        return <FeedbackPage feedback={feedback} onRestart={handleRestart} />;
      case 'loading':
        return <Loader text="AI is thinking..." />;
      case 'error':
        return (
            <div className="text-center p-8 bg-red-900/20 border border-red-500 rounded-lg max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-red-400 mb-4">An Error Occurred</h2>
                <p className="text-red-300">{error}</p>
                <button
                    onClick={handleGoHome}
                    className="mt-6 bg-brand-primary hover:opacity-80 text-black font-bold py-2 px-4 rounded-lg transition-opacity"
                >
                    Back to Home
                </button>
            </div>
        );
      default:
        return <LandingPage onStart={handleStartSetup} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {showHeaderFooter && <Header onGoHome={handleGoHome} onGoToLogin={handleGoToLogin} />}
      <main className={`w-full ${showHeaderFooter ? 'max-w-6xl mx-auto px-4 py-8 sm:py-12' : ''} flex-grow flex items-center justify-center`}>
        {renderContent()}
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
