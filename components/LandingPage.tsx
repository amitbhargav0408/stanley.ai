import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.1818 10.8182L24 12L13.1818 13.1818L12 24L10.8182 13.1818L0 12L10.8182 10.8182L12 0Z" fill="currentColor"/>
    </svg>
);


const InterviewMockup: React.FC = () => (
    <div className="relative mt-10 max-w-4xl mx-auto p-1.5 bg-gradient-to-b from-gray-800 to-brand-dark rounded-2xl border border-gray-700 shadow-2xl shadow-brand-primary/20">
        <div className="relative aspect-[16/9] bg-brand-dark rounded-lg p-4 border border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">
                    <span className="font-semibold text-white">System Design</span> <span className="text-gray-600">&gt;</span> Wissen Technology
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-xs flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"></circle></svg> 02:51</div>
                    <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20.24L12 17.27L7.09 20.24L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="#00F5A9" /></svg>
                        <span className="font-bold text-xs">EmployAbility.AI</span>
                    </div>
                </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-1.5 mt-3">
                <div className="bg-brand-primary h-1.5 rounded-full" style={{ width: '30%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1 flex justify-between">
                <span>Problem Statement</span>
                <span>Whiteboard</span>
                <span>Follow-up Question</span>
            </div>

            {/* Content */}
            <div className="mt-4 grid grid-cols-2 gap-4 h-[calc(100%-80px)]">
                <div className="bg-black/30 p-3 rounded-lg border border-gray-800">
                    <p className="text-xs font-medium text-brand-primary mb-2">Problem Statement</p>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Design a Parking Lot System that supports space allocation, ticketing, and payment. The system should be scalable to handle large parking lots and multiple entry/exit points.</p>
                     <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-md flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 flex-shrink-0 mt-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="m22 7-8.5 8.5L11 13"/><path d="M9 22V12h10"/></svg>
                        <p className="text-[10px] text-yellow-300">Read the problem and make sure you understand the requirements. Once confident, proceed to the whiteboard.</p>
                    </div>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-800 flex flex-col justify-between">
                    <div>
                        <p className="text-xs font-medium text-white mb-2">Interviewer</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-150"></div>
                            <span className="text-xs text-gray-400">Listening...</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-end gap-2">
                           <div className="w-6 h-6 rounded-full bg-gray-700 flex-shrink-0"></div>
                           <div className="text-[10px] bg-gray-700 p-2 rounded-lg max-w-[80%]">You can proceed with designing the Parking Lot System now. Feel free to ask any clarification questions.</div>
                        </div>
                         <div className="flex items-end justify-end gap-2">
                           <div className="text-[10px] bg-brand-primary text-black p-2 rounded-lg max-w-[80%]">Let's proceed.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://i.imgur.com/8b21mN5.png" alt="Happy user of EmployAbility.AI" className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full object-cover border-4 border-brand-dark" />
    </div>
);


const TestimonialCard: React.FC<{ name: string, role: string, quote: string, initial: string }> = ({ name, role, quote, initial }) => (
    <div className="bg-brand-dark border border-gray-800 p-6 rounded-xl h-full flex flex-col">
        <p className="text-gray-300 flex-grow text-sm">"{quote}"</p>
        <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                {initial}
            </div>
            <div className="ml-4">
                <p className="font-semibold text-white text-sm">{name}</p>
                <p className="text-xs text-brand-gray">{role}</p>
            </div>
        </div>
    </div>
);

const FeatureCard: React.FC<{ title: string; description: string; imageUrl: string; altText: string }> = ({ title, description, imageUrl, altText }) => (
    <div className="bg-brand-dark border border-gray-800 p-6 rounded-2xl flex flex-col">
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-brand-gray text-sm">{description}</p>
        </div>
        <div className="mt-6 aspect-video bg-black/50 rounded-lg border border-gray-700 overflow-hidden">
            <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
        </div>
    </div>
)


const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const testimonials = [
      { name: 'Arjun Gupta', role: 'Software Engineer', quote: 'I used to guess what might come up in technical interviews, but with EmployAbility’s personalised mock interviews, I felt fully prepared for my coding rounds.', initial: 'A' },
      { name: 'Derek Johnson', role: 'Systems Analyst', quote: 'The simulation of real interview conditions was spot on. The instant feedback helped me adjust my strategies and ultimately land a position in a top tech firm.', initial: 'D' },
      { name: 'Priya Nair', role: 'Mobile Developer', quote: 'The platform provided a safe space to practice and learn from my mistakes. The AI’s insights were spot-on, and it boosted my confidence immensely before the interview.', initial: 'P'},
      { name: 'Sanya Patel', role: 'Data Scientist', quote: 'The feedback I received was detailed and actionable. The AI truly understood what I needed to work on, and now I’m acing my interviews!', initial: 'S' },
      { name: 'Amit Verma', role: 'DevOps Engineer', quote: 'Practice Interview allowed me to take realistic mock interviews that felt exactly like the real thing. After a few retries, I could confidently tackle coding challenges in interviews.', initial: 'A' },
      { name: 'Evan Smith', role: 'Cloud Engineer', quote: 'Participating in multiple mock interviews helped me anticipate questions and prepare thoughtful responses, which was crucial in securing my dream job.', initial: 'E' },
      { name: 'Li Wei', role: 'Full-Stack Developer', quote: 'I never thought I could improve so quickly! The AI identified my weaknesses in real-time and helped me refine my skills, leading to job offers from multiple companies!', initial: 'L'},
      { name: 'Emma Brown', role: 'Product Manager', quote: 'The personalised coaching was top-notch. With every session, I felt more equipped to handle tough questions and present my best self during interviews.', initial: 'E' },
  ];
    
  return (
    <div className="animate-fade-in space-y-24 md:space-y-32 pt-24">
      {/* Hero Section */}
      <section className="text-center pt-12 md:pt-20">
         <div className="relative inline-block">
            <div className="absolute top-0 left-0 w-full h-full bg-green-400/50 blur-3xl -z-10 animate-pulse"></div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Everything you need, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400 inline-flex items-center">AI Powered<SparkleIcon className="ml-2 w-7 h-7 text-brand-primary"/></span>
                <br/>
                Advance Your Career
            </h1>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-gray">
          10x more interview calls, 2x better Job Offers
        </p>
        <InterviewMockup />
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Loved by Freshers, Trusted by Professionals</h2>
        <p className="mt-4 text-center text-brand-gray max-w-3xl mx-auto">Real users share how EmployAbility's Practice Interview feature helped them land their dream roles and sharpen their skills.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.slice(0,8).map(t => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>
      
      {/* Features Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Everything you need to <span className="text-brand-primary">Super Charge</span> Your Employability</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <FeatureCard 
                title="Interview Practice" 
                description="Practice for real job interviews the smarter way. Personalized simulations, including DSA and system design interviews, followed by detailed reports."
                imageUrl="https://i.imgur.com/7b1pYfQ.png"
                altText="Mockup of the interview practice feature"
            />
            <FeatureCard 
                title="Verified Profiles" 
                description="Showcase your true skills and projects evaluated through real simulated interviews—trusted by employers worldwide."
                imageUrl="https://i.imgur.com/kS5xFnA.png"
                altText="Mockup of verified candidate profiles"
            />
             <FeatureCard 
                title="Upgrade Skills with Mentor AI" 
                description="Get personalized recommendations for courses, certifications, and skills—powered by AI to match your career goals."
                imageUrl="https://i.imgur.com/uG9T82J.png"
                altText="Mockup of AI mentor for skill upgrades"
            />
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
                <FeatureCard 
                    title="DSA/Problem Solving" 
                    description="LeetCode is old-school! Master DSA with AI Mentor, live and always there to guide you with a faster, more effective approach, focusing on design patterns."
                    imageUrl="https://i.imgur.com/qL3gA5t.png"
                    altText="Mockup of the DSA problem solving feature"
                />
                <FeatureCard 
                    title="System Design Mastery" 
                    description="Whether you're a fresher or an experienced professional, master System Design with AI Mentor. A faster, more effective approach that guides you step-by-step."
                    imageUrl="https://i.imgur.com/lxtg706.png"
                    altText="Mockup of the system design feature"
                />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-brand-dark border border-gray-800 rounded-2xl p-10 md:p-16">
        <h3 className="text-gray-400">Get an unfair advantage over the competition</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Try Now</h2>
        <div className="mt-8">
            <button
                onClick={onStart}
                className="bg-white text-black font-bold py-4 px-6 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;