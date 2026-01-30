import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, icon, className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full px-4 py-3 rounded-xl border bg-neutral-100',
            'text-base placeholder:text-neutral-400',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent',
            {
              'border-red-500 focus:ring-red-500': error,
              'border-transparent': !error,
              'pl-12': icon,
            },
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
