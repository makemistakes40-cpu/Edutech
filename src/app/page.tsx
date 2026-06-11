"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import LearningTracks from '@/components/LearningTracks';
import WhyMakeMistakes from '@/components/WhyMakeMistakes';
import StudentJourney from '@/components/StudentJourney';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

interface UserSession {
  name: string;
  email: string;
  phone?: string;
  careerClarity?: string;
  codingExperience?: string;
  interests?: string[];
  mainGoal?: string;
  weeklyAvailability?: string;
}

export default function LandingPage() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedSession = localStorage.getItem('mm_user_session');
    if (savedSession) {
      try {
        setUserSession(JSON.parse(savedSession));
      } catch (e) {
        localStorage.removeItem('mm_user_session');
      }
    }
  }, []);

  const handleSignOut = () => {
    setUserSession(null);
    localStorage.removeItem('mm_user_session');
    router.refresh();
  };

  const handleNavigate = (page: 'landing' | 'signin' | 'signup') => {
    if (page === 'signin') {
      router.push('/signin');
    } else if (page === 'signup') {
      router.push('/signup');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar
        userSession={userSession}
        onSignOut={handleSignOut}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero />

      {/* Social Proof Metric Section */}
      <SocialProof />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Learning Tracks Section */}
      <LearningTracks />

      {/* Why MakeMistakes Section */}
      <WhyMakeMistakes />

      {/* Student Journey Flowcard Section */}
      <StudentJourney />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Accordion FAQ Section */}
      <FAQ />

      {/* Final Action CTA Section */}
      <FinalCTA />

      {/* Global Footer Section */}
      <Footer />
    </div>
  );
}
