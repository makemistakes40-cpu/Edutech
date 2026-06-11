import React from 'react';
import StepCard from './StepCard';

interface Option {
  id: string;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface MultiSelectGridProps {
  options: Option[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  gridColsClassName?: string;
}

export default function MultiSelectGrid({
  options,
  selectedIds,
  onChange,
  gridColsClassName = 'grid-cols-1 sm:grid-cols-2 gap-3.5',
}: MultiSelectGridProps) {
  const handleToggle = (id: string) => {
    if (selectedIds.includes(id)) {
      onChange(selectedIds.filter((item) => item !== id));
    } else {
      onChange([...selectedIds, id]);
    }
  };

  return (
    <div className={`grid ${gridColsClassName} w-full`}>
      {options.map((option) => (
        <StepCard
          key={option.id}
          id={option.id}
          title={option.title}
          description={option.description}
          icon={option.icon}
          isSelected={selectedIds.includes(option.id)}
          onClick={() => handleToggle(option.id)}
          ariaLabel={`Toggle selection for ${option.title}`}
        />
      ))}
    </div>
  );
}
