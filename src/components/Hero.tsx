import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { TruckArtSwirls } from './TruckArtSwirls';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-parchment flex items-center justify-center pt-20">
      <TruckArtSwirls className="w-64 h-64 top-20 left-10 rotate-45" />
      <TruckArtSwirls className="w-96 h-96 bottom-10 right-10 -rotate-12" />
      
      {/* Background Urdu Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-10 right-10 md:top-20 md:right-20 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <span className="font-urdu text-forest" style={{ fontSize: 'clamp(6rem, 18vw, 280px)', lineHeight: 1 }}>
          میلہ
        </span>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start justify-center h-full">
        {/* Small Urdu Badge */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
          className="mb-6 border-2 border-terracotta rounded-full px-6 py-2"
        >
          <span className="font-urdu text-clay text-2xl">میلہ</span>
        </motion.div>

        {/* Primary English Text */}
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-black text-forest tracking-tighter text-shadow-terracotta z-20 relative"
          style={{ fontSize: 'clamp(5rem, 14vw, 200px)', lineHeight: 0.9 }}
        >
          MAILMA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-sans font-light text-terracotta uppercase tracking-[0.4em] text-center md:text-left"
          style={{ fontSize: 'clamp(1rem, 2vw, 24px)' }}
        >
          Essence of Tradition
        </motion.p>
      </div>

      {/* Floating Food Artifacts */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Dish 1: Nihari */}
        <div 
          className="absolute left-[5%] top-[20%] w-48 md:w-64 animate-float"
          style={{ '--rotation': '-12deg', '--duration': '6s', '--delay': '0s' } as any}
        >
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop" 
            alt="Nihari" 
            className="w-full h-auto rounded-full shadow-2xl border-4 border-terracotta/50 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Dish 2: Naan */}
        <div 
          className="absolute right-[8%] top-[15%] w-40 md:w-56 animate-float"
          style={{ '--rotation': '8deg', '--duration': '5s', '--delay': '1s' } as any}
        >
          <img 
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop" 
            alt="Naan" 
            className="w-full h-auto rounded-full shadow-2xl border-4 border-saffron/50 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Dish 3: Biryani */}
        <div 
          className="absolute right-[15%] bottom-[25%] w-52 md:w-72 animate-float"
          style={{ '--rotation': '5deg', '--duration': '7s', '--delay': '0.5s' } as any}
        >
          <img 
            src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop" 
            alt="Biryani" 
            className="w-full h-auto rounded-full shadow-2xl border-4 border-forest/50 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Dish 4: Gol Gappa */}
        <div 
          className="absolute left-[20%] bottom-[30%] w-32 md:w-40 animate-float"
          style={{ '--rotation': '-5deg', '--duration': '4s', '--delay': '2s' } as any}
        >
          <img 
            src="https://images.unsplash.com/photo-1601050690117-94f5f6af8bd3?q=80&w=600&auto=format&fit=crop" 
            alt="Gol Gappa" 
            className="w-full h-auto rounded-full shadow-2xl border-4 border-clay/50 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Dish 5: Kebabs */}
        <div 
          className="absolute left-1/2 top-[10%] w-36 md:w-48 animate-float"
          style={{ '--rotation': '15deg', '--duration': '5.5s', '--delay': '0.2s' } as any}
        >
          <img 
            src="https://images.unsplash.com/photo-1599487405620-8e106240d1ce?q=80&w=600&auto=format&fit=crop" 
            alt="Kebabs" 
            className="w-full h-auto rounded-full shadow-2xl border-4 border-terracotta/50 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Rotating Seal */}
      <a 
        href="#reservations"
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 z-30 w-32 h-32 md:w-40 md:h-40 rounded-full bg-forest border-4 border-terracotta flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase fill-parchment">
              <textPath href="#textPath" startOffset="0%">
                RESERVE TABLE • RESERVE TABLE • 
              </textPath>
            </text>
          </svg>
        </motion.div>
        <Phone className="w-8 h-8 text-parchment group-hover:text-terracotta transition-colors" />
      </a>
    </section>
  );
}
