"use client";
import React from 'react';
import { Award, CheckSquare, Sparkles, Star } from 'lucide-react';

interface ReadinessCardProps {
  score: number;
  breakdown: {
    technical: number;
    projects: number;
    portfolio: number;
    verification: number;
    communication: number;
  };
  recommendations: string[];
}

export default function ReadinessCard({
  score,
  breakdown,
  recommendations,
}: ReadinessCardProps) {
  // SVG circular gauge calculations
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const meters = [
    { label: 'Technical Skills', val: breakdown.technical, color: 'bg-violet-500' },
    { label: 'Projects Completed', val: breakdown.projects, color: 'bg-fuchsia-500' },
    { label: 'Portfolio Assets', val: breakdown.portfolio, color: 'bg-blue-500' },
    { label: 'Skill Verification', val: breakdown.verification, color: 'bg-emerald-500' },
    { label: 'Communication Profile', val: breakdown.communication, color: 'bg-amber-500' },
  ];

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Hiring Metrics
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Award className="w-4.5 h-4.5 text-violet-400" />
          Startup Readiness Score
        </h4>
      </div>

      {/* Main Score Layout */}
      <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-white/5 pb-5">
        {/* Radial Circle score */}
        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              className="text-zinc-950"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="56"
              cy="56"
            />
            <circle
              className="text-transparent bg-clip-border bg-gradient-to-r stroke-violet-500"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="url(#grad)"
              fill="transparent"
              r={radius}
              cx="56"
              cy="56"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
          </svg>
          {/* Central score number */}
          <div className="absolute text-center">
            <span className="text-2xl font-extrabold text-white font-mono tracking-tighter block leading-none">
              {score}
            </span>
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mt-0.5">
              OF 100
            </span>
          </div>
        </div>

        {/* Breakdown bars */}
        <div className="flex-1 w-full space-y-2.5">
          {meters.map((meter, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-medium text-zinc-400">
                <span>{meter.label}</span>
                <span className="font-mono text-zinc-200">{meter.val}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${meter.color} transition-all duration-500`}
                  style={{ width: `${meter.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
          Recommendations to Improve
        </span>
        <div className="space-y-1.5">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
              <p className="leading-normal">{rec}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
