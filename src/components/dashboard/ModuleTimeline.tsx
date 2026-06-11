"use client";
import React from 'react';
import ModuleCard, { ModuleData } from './ModuleCard';

interface ModuleTimelineProps {
  modules: ModuleData[];
  activeIndex: number;
  onSelectModule: (module: ModuleData) => void;
}

export default function ModuleTimeline({
  modules,
  activeIndex,
  onSelectModule,
}: ModuleTimelineProps) {
  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-6 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg w-full">
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Header Label */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Milestone Path
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight">
          Learning Track Milestones
        </h4>
      </div>

      {/* Grid of connected modules */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full relative z-10">
        {modules.map((mod, idx) => {
          let status: 'Completed' | 'Current' | 'Locked' = 'Locked';
          if (idx < activeIndex) status = 'Completed';
          else if (idx === activeIndex) status = 'Current';

          return (
            <ModuleCard
              key={mod.id}
              index={idx}
              module={mod}
              status={status}
              onClick={onSelectModule}
            />
          );
        })}
      </div>

    </div>
  );
}
