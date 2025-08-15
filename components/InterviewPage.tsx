import React, { useState, useRef, useEffect } from 'react';
import type { Chat } from '@google/genai';
import type { Message } from '../types';
import RobotIcon from './icons/RobotIcon';
import UserIcon from './icons/UserIcon';
import Loader from './Loader';

interface InterviewPageProps {
  chatSession: Chat;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  onEndInterview: () => void;
  jobTitle: string;
}

const InterviewPage: React.FC<InterviewPageProps> = ({ chatSession, messages, setMessages, onEndInterview, jobTitle }) => {
  const [userInput, setUserInput] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isAnswering) return;

    const newUserMessage: Message = { role: 'user', text: userInput };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsAnswering(true);

    try {
      const response = await chatSession.sendMessage({ message: newUserMessage.text });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
       const errorMessage: Message = { role: 'model', text: 'Sorry, I encountered an error. Please try again.' };
       setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsAnswering(false);
    }
  };

  return (
    <div className="h-[80vh] max-h-[700px] flex flex-col bg-brand-dark rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
        <header className="p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Practice Interview</h2>
            <p className="text-sm text-brand-primary">{jobTitle}</p>
        </header>
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                  <RobotIcon />
                </div>
              )}
              <div className={`max-w-md p-3 rounded-lg ${msg.role === 'model' ? 'bg-gray-800 text-gray-200' : 'bg-brand-primary text-black'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
               {msg.role === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <UserIcon />
                </div>
              )}
            </div>
          ))}
          {isAnswering && (
             <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                  <RobotIcon />
                </div>
                <div className="max-w-md p-3 rounded-lg bg-gray-800 text-gray-200">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-300"></span>
                    </div>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-gray-800 bg-brand-dark/80">
         <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={isAnswering ? "EmployAbility.AI is thinking..." : "Type your answer..."}
            disabled={isAnswering}
            className="flex-grow bg-black/50 border border-gray-700 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isAnswering || !userInput.trim()}
            className="bg-brand-primary text-black font-semibold py-2 px-4 rounded-lg hover:opacity-80 transition-opacity disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
        <button
            onClick={onEndInterview}
            disabled={isAnswering}
            className="w-full mt-3 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
            Finish Interview & Get Feedback
        </button>
      </div>
    </div>
  );
};

export default InterviewPage;