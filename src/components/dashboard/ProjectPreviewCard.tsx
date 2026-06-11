"use client";
import React from 'react';
import { FolderGit2, Star, CheckCircle } from 'lucide-react';
import { RoadmapProject } from '@/data/roadmapData';

interface ProjectPreviewCardProps {
  projects: RoadmapProject[];
}

export default function ProjectPreviewCard({ projects }: ProjectPreviewCardProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Beginner':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Intermediate':
        return 'text-violet-400 bg-violet-500/10 border-violet-500/20';
      case 'Advanced':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      default:
        return 'text-zinc-400 bg-zinc-500/10 border-white/5';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'In Progress':
        return 'text-violet-400 bg-violet-500/10 border-violet-500/25';
      default:
        return 'text-zinc-500 bg-zinc-950 border-white/5';
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="text-left">
        <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
          Portfolio Projects You'll Build
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-zinc-950/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-44 hover:border-white/10 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Header: icon and difficulty */}
            <div className="flex justify-between items-start w-full">
              <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 group-hover:text-white transition-colors">
                <FolderGit2 className="w-4.5 h-4.5" />
              </div>
              <span className={`text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded-lg border ${getDifficultyColor(proj.difficulty)}`}>
                {proj.difficulty}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-1 mt-4">
              <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors block line-clamp-2">
                {proj.title}
              </h4>
            </div>

            {/* Footer Stack Tags & Status */}
            <div className="border-t border-white/5 pt-3 mt-3 flex justify-between items-center w-full">
              {/* Tech Stack List */}
              <div className="flex flex-wrap gap-1 max-w-[65%]">
                {proj.techStack.slice(0, 2).map((tech, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[8px] font-bold text-zinc-400 bg-zinc-900 border border-white/5 px-1.5 py-0.5 rounded truncate"
                  >
                    {tech}
                  </span>
                ))}
                {proj.techStack.length > 2 && (
                  <span className="text-[7px] font-bold text-zinc-600 px-1 py-0.5">
                    +{proj.techStack.length - 2}
                  </span>
                )}
              </div>
              
              {/* Status Badge */}
              <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border shrink-0 ${getStatusLabel(proj.status)}`}>
                {proj.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
