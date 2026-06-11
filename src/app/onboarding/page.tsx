"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingForm from '@/components/auth/OnboardingForm';

export default function OnboardingPage() {
  const router = useRouter();
  const [tempSession, setTempSession] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('mm_temp_session');
    if (saved) {
      try {
        setTempSession(JSON.parse(saved));
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const handleComplete = (data: {
    careerClarity: string;
    codingExperience: string;
    interests: string[];
    mainGoal: string;
    weeklyAvailability: string;
  }) => {
    const session = tempSession || { name: 'Builder', email: '' };
    const completedSession = { ...session, ...data };
    localStorage.setItem('mm_user_session', JSON.stringify(completedSession));
    localStorage.removeItem('mm_temp_session');
    router.push('/dashboard');
  };

  return (
    <OnboardingForm
      userSession={tempSession || { name: 'Builder', email: '' }}
      onComplete={handleComplete}
    />
  );
}
