import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aravind Nair',
      track: 'AI Engineering Track',
      outcome: 'Secured AI Engineer Intern at Vertex AI',
      quote: 'MakeMistakes saved me from tutorial hell. The challenges forced me to solve real problems like handling rate limits and database locks. I sent my GitHub pull requests to a founder and got interviewed the next day.',
      avatarInitials: 'AN',
      avatarGradient: 'from-violet-600 to-indigo-600',
    },
    {
      name: 'Sarah Chen',
      track: 'Full Stack Track',
      outcome: 'Secured Frontend Engineer Intern at Supabase',
      quote: 'The simulated PR reviews are brutal but necessary. In college, they check if the code runs. Here, they check if it is optimized, documented, and secure. That standard is why I got hired.',
      avatarInitials: 'SC',
      avatarGradient: 'from-fuchsia-600 to-pink-600',
    },
    {
      name: 'Marcus Vance',
      track: 'Cybersecurity Track',
      outcome: 'Secured SecOps Specialist Intern at Vercel',
      quote: 'The authentication and cryptology missions were exactly what I was asked about during my technical interview. Sourcing internships through verified project reviews is a total cheat code.',
      avatarInitials: 'MV',
      avatarGradient: 'from-cyan-600 to-blue-600',
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-zinc-950">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
            Student Success
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built by Students. Trusted by Startups.
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto">
            See how engineering students skipped standard resume pools by validating their coding skills directly in codebase tasks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-zinc-800">
                <Quote className="w-8 h-8 fill-zinc-900" />
              </div>

              {/* Quote Content */}
              <p className="text-sm text-zinc-300 text-left leading-relaxed relative z-10 mb-8 italic">
                "{t.quote}"
              </p>

              {/* Student Footer Profile */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6 text-left">
                {/* Custom Gradient Avatar */}
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.avatarGradient} flex items-center justify-center font-bold text-white text-sm shadow-md border border-white/10`}
                >
                  {t.avatarInitials}
                </div>
                
                {/* Details */}
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-zinc-500 font-medium">{t.track}</p>
                  
                  {/* Highlighted Outcome Badge */}
                  <span className="inline-block text-[10px] font-semibold text-emerald-400 mt-1 bg-emerald-950/20 border border-emerald-500/10 px-2 py-0.5 rounded">
                    {t.outcome}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
