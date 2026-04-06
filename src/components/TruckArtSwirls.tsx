export function TruckArtSwirls({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`absolute pointer-events-none opacity-20 ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M 10 100 C 10 50, 90 50, 90 100 C 90 150, 190 150, 190 100" 
        stroke="var(--color-terracotta)" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      <circle cx="90" cy="100" r="12" fill="var(--color-saffron)" />
      <circle cx="190" cy="100" r="12" fill="var(--color-clay)" />
      <path 
        d="M 50 100 C 50 20, 150 20, 150 100" 
        stroke="var(--color-forest)" 
        strokeWidth="6" 
        strokeLinecap="round"
        strokeDasharray="10 10"
      />
    </svg>
  );
}
