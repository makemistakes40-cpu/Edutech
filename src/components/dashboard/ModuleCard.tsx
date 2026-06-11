"use client";
import React from 'react';
import { CheckCircle2, Play, Lock, Clock } from 'lucide-react';

export interface ModuleData {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  challenges: string[];
  mission: string;
  projectOutcome: string;
}

interface ModuleCardProps {
  index: number;
  module: ModuleData;
  status: 'Completed' | 'Current' | 'Locked';
  onClick: (module: ModuleData) => void;
}

export default function ModuleCard({
  index,
  module,
  status,
  onClick,
}: ModuleCardProps) {
  const isCompleted = status === 'Completed';
  const isCurrent = status === 'Current';
  const isLocked = status === 'Locked';

  const handleClick = () => {
    if (!isLocked) {
      onClick(module);
    }
  };

  const getStatusBorder = () => {
    if (isCompleted) return 'border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/50 hover:bg-emerald-950/20';
    if (isCurrent) return 'border-violet-500 bg-violet-950/10 hover:border-violet-400 hover:bg-violet-950/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]';
    return 'border-white/5 bg-zinc-950/20 opacity-40 cursor-not-allowed';
  };

  return (
    <div className="relative group w-full">
      
      {/* Locked Tooltip popup on hover */}
      {isLocked && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-[10px] font-medium text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-2xl z-30 select-none">
          Complete the previous module to unlock.
        </div>
      )}

      {/* Main card box */}
      <button
        onClick={handleClick}
        disabled={isLocked}
        className={`w-full text-left p-4 rounded-xl border flex flex-col justify-between h-36 transition-all duration-300 relative focus:outline-none ${getStatusBorder()}`}
      >
        {/* Top bar: Module number and icon status */}
        <div className="flex justify-between items-center w-full">
          <span className={`text-[10px] font-mono font-bold ${
            isCompleted ? 'text-emerald-400' : isCurrent ? 'text-violet-400 font-extrabold' : 'text-zinc-600'
          }`}>
            MODULE {String(index + 1).padStart(2, '0')}
          </span>
          <div className="shrink-0">
            {isCompleted && <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />}
            {isCurrent && (
              <span className="flex h-4.5 w-4.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-violet-600 items-center justify-center">
                  <Play className="w-2 h-2 text-white fill-white ml-[1px]" />
                </span>
              </span>
            )}
            {isLocked && <Lock className="w-4 h-4 text-zinc-600" />}
          </div>
        </div>

        {/* Text information */}
        <div className="space-y-1 mt-3">
          <h4 className={`text-xs font-bold tracking-tight block line-clamp-1 ${
            isLocked ? 'text-zinc-500' : 'text-zinc-200 group-hover:text-white transition-colors'
          }`}>
            {module.title}
          </h4>
          <p className="text-[10px] text-zinc-500 leading-snug line-clamp-2">
            {module.description}
          </p>
        </div>

        {/* Footer: duration */}
        <div className="flex items-center space-x-1.5 text-[9px] font-mono text-zinc-500 mt-2 border-t border-white/5 pt-2">
          <Clock className="w-3 h-3 text-zinc-600" />
          <span>{module.duration}</span>
        </div>

      </button>

    </div>
  );
}
