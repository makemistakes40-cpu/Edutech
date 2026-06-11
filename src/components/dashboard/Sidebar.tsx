"use client";
import React from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  BookOpen, 
  FolderGit2, 
  ShieldCheck, 
  Briefcase, 
  Rocket, 
  Users, 
  User, 
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  activeTab,
  setActiveTab,
}: SidebarProps) {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Roadmap', icon: Compass },
    { name: 'Learning', icon: BookOpen },
    { name: 'Projects', icon: FolderGit2 },
    { name: 'Skill Verification', icon: ShieldCheck },
    { name: 'Startup Opportunities', icon: Rocket },
    { name: 'Community', icon: Users },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-zinc-900/40 backdrop-blur-xl border-r border-white/5 flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
        {!isCollapsed && (
          <div className="flex items-center space-x-2 group animate-in fade-in duration-300">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="text-lg relative -top-[1px] font-extrabold">X</span>
            </div>
            <span className="text-sm font-extrabold tracking-tight text-white">
              Make<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Mistakes</span>
            </span>
          </div>
        )}

        {isCollapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white mx-auto">
            <span className="text-lg relative -top-[1px] font-extrabold">X</span>
          </div>
        )}
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto pr-1 scrollbar-thin">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-1 focus:ring-violet-500 ${
                isActive
                  ? 'bg-violet-600/10 border border-violet-500/20 text-white font-semibold'
                  : 'bg-transparent border border-transparent text-zinc-400 hover:text-white hover:bg-zinc-950/40 hover:border-white/5'
              }`}
              aria-label={item.name}
            >
              <Icon
                className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-105 ${
                  isActive ? 'text-violet-400' : 'text-zinc-500 group-hover:text-zinc-300'
                }`}
              />
              {!isCollapsed && (
                <span className="text-xs tracking-wide truncate animate-in fade-in duration-300">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Collapse Toggle Footer Button */}
      <div className="p-4 border-t border-white/5 flex justify-end">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-zinc-950/40 border border-white/5 text-zinc-500 hover:text-white hover:border-white/10 transition-colors focus:outline-none cursor-pointer"
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
}
