"use client";
import React from 'react';
import { Award, ShieldAlert, Sparkles, CheckSquare, Trophy } from 'lucide-react';

interface XPProgressCardProps {
  currentXp: number;
  nextMilestoneXp: number;
}

export default function XPProgressCard({
  currentXp,
  nextMilestoneXp,
}: XPProgressCardProps) {
  const percent = Math.min(100, Math.round((currentXp / nextMilestoneXp) * 100));

  const rewards = [
    { text: 'Unlock second milestone project', icon: Sparkles },
    { text: 'Unlock "Verified Builder" achievement badge', icon: Trophy },
    { text: 'Increase Startup Readiness index by +10%', icon: Award },
  ];

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg w-full">
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Header */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          XP Progression
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Trophy className="w-4.5 h-4.5 text-violet-400" />
          Milestone Progression
        </h4>
      </div>

      {/* Progress meter */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-zinc-400 font-medium">XP Level</span>
          <span className="font-mono font-bold text-white">
            {currentXp} <span className="text-zinc-500 font-normal">/ {nextMilestoneXp} XP</span>
          </span>
        </div>
        <div className="w-full h-2 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[9px] text-zinc-500 block leading-none">
          Complete modules and clear validation checks to generate XP.
        </span>
      </div>

      {/* Reward unlocks lists */}
      <div className="space-y-3 border-t border-white/5 pt-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
          Rewards at {nextMilestoneXp} XP:
        </span>
        <div className="space-y-2">
          {rewards.map((reward, idx) => {
            const Icon = reward.icon;
            return (
              <div key={idx} className="flex items-center space-x-2.5 text-xs text-zinc-400 select-none">
                <div className="w-5 h-5 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{reward.text}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
