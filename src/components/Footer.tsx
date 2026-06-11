import { MessageSquare, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Contact', href: '#contact' },
  ];

  const resourceLinks = [
    { name: 'Programs', href: '#tracks' },
    { name: 'Missions', href: '#projects' },
    { name: 'Hiring Partners', href: '#startups' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security Review', href: '#security' },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Col 1: Brand & Socials */}
        <div className="md:col-span-5 space-y-6 text-left">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <span className="text-lg relative -top-[1px] font-extrabold">X</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Make<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Mistakes</span>
            </span>
          </a>
          
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            Bridging the gap between student engineers and startups. We focus on building real systems, validating codebase capabilities, and routing builders to active hiring CTOs.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-white/15 text-zinc-400 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-white/15 text-zinc-400 hover:text-white transition-all"
              aria-label="Discord"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-white/15 text-zinc-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Resources */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest">
            Resources
          </h4>
          <ul className="space-y-2.5">
            {resourceLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Company */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest">
            Company
          </h4>
          <ul className="space-y-2.5">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest">
            Stay Updated
          </h4>
          <p className="text-sm text-zinc-400">
            Subscribe to our newsletter for weekly codebase challenges and startup engineering guides.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex relative items-center max-w-sm rounded-xl border border-white/5 bg-zinc-900/40 focus-within:border-white/15 transition-all overflow-hidden"
          >
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full bg-transparent text-sm pl-4 pr-12 py-3.5 focus:outline-none text-white placeholder-zinc-600 font-medium"
              required
            />
            <button
              type="submit"
              className="absolute right-2 p-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-md transition-all flex items-center justify-center"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Legal / Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-xs text-zinc-500">
          &copy; {currentYear} MakeMistakes Inc. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {legalLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
