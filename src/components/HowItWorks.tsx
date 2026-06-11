import { Compass, Cpu, FileCheck2, Handshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Path',
      description: 'Select from AI Engineering, Full Stack, Data Science, Mobile Dev, or Cybersecurity based on your interests.',
      icon: Compass,
      color: 'text-violet-400 border-violet-500/20 bg-violet-500/5',
      glow: 'shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    },
    {
      number: '02',
      title: 'Build Real Projects',
      description: 'Acquire access to practical, industry-grade missions simulating real-world startup features and APIs.',
      icon: Cpu,
      color: 'text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-500/5',
      glow: 'shadow-[0_0_30px_rgba(217,70,239,0.15)]',
    },
    {
      number: '03',
      title: 'Validate Your Skills',
      description: 'Prove your engineering capabilities through rigorous test suites, automated linters, and code reviews.',
      icon: FileCheck2,
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    },
    {
      number: '04',
      title: 'Connect with Startups',
      description: 'Get matched with high-growth startups and pitch with verified PRs and working prototypes.',
      icon: Handshake,
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    },
  ];

  return (
    <section id="programs" className="relative py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            How It Works
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            A Structured Journey From Student to Professional
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Traditional resumes tell startups what you studied. MakeMistakes lets you show them what you built.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Only visible on Desktop lg screens) */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-[2px] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 -translate-y-12 z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step Circle with Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-115 relative z-10 ${step.color} ${step.glow} mb-6`}
                >
                  <IconComponent className="w-8 h-8" />
                  
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-400">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 max-w-sm">
                  <h4 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
