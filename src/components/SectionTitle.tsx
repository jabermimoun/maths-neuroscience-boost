
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false, 
  light = false,
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center',
      className
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold mb-4',
        light && 'text-white'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg opacity-80 max-w-3xl',
          center && 'mx-auto',
          light && 'text-white/80'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
