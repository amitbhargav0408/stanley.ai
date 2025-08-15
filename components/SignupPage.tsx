import React from 'react';
import AuthLayout from './AuthLayout';
import EmailIcon from './icons/EmailIcon';
import PasswordIcon from './icons/PasswordIcon';
import UserIcon from './icons/UserIcon';
import GoogleIcon from './icons/GoogleIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';

interface SignupPageProps {
  onSignup: () => void;
  onGoToLogin: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onGoToLogin }) => {
  return (
    <AuthLayout>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
        <p className="mt-2 text-gray-600">
          Already have an account?{' '}
          <button onClick={onGoToLogin} className="font-semibold text-teal-500 hover:text-teal-600">
            Log in
          </button>
        </p>

        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
           <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </span>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <EmailIcon />
            </span>
            <input
              type="email"
              placeholder="Email or Phone"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               <PasswordIcon />
            </span>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50"><GoogleIcon /></button>
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50"><LinkedInIcon /></button>
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50"><GithubIcon /></button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;