import React from 'react';
import type { Feedback } from '../types';

interface FeedbackPageProps {
  feedback: Feedback;
  onRestart: () => void;
}

const FeedbackCard: React.FC<{ title: string, items: string[], icon: React.ReactNode, colorClass: string }> = ({ title, items, icon, colorClass }) => (
    <div className="bg-brand-dark p-6 rounded-lg border border-gray-800">
        <div className="flex items-center mb-4">
            <div className={`${colorClass} p-2 rounded-md`}>
                {icon}
            </div>
            <h3 className="ml-3 text-xl font-semibold text-white">{title}</h3>
        </div>
        <ul className="space-y-3 list-inside">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-gray-300">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const FeedbackPage: React.FC<FeedbackPageProps> = ({ feedback, onRestart }) => {
    const getScoreColor = (score: number) => {
        if (score >= 85) return 'text-green-400';
        if (score >= 60) return 'text-yellow-400';
        return 'text-red-400';
    };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-black/30 rounded-lg border border-gray-800">
      <h2 className="text-4xl font-extrabold text-white text-center mb-4">Interview Feedback</h2>
      <p className="text-brand-gray text-center mb-8">Here's a breakdown of your performance.</p>

      <div className="text-center mb-10">
        <p className="text-lg text-gray-300 mb-2">Overall Score</p>
        <p className={`text-7xl font-bold ${getScoreColor(feedback.overallScore)}`}>{feedback.overallScore}<span className="text-3xl text-gray-500">/100</span></p>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">{feedback.summary}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FeedbackCard 
            title="Strengths"
            items={feedback.strengths}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>}
            colorClass="bg-green-500/20 text-green-400"
        />
        <FeedbackCard 
            title="Areas for Improvement"
            items={feedback.improvements}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 3a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8l-12 12a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8z"/><path d="m18 5-3 3"/></svg>}
            colorClass="bg-yellow-500/20 text-yellow-400"
        />
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="bg-brand-primary text-black font-bold py-3 px-8 rounded-lg text-lg hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
        >
          Try Another Interview
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;