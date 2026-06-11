import { useState } from 'react';
import { HelpCircle, BookOpen, Sparkles, FolderGit2, CheckCircle2, UserCheck, Send, Trophy } from 'lucide-react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function StudentJourney() {
  const steps = [
    {
      label: 'Interest Selection',
      icon: HelpCircle,
      description: 'Choose a specialized engineering track (AI, Full Stack, Mobile, Data, Cyber).',
      details: 'Kickstart by taking a baseline self-assessment and picking your track focus.',
    },
    {
      label: 'Foundations',
      icon: BookOpen,
      description: 'Learn architectural standards, testing conventions, and CLI workflows.',
      details: 'Skip tutorial loops and study production design patterns directly.',
    },
    {
      label: 'Hands-on Challenges',
      icon: Sparkles,
      description: 'Solve modular sandbox code problems with instant test validation.',
      details: 'Write algorithms, debug routing, and configure database queries.',
    },
    {
      label: 'Real Projects',
      icon: FolderGit2,
      description: 'Acquire access to high-fidelity missions simulating authentic SaaS requirements.',
      details: 'Complete tasks with live integrations, data stores, and server configurations.',
    },
    {
      label: 'Skill Validation',
      icon: CheckCircle2,
      description: 'Submit your PR and receive automated testing logs and reviewer feedback.',
      details: 'Achieve metrics matching professional standards before moving forward.',
    },
    {
      label: 'Portfolio building',
      icon: UserCheck,
      description: 'Generate a public profile showing your verified code achievements.',
      details: 'Display live deployments, codebases, and PR records instead of static resumes.',
    },
    {
      label: 'LinkedIn Optimization',
      icon: LinkedInIcon,
      description: 'Tune your socials to highlight completed missions and verified badges.',
      details: 'Convert recruiter visits into solid inbound requests and conversations.',
    },
    {
      label: 'Startup Outreach',
      icon: Send,
      description: 'Engage in curated hiring matches where startups inspect your actual code.',
      details: 'Apply directly through pull requests and projects that match their tech stacks.',
    },
    {
      label: 'Internship Opportunity',
      icon: Trophy,
      description: 'Secure a software engineering internship or role at a builder startup.',
      details: 'Start your career with high confidence and immediate technical impact.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="community" className="relative py-20 bg-zinc-950">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            The Student Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Roadmap to Startup-Ready Engineer
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A step-by-step roadmap showing how you transition from picking an interest to writing production code and landing your internship.
          </p>
        </div>

        {/* Roadmap Roadmap Layout */}
        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          
          {/* Central Line (Desktop: centered; Mobile: left-aligned) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-emerald-500 -translate-x-[1px]"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isHovered = hoveredIndex === index;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Glowing Node Dot (Centered on Line) */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-[17px] w-9 h-9 rounded-full flex items-center justify-center z-20 border transition-all duration-300 ${
                      isHovered
                        ? 'bg-zinc-900 border-white text-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : 'bg-zinc-950 border-white/20 text-zinc-500'
                    }`}
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>

                  {/* Card Block */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-0 md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'} relative`}>
                    <div
                      className={`inline-block p-6 rounded-2xl border bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 w-full ${
                        isHovered
                          ? 'border-white/15 bg-zinc-900/30 -translate-y-1 shadow-lg'
                          : 'border-white/5 bg-zinc-900/10'
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase block mb-1">
                        Stage {index + 1}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                        {step.label}
                      </h4>
                      <p className="text-sm text-zinc-400 mt-2">
                        {step.description}
                      </p>
                      
                      {/* Detailed Drawer (Expands or reveals details) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isHovered ? 'max-h-20 opacity-100 mt-3 border-t border-white/5 pt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-xs text-zinc-500 leading-normal">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for MD screens to keep the flex spacing balanced */}
                  <div className="hidden md:block w-1/2"></div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
