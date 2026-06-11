import React from 'react';
import { Phone } from 'lucide-react';
import ValidationMessage from './ValidationMessage';

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function PhoneInput({
  label,
  error,
  id,
  className = '',
  value = '',
  onChange,
  ...props
}: PhoneInputProps) {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip non-digit characters
    const digitsOnly = e.target.value.replace(/\D/g, '');
    
    // Limit to standard 10 digits
    const limited = digitsOnly.slice(0, 10);
    
    onChange(limited);
  };

  return (
    <div className="flex flex-col text-left space-y-1.5 w-full">
      <label htmlFor={id} className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase">
        {label}
      </label>
      
      <div className="relative flex items-center">
        <div className="absolute left-4 text-zinc-500 pointer-events-none">
          <Phone className="w-4.5 h-4.5" />
        </div>
        
        <input
          id={id}
          type="tel"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter 10-digit number"
          className={`w-full bg-zinc-900/40 border text-sm text-zinc-100 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none transition-all ${
            error
              ? 'border-rose-500/30 focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/20'
              : 'border-white/5 focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/10'
          } ${className}`}
          {...props}
        />
      </div>
      
      <ValidationMessage message={error} />
    </div>
  );
}
