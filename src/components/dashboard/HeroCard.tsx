"use client";
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroCardProps {
  onContinueLearning: () => void;
  onViewRoadmap: () => void;
}

export default function HeroCard({
  onContinueLearning,
  onViewRoadmap,
}: HeroCardProps) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-950/20 border border-white/5 p-6 md:p-8 space-y-6 text-left shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Background glowing spheres */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-fuchsia-600/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Text Context */}
      <div className="space-y-2 max-w-lg relative z-10">
        <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
          Your Journey Starts Here <span className="animate-bounce">🚀</span>
        </h1>
        <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
          Focus on today's tasks and continue building verified skills through practical experience. Complete missions to unlock real startup internship matches.
        </p>
      </div>

      {/* Action CTA Buttons */}
      <div className="flex flex-wrap gap-3 relative z-10 pt-2">
        <button
          onClick={onContinueLearning}
          className="px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-200 cursor-pointer flex items-center space-x-1.5 focus:outline-none"
        >
          <span>Continue Learning</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={onViewRoadmap}
          className="px-5 py-2.5 text-xs font-semibold text-zinc-300 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-white/10 hover:text-white transition-all cursor-pointer flex items-center space-x-1.5 focus:outline-none"
        >
          <BookOpen className="w-4 h-4 text-zinc-500" />
          <span>View Roadmap</span>
        </button>
      </div>

    </div>
  );
}
