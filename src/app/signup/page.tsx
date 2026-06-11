"use client";
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/auth/AuthLayout';
import SignUpForm from '@/components/auth/SignUpForm';

export default function SignUpPage() {
  const router = useRouter();

  const handleSuccess = (session: { name: string; email: string; phone: string }) => {
    localStorage.setItem('mm_temp_session', JSON.stringify(session));
    router.push('/onboarding');
  };

  return (
    <AuthLayout onBackToHome={() => router.push('/')}>
      <SignUpForm
        onToggleForm={() => router.push('/signin')}
        onSuccess={handleSuccess}
      />
    </AuthLayout>
  );
}
