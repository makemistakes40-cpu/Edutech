"use client";
import React, { useState, useEffect } from 'react';
import HeroBanner from '@/components/dashboard/HeroBanner';
import ProgressCard from '@/components/dashboard/ProgressCard';
import RoadmapPreview from '@/components/dashboard/RoadmapPreview';
import StartupReadinessCard from '@/components/dashboard/StartupReadinessCard';
import AchievementCard from '@/components/dashboard/AchievementCard';
import MissionCard from '@/components/dashboard/MissionCard';
import ProjectCard from '@/components/dashboard/ProjectCard';
import PortfolioCard from '@/components/dashboard/PortfolioCard';
import VerificationCard from '@/components/dashboard/VerificationCard';
import CommunityPreview from '@/components/dashboard/CommunityPreview';
import ActivityTimeline from '@/components/dashboard/ActivityTimeline';
import { useDashboard } from './DashboardContext';
import { Compass, RotateCcw, AlertCircle, Play } from 'lucide-react';

interface UserSession {
  name: string;
  email: string;
  careerClarity?: string;
  codingExperience?: string;
  interests?: string[];
  mainGoal?: string;
  weeklyAvailability?: string;
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  const {
    isStarted,
    streakCount,
    weeklyProgressPercent,
    isDailyGoalCompleted,
    readinessScore,
    scoreBreakdown,
    unlockedMilestones,
    unlockedAchievements,
    portfolioItems,
    togglePortfolioItem,
    startLearning,
    resetProgress,
  } = useDashboard();

  // Load session from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mm_user_session');
    if (saved) {
      try {
        setUserSession(JSON.parse(saved));
      } catch (e) {}
    }

