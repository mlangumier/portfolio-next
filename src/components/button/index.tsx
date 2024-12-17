import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={cn('btn btn-primary', className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
