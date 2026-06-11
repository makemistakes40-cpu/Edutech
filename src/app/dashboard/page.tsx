"use client";
import React, { useState, useEffect } from 'react';
import HeroCard from '@/components/dashboard/HeroCard';
import RoadmapCard from '@/components/dashboard/RoadmapCard';
import ContinueLearningCard from '@/components/dashboard/ContinueLearningCard';
import MissionCard from '@/components/dashboard/MissionCard';
import ProjectCard from '@/components/dashboard/ProjectCard';
import VerificationCard from '@/components/dashboard/VerificationCard';
import PortfolioCard from '@/components/dashboard/PortfolioCard';
import ReadinessCard from '@/components/dashboard/ReadinessCard';
import StartupCard from '@/components/dashboard/StartupCard';
import ActivityTimeline from '@/components/dashboard/ActivityTimeline';
import AchievementGrid from '@/components/dashboard/AchievementGrid';
import CommunityPreview from '@/components/dashboard/CommunityPreview';

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
  
  // Interactive Checklist State
  const [portfolioItems, setPortfolioItems] = useState({
    githubConnected: false,
    linkedinOptimized: true,
    resumeUploaded: false,
    projectPublished: false,
    capstoneCompleted: false,
  });

  // Startup Readiness Score calculations
  const [readinessScore, setReadinessScore] = useState(72);
  const [scoreBreakdown, setScoreBreakdown] = useState({
    technical: 75,
    projects: 60,
    portfolio: 40,
    verification: 80,
    communication: 90,
  });

  // Recommendations based on checklist
  const [recommendations, setRecommendations] = useState<string[]>([
    'Connect your GitHub profile to showcase codebase commits.',
    'Upload your latest technical resume to match startup filters.',
    'Finish the active capstone project to raise your score past 80.',
  ]);

  // Load session from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mm_user_session');
    if (saved) {
      try {
        setUserSession(JSON.parse(saved));
      } catch (e) {
        // Fallback
      }
    }

    // Simulate skeleton loading latency
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Update score breakdown when portfolio items toggle
  const handleTogglePortfolioItem = (key: string) => {
    const nextItems = {
      ...portfolioItems,
      [key as keyof typeof portfolioItems]: !portfolioItems[key as keyof typeof portfolioItems],
    };
    setPortfolioItems(nextItems);

    // Compute dynamic scores based on checklist
    let baseScore = 60;
    let tech = 70;
    let proj = 50;
    let port = 20;

    if (nextItems.githubConnected) {
      baseScore += 5;
      tech += 5;
      port += 15;
    }
    if (nextItems.linkedinOptimized) {
      baseScore += 5;
      port += 15;
    }
    if (nextItems.resumeUploaded) {
      baseScore += 10;
      port += 20;
    }
    if (nextItems.projectPublished) {
      baseScore += 10;
      proj += 20;
      port += 20;
    }
    if (nextItems.capstoneCompleted) {
      baseScore += 10;
      proj += 30;
      port += 10;
    }

    setReadinessScore(baseScore);
    setScoreBreakdown({
      technical: Math.min(100, tech),
      projects: Math.min(100, proj),
      portfolio: Math.min(100, port),
      verification: 80,
      communication: 90,
    });

    // Update recommendations dynamically
    const recs = [];
    if (!nextItems.githubConnected) {
      recs.push('Connect your GitHub profile to showcase codebase commits.');
    }
    if (!nextItems.resumeUploaded) {
      recs.push('Upload your latest technical resume to match startup filters.');
    }
    if (!nextItems.capstoneCompleted) {
      recs.push('Finish the active capstone project to raise your score past 80.');
    }
    if (recs.length === 0) {
      recs.push('Excellent profile! You are fully startup-ready.');
    }
    setRecommendations(recs);
  };

  // Mock datasets
  const mockProjects = [
    {
      title: 'Startup Launchpad MVP',
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL'],
      completionPercent: 70,
      status: 'In Progress' as const,
    },
    {
      title: 'AI Chat Assistant Broker',
      techStack: ['Python', 'OpenAI', 'LangChain'],
      completionPercent: 20,
      status: 'In Progress' as const,
    },
    {
      title: 'Payment Gateway Integration',
      techStack: ['Node.js', 'Stripe API', 'Redis'],
      completionPercent: 0,
      status: 'Not Started' as const,
    },
  ];

  const mockStartups = [
    {
      name: 'ScribeAI',
      domain: 'Enterprise AI & NLP',
      skills: ['Python', 'Next.js', 'PostgreSQL'],
      matchPercent: 95,
    },
    {
      name: 'ZenPay',
      domain: 'FinTech & Payments',
      skills: ['Node.js', 'React Native', 'Stripe API'],
      matchPercent: 88,
    },
    {
      name: 'OpsVibe',
      domain: 'Cloud Infrastructure',
      skills: ['Terraform', 'Docker', 'Go'],
      matchPercent: 82,
    },
  ];

  const mockActivities = [
    { title: 'Completed onboarding questionnaire', time: '2 hours ago', type: 'ONBOARDING' },
    { title: 'Finished HTML/CSS core module', time: '1 day ago', type: 'LEARNING' },
    { title: 'Started JavaScript core module', time: '1 day ago', type: 'LEARNING' },
    { title: 'Earned "First Project" achievement badge', time: '2 days ago', type: 'BADGE' },
  ];

  const mockDiscussions = [
    { title: 'How to write custom middleware in Next.js App Router?', replies: 12 },
    { title: 'Deploying docker containers to AWS ECS guide', replies: 8 },
  ];

  const mockEvents = [
    { title: 'Weekly Hack Sprints - Build an AI Broker', date: 'June 18, 6:00 PM' },
    { title: 'CTO Roundtable - Q&A on startup placements', date: 'June 22, 5:00 PM' },
  ];

  // Render Skeleton Loader View
  if (isLoading) {
    return (
      <div className="space-y-8 animate-pulse text-left select-none">
        {/* Hero skeleton */}
        <div className="h-44 w-full bg-zinc-900/40 border border-white/5 rounded-3xl" />
        
        {/* Two column layout skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
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

  // Get active track configuration based on onboarding selections
  const activeTrack = userSession?.interests && userSession.interests.length > 0
    ? userSession.interests[0]
    : 'Full-Stack Development';

  const activeGoal = userSession?.mainGoal || 'Get my first internship';
  const activeAvailability = userSession?.weeklyAvailability || '10–20 hours';

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Hero Welcome Card */}
      <HeroCard
        onContinueLearning={() => console.log('Routing to learn...')}
        onViewRoadmap={() => console.log('Routing to roadmap...')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Double-Column Side */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 2. Roadmap progress and active modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoadmapCard
              careerTrack={activeTrack}
              currentLevel="Level 1: Candidate"
              goal={activeGoal}
              weeklyCommitment={activeAvailability}
              completionPercent={18}
              onResume={() => console.log('Resuming journey...')}
            />
            <ContinueLearningCard
              moduleName="JavaScript Fundamentals"
              progressPercent={45}
              timeRemaining="2 hours remaining"
              onContinue={() => console.log('Continuing module...')}
            />
          </div>

          {/* 3. Active Mission Card */}
          <MissionCard
            title="Build a Task Management API"
            difficulty="Intermediate"
            skills={['Node.js', 'REST APIs', 'PostgreSQL']}
            xpReward={200}
            onStart={() => console.log('Starting mission...')}
          />

          {/* 4. Projects Section */}
          <div className="space-y-4">
            <div className="text-left">
              <h3 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest">
                My Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockProjects.map((proj, idx) => (
                <ProjectCard
                  key={idx}
                  title={proj.title}
                  techStack={proj.techStack}
                  completionPercent={proj.completionPercent}
                  status={proj.status}
                  onContinue={() => console.log(`Routing to project: ${proj.title}`)}
                />
              ))}
            </div>
          </div>

          {/* 5. Startup Opportunities */}
          <div className="space-y-4">
            <div className="text-left">
              <h3 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Recommended Startup Openings
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockStartups.map((startup, idx) => (
                <StartupCard
                  key={idx}
                  name={startup.name}
                  domain={startup.domain}
                  skills={startup.skills}
                  matchPercent={startup.matchPercent}
                  onViewDetails={() => console.log(`Viewing startup: ${startup.name}`)}
                />
              ))}
            </div>
          </div>

          {/* 6. Achievements Grid */}
          <AchievementGrid unlockedList={['first_project', 'bug_hunter', 'portfolio_builder']} />

        </div>

        {/* Right Single-Column Sidebar Section */}
        <div className="space-y-6">
          
          {/* 7. Startup Readiness Score */}
          <ReadinessCard
            score={readinessScore}
            breakdown={scoreBreakdown}
            recommendations={recommendations}
          />

          {/* 8. Portfolio Progress Checklist */}
          <PortfolioCard
            items={portfolioItems}
            onToggleItem={handleTogglePortfolioItem}
          />

          {/* 9. Skill Verification status */}
          <VerificationCard
            validatedCount={3}
            inProgressCount={5}
            pendingCount={2}
          />

          {/* 10. Community Preview */}
          <CommunityPreview
            discussions={mockDiscussions}
            events={mockEvents}
            onViewCommunity={() => console.log('Routing to community...')}
          />

          {/* 11. Activity Timeline log */}
          <ActivityTimeline activities={mockActivities} />

        </div>

      </div>

    </div>
  );
}
