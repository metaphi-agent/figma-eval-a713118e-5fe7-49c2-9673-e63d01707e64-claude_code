export default function QuantitySelector({ value = 1, onChange, min = 1, max = 99 }) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  return (
    <div className="inline-flex items-center gap-5 px-5 py-3 bg-neutral-100 rounded-full">
      <button
        onClick={handleDecrement}
        disabled={value <= min}
        className="text-black hover:text-neutral-600 disabled:opacity-30 transition-colors"
        aria-label="Decrease quantity"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>

      <span className="text-base font-medium min-w-[1.5rem] text-center">
        {value}
      </span>

      <button
        onClick={handleIncrement}
        disabled={value >= max}
        className="text-black hover:text-neutral-600 disabled:opacity-30 transition-colors"
        aria-label="Increase quantity"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}
