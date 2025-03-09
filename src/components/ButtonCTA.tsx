
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'dark';
  size?: 'default' | 'lg' | 'sm';
  icon?: React.ReactNode;
}

const ButtonCTA = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  icon,
  className,
  ...props 
}: ButtonCTAProps) => {
  return (
    <Button 
      className={cn(
        'font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg max-w-full',
        variant === 'gold' && 'bg-[#FFD700] hover:bg-[#E6B800] text-black',
        variant === 'dark' && 'bg-[#1C1C1C] hover:bg-black text-white',
        size === 'lg' && 'text-base sm:text-lg py-5 sm:py-6 px-6 sm:px-8 h-auto',
        size === 'sm' && 'text-sm py-2',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2 flex-nowrap text-center">
        {icon}
        <span className="text-sm sm:text-base md:text-lg">{children}</span>
      </span>
    </Button>
  );
};

export default ButtonCTA;
