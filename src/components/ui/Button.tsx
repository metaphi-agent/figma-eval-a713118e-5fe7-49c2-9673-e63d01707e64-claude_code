import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-full';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-[#F0F0F0] text-black hover:bg-gray-200',
    outline: 'bg-transparent border border-black/10 text-black hover:bg-gray-50',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-12 py-3 text-base',
    lg: 'px-14 py-4 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}