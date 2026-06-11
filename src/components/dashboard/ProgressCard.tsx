"use client";
import React from 'react';
import { Compass, Target, BookOpen, Clock, Play, ArrowRight, Award } from 'lucide-react';
import PrimaryButton from '../auth/PrimaryButton';

interface ProgressCardProps {
  careerTrack: string;
  goal: string;
  experience: string;
  weeklyCommitment: string;
  completionPercent: number;
  nextModuleName: string;
  nextModuleTime: string;
  isStarted: boolean;
  onStartModule: () => void;
}

export default function ProgressCard({
  careerTrack,
  goal,
  experience,
  weeklyCommitment,
  completionPercent,
  nextModuleName,
  nextModuleTime,
  isStarted,
  onStartModule,
}: ProgressCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      
      {/* 1. Journey Progress Card */}
      <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Personalized Journey
          </span>
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
            <Compass className="w-4.5 h-4.5 text-violet-400" />
            {careerTrack || 'Backend Engineering'}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
              <Target className="w-3 h-3 text-zinc-600" /> Goal
            </span>
            <span className="text-xs font-bold text-zinc-200 block truncate">
              {goal || 'Build My Own Startup'}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
              <Clock className="w-3 h-3 text-zinc-600" /> Commitment
            </span>
            <span className="text-xs font-bold text-zinc-200 block truncate">
              {weeklyCommitment || '5–10 Hours'}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide block">
              Experience Level
            </span>
            <span className="text-xs font-bold text-zinc-200 block truncate">
              {experience || 'Knows the Basics'}
            </span>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
            <span>Overall Roadmap Progress</span>
            <span>{completionPercent}%</span>
          </div>
          <div className="w-full h-2 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. Continue Where You Left Off Card */}
      <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-fuchsia-500/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Continue Where You Left Off
          </span>
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
            <BookOpen className="w-4.5 h-4.5 text-fuchsia-400" />
            {isStarted ? 'JavaScript Syntax & APIs' : nextModuleName}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide block">
              Est. Time Left
            </span>
            <span className="text-xs font-bold text-zinc-200 block">
              {isStarted ? '15 Minutes' : nextModuleTime}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide block">
              Module Status
            </span>
            <span className={`text-[10px] font-bold font-mono uppercase px-2 py-0.5 rounded border inline-block ${
              isStarted ? 'text-violet-400 border-violet-500/20 bg-violet-500/10' : 'text-zinc-500 border-white/5 bg-zinc-950'
            }`}>
              {isStarted ? 'In Progress' : 'Not Started'}
            </span>
          </div>
        </div>

        <div className="pt-2">
          {isStarted ? (
            <div className="w-full py-2.5 rounded-xl border border-violet-500/20 bg-violet-500/5 text-xs font-bold text-center text-violet-300">
              Module Started (15% Complete)
            </div>
          ) : (
            <PrimaryButton
              onClick={onStartModule}
              className="py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600"
            >
              <span>Start Module</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          )}
        </div>
      </div>

    </div>
  );
}
