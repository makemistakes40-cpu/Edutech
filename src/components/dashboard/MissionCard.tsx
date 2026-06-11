"use client";
import React from 'react';
import { Award, Terminal, Target, ArrowRight } from 'lucide-react';
import PrimaryButton from '../auth/PrimaryButton';

interface MissionCardProps {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  xpReward: number;
  onStart: () => void;
}

export default function MissionCard({
  title,
  difficulty,
  skills,
  xpReward,
  onStart,
}: MissionCardProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Beginner':
        return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20';
      case 'Intermediate':
        return 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20';
      case 'Advanced':
        return 'text-rose-300 bg-rose-500/10 border-rose-500/20';
      default:
        return 'text-zinc-300 bg-zinc-500/10 border-zinc-500/20';
    }
  };

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-5 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Visual accents */}
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-fuchsia-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Header Info */}
      <div className="flex justify-between items-start border-b border-white/5 pb-3">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Active Mission Task
          </span>
          <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
            <Terminal className="w-4.5 h-4.5 text-fuchsia-400" />
            {title}
          </h4>
        </div>
        
        {/* Reward Badge */}
        <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold font-mono text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
          <Award className="w-3.5 h-3.5" />
          <span>+{xpReward} XP</span>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-3.5">
        
        {/* Difficulty */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">
            Difficulty
          </span>
          <span className={`text-[10px] font-bold font-mono uppercase px-2.5 py-0.5 rounded-lg border ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>

        {/* Skills Tags */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide block">
            Skills Targeted
          </span>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[10px] font-bold text-zinc-300 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded-lg select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Start Button */}
      <div className="pt-2">
        <PrimaryButton
          onClick={onStart}
          className="py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600"
        >
          <span>Start Mission</span>
          <ArrowRight className="w-4 h-4" />
        </PrimaryButton>
      </div>

    </div>
  );
}
