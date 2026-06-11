import React from 'react';
import { ArrowLeft, Terminal, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  onBackToHome: () => void;
}

export default function AuthLayout({ children, onBackToHome }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-stretch relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-fuchsia-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Back button at the very top left */}
      <button
        onClick={onBackToHome}
        className="absolute top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-white/10 text-sm font-semibold text-zinc-400 hover:text-white transition-all cursor-pointer backdrop-blur-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Main Container Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
        
        {/* Left Side: Auth Form Content (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 py-20 sm:px-12 md:px-16 lg:px-20 bg-zinc-950/40 backdrop-blur-sm relative border-r border-white/5">
          <div className="w-full max-w-md mx-auto space-y-8 animate-float-delayed">
            {children}
          </div>
        </div>

        {/* Right Side: Branded Illustration / Motivation (7 cols on lg) */}
        <div className="hidden lg:flex lg:col-span-7 flex-col justify-center items-center p-16 relative bg-zinc-900/10 overflow-hidden">
          
          {/* Radial Light Source */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none animate-glow"></div>

          {/* Motivational Copy */}
          <div className="max-w-xl text-center space-y-6 mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build Skills.<br />
              Build Projects.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                Build Your Career.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 font-medium max-w-lg mx-auto">
              Join a community where learning is driven by execution, practical projects, and startup-ready outcomes.
            </p>
          </div>

          {/* Living Mockup Developer Dashboard Graphic */}
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl shadow-2xl space-y-5 animate-float">
            
            {/* Window control dots */}
            <div className="flex items-center space-x-2 border-b border-white/5 pb-3.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-[10px] font-mono text-zinc-500 ml-4">make_mistakes_test_runner.sh</span>
            </div>

            {/* Simulated Test Runner Output */}
            <div className="space-y-3 font-mono text-left text-xs leading-relaxed">
              <div className="flex items-center space-x-2 text-zinc-500">
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>$ ./run_pipeline --validate --env prod</span>
              </div>
              <div className="text-zinc-400 pl-6 border-l border-white/5 space-y-2">
                <p className="text-zinc-500">Initializing codebase audit rules...</p>
                <div className="flex items-center space-x-2 text-rose-400 bg-rose-950/15 px-3 py-1.5 rounded-lg border border-rose-500/10">
                  <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>[FAIL] query_optimization_test.go: N+1 query leak detected</span>
                </div>
                <p className="text-zinc-500">Refactoring database query mapping...</p>
                <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/15 px-3 py-1.5 rounded-lg border border-emerald-500/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>[PASS] query_optimization_test.go: Speed increased by 10x</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/15 px-3 py-1.5 rounded-lg border border-emerald-500/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>[PASS] authentication_timing_check.py: Secured constant-time digest comparison</span>
                </div>
              </div>
              
              {/* Build Summary */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center space-x-1.5 text-zinc-400">
                  <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-zinc-200">Matching Status: 98% Match</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-500/20">
                  STARTUP READY
                </span>
              </div>
            </div>

            {/* Float badges of startups */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl flex items-center space-x-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-zinc-300 font-medium">Supabase hired 4 builders</span>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl flex items-center space-x-2 text-xs">
              <span className="text-zinc-300 font-medium">Vercel matched in 24h</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
