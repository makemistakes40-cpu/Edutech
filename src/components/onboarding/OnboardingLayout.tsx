import React from 'react';
import ProgressBar from './ProgressBar';

interface OnboardingLayoutProps {
  currentStep: number;
  totalSteps: number;
  children: React.ReactNode;
}

export default function OnboardingLayout({
  currentStep,
  totalSteps,
  children,
}: OnboardingLayoutProps) {
  const showProgress = currentStep > 0 && currentStep <= 6;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 relative overflow-hidden select-none">
      {/* Background Grid & Glowing Orbs */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glassmorphic Panel Box */}
      <div className="w-full max-w-xl bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative z-10 flex flex-col justify-between min-h-[450px]">
        
        {/* Header Progress indicator */}
        {showProgress && (
          <div className="w-full border-b border-white/5 pb-4 mb-6">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        )}

        {/* Form contents */}
        <div className="flex-1 flex flex-col justify-center w-full">
          {children}
        </div>

      </div>
    </div>
  );
}
