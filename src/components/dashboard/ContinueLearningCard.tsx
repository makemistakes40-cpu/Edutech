"use client";
import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import PrimaryButton from '../auth/PrimaryButton';

interface ContinueLearningCardProps {
  moduleName: string;
  progressPercent: number;
  timeRemaining: string;
  onContinue: () => void;
}

export default function ContinueLearningCard({
  moduleName,
  progressPercent,
  timeRemaining,
  onContinue,
}: ContinueLearningCardProps) {
  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-5 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Next Recommended Module
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <BookOpen className="w-4.5 h-4.5 text-violet-400" />
          {moduleName}
        </h4>
      </div>

      {/* Progress & Time */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Progress percent */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide block">
            Progress
          </span>
          <span className="text-xs font-bold text-zinc-200 block">
            {progressPercent}% completed
          </span>
        </div>

        {/* Time Remaining */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-zinc-600" /> Est. Time
          </span>
          <span className="text-xs font-bold text-zinc-200 block">
            {timeRemaining}
          </span>
        </div>

      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Continue Action */}
      <div className="pt-1">
        <PrimaryButton
          onClick={onContinue}
          className="py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5"
        >
          <span>Continue Module</span>
          <ArrowRight className="w-4 h-4" />
        </PrimaryButton>
      </div>

    </div>
  );
}
