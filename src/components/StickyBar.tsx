import { Phone } from 'lucide-react';

export function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-forest border-t-4 border-terracotta z-50 px-4 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <a href="tel:+923000059557" className="flex items-center gap-2 text-parchment hover:text-terracotta transition-colors">
          <Phone className="w-5 h-5" />
          <span className="font-sans font-bold tracking-wider">0300-0059557</span>
        </a>

        {/* Center */}
        <div className="hidden md:flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron"></span>
          </span>
          <span className="font-sans text-sm text-parchment tracking-widest uppercase">
            Open Now: 12PM - 12AM
          </span>
        </div>

        {/* Right */}
        <a 
          href="#reservations"
          className="bg-terracotta text-forest font-sans font-bold uppercase tracking-widest px-8 py-2 rounded-full hover:bg-parchment transition-colors duration-300 animate-pulse"
        >
          Reserve Table
        </a>
      </div>
    </div>
  );
}
