"use client";
import React from 'react';
import { UserCheck, CheckCircle2, Circle } from 'lucide-react';

interface PortfolioCardProps {
  items: {
    githubConnected: boolean;
    linkedinOptimized: boolean;
    resumeUploaded: boolean;
    projectPublished: boolean;
    capstoneCompleted: boolean;
  };
  onToggleItem: (key: string) => void;
}

export default function PortfolioCard({
  items,
  onToggleItem,
}: PortfolioCardProps) {
  const checklist = [
    { key: 'githubConnected', label: 'GitHub Profile Connected', value: items.githubConnected },
    { key: 'linkedinOptimized', label: 'LinkedIn Profile Optimized', value: items.linkedinOptimized },
    { key: 'resumeUploaded', label: 'Tech Resume Uploaded', value: items.resumeUploaded },
    { key: 'projectPublished', label: 'First Portfolio Project Published', value: items.projectPublished },
    { key: 'capstoneCompleted', label: 'Final Capstone Project Completed', value: items.capstoneCompleted },
  ];

  const completedCount = checklist.filter((item) => item.value).length;
  const overallPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Profile Readiness
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <UserCheck className="w-4.5 h-4.5 text-violet-400" />
          Portfolio Progress Checklist
        </h4>
      </div>

      {/* Progress metrics */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
          <span>Overall Portfolio Completion</span>
          <span>{overallPercent}%</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5">
        {checklist.map((item) => (
          <button
            key={item.key}
            onClick={() => onToggleItem(item.key)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer focus:outline-none ${
              item.value
                ? 'bg-violet-600/5 border-violet-500/10 text-white'
                : 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/30 text-zinc-400'
            }`}
          >
            <div className="shrink-0">
              {item.value ? (
                <CheckCircle2 className="w-4.5 h-4.5 text-violet-400 fill-violet-950/50" />
              ) : (
                <Circle className="w-4.5 h-4.5 text-zinc-600" />
              )}
            </div>
            <span className="text-xs font-medium tracking-tight select-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}
