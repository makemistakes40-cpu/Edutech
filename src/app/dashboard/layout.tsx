"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import TopNavbar from '@/components/dashboard/TopNavbar';

interface UserSession {
  name: string;
  email: string;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('mm_user_session');
    if (!saved) {
      router.push('/signin');
    } else {
      try {
        setUserSession(JSON.parse(saved));
      } catch (e) {
        router.push('/signin');
      }
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem('mm_user_session');
    router.push('/');
    router.refresh();
  };

  if (!userSession) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex relative overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      
      {/* Collapsible Left Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main layout container shifting according to sidebar state */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
        isCollapsed ? 'pl-20' : 'pl-64'
      }`}>
        
        {/* Top Navbar */}
        <TopNavbar
          userSession={userSession}
          onSignOut={handleSignOut}
        />

        {/* Dashboard Content split into Main and Right Sidebar */}
        <div className="flex-1 flex flex-col lg:flex-row">
          
          {/* Main Content Area */}
          <main className="flex-1 p-6 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
            {children}
          </main>

          {/* Right Sidebar (reserved for future notifications & mentor updates) */}
          <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/5 bg-zinc-950/20 backdrop-blur-md p-6 space-y-6 lg:min-h-full text-left">
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Mentor Activity & Updates
              </h3>
              
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-[10px] font-mono text-zinc-500">SYSTEM NOTE</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  Welcome to your new personalized cockpit! Complete validation challenges to unlock premium reviews from engineering mentors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-500">MATCH ALERT</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  Three startups looking for Full Stack builders in Bangalore just matched with your targeted skills! Increase your score to 80+ to reveal CTO profiles.
                </p>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}
