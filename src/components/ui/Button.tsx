import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          'inline-flex items-center justify-center font-medium transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-black text-white hover:bg-neutral-800': variant === 'primary',
            'bg-neutral-100 text-black hover:bg-neutral-200': variant === 'secondary',
            'border-2 border-neutral-300 bg-white text-black hover:border-black': variant === 'outline',
          },
          {
            'px-4 py-2 text-sm rounded-lg': size === 'sm',
            'px-6 py-3 text-base rounded-xl': size === 'md',
            'px-8 py-4 text-lg rounded-2xl': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
