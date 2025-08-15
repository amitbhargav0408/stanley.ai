import React from 'react';

interface HeaderProps {
    onGoHome: () => void;
    onGoToLogin: () => void;
}

const Logo: React.FC = () => (
    <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20.24L12 17.27L7.09 20.24L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="url(#logo-gradient)" />
            <defs>
                <linearGradient id="logo-gradient" x1="12" y1="2" x2="12" y2="20.24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F5A9"/>
                    <stop offset="1" stopColor="#00A9FF"/>
                </linearGradient>
            </defs>
        </svg>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Employ<span className="text-brand-primary">Ability</span>.AI
        </h1>
    </div>
);


const Header: React.FC<HeaderProps> = ({ onGoHome, onGoToLogin }) => {
  return (
    <header className="w-full absolute top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        <button onClick={onGoHome} className="flex items-center group">
           <Logo />
        </button>
        <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Employers</a>
            </nav>
            <button 
                onClick={onGoToLogin}
                className="text-sm font-medium text-white border border-gray-700 px-4 py-2 rounded-md hover:bg-brand-dark transition-colors">
                Log In
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;