    // Simulate skeleton loading latency
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Render Skeleton Loader View
  if (isLoading) {
    return (
      <div className="space-y-8 animate-pulse text-left select-none">
        {/* Hero skeleton */}
        <div className="h-44 w-full bg-zinc-900/40 border border-white/5 rounded-3xl" />
        
        {/* Two column layout skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-48 bg-zinc-900/40 border border-white/5 rounded-2xl" />
            <div className="h-48 bg-zinc-900/40 border border-white/5 rounded-2xl" />
          </div>
          <div className="space-y-6">
            <div className="h-40 bg-zinc-900/40 border border-white/5 rounded-2xl" />
            <div className="h-56 bg-zinc-900/40 border border-white/5 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  // Map user session parameters or use fallback defaults
  const careerTrackName = userSession?.careerClarity || 'Software Engineer';
  const activeGoal = userSession?.mainGoal || 'Build My Own Startup';
  const activeAvailability = userSession?.weeklyAvailability || '10–20 Hours';
  const activeExperience = userSession?.codingExperience || 'Knows the Basics';

  // Dynamic contributor details for StartupReadinessCard
  const learningProgressPercent = isStarted ? 15 : 0;
  const completedProjectsPercent = isStarted 
    ? (10 + (portfolioItems.projectPublished ? 40 : 0) + (portfolioItems.capstoneCompleted ? 50 : 0))
    : 0;
  const verifiedSkillsPercent = isStarted ? 20 : 0;
  const portfolioQualityPercent = isStarted
    ? (20 + (portfolioItems.githubConnected ? 40 : 0) + (portfolioItems.resumeUploaded ? 40 : 0))
    : 0;
  const communityPercent = isStarted ? 15 : 0;

  // Mock projects based on started state
  const projectsData = [
    {
      title: 'Personal Portfolio Website',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      completionPercent: isStarted ? 45 : 0,
      status: (isStarted ? 'In Progress' : 'Not Started') as 'In Progress' | 'Completed' | 'Not Started',
    },
    {
      title: 'URL Shortener API',
      techStack: ['Node.js', 'Express.js', 'MongoDB'],
      completionPercent: 0,
      status: 'Not Started' as const,
    },
    {
      title: 'Expense Tracker Backend',
      techStack: ['Node.js', 'PostgreSQL', 'Redis'],
      completionPercent: 0,
      status: 'Not Started' as const,
    },
  ];

  // Mock activity timelines based on started state
  const activitiesData = isStarted
    ? [
        { title: 'Started JavaScript Syntax module', time: 'Just now', type: 'LEARNING' },
        { title: 'Earned "First Mission" achievement badge', time: 'Just now', type: 'BADGE' },
        { title: 'Completed onboarding questionnaire', time: '1 hour ago', type: 'ONBOARDING' },
      ]
    : [
        { title: 'Completed onboarding questionnaire', time: '1 hour ago', type: 'ONBOARDING' },
      ];

  const mockDiscussions = [
    { title: 'How to write custom middleware in Next.js App Router?', replies: 12 },
    { title: 'Deploying docker containers to AWS ECS guide', replies: 8 },
  ];

  const mockEvents = [
    { title: 'Weekly Hack Sprints - Build an AI Broker', date: 'June 18, 6:00 PM' },
    { title: 'CTO Roundtable - Q&A on placements', date: 'June 22, 5:00 PM' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Hero Welcome & Overview Banner */}
      <HeroBanner
        userName={userSession?.name || 'Builder'}
        onContinueLearning={startLearning}
        onViewRoadmap={() => {
          const element = document.getElementById('roadmap-preview-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Prominent Empty State Card */}
      {!isStarted && (
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-violet-955/10 p-6 md:p-8 text-left shadow-xl animate-in zoom-in-95 duration-200">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono font-bold text-violet-300 uppercase tracking-wider">
                💡 Start Journey
              </span>
              <h2 className="text-base md:text-lg font-bold text-zinc-100 tracking-tight leading-snug">
                You haven't started yet. Begin your first module and start building real-world skills.
              </h2>
              <p className="text-xs text-zinc-400 leading-normal">
                Unlock active coding sprints, dynamic readiness tracking, achievements, and matching filters for real startups.
              </p>
            </div>
            
            <button
              onClick={startLearning}
              className="px-5 py-3 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 h-fit"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start Learning Now</span>
            </button>
          </div>
        </div>
      )}

      {/* Two Column Cockpit Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Double-Column Side */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 2. Progress Tracker Cards */}
          <ProgressCard
            careerTrack={careerTrackName}
            goal={activeGoal}
            experience={activeExperience}
            weeklyCommitment={activeAvailability}
            completionPercent={isStarted ? 15 : 0}
            nextModuleName="Programming Fundamentals"
            nextModuleTime="45 Minutes"
            isStarted={isStarted}
            onStartModule={startLearning}
          />

          {/* 3. Roadmap Milestone Preview */}
          <div id="roadmap-preview-section">
            <RoadmapPreview unlockedList={unlockedMilestones} />
          </div>

          {/* 4. Active Mission Challenge Card */}
          <MissionCard
            title="Build a REST API for a Notes App"
            difficulty="Beginner"
            skills={['Node.js', 'Express.js', 'REST APIs']}
            xpReward={100}
            onStart={startLearning}
          />

          {/* 5. Codebase Projects Portfolio */}
          <div className="space-y-4">
            <div className="text-left">
              <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                My Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectsData.map((proj, idx) => (
                <ProjectCard
                  key={idx}
                  title={proj.title}
                  techStack={proj.techStack}
                  completionPercent={proj.completionPercent}
                  status={proj.status}
                  onContinue={startLearning}
                />
              ))}
            </div>
          </div>

          {/* 6. Achievement Badges */}
          <AchievementCard unlockedList={unlockedAchievements} />

        </div>

        {/* Right Single-Column Sidebar Section */}
        <div className="space-y-6">
          
          {/* 7. Startup Readiness Gauge Score */}
          <StartupReadinessCard
            score={readinessScore}
            learningProgress={learningProgressPercent}
            completedProjects={completedProjectsPercent}
            verifiedSkills={verifiedSkillsPercent}
            portfolioQuality={portfolioQualityPercent}
            communityParticipation={communityPercent}
          />

          {/* 8. Profile Checklist Cards */}
          <PortfolioCard
            items={portfolioItems}
            onToggleItem={(key) => togglePortfolioItem(key as any)}
          />

          {/* 9. Skill Verification Assessment metrics */}
          <VerificationCard
            validatedCount={isStarted ? 3 : 0}
            inProgressCount={isStarted ? 5 : 0}
            pendingCount={isStarted ? 2 : 0}
          />

          {/* 10. Community Forum & Events previews */}
          <CommunityPreview
            discussions={mockDiscussions}
            events={mockEvents}
            onViewCommunity={() => console.log('Opening community...')}
          />

          {/* 11. Recent Activity logs */}
          <ActivityTimeline activities={activitiesData} />

        </div>

      </div>

      {/* Simulator Reset Controls at Footer */}
      <div className="border-t border-white/5 pt-6 flex justify-center">
        <button
          onClick={resetProgress}
          className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-500 hover:text-zinc-300 hover:border-white/10 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Simulation State (Back to Empty State)</span>
        </button>
      </div>

    </div>
  );
}
