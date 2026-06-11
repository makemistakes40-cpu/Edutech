"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDashboard } from '../DashboardContext';
import { getRoadmapForTrack } from '@/data/roadmapData';
import { ModuleData } from '@/components/dashboard/ModuleCard';
import RoadmapHeader from '@/components/dashboard/RoadmapHeader';
import ProgressOverviewCard from '@/components/dashboard/ProgressOverviewCard';
import ModuleTimeline from '@/components/dashboard/ModuleTimeline';
import CurrentModuleCard from '@/components/dashboard/CurrentModuleCard';
import ProjectPreviewCard from '@/components/dashboard/ProjectPreviewCard';
import XPProgressCard from '@/components/dashboard/XPProgressCard';
import { ArrowLeft, BookOpen, Sparkles, Terminal, Award, HelpCircle, X, Check } from 'lucide-react';

interface UserSession {
  name: string;
  email: string;
  careerClarity?: string;
  codingExperience?: string;
  interests?: string[];
  mainGoal?: string;
  weeklyAvailability?: string;
}

export default function RoadmapPage() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [selectedPreviewModule, setSelectedPreviewModule] = useState<ModuleData | null>(null);
  const router = useRouter();

  const { isStarted, startLearning } = useDashboard();

  // Load session from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mm_user_session');
    if (saved) {
      try {
        setUserSession(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const careerTrackName = userSession?.careerClarity || 'Backend Developer';
  const trackData = getRoadmapForTrack(careerTrackName);

  // Determine active index of timeline:
  // If isStarted is true: index 1 is current (JavaScript Basics), index 0 (Fundamentals) is completed
  // If isStarted is false: index 0 is current (Fundamentals), none are completed
  const activeModuleIndex = isStarted ? 1 : 0;
  const currentActiveModule = trackData.modules[activeModuleIndex];
  const modulesCompleted = isStarted ? 1 : 0;
  const totalModules = trackData.modules.length;
  const progressPercent = isStarted ? 15 : 0;
  const xpEarned = isStarted ? 450 : 150;
  const estTimeRemaining = isStarted ? '24 Hours' : '30 Hours';

  // Dynamic projects with updated status based on isStarted
  const projectsWithStatus = trackData.projects.map((proj, idx) => {
    if (idx === 0) {
      return {
        ...proj,
        status: (isStarted ? 'In Progress' : 'Not Started') as 'Completed' | 'In Progress' | 'Not Started'
      };
    }
    return proj;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 text-left">
      
      {/* 1. Page Header Section */}
      <RoadmapHeader
        trackName={trackData.trackName}
        progressPercent={progressPercent}
        estTimeRemaining={estTimeRemaining}
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Double-Column Side */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 2. Timeline Grid of Milestones */}
          <ModuleTimeline
            modules={trackData.modules}
            activeIndex={activeModuleIndex}
            onSelectModule={(mod) => setSelectedPreviewModule(mod)}
          />

          {/* 3. Featured Current Module Card */}
          <CurrentModuleCard
            module={currentActiveModule}
            isStarted={isStarted}
            onStart={startLearning}
          />

          {/* 4. Portfolio Projects list */}
          <ProjectPreviewCard projects={projectsWithStatus} />

          {/* 5. Navigation Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            <button
              onClick={() => {
                startLearning();
                // Simulate navigating to lessons by showing a success alert
                alert("Navigating to lesson workspace... Let's start coding!");
              }}
              className="px-6 py-3 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2 focus:outline-none"
            >
              <span>Continue Current Module</span>
            </button>
            <Link
              href="/dashboard"
              className="px-6 py-3 text-xs font-bold text-zinc-300 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-white/10 hover:text-white transition-all cursor-pointer flex items-center justify-center space-x-2 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-500" />
              <span>Go Back to Dashboard</span>
            </Link>
          </div>

        </div>

        {/* Right Single-Column Sidebar Section */}
        <div className="space-y-6">
          
          {/* 6. Progress Overview Card */}
          <ProgressOverviewCard
            careerTrack={trackData.trackName}
            modulesCompleted={modulesCompleted}
            totalModules={totalModules}
            projectsBuilt={0} // initially 0
            xpEarned={xpEarned}
            progressPercent={progressPercent}
          />

          {/* 7. XP & Milestones progression */}
          <XPProgressCard
            currentXp={xpEarned}
            nextMilestoneXp={750}
          />

        </div>

      </div>

      {/* 8. Detailed Module Preview Dialog Modal */}
      {selectedPreviewModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl p-6 relative overflow-hidden text-left animate-in zoom-in-95 duration-200">
            {/* Glowing background */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-violet-600/10 rounded-full blur-[60px] pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPreviewModule(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg border border-white/5 bg-zinc-950/60 text-zinc-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="space-y-1.5 border-b border-white/5 pb-4 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] font-mono text-violet-300 uppercase tracking-wider">
                Module Details
              </span>
              <h3 className="text-base font-bold text-white tracking-tight pt-1">
                {selectedPreviewModule.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-normal">
                {selectedPreviewModule.description}
              </p>
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              
              {/* Skills */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                  Skills You Will Gain
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPreviewModule.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-zinc-300 bg-zinc-950 border border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                  Mini Practice Challenges
                </span>
                <div className="space-y-1.5">
                  {selectedPreviewModule.challenges.map((chal, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-zinc-400">
                      <div className="w-3.5 h-3.5 rounded bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-500 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{chal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Outcomes */}
              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Real-World practice Mission
                </span>
                <p className="text-xs text-zinc-300 font-semibold leading-normal">
                  {selectedPreviewModule.mission}
                </p>
                <div className="text-[9px] text-zinc-500 leading-normal flex items-center gap-1 font-mono pt-1">
                  <span className="text-violet-400 font-bold uppercase">OUTCOME:</span>
                  <span>{selectedPreviewModule.projectOutcome}</span>
                </div>
              </div>

            </div>

            {/* Bottom close CTA */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setSelectedPreviewModule(null)}
                className="px-4 py-2 text-xs font-bold text-white rounded-lg bg-zinc-950 border border-white/5 hover:border-white/10 hover:bg-zinc-900/30 transition-all cursor-pointer focus:outline-none"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
