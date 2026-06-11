import { ArrowRight, Play, Terminal, Code, Award, CheckCircle2, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-height-[95vh] pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Grids and Glows */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[130px] pointer-events-none animate-glow"></div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Tag */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-violet-300 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping"></span>
            <span>Join 15,000+ builders mistakes-first</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Stop Watching Tutorials.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Start Building Your Career.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
            Learn by solving real-world problems, build portfolio-worthy projects, validate your skills, and connect with startups looking for builders—not just resumes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href="#getstarted"
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Explore Projects</span>
            </a>
          </div>
        </div>

        {/* Right: Premium Interactive Progression Dashboard */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 w-full rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono text-zinc-500">makemistakes.io/dashboard</span>
            </div>

            {/* Steps Visual Layout */}
            <div className="space-y-4">
              
              {/* Step 1: Learn */}
              <div className="relative group flex items-start space-x-4 p-3 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  <Code className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">Step 1: Choose Path</span>
                    <span className="text-[10px] font-mono text-zinc-500">Selected: Full Stack</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 mt-0.5">Foundations & Best Practices</h4>
                  <p className="text-xs text-zinc-400 mt-1">Acquire context, read architecture reviews, skip sandbox tests.</p>
                </div>
              </div>

              {/* Step 2: Build */}
              <div className="relative group flex items-start space-x-4 p-3 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 transition-all animate-float">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400">Step 2: Build Real</span>
                    <span className="text-[10px] font-mono text-fuchsia-400">Building mission_02...</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 mt-0.5">SaaS CRM Dashboard</h4>
                  <div className="w-full bg-zinc-900 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>

              {/* Step 3: Verify */}
              <div className="relative group flex items-start space-x-4 p-3 rounded-lg border border-emerald-500/30 bg-emerald-950/10 hover:bg-emerald-950/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 3: Validate Skills</span>
                    <span className="inline-flex items-center text-[10px] text-emerald-400 font-mono">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 mt-0.5">Expert PR Review Complete</h4>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] font-mono bg-zinc-900 border border-white/5 px-2 py-0.5 rounded text-zinc-400">API Speed: A+</span>
                    <span className="text-[10px] font-mono bg-zinc-900 border border-white/5 px-2 py-0.5 rounded text-zinc-400">Clean Code: 96%</span>
                  </div>
                </div>
              </div>

              {/* Step 4: Land */}
              <div className="relative group flex items-start space-x-4 p-3 rounded-lg border border-cyan-500/30 bg-cyan-950/10 hover:bg-cyan-950/20 transition-all animate-float-delayed">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Step 4: Connect Startups</span>
                    <span className="text-[10px] font-mono text-cyan-400">Active Offer</span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 mt-0.5">Software Engineering Intern</h4>
                  <p className="text-xs text-cyan-300 mt-1">Offered by Vertex AI · Remote</p>
                </div>
              </div>

            </div>
          </div>

          {/* Decorative Behind Cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-2xl border border-white/5 filter blur-sm -z-10 transform scale-95 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
