import React from 'react';
import AuthLayout from './AuthLayout';
import EmailIcon from './icons/EmailIcon';
import PasswordIcon from './icons/PasswordIcon';
import GoogleIcon from './icons/GoogleIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';

interface LoginPageProps {
  onLogin: () => void;
  onGoToSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onGoToSignup }) => {
  return (
    <AuthLayout>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-gray-900">Login to Your Account</h2>
        <p className="mt-2 text-gray-600">
          New to EmployAbility.AI?{' '}
          <button onClick={onGoToSignup} className="font-semibold text-teal-500 hover:text-teal-600">
            Sign up
          </button>
        </p>

        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
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
             <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </span>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm font-semibold text-teal-500 hover:text-teal-600">
              Forgot Password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Login
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

export default LoginPage;