import { Users, Code2, Award, Briefcase, MessagesSquare } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    {
      id: 1,
      name: 'Students Trained',
      value: '15,000+',
      icon: Users,
      color: 'from-violet-500 to-indigo-500',
      description: 'Active learners building core tech roles.',
    },
    {
      id: 2,
      name: 'Projects Completed',
      value: '42,000+',
      icon: Code2,
      color: 'from-fuchsia-500 to-pink-500',
      description: 'Practical, production-grade applications.',
    },
    {
      id: 3,
      name: 'Skills Verified',
      value: '98%',
      icon: Award,
      color: 'from-emerald-500 to-teal-500',
      description: 'Industry-reviewed code assessments.',
    },
    {
      id: 4,
      name: 'Startup Partners',
      value: '250+',
      icon: Briefcase,
      color: 'from-cyan-500 to-blue-500',
      description: 'Actively sourcing builder-first talent.',
    },
    {
      id: 5,
      name: 'Community Members',
      value: '12,000+',
      icon: MessagesSquare,
      color: 'from-amber-500 to-orange-500',
      description: 'Collaborative networking & peer advice.',
    },
  ];

  return (
    <section id="stats" className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle top border divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
            Validated Competence
          </h2>
          <p className="text-2xl font-bold text-white mt-2">
            The proof is in the production code.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative group p-6 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-zinc-900/60"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Card Icon Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white transition-colors duration-300`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-semibold font-mono tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                    ACTIVE
                  </span>
                </div>

                {/* Value & Label */}
                <div className="text-left space-y-1">
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold text-zinc-300 tracking-tight">
                    {stat.name}
                  </p>
                  <p className="text-xs text-zinc-500 leading-normal">
                    {stat.description}
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
