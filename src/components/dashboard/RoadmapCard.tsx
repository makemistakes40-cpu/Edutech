"use client";
import React from 'react';
import { Compass, Calendar, Award, Target, ArrowRight } from 'lucide-react';

interface RoadmapCardProps {
  careerTrack: string;
  currentLevel: string;
  goal: string;
  weeklyCommitment: string;
  completionPercent: number;
  onResume: () => void;
}

export default function RoadmapCard({
  careerTrack,
  currentLevel,
  goal,
  weeklyCommitment,
  completionPercent,
  onResume,
}: RoadmapCardProps) {
  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Visual accents */}
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Title */}
      <div className="flex justify-between items-start border-b border-white/5 pb-4">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Active Track
          </span>
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-violet-400" />
            {careerTrack}
          </h3>
        </div>
        <span className="text-[10px] font-bold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-lg font-mono uppercase tracking-wide">
          {currentLevel}
        </span>
      </div>

      {/* Roadmap details grid */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Goal */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
            <Target className="w-3 h-3 text-zinc-600" /> Goal
          </span>
          <span className="text-xs font-bold text-zinc-200 block truncate">
            {goal}
          </span>
        </div>

        {/* Commitment */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
            <Calendar className="w-3 h-3 text-zinc-600" /> Commitment
          </span>
          <span className="text-xs font-bold text-zinc-200 block truncate">
            {weeklyCommitment}
          </span>
        </div>

      </div>

      {/* Progress section */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
          <span>Overall Roadmap Progress</span>
          <span>{completionPercent}%</span>
        </div>
        <div className="w-full h-2 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>

      {/* Resume button */}
      <div className="pt-2">
        <button
          onClick={onResume}
          className="w-full py-2.5 rounded-xl border border-white/5 bg-zinc-950/40 text-xs font-bold text-white hover:bg-zinc-900/30 hover:border-white/10 transition-all cursor-pointer flex items-center justify-center space-x-1.5 focus:outline-none"
        >
          <span>Resume Journey</span>
          <ArrowRight className="w-4 h-4 text-violet-400" />
        </button>
      </div>

    </div>
  );
}
