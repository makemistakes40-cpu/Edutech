"use client";
import React from 'react';
import { Activity, Clock } from 'lucide-react';

interface ActivityItem {
  title: string;
  time: string;
  type: string;
}

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          History
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Activity className="w-4.5 h-4.5 text-violet-400" />
          Recent Activity Timeline
        </h4>
      </div>

      {/* Timeline List */}
      <div className="relative pl-4 space-y-5 border-l border-white/5 ml-2">
        {activities.map((act, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[21.5px] top-1 w-3 h-3 rounded-full bg-zinc-950 border border-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform" />
            
            {/* Context */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-200 block group-hover:text-violet-400 transition-colors">
                {act.title}
              </span>
              <div className="flex items-center space-x-1 text-[9px] font-mono text-zinc-500">
                <Clock className="w-3 h-3 text-zinc-600" />
                <span>{act.time}</span>
                <span className="text-zinc-700">•</span>
                <span className="uppercase text-[8px] tracking-wider text-zinc-400">{act.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
