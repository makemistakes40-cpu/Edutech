import { Dumbbell, Target, CheckSquare, Compass, Users2, Rocket } from 'lucide-react';

export default function WhyMakeMistakes() {
  const differentiators = [
    {
      title: 'Active Building Over Watching',
      description: 'Ditch the tutorial hell. Build features, debug issues, and deploy services instead of passively watching lectures.',
      icon: Dumbbell,
      color: 'text-violet-400 bg-violet-500/5 border-violet-500/10',
    },
    {
      title: 'Authentic Startup Missions',
      description: 'Work with specifications modeled after real startup tasks. Deal with API rate limits, database migrations, and performance constraints.',
      icon: Target,
      color: 'text-fuchsia-400 bg-fuchsia-500/5 border-fuchsia-500/10',
    },
    {
      title: 'Rigorous Verification',
      description: 'Your pull requests are automatically tested, linted, and reviewed. Prove you can write production-ready code.',
      icon: CheckSquare,
      color: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10',
    },
    {
      title: 'Portfolio & Profile Blueprint',
      description: 'Build a public portfolio that commands attention. Get step-by-step guidance on structural LinkedIn and resume optimization.',
      icon: Compass,
      color: 'text-cyan-400 bg-cyan-500/5 border-cyan-500/10',
    },
    {
      title: 'Accountability Guilds',
      description: 'Join peer code circles, complete weekly sprints, share failures, and review each other\'s pull requests.',
      icon: Users2,
      color: 'text-amber-400 bg-amber-500/5 border-amber-500/10',
    },
    {
      title: 'Direct Hiring Channels',
      description: 'Bypass applicant tracking filters. Our startup partners review student code submissions directly to schedule fast-track interviews.',
      icon: Rocket,
      color: 'text-rose-400 bg-rose-500/5 border-rose-500/10',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-zinc-950">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
            Why MakeMistakes?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Stop Studying. Start Engineering.
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Traditional certifications don't prepare you for the chaos of startup engineering. We focus on validation through execution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-2xl border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-300 hover:border-white/10 text-left"
              >
                {/* Icon Header */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-105 ${diff.color}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                  {diff.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
