import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl',
        scrolled
          ? 'bg-parchment/90 backdrop-blur-xl shadow-lg border border-terracotta/20'
          : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-2">
        <span className="font-serif font-black text-2xl text-forest tracking-tighter">MAILMA</span>
        <span className="font-urdu text-clay text-xl mt-1">میلہ</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-forest">
        <a href="#menu" className="hover:text-terracotta transition-colors">Menu</a>
        <a href="#ambience" className="hover:text-terracotta transition-colors">Ambience</a>
        <a href="#delivery" className="hover:text-terracotta transition-colors">Delivery</a>
        <a href="#reservations" className="hover:text-terracotta transition-colors">Reservations</a>
      </div>

      <button className="bg-terracotta text-forest font-semibold px-6 py-2 rounded-full hover:bg-forest hover:text-parchment transition-colors duration-300">
        Order Now
      </button>
    </motion.nav>
  );
}
