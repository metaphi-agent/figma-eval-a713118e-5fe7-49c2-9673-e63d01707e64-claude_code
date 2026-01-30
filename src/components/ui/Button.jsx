export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-700',
    secondary: 'bg-white text-black border border-neutral-200 hover:bg-neutral-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-base rounded-full',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
