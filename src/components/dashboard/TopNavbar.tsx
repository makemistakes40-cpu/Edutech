"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Flame, LogOut, User, LayoutDashboard, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface TopNavbarProps {
  userSession: { name: string; email: string } | null;
  onSignOut: () => void;
}

export default function TopNavbar({ userSession, onSignOut }: TopNavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name: string) => {
    if (!name) return 'MM';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const activeName = userSession?.name ? userSession.name.split(' ')[0] : 'Builder';

  return (
    <header className="h-16 border-b border-white/5 bg-zinc-950/40 backdrop-blur-md px-6 flex items-center justify-between relative z-30">
      
      {/* Personalized Greeting */}
      <div className="text-left">
        <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-1">
          Welcome back, {activeName} 👋
        </h2>
      </div>

      {/* Utility items */}
      <div className="flex items-center space-x-4">
        
        {/* Mock Search Bar */}
        <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-white/5 bg-zinc-900/20 text-zinc-500 w-64 text-left transition-all hover:border-white/10 select-none">
          <Search className="w-4 h-4 text-zinc-500" />
          <span className="text-[11px] font-medium flex-1">Search missions, skills...</span>
          <kbd className="text-[9px] font-mono border border-white/10 px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-500">
            Ctrl + K
          </kbd>
        </div>

        {/* Streak Indicator */}
        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold font-mono shadow-[0_0_15px_-5px_rgba(249,115,22,0.2)]">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
          <span>5 DAY STREAK</span>
        </div>

        {/* Notification Bell */}
        <button className="p-2 rounded-xl bg-zinc-900/40 border border-white/5 text-zinc-400 hover:text-white transition-colors relative cursor-pointer focus:outline-none">
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500 animate-ping" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500" />
        </button>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:scale-105 transition-all border border-white/10 focus:outline-none cursor-pointer"
          >
            {getInitials(userSession?.name || 'Builder')}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-2xl space-y-4 text-left animate-in fade-in slide-in-from-top-2 duration-250">
              <div className="border-b border-white/5 pb-3.5">
                <p className="text-sm font-bold text-white truncate">{userSession?.name || 'Builder'}</p>
                <p className="text-xs text-zinc-500 truncate mt-0.5">{userSession?.email || 'builder@makemistakes.com'}</p>
              </div>

              <div className="flex flex-col space-y-2.5">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    router.push('/');
                  }}
                  className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white py-1.5 focus:outline-none cursor-pointer"
                >
                  <LayoutDashboard className="w-4.5 h-4.5" />
                  <span>Landing Home</span>
                </button>
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white py-1.5 focus:outline-none cursor-pointer"
                >
                  <User className="w-4.5 h-4.5" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white py-1.5 focus:outline-none cursor-pointer"
                >
                  <Settings className="w-4.5 h-4.5" />
                  <span>Account Settings</span>
                </button>
              </div>

              <div className="border-t border-white/5 pt-3.5">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onSignOut();
                  }}
                  className="flex items-center space-x-3 text-sm text-rose-400 hover:text-rose-300 w-full focus:outline-none cursor-pointer"
                >
                  <LogOut className="w-4.5 h-4.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
