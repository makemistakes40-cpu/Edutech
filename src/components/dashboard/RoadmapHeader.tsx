"use client";
import React from 'react';
import { Compass, Clock, Award } from 'lucide-react';

interface RoadmapHeaderProps {
  trackName: string;
  progressPercent: number;
  estTimeRemaining: string;
}

export default function RoadmapHeader({
  trackName,
  progressPercent,
  estTimeRemaining,
}: RoadmapHeaderProps) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-955/20 border border-white/5 p-6 md:p-8 space-y-6 text-left shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Background glowing spheres */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-fuchsia-600/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Title & Subtitle */}
      <div className="space-y-2 max-w-2xl relative z-10">
        <h1 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
          Your Learning Roadmap
        </h1>
        <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
          Follow your personalized path, complete missions, and unlock startup-ready skills through hands-on projects.
        </p>
      </div>

      {/* Meta Stats Panel */}
      <div className="flex flex-wrap gap-4 pt-1 relative z-10">
        
        {/* Track Name Badge */}
        <div className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-zinc-950/60 border border-white/5 text-xs font-semibold text-zinc-200">
          <Compass className="w-4 h-4 text-violet-400" />
          <span>Track: {trackName}</span>
        </div>

        {/* Est. Time Remaining */}
        <div className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-zinc-950/60 border border-white/5 text-xs font-semibold text-zinc-200">
          <Clock className="w-4 h-4 text-fuchsia-400" />
          <span>Time Left: {estTimeRemaining}</span>
        </div>

        {/* Progress Display */}
        <div className="flex items-center space-x-3 px-3 py-2 rounded-xl bg-zinc-950/60 border border-white/5 text-xs font-semibold text-zinc-200 flex-1 max-w-[280px]">
          <span className="shrink-0 text-zinc-400">Roadmap Progress:</span>
          <div className="w-full h-2 bg-zinc-900 border border-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="shrink-0 font-mono text-zinc-200 font-bold">{progressPercent}%</span>
        </div>

      </div>

    </div>
  );
}
