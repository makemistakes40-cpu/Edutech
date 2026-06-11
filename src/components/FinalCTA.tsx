import { ArrowRight, Code } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="getstarted" className="relative py-24 overflow-hidden">
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 blur-[130px] pointer-events-none animate-glow"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main CTA Panel */}
        <div className="relative rounded-3xl border border-white/10 bg-zinc-950/60 p-12 md:p-16 text-center backdrop-blur-xl shadow-2xl overflow-hidden group">
          
          {/* Inner Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>

          {/* Sparkles / Mini elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-fuchsia-300">
              <Code className="w-3.5 h-3.5" />
              <span>EXECUTION &gt; RESUMES</span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Resume Doesn't Get You Hired.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                Your Work Does.
              </span>
            </h3>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Join a platform designed for students who want to prove their skills through execution. Start building real software today.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
              <a
                href="#getstarted"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center space-x-2 group"
              >
                <span>Start Building</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#tracks"
                className="px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                View Programs
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
