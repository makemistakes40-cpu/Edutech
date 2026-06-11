"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

interface PortfolioItems {
  githubConnected: boolean;
  linkedinOptimized: boolean;
  resumeUploaded: boolean;
  projectPublished: boolean;
  capstoneCompleted: boolean;
}

interface DashboardContextType {
  isStarted: boolean;
  setIsStarted: (started: boolean) => void;
  streakCount: number;
  weeklyProgressPercent: number;
  isDailyGoalCompleted: boolean;
  readinessScore: number;
  scoreBreakdown: {
    technical: number;
    projects: number;
    portfolio: number;
    verification: number;
    communication: number;
  };
  unlockedMilestones: string[];
  unlockedAchievements: string[];
  portfolioItems: PortfolioItems;
  togglePortfolioItem: (key: keyof PortfolioItems) => void;
  startLearning: () => void;
  resetProgress: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [isStarted, setIsStarted] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItems>({
    githubConnected: false,
    linkedinOptimized: true,
    resumeUploaded: false,
    projectPublished: false,
    capstoneCompleted: false,
  });

  // Load state from localStorage on mount
  useEffect(() => {
    const savedStarted = localStorage.getItem('mm_dashboard_started');
    if (savedStarted === 'true') {
      setIsStarted(true);
    }
    const savedPortfolio = localStorage.getItem('mm_portfolio_items');
    if (savedPortfolio) {
      try {
        setPortfolioItems(JSON.parse(savedPortfolio));
      } catch (e) {}
    }
  }, []);

  const handleSetIsStarted = (started: boolean) => {
    setIsStarted(started);
    localStorage.setItem('mm_dashboard_started', String(started));
  };

  const handleSetPortfolioItems = (items: PortfolioItems) => {
    setPortfolioItems(items);
    localStorage.setItem('mm_portfolio_items', JSON.stringify(items));
  };

  const startLearning = () => {
    handleSetIsStarted(true);
  };

  const resetProgress = () => {
    handleSetIsStarted(false);
    const initialPortfolio = {
      githubConnected: false,
      linkedinOptimized: true,
      resumeUploaded: false,
      projectPublished: false,
      capstoneCompleted: false,
    };
    setPortfolioItems(initialPortfolio);
    localStorage.removeItem('mm_dashboard_started');
    localStorage.removeItem('mm_portfolio_items');
  };

  const togglePortfolioItem = (key: keyof PortfolioItems) => {
    // Only allow modification if started
    if (!isStarted) return;
    
    const nextItems = {
      ...portfolioItems,
      [key]: !portfolioItems[key],
    };
    handleSetPortfolioItems(nextItems);
  };

  // Compute values dynamically based on starts state & checklist
  const streakCount = isStarted ? 1 : 0;
  const weeklyProgressPercent = isStarted ? 15 : 0;
  const isDailyGoalCompleted = isStarted;

  // Compute dynamic readiness scores based on isStarted and portfolio items
  let readinessScore = 0;
  let scoreBreakdown = {
    technical: 0,
    projects: 0,
    portfolio: 0,
    verification: 0,
    communication: 0,
  };

  if (isStarted) {
    // Started State Base Scores
    let baseScore = 60;
    let tech = 70;
    let proj = 50;
    let port = 20;
    let veri = 80;
    let comm = 90;

    if (portfolioItems.githubConnected) {
      baseScore += 5;
      tech += 5;
      port += 15;
    }
    if (portfolioItems.linkedinOptimized) {
      baseScore += 5;
      port += 15;
    }
    if (portfolioItems.resumeUploaded) {
      baseScore += 10;
      port += 20;
    }
    if (portfolioItems.projectPublished) {
      baseScore += 5; // adjust to fit within 100 max bounds
      proj += 20;
      port += 10;
    }
    if (portfolioItems.capstoneCompleted) {
      baseScore += 10;
      proj += 30;
      port += 10;
    }

    readinessScore = Math.min(98, baseScore);
    scoreBreakdown = {
      technical: Math.min(100, tech),
      projects: Math.min(100, proj),
      portfolio: Math.min(100, port),
      verification: veri,
      communication: comm,
    };
  }

  const unlockedMilestones = isStarted ? ['prog', 'js'] : ['prog'];
  const unlockedAchievements = isStarted ? ['first_mission'] : [];

  return (
    <DashboardContext.Provider value={{
      isStarted,
      setIsStarted: handleSetIsStarted,
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
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
