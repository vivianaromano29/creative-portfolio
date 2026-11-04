// Hand-drawn marks inspired by zine collages.
export function ScribbleCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 120" fill="none" aria-hidden className={`pointer-events-none absolute ${className}`}>
      <path
        d="M30 70C20 30 120 8 200 14c70 6 95 40 70 68-30 32-160 36-220 14C10 82 40 40 110 30"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" aria-hidden className={`pointer-events-none ${className}`}>
      <path d="M5 40C35 10 70 50 110 20M110 20L92 16M110 20L104 37" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={`pointer-events-none ${className}`}>
      <path d="M50 2l9 33 34-9-25 24 25 25-34-9-9 32-9-32-34 9 25-25L7 26l34 9z" fill="currentColor" />
    </svg>
  );
}
