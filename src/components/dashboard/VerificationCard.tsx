"use client";
import React from 'react';
import { ShieldCheck, Award, Hourglass, HelpCircle } from 'lucide-react';

interface VerificationCardProps {
  validatedCount: number;
  inProgressCount: number;
  pendingCount: number;
}

export default function VerificationCard({
  validatedCount,
  inProgressCount,
  pendingCount,
}: VerificationCardProps) {
  const total = validatedCount + inProgressCount + pendingCount || 1;
  const validatedPercent = Math.round((validatedCount / total) * 100);
  const inProgressPercent = Math.round((inProgressCount / total) * 100);
  const pendingPercent = Math.round((pendingCount / total) * 100);

  const stats = [
    {
      label: 'Skills Validated',
      count: validatedCount,
      percent: validatedPercent,
      color: 'bg-emerald-500',
      icon: ShieldCheck,
      iconColor: 'text-emerald-400',
    },
    {
      label: 'Skills In Progress',
      count: inProgressCount,
      percent: inProgressPercent,
      color: 'bg-violet-500',
      icon: Hourglass,
      iconColor: 'text-violet-400',
    },
    {
      label: 'Pending Assessments',
      count: pendingCount,
      percent: pendingPercent,
      color: 'bg-amber-500',
      icon: HelpCircle,
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Verification
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <ShieldCheck className="w-4.5 h-4.5 text-violet-400" />
          Skill Validation Status
        </h4>
      </div>

      {/* Row Items */}
      <div className="space-y-4">
        {stats.map((stat, idx) => {
          const StatIcon = stat.icon;
          return (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <div className="flex items-center space-x-2">
                  <StatIcon className={`w-4 h-4 ${stat.iconColor}`} />
                  <span className="text-zinc-300">{stat.label}</span>
                </div>
                <span className="font-mono font-bold text-white">{stat.count}</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${stat.color} transition-all duration-500`}
                  style={{ width: `${stat.percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
