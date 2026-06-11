import React from 'react';
import StepCard from './StepCard';

interface Option {
  id: string;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SingleSelectGridProps {
  options: Option[];
  selectedId: string;
  onChange: (id: string) => void;
  gridColsClassName?: string;
}

export default function SingleSelectGrid({
  options,
  selectedId,
  onChange,
  gridColsClassName = 'grid-cols-1 gap-3.5',
}: SingleSelectGridProps) {
  return (
    <div className={`grid ${gridColsClassName} w-full`}>
      {options.map((option) => (
        <StepCard
          key={option.id}
          id={option.id}
          title={option.title}
          description={option.description}
          icon={option.icon}
          isSelected={selectedId === option.id}
          onClick={() => onChange(option.id)}
          ariaLabel={`Select ${option.title}`}
        />
      ))}
    </div>
  );
}
