import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import PrimaryButton from './PrimaryButton';

interface SignInFormProps {
  onToggleForm: () => void;
  onSuccess: (session: { name: string; email: string }) => void;
}

export default function SignInForm({ onToggleForm, onSuccess }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Email Check
    if (!email) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Password Check
    if (!password) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate API authorization latency
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      
      // Simulate redirection/onboarding success trigger
      setTimeout(() => {
        onSuccess({
          name: email.split('@')[0], // Extract mock name from email prefix
          email,
        });
      }, 1000);
    }, 1500);
  };

  const isFormValid = email && password && Object.keys(errors).length === 0;

  return (
    <div className="space-y-6 text-left relative">
      
      {/* Success Notification overlay */}
      {loginSuccess && (
        <div className="absolute inset-0 bg-zinc-950/90 z-20 flex flex-col justify-center items-center text-center space-y-3 rounded-2xl p-6 border border-emerald-500/20 backdrop-blur-sm animate-pulse-slow">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6 animate-bounce" />
          </div>
          <h4 className="text-lg font-bold text-white">Login Successful</h4>
          <p className="text-xs text-zinc-400">Restoring workspace session state...</p>
        </div>
      )}

      {/* Title Header */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">Sign In</h3>
        <p className="text-sm text-zinc-400">
          Enter your login credentials to access your developer sandbox.
        </p>
      </div>

      {/* Form Grid */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Email Input */}
        <TextInput
          label="Email Address"
          id="email-input"
          type="email"
          placeholder="name@domain.com"
          icon={Mail}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          onBlur={validate}
          error={errors.email}
          required
        />

        {/* Password Input */}
        <PasswordInput
          label="Password"
          id="password-input"
          placeholder="••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors({ ...errors, password: '' });
          }}
          onBlur={validate}
          error={errors.password}
          required
        />

        {/* Remember Me & Forgot Password wrapper */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center space-x-2.5 text-zinc-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-white/5 bg-zinc-900 focus:ring-0 text-violet-600 transition-colors"
            />
            <span>Remember Me</span>
          </label>
          
          <a
            href="#forgotpassword"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Action */}
        <div className="pt-4">
          <PrimaryButton isLoading={isLoading} disabled={!isFormValid}>
            Sign In
          </PrimaryButton>
        </div>

      </form>

      {/* Redirect footer */}
      <div className="text-center pt-2">
        <p className="text-xs text-zinc-500">
          Don't have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold hover:brightness-125 transition-all focus:outline-none cursor-pointer"
          >
            Create Account
          </button>
        </p>
      </div>

    </div>
  );
}
