"use client";
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/auth/AuthLayout';
import SignInForm from '@/components/auth/SignInForm';

export default function SignInPage() {
  const router = useRouter();

  const handleSuccess = (session: { name: string; email: string; phone?: string }) => {
    localStorage.setItem('mm_user_session', JSON.stringify(session));
    router.push('/');
    router.refresh();
  };

  return (
    <AuthLayout onBackToHome={() => router.push('/')}>
      <SignInForm
        onToggleForm={() => router.push('/signup')}
        onSuccess={handleSuccess}
      />
    </AuthLayout>
  );
}
