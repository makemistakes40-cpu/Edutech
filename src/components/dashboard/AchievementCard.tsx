"use client";
import React from 'react';
import { Award, Trophy, Zap, ShieldAlert, Sparkles, CheckSquare } from 'lucide-react';

interface AchievementCardProps {
  unlockedList: string[];
}

export default function AchievementCard({ unlockedList }: AchievementCardProps) {
  const achievements = [
    {
      id: 'first_mission',
      title: 'First Mission',
      desc: 'Completed your first learning task.',
      icon: CheckSquare,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]',
    },
    {
      id: 'first_project',
      title: 'First Project',
      desc: 'Finished your first codebase project.',
      icon: Sparkles,
      color: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
      glow: 'shadow-[0_0_15px_rgba(217,70,239,0.15)]',
    },
    {
      id: 'verified_builder',
      title: 'Verified Builder',
      desc: 'Passed first skill validation test.',
      icon: Trophy,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      glow: 'shadow-[0_0_15px_rgba(139,92,246,0.15)]',
    },
    {
      id: 'community_contributor',
      title: 'Community Contributor',
      desc: 'Shared feedback in community forums.',
      icon: Zap,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]',
    },
    {
      id: 'startup_ready',
      title: 'Startup Ready',
      desc: 'Reached 90%+ readiness index.',
      icon: Award,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]',
    },
  ];

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg w-full">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Milestones
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Trophy className="w-4.5 h-4.5 text-violet-400" />
          Achievements
        </h4>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {achievements.map((ach) => {
          const AchIcon = ach.icon;
          const isUnlocked = unlockedList.includes(ach.id);

          return (
            <div
              key={ach.id}
              className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 relative group transition-all duration-300 ${
                isUnlocked
                  ? `bg-zinc-950/40 border-white/10 ${ach.glow}`
                  : 'bg-zinc-950/20 border-white/5 opacity-40 select-none'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg border ${isUnlocked ? ach.color : 'bg-zinc-900 border-white/5 text-zinc-500'}`}>
                  <AchIcon className="w-4.5 h-4.5" />
                </div>
                {isUnlocked ? (
                  <span className="text-[8px] font-mono font-bold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    Unlocked
                  </span>
                ) : (
                  <span className="text-[8px] font-mono font-bold text-zinc-500 uppercase tracking-wide bg-zinc-900 px-1.5 py-0.5 rounded">
                    Locked
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-zinc-200 block group-hover:text-white transition-colors">
                  {ach.title}
                </span>
                <span className="text-[10px] text-zinc-500 block leading-normal">
                  {ach.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
