"use client";
import React from 'react';
import { Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface StartupCardProps {
  name: string;
  domain: string;
  skills: string[];
  matchPercent: number;
  onViewDetails: () => void;
}

export default function StartupCard({
  name,
  domain,
  skills,
  matchPercent,
  onViewDetails,
}: StartupCardProps) {
  return (
    <div className="bg-zinc-950/40 border border-white/5 p-5 rounded-2xl text-left flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/10 shadow-lg group relative overflow-hidden">
      
      {/* Glow visual */}
      <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-violet-600/5 rounded-full blur-[40px] pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-105 transition-transform">
            <Rocket className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight truncate max-w-[120px] sm:max-w-none">
              {name}
            </h4>
            <span className="text-[10px] text-zinc-500 block">
              {domain}
            </span>
          </div>
        </div>

        {/* Match Percentage */}
        <div className="px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold font-mono text-emerald-400 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.08)]">
          {matchPercent}% MATCH
        </div>
      </div>

      {/* Middle Skills */}
      <div className="my-4 space-y-1.5 flex-1">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide block">
          Required Stack
        </span>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-[9px] font-bold text-zinc-400 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* View Details Button */}
      <div>
        <button
          onClick={onViewDetails}
          className="w-full py-2 rounded-xl border border-white/5 bg-zinc-950 text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-900/30 hover:border-white/10 transition-all cursor-pointer flex items-center justify-center space-x-1.5 focus:outline-none"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-violet-400 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

    </div>
  );
}
