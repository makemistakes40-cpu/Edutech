"use client";
import React from 'react';
import { Play, ArrowRight, FolderGit2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  techStack: string[];
  completionPercent: number;
  status: 'In Progress' | 'Completed' | 'Not Started';
  onContinue: () => void;
}

export default function ProjectCard({
  title,
  techStack,
  completionPercent,
  status,
  onContinue,
}: ProjectCardProps) {
  const getStatusColor = (s: string) => {
    switch (s) {
      case 'Completed':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25';
      case 'In Progress':
        return 'text-violet-400 bg-violet-500/10 border-violet-500/25';
      default:
        return 'text-zinc-500 bg-zinc-950 border-white/5';
    }
  };

  return (
    <div className="bg-zinc-950/40 border border-white/5 rounded-2xl overflow-hidden text-left flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-xl group">
      
      {/* Decorative Mock Code Thumbnail */}
      <div className="h-32 bg-zinc-950 relative border-b border-white/5 flex items-center justify-center overflow-hidden">
        {/* Glowing visual */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-50" />
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-violet-600/10 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
        
        {/* Mock Code window */}
        <div className="w-[85%] h-[80%] rounded-xl bg-zinc-900 border border-white/5 p-3 flex flex-col justify-between font-mono text-[9px] text-zinc-500 leading-normal select-none shadow-2xl relative translate-y-3 transition-transform group-hover:translate-y-2 duration-300">
          <div className="flex items-center space-x-1.5 border-b border-white/5 pb-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span className="text-[7px] text-zinc-600 pl-1.5 truncate">app.tsx</span>
          </div>
          <div className="flex-1 pt-2 space-y-1.5">
            <div className="h-1.5 w-[50%] bg-violet-500/25 rounded" />
            <div className="h-1.5 w-[75%] bg-zinc-800 rounded" />
            <div className="h-1.5 w-[30%] bg-zinc-800 rounded" />
            <div className="h-1.5 w-[60%] bg-fuchsia-500/25 rounded" />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        
        {/* Header Title */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className={`text-[9px] font-bold font-mono uppercase px-2 py-0.5 rounded border ${getStatusColor(status)}`}>
              {status}
            </span>
            <span className="text-[10px] font-mono font-bold text-zinc-400">
              {completionPercent}%
            </span>
          </div>
          <h4 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-violet-400 transition-colors block pt-1">
            {title}
          </h4>
        </div>

        {/* Tech stacks and footer button */}
        <div className="space-y-4">
          {/* Tech Stack List */}
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[9px] font-bold text-zinc-400 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              style={{ width: `${completionPercent}%` }}
            />
          </div>

          {/* Continue button */}
          <button
            onClick={onContinue}
            className="w-full py-2.5 rounded-xl border border-white/5 bg-zinc-950 text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-900/30 hover:border-white/10 transition-all cursor-pointer flex items-center justify-center space-x-1.5 focus:outline-none"
          >
            <span>{status === 'Not Started' ? 'Start Project' : 'Continue Project'}</span>
            <ArrowRight className="w-4 h-4 text-violet-400 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
