import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import ValidationMessage from './ValidationMessage';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showStrengthMeter?: boolean;
}

interface StrengthResult {
  score: number; // 0 to 4
  label: string;
  color: string;
  width: string;
}

export default function PasswordInput({
  label,
  error,
  showStrengthMeter = false,
  id,
  className = '',
  value = '',
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getStrength = (val: string): StrengthResult => {
    if (!val) {
      return { score: 0, label: 'Very Weak', color: 'bg-zinc-700', width: 'w-0' };
    }

    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const levels: Record<number, StrengthResult> = {
      0: { score: 0, label: 'Too Short', color: 'bg-rose-500', width: 'w-[15%]' },
      1: { score: 1, label: 'Weak', color: 'bg-rose-500', width: 'w-[25%]' },
      2: { score: 2, label: 'Fair', color: 'bg-amber-500', width: 'w-[50%]' },
      3: { score: 3, label: 'Good', color: 'bg-yellow-400', width: 'w-[75%]' },
      4: { score: 4, label: 'Strong', color: 'bg-emerald-500', width: 'w-full' },
    };

    return levels[score] || levels[0];
  };

  const strength = showStrengthMeter ? getStrength(typeof value === 'string' ? value : '') : null;

  return (
    <div className="flex flex-col text-left space-y-1.5 w-full">
      <label htmlFor={id} className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase">
        {label}
      </label>
      
      <div className="relative flex items-center">
        <div className="absolute left-4 text-zinc-500 pointer-events-none">
          <Lock className="w-4.5 h-4.5" />
        </div>
        
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          className={`w-full bg-zinc-900/40 border text-sm text-zinc-100 rounded-xl pl-11 pr-11 py-3.5 focus:outline-none transition-all ${
            error
              ? 'border-rose-500/30 focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/20'
              : 'border-white/5 focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/10'
          } ${className}`}
          {...props}
        />

        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 text-zinc-500 hover:text-zinc-300 focus:outline-none"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
        </button>
      </div>

      {/* Password Strength Indicator */}
      {showStrengthMeter && value && strength && (
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            <span>Password Strength</span>
            <span className="font-bold">{strength.label}</span>
          </div>
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-300 ${strength.color} ${strength.width}`}></div>
          </div>
        </div>
      )}
      
      <ValidationMessage message={error} />
    </div>
  );
}
