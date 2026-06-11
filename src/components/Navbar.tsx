import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, User, LogOut, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  userSession: { name: string; email: string } | null;
  onSignOut: () => void;
  onNavigate: (page: 'landing' | 'signin' | 'signup') => void;
}

export default function Navbar({ userSession, onSignOut, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Startups', href: '#startups' },
    { name: 'About', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate('landing');
    // Allow React screen toggle to render before scrolling
    setTimeout(() => {
      window.location.hash = href;
    }, 100);
  };

  const getInitials = (name: string) => {
    if (!name) return 'MM';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('#home')}
          className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all group-hover:scale-105">
            <span className="text-lg relative -top-[1px] font-extrabold">X</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Make<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Mistakes</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium focus:outline-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTAs / User menu */}
        <div className="hidden md:flex items-center space-x-4">
          {userSession ? (
            /* Authenticated User Menu Dropdown */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:scale-105 transition-all border border-white/10 focus:outline-none cursor-pointer"
              >
                {getInitials(userSession.name)}
              </button>

              {/* Dropdown Menu Card */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-2xl space-y-4 animate-float-delayed">
                  <div className="border-b border-white/5 pb-3.5 text-left">
                    <p className="text-sm font-bold text-white truncate">{userSession.name}</p>
                    <p className="text-xs text-zinc-500 truncate mt-0.5">{userSession.email}</p>
                  </div>
                  
                  <div className="flex flex-col space-y-2.5 text-left">
                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        handleLinkClick('#tracks');
                      }}
                      className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white py-1.5 focus:outline-none cursor-pointer"
                    >
                      <LayoutDashboard className="w-4.5 h-4.5" />
                      <span>Builder Dashboard</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        onNavigate('landing');
                      }}
                      className="flex items-center space-x-3 text-sm text-zinc-400 hover:text-white py-1.5 focus:outline-none cursor-pointer"
                    >
                      <User className="w-4.5 h-4.5" />
                      <span>View Profile</span>
                    </button>
                  </div>

                  <div className="border-t border-white/5 pt-3.5 text-left">
                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
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
          ) : (
            /* Unauthenticated CTAs */
            <>
              <button
                onClick={() => onNavigate('signin')}
                className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 px-4 py-2 font-medium focus:outline-none cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] group overflow-hidden focus:outline-none cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                <span className="relative flex items-center space-x-1">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-zinc-950/98 backdrop-blur-lg border-t border-white/5 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-lg text-zinc-300 hover:text-white font-medium border-b border-white/5 pb-2 text-left focus:outline-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          
          <div className="flex flex-col space-y-4 pt-4">
            {userSession ? (
              <>
                <div className="text-left py-2 border-b border-white/5">
                  <p className="text-sm font-bold text-white">{userSession.name}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{userSession.email}</p>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onSignOut();
                  }}
                  className="text-center py-3 bg-rose-600/10 border border-rose-500/20 text-rose-400 font-semibold rounded-lg cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate('signin');
                  }}
                  className="text-center py-3 text-zinc-300 hover:text-white font-medium rounded-lg border border-white/10 cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate('signup');
                  }}
                  className="text-center py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-lg cursor-pointer"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
