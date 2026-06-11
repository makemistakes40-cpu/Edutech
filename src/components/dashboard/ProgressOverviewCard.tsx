"use client";
import React from 'react';
import { Compass, BookOpen, FolderGit2, Award } from 'lucide-react';

interface ProgressOverviewCardProps {
  careerTrack: string;
  modulesCompleted: number;
  totalModules: number;
  projectsBuilt: number;
  xpEarned: number;
  progressPercent: number;
}

export default function ProgressOverviewCard({
  careerTrack,
  modulesCompleted,
  totalModules,
  projectsBuilt,
  xpEarned,
  progressPercent,
}: ProgressOverviewCardProps) {
  const stats = [
    { label: 'Modules Completed', val: `${modulesCompleted}/${totalModules}`, icon: BookOpen, color: 'text-violet-400 bg-violet-500/10' },
    { label: 'Projects Built', val: `${projectsBuilt} Built`, icon: FolderGit2, color: 'text-fuchsia-400 bg-fuchsia-500/10' },
    { label: 'XP Earned', val: `${xpEarned} XP`, icon: Award, color: 'text-emerald-400 bg-emerald-500/10' },
  ];

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg w-full">
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Header Info */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Path Metrics
        </span>
        <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Compass className="w-4.5 h-4.5 text-violet-400" />
          Progress Overview: {careerTrack}
        </h3>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="p-4 rounded-xl bg-zinc-950/40 border border-white/5 flex items-center space-x-3.5">
              <div className={`p-2 rounded-lg ${stat.color} shrink-0`}>
                <Icon className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide block">
                  {stat.label}
                </span>
                <span className="text-xs font-bold text-zinc-200 block">
                  {stat.val}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
          <span>Overall Roadmap Progress</span>
          <span className="text-zinc-200 font-bold">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

    </div>
  );
}
