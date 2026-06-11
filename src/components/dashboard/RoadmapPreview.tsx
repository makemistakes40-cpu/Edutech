"use client";
import React from 'react';
import { Compass, Lock, Unlock } from 'lucide-react';

interface RoadmapPreviewProps {
  unlockedList: string[];
}

export default function RoadmapPreview({ unlockedList }: RoadmapPreviewProps) {
  const milestones = [
    { id: 'prog', title: 'Programming Fundamentals', index: '01' },
    { id: 'js', title: 'JavaScript Syntax', index: '02' },
    { id: 'node', title: 'Node.js Core', index: '03' },
    { id: 'express', title: 'Express.js Framework', index: '04' },
    { id: 'db', title: 'Relational Databases', index: '05' },
    { id: 'auth', title: 'User Authentication', index: '06' },
    { id: 'api', title: 'REST APIs Systems', index: '07' },
    { id: 'proj', title: 'Build Backend Project', index: '08' },
    { id: 'cap', title: 'Final Capstone Project', index: '09' },
    { id: 'startup', title: 'Startup Preparation', index: '10' },
  ];

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg w-full">
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Header */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Learning Journey
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Compass className="w-4.5 h-4.5 text-violet-400" />
          Learning Roadmap Preview
        </h4>
      </div>

      {/* Grid of milestones */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full">
        {milestones.map((ms) => {
          const isUnlocked = unlockedList.includes(ms.id);

          return (
            <div
              key={ms.id}
              className={`p-3.5 rounded-xl border flex flex-col justify-between h-28 text-left transition-all duration-300 ${
                isUnlocked
                  ? 'bg-violet-600/10 border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]'
                  : 'bg-zinc-950/40 border-white/5 opacity-40 select-none'
              }`}
            >
              {/* Top Row: Index and Status */}
              <div className="flex justify-between items-center w-full">
                <span className={`text-[10px] font-mono font-bold ${isUnlocked ? 'text-violet-400' : 'text-zinc-500'}`}>
                  {ms.index}
                </span>
                <div>
                  {isUnlocked ? (
                    <Unlock className="w-3.5 h-3.5 text-violet-400" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-zinc-600" />
                  )}
                </div>
              </div>

              {/* Title label */}
              <div>
                <span className={`text-[10px] font-bold tracking-tight block leading-snug ${
                  isUnlocked ? 'text-zinc-200' : 'text-zinc-500'
                }`}>
                  {ms.title}
                </span>
                <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-wide mt-1 block">
                  {isUnlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
