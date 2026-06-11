"use client";
import React from 'react';
import { Target, Flame, CheckCircle2, Circle } from 'lucide-react';

interface DailyGoalCardProps {
  dailyGoalText: string;
  isDailyGoalCompleted: boolean;
  weeklyProgressPercent: number;
  streakCount: number;
}

export default function DailyGoalCard({
  dailyGoalText,
  isDailyGoalCompleted,
  weeklyProgressPercent,
  streakCount,
}: DailyGoalCardProps) {
  return (
    <div className="space-y-6">
      
      {/* 1. Daily Goal Card */}
      <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-3 text-left">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
            Daily Goal
          </span>
          {isDailyGoalCompleted ? (
            <span className="text-[8px] font-mono font-bold text-emerald-400 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">
              Completed
            </span>
          ) : (
            <span className="text-[8px] font-mono font-bold text-zinc-500 uppercase bg-zinc-900 px-1.5 py-0.5 rounded">
              Active
            </span>
          )}
        </div>
        <div className="flex items-start space-x-3">
          <div className="shrink-0 mt-0.5">
            {isDailyGoalCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-violet-400 fill-violet-950/30" />
            ) : (
              <Circle className="w-5 h-5 text-zinc-600" />
            )}
          </div>
          <p className="text-xs font-semibold text-zinc-200 leading-normal">
            {dailyGoalText || 'Complete your first learning module.'}
          </p>
        </div>
      </div>

      {/* 2. Weekly Progress Card */}
      <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-3 text-left">
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>Weekly Progress</span>
          <span className="text-zinc-300 font-bold">{weeklyProgressPercent}%</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
            style={{ width: `${weeklyProgressPercent}%` }}
          />
        </div>
        <span className="text-[9px] text-zinc-500 block leading-none">
          Complete modules and submit missions to raise weekly velocity.
        </span>
      </div>

      {/* 3. Learning Streak Card */}
      <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center justify-between text-left">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
            Learning Streak
          </span>
          <span className="text-xs font-bold text-zinc-200 block">
            {streakCount === 0 ? 'No active streak' : `${streakCount} Consecutive Days`}
          </span>
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
          streakCount > 0
            ? 'bg-orange-500/10 border-orange-500/25 text-orange-400 shadow-[0_0_15px_-5px_rgba(249,115,22,0.3)] animate-pulse'
            : 'bg-zinc-950 border-white/5 text-zinc-600'
        }`}>
          <Flame className={`w-5 h-5 ${streakCount > 0 ? 'fill-orange-500' : ''}`} />
        </div>
      </div>

    </div>
  );
}
