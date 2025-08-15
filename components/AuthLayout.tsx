import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20.24L12 17.27L7.09 20.24L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="url(#logo-gradient-auth)" />
            <defs>
                <linearGradient id="logo-gradient-auth" x1="12" y1="2" x2="12" y2="20.24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F5A9"/>
                    <stop offset="1" stopColor="#00A9FF"/>
                </linearGradient>
            </defs>
        </svg>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">
          Employ<span style={{color: '#00D691'}}>Ability</span>.AI
        </h1>
    </div>
);


const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-center bg-white text-gray-800">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden my-8">
        
        {/* Left side - Image and overlay */}
        <div className="hidden md:block md:w-1/2 lg:w-[55%] relative p-8 bg-gray-50">
           <div className="absolute top-8 left-8 z-10">
             <Logo />
           </div>
           <img
             src="https://i.imgur.com/WbjaI3v.png"
             alt="EmployAbility.AI platform screenshot showing AI overview of a candidate"
             className="absolute inset-0 w-full h-full object-contain"
             style={{ objectPosition: 'center 80%' }}
           />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 lg:w-[45%] bg-white p-8 lg:p-12 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;