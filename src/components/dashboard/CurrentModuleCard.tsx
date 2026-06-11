"use client";
import React from 'react';
import { Play, BookOpen, Clock, ArrowRight, Check } from 'lucide-react';
import { ModuleData } from './ModuleCard';

interface CurrentModuleCardProps {
  module: ModuleData;
  isStarted: boolean;
  onStart: () => void;
}

export default function CurrentModuleCard({
  module,
  isStarted,
  onStart,
}: CurrentModuleCardProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-955/20 border border-violet-500/20 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-violet-500/30 shadow-xl w-full">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-fuchsia-600/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Ribbon and title */}
      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono font-bold text-violet-300 uppercase tracking-wider">
            ⚡ Active Target Module
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight pt-1">
            {module.title}
          </h3>
        </div>
        <div className="shrink-0 flex items-center space-x-1.5 text-zinc-500 text-[10px] font-mono">
          <Clock className="w-3.5 h-3.5 text-zinc-600" />
          <span>{module.duration}</span>
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed max-w-xl relative z-10">
        {module.description}
      </p>

      {/* Skills list details */}
      <div className="space-y-3 relative z-10 border-t border-white/5 pt-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
          What You Will Learn
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {module.skills.map((skill, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-zinc-300">
              <div className="w-4 h-4 rounded bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Outlines */}
      <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 relative z-10 space-y-2">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
          Real-World Practice Mission
        </span>
        <p className="text-xs text-zinc-300 font-semibold leading-normal">
          {module.mission}
        </p>
        <div className="text-[9px] text-zinc-500 leading-normal flex items-center gap-1 font-mono pt-1">
          <span className="text-violet-400 font-bold uppercase">OUTCOME:</span>
          <span>{module.projectOutcome}</span>
        </div>
      </div>

      {/* Action CTA Trigger */}
      <div className="pt-2 relative z-10">
        <button
          onClick={onStart}
          className="px-6 py-3 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2 w-full sm:w-auto focus:outline-none"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>{isStarted ? 'Continue Module' : 'Start Module'}</span>
        </button>
      </div>

    </div>
  );
}
