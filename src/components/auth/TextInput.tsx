import React from 'react';
import ValidationMessage from './ValidationMessage';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function TextInput({
  label,
  error,
  icon: IconComponent,
  id,
  className = '',
  ...props
}: TextInputProps) {
  return (
    <div className="flex flex-col text-left space-y-1.5 w-full">
      <label htmlFor={id} className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase">
        {label}
      </label>
      
      <div className="relative flex items-center">
        {IconComponent && (
          <div className="absolute left-4 text-zinc-500 pointer-events-none">
            <IconComponent className="w-4.5 h-4.5" />
          </div>
        )}
        
        <input
          id={id}
          className={`w-full bg-zinc-900/40 border text-sm text-zinc-100 rounded-xl px-4 py-3.5 focus:outline-none transition-all ${
            IconComponent ? 'pl-11' : ''
          } ${
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
