import React, { useState } from 'react';

// Predefined list of common job profiles for users to select from.
const jobPresets = [
    {
        id: 'frontend',
        title: 'Senior Frontend Engineer',
        description: `We are looking for a Senior Frontend Engineer to join our team. Responsibilities include developing new user-facing features, building reusable code and libraries for future use, and ensuring the technical feasibility of UI/UX designs. You should have strong proficiency in JavaScript, React, and modern web technologies. Experience with TypeScript and GraphQL is a plus.`,
    },
    {
        id: 'pm',
        title: 'Product Manager',
        description: `We are seeking an experienced Product Manager to guide the development of our products. You will be responsible for the product planning and execution throughout the Product Lifecycle, including gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, sales, marketing, and support to ensure revenue and customer satisfaction goals are met.`,
    },
    {
        id: 'designer',
        title: 'UX/UI Designer',
        description: `We are looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts. They will be able to transform them into beautiful, intuitive, and functional user interfaces.`,
    },
];


interface SetupPageProps {
  onJobDetailsSubmit: (data: { jobTitle: string; jobDescription: string }) => void;
  initialData?: Partial<{ jobTitle: string; jobDescription: string; }>;
}

const SetupPage: React.FC<SetupPageProps> = ({ onJobDetailsSubmit, initialData }) => {
  const [descriptionSource, setDescriptionSource] = useState<'manual' | 'preset'>('manual');
  const [jobTitle, setJobTitle] = useState(initialData?.jobTitle || '');
  const [jobDescription, setJobDescription] = useState(initialData?.jobDescription || '');
  const [error, setError] = useState('');
  const [selectedPresetId, setSelectedPresetId] = useState<string>('');
  
  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const presetId = e.target.value;
    setSelectedPresetId(presetId);

    if (presetId) {
        const selectedJob = jobPresets.find(job => job.id === presetId);
        if (selectedJob) {
            setJobTitle(selectedJob.title);
            setJobDescription(selectedJob.description);
            if (error) setError('');
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (descriptionSource === 'manual' && (!jobTitle.trim() || !jobDescription.trim())) {
      setError('Job Title and Job Description are required.');
      return;
    }
    if (descriptionSource === 'preset' && !selectedPresetId) {
      setError('Please select a job profile from the list.');
      return;
    }
    setError('');
    onJobDetailsSubmit({ jobTitle, jobDescription });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-brand-dark rounded-lg border border-gray-800 w-full">
      <h2 className="text-3xl font-bold text-white mb-2">Interview Setup</h2>
      <p className="text-brand-gray mb-6">Provide job details to tailor your practice interview.</p>
      
      {/* Tab switcher for job description source */}
      <div className="flex bg-black/50 p-1 rounded-lg mb-6">
        <button 
            onClick={() => setDescriptionSource('manual')}
            className={`w-1/2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${descriptionSource === 'manual' ? 'bg-brand-primary text-black' : 'text-gray-400 hover:bg-gray-800/50'}`}
        >
            Enter Manually
        </button>
        <button 
            onClick={() => setDescriptionSource('preset')}
            className={`w-1/2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${descriptionSource === 'preset' ? 'bg-brand-primary text-black' : 'text-gray-400 hover:bg-gray-800/50'}`}
        >
            Use a Preset
        </button>
      </div>
      
      {error && <p className="bg-red-900/50 text-red-300 p-3 rounded-md mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {descriptionSource === 'manual' ? (
          <>
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full bg-black/50 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition"
                placeholder="e.g., Senior Frontend Engineer"
              />
            </div>
            
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-300 mb-2">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                rows={6}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full bg-black/50 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition"
                placeholder="Paste the job description here..."
              />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="jobPreset" className="block text-sm font-medium text-gray-300 mb-2">
              Select a Job Profile
            </label>
            <select
                id="jobPreset"
                value={selectedPresetId}
                onChange={handlePresetChange}
                className="w-full bg-black/50 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition"
            >
                <option value="" disabled>Select a profile...</option>
                {jobPresets.map(job => (
                    <option key={job.id} value={job.id}>{job.title}</option>
                ))}
            </select>
            {jobDescription && (
                <div className="mt-4 p-4 bg-black/30 border border-gray-800 rounded-md">
                    <h4 className="font-semibold text-gray-200">{jobTitle}</h4>
                    <p className="text-sm text-brand-gray mt-2 whitespace-pre-wrap">{jobDescription}</p>
                </div>
            )}
          </div>
        )}

        <div>
          <button
            type="submit"
            className="w-full mt-4 bg-brand-primary text-black font-bold py-3 px-4 rounded-lg hover:opacity-80 transition-opacity duration-300 flex items-center justify-center space-x-2"
          >
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetupPage;