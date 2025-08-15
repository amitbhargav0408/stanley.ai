import React, { useState, useRef } from 'react';
import AuthLayout from './AuthLayout';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import FileUploadIcon from './icons/FileUploadIcon';

interface ResumeUploadPageProps {
    onResumeSubmit: (resumeText: string) => void;
    onBack: () => void;
}

const ResumeUploadPage: React.FC<ResumeUploadPageProps> = ({ onResumeSubmit, onBack }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
             if (e.dataTransfer.files[0].type === 'application/pdf') {
                setFile(e.dataTransfer.files[0]);
            } else {
                alert("Please upload a PDF file.");
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    
    const handleSelectFilesClick = () => {
        fileInputRef.current?.click();
    };

    const handleNext = () => {
        const resumeText = file ? `[Content of resume: ${file.name}]` : '';
        onResumeSubmit(resumeText);
    };

    const handleSkip = () => {
        onResumeSubmit('');
    };

    return (
        <AuthLayout>
            <div className="w-full">
                <button onClick={onBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-800 mb-6">
                    <ArrowLeftIcon />
                    <span className="ml-2">Back</span>
                </button>

                <h2 className="text-2xl font-bold text-gray-900">Upload Your Resume</h2>
                
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf"
                />

                <div 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`mt-6 p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-gray-50'}`}
                >
                    {file ? (
                         <div className="flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 mb-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                            <p className="font-semibold text-gray-700">{file.name}</p>
                            <button onClick={() => setFile(null)} className="mt-2 text-sm text-red-500 hover:text-red-700 font-semibold">Remove file</button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <FileUploadIcon />
                            <p className="mt-4 font-semibold text-gray-700">Drag and drop a pdf or</p>
                            <button onClick={handleSelectFilesClick} className="font-semibold text-teal-500 hover:text-teal-600 mt-1">
                                Select from files
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-4 text-center">
                    <button onClick={handleSkip} className="text-sm font-semibold text-gray-600 hover:text-gray-800">
                      I don't have a resume
                    </button>
                </div>

                <div className="mt-8">
                    <button
                        onClick={handleNext}
                        disabled={!file}
                        className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ResumeUploadPage;