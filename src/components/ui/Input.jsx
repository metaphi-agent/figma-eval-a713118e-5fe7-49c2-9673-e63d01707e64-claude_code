export default function Input({
  type = 'text',
  placeholder = '',
  icon,
  className = '',
  ...props
}) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 ${icon ? 'pl-12' : ''} bg-neutral-100 border-0 rounded-full text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black ${className}`}
        {...props}
      />
    </div>
  )
}
