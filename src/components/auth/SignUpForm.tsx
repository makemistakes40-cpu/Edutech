import React, { useState } from 'react';
import { User, Mail, CheckCircle2 } from 'lucide-react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import PhoneInput from './PhoneInput';
import PrimaryButton from './PrimaryButton';

interface SignUpFormProps {
  onToggleForm: () => void;
  onSuccess: (session: { name: string; email: string; phone: string }) => void;
}

export default function SignUpForm({ onToggleForm, onSuccess }: SignUpFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const validate = (fieldName?: string): boolean => {
    const newErrors = { ...errors };

    // Full Name
    if (!fieldName || fieldName === 'fullName') {
      if (!fullName.trim()) {
        newErrors.fullName = 'Full Name is required.';
      } else if (fullName.length < 2) {
        newErrors.fullName = 'Full Name must be at least 2 characters.';
      } else if (fullName.length > 100) {
        newErrors.fullName = 'Full Name cannot exceed 100 characters.';
      } else {
        delete newErrors.fullName;
      }
    }

    // Email
    if (!fieldName || fieldName === 'email') {
      if (!email) {
        newErrors.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
      } else {
        delete newErrors.email;
      }
    }

    // Phone
    if (!fieldName || fieldName === 'phone') {
      if (!phone) {
        newErrors.phone = 'Mobile number is required.';
      } else if (phone.length !== 10) {
        newErrors.phone = 'Mobile number must be exactly 10 digits.';
      } else {
        delete newErrors.phone;
      }
    }

    // Password
    if (!fieldName || fieldName === 'password') {
      if (!password) {
        newErrors.password = 'Password is required.';
      } else if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters.';
      } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
        newErrors.password = 'Password requires uppercase, lowercase, number, and special character.';
      } else {
        delete newErrors.password;
      }
    }

    // Confirm Password
    if (!fieldName || fieldName === 'confirmPassword') {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Confirm password is required.';
      } else if (confirmPassword !== password) {
        newErrors.confirmPassword = 'Passwords do not match.';
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
    
    if (fieldName) {
      return !newErrors[fieldName];
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !agree) return;

    setIsLoading(true);

    // Simulate API registration latency
    setTimeout(() => {
      setIsLoading(false);
      setSignupSuccess(true);
      
      // Transition to onboarding
      setTimeout(() => {
        onSuccess({
          name: fullName,
          email,
          phone,
        });
      }, 1200);
    }, 1500);
  };

  const isFormValid =
    fullName &&
    email &&
    phone.length === 10 &&
    password &&
    confirmPassword === password &&
    agree &&
    Object.keys(errors).length === 0;

  return (
    <div className="space-y-6 text-left relative">
      
      {/* Success Notification overlay */}
      {signupSuccess && (
        <div className="absolute inset-0 bg-zinc-950/90 z-20 flex flex-col justify-center items-center text-center space-y-3 rounded-2xl p-6 border border-emerald-500/20 backdrop-blur-sm animate-pulse-slow">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6 animate-bounce" />
          </div>
          <h4 className="text-lg font-bold text-white">Account Created</h4>
          <p className="text-xs text-zinc-400 font-medium">Entering candidate onboarding survey...</p>
        </div>
      )}

      {/* Title Header */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">Create Account</h3>
        <p className="text-sm text-zinc-400">
          Get startup-ready by completing codebase missions.
        </p>
      </div>

      {/* Form Grid */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name */}
        <TextInput
          label="Full Name"
          id="fullname-input"
          type="text"
          placeholder="Aravind Nair"
          icon={User}
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors({ ...errors, fullName: '' });
          }}
          onBlur={() => validate('fullName')}
          error={errors.fullName}
          required
        />

        {/* Email */}
        <TextInput
          label="Email Address"
          id="email-input"
          type="email"
          placeholder="aravind@domain.com"
          icon={Mail}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          onBlur={() => validate('email')}
          error={errors.email}
          required
        />

        {/* Phone */}
        <PhoneInput
          label="Mobile Number"
          id="phone-input"
          value={phone}
          onChange={(val) => {
            setPhone(val);
            if (errors.phone) setErrors({ ...errors, phone: '' });
          }}
          onBlur={() => validate('phone')}
          error={errors.phone}
          required
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          id="password-input"
          placeholder="••••••••"
          showStrengthMeter={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors({ ...errors, password: '' });
          }}
          onBlur={() => validate('password')}
          error={errors.password}
          required
        />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm Password"
          id="confirmpassword-input"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
          }}
          onBlur={() => validate('confirmPassword')}
          error={errors.confirmPassword}
          required
        />

        {/* Terms & Conditions Checkbox */}
        <div className="flex items-start text-xs pt-1">
          <label className="flex items-start space-x-3 text-zinc-400 cursor-pointer select-none leading-normal">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-4 h-4 rounded border-white/5 bg-zinc-900 focus:ring-0 text-violet-600 transition-colors mt-0.5"
            />
            <span>
              I agree to the{' '}
              <a href="#terms" className="text-zinc-300 hover:text-white transition-colors underline" onClick={e=>e.preventDefault()}>Terms of Service</a>
              {' '}and{' '}
              <a href="#privacy" className="text-zinc-300 hover:text-white transition-colors underline" onClick={e=>e.preventDefault()}>Privacy Policy</a>
            </span>
          </label>
        </div>

        {/* Submit Action */}
        <div className="pt-4">
          <PrimaryButton isLoading={isLoading} disabled={!isFormValid}>
            Create Account
          </PrimaryButton>
        </div>

      </form>

      {/* Redirect footer */}
      <div className="text-center pt-2">
        <p className="text-xs text-zinc-500">
          Already have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold hover:brightness-125 transition-all focus:outline-none cursor-pointer"
          >
            Sign In
          </button>
        </p>
      </div>

    </div>
  );
}
