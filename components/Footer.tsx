import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20.24L12 17.27L7.09 20.24L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="url(#logo-gradient-footer)" />
            <defs>
                <linearGradient id="logo-gradient-footer" x1="12" y1="2" x2="12" y2="20.24" gradientUnits="userSpaceOnUse">
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


const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-white transition-colors">
        {children}
    </a>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    <div className="w-full md:w-1/3 lg:w-2/5">
                        <Logo />
                        <p className="mt-4 text-sm text-brand-gray max-w-xs">
                            Empowering Proven Talent with AI-Powered Solutions.
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 lg:w-3/5 grid grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-white tracking-wider">Quick Links</h4>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Employers</a></li>
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Practice Interview</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white tracking-wider">Legal</h4>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Refund Policy</a></li>
                                <li><a href="#" className="text-sm text-brand-gray hover:text-white transition-colors">Data Protection</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white tracking-wider">Contact</h4>
                            <ul className="mt-4 space-y-3 text-sm text-brand-gray">
                               <li><a href="mailto:support@employability.ai" className="hover:text-white transition-colors">support@employability.ai</a></li>
                               <li className="leading-snug">
                                   YMinds Artificial Intelligence LLP, No. 26, MERITERS, 6th Main Road, Central Revenue Layout, SRK Nagar Post, RK Hegde Nagar, Bangalore - 560077, India
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-brand-gray text-center sm:text-left">&copy; 2025 Employability.AI by YMinds Artificial Intelligence LLP. All rights reserved.</p>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <SocialIcon href="mailto:support@employability.ai">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;