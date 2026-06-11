import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import LearningTracks from './components/LearningTracks';
import WhyMakeMistakes from './components/WhyMakeMistakes';
import StudentJourney from './components/StudentJourney';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Auth Module Imports
import AuthLayout from './components/auth/AuthLayout';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import OnboardingForm from './components/auth/OnboardingForm';

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

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'signin' | 'signup' | 'onboarding'>('landing');
  const [userSession, setUserSession] = useState<UserSession | null>(() => {
    const savedSession = localStorage.getItem('mm_user_session');
    if (savedSession) {
      try {
        return JSON.parse(savedSession);
      } catch {
        localStorage.removeItem('mm_user_session');
      }
    }
    return null;
  });
  const [tempSession, setTempSession] = useState<UserSession | null>(null);

  // Handle successful login
  const handleSignInSuccess = (session: UserSession) => {
    setUserSession(session);
    localStorage.setItem('mm_user_session', JSON.stringify(session));
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle successful signup (redirects to onboarding survey first)
  const handleSignUpSuccess = (session: UserSession) => {
    setTempSession(session);
    setCurrentPage('onboarding');
  };

  // Handle onboarding questionnaire completion
  const handleOnboardingComplete = (data: {
    careerClarity: string;
    codingExperience: string;
    interests: string[];
    mainGoal: string;
    weeklyAvailability: string;
  }) => {
    if (tempSession) {
      const completedSession = { ...tempSession, ...data };
      setUserSession(completedSession);
      localStorage.setItem('mm_user_session', JSON.stringify(completedSession));
      setTempSession(null);
    }
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle signout
  const handleSignOut = () => {
    setUserSession(null);
    localStorage.removeItem('mm_user_session');
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: 'landing' | 'signin' | 'signup') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  // Render correct page view
  if (currentPage === 'signin') {
    return (
      <AuthLayout onBackToHome={() => navigateToPage('landing')}>
        <SignInForm
          onToggleForm={() => navigateToPage('signup')}
          onSuccess={handleSignInSuccess}
        />
      </AuthLayout>
    );
  }

  if (currentPage === 'signup') {
    return (
      <AuthLayout onBackToHome={() => navigateToPage('landing')}>
        <SignUpForm
          onToggleForm={() => navigateToPage('signin')}
          onSuccess={handleSignUpSuccess}
        />
      </AuthLayout>
    );
  }

  if (currentPage === 'onboarding') {
    return (
      <OnboardingForm
        userSession={tempSession || { name: 'Builder', email: '' }}
        onComplete={handleOnboardingComplete}
      />
    );
  }

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      {/* Navigation Bar */}
      <Navbar
        userSession={userSession}
        onSignOut={handleSignOut}
        onNavigate={navigateToPage}
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

export default App;
