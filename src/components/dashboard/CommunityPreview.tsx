"use client";
import React from 'react';
import { Users, MessagesSquare, Calendar, Award, ArrowRight } from 'lucide-react';

interface Discussion {
  title: string;
  replies: number;
}

interface CodingEvent {
  title: string;
  date: string;
}

interface CommunityPreviewProps {
  discussions: Discussion[];
  events: CodingEvent[];
  onViewCommunity: () => void;
}

export default function CommunityPreview({
  discussions,
  events,
  onViewCommunity,
}: CommunityPreviewProps) {
  return (
    <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-6 rounded-2xl space-y-5 text-left relative overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      
      {/* Title */}
      <div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
          Networking
        </span>
        <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Users className="w-4.5 h-4.5 text-violet-400" />
          Community Preview
        </h4>
      </div>

      {/* Content Split: Discussions & Events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-white/5 pb-4">
        
        {/* Active Discussions */}
        <div className="space-y-3">
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
            <MessagesSquare className="w-3.5 h-3.5 text-zinc-600" /> Active Discussions
          </span>
          <div className="space-y-2">
            {discussions.map((disc, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-zinc-950/40 border border-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/10 transition-colors select-none">
                <p className="font-semibold truncate">{disc.title}</p>
                <span className="text-[9px] font-mono text-zinc-500 mt-1 block">
                  {disc.replies} replies
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Coding Events */}
        <div className="space-y-3">
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wide flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-zinc-600" /> Upcoming Events
          </span>
          <div className="space-y-2">
            {events.map((evt, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-zinc-950/40 border border-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/10 transition-colors select-none">
                <p className="font-semibold truncate">{evt.title}</p>
                <span className="text-[9px] font-mono text-zinc-500 mt-1 block">
                  {evt.date}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* View Community CTA */}
      <div>
        <button
          onClick={onViewCommunity}
          className="w-full py-2.5 rounded-xl border border-white/5 bg-zinc-950 text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-900/30 hover:border-white/10 transition-all cursor-pointer flex items-center justify-center space-x-1.5 focus:outline-none"
        >
          <span>View Community Workspace</span>
          <ArrowRight className="w-3.5 h-3.5 text-violet-400 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

    </div>
  );
}
