import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "The nihari here tastes like my grandmother's recipe. Absolutely authentic.",
    author: "Ahmed K.",
  },
  {
    text: "Finally found a place that serves real Pakistani truck art vibes with amazing food.",
    author: "Sarah M.",
  },
  {
    text: "Their midnight delivery saved our dawat! Hot and fresh at 11 PM.",
    author: "The Khan Family",
  },
  {
    text: "The biryani is unmatched. The spices are perfectly balanced.",
    author: "Zainab R.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-black text-parchment tracking-tighter mb-4">
            VOICES OF THE TABLE
          </h2>
          <div className="flex items-center justify-center gap-2 text-saffron mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="font-sans text-terracotta tracking-widest uppercase text-sm md:text-base">
            24.9K Followers • 512 Posts
          </p>
        </div>

        {/* 3D-like Carousel */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center transform-style-3d animate-[spin_20s_linear_infinite]">
            {TESTIMONIALS.map((testimonial, index) => {
              const angle = (index / TESTIMONIALS.length) * 360;
              return (
                <div
                  key={index}
                  className="absolute w-[300px] md:w-[400px] p-8 bg-parchment rounded-2xl border-2 border-terracotta shadow-2xl"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(350px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <p className="font-serif text-lg md:text-xl text-indigo mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-sans font-bold text-forest text-right">
                    — {testimonial.author}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </section>
  );
}
