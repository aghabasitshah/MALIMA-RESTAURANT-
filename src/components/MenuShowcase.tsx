import { motion } from 'framer-motion';

const MENU_ITEMS = [
  {
    id: 1,
    urdu: 'نہاری',
    english: 'Slow-Cooked Nihari',
    price: 'Rs. 2,400',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    urdu: 'سندھی بریانی',
    english: 'Authentic Sindhi Biryani',
    price: 'Rs. 1,800',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    urdu: 'چکن تکہ',
    english: 'Charcoal Chicken Tikka',
    price: 'Rs. 1,200',
    image: 'https://images.unsplash.com/photo-1599487405620-8e106240d1ce?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    urdu: 'گول گپے',
    english: 'Spicy Gol Gappa',
    price: 'Rs. 600',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6af8bd3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    urdu: 'تندوری نان',
    english: 'Fresh Tandoori Naan',
    price: 'Rs. 150',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop',
  }
];

export function MenuShowcase() {
  return (
    <section id="menu" className="py-24 bg-parchment relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-serif text-5xl md:text-7xl font-black text-forest tracking-tighter mb-4">
          THE SPICE ROUTE
        </h2>
        <p className="font-sans text-terracotta tracking-widest uppercase text-sm md:text-base">
          Inherited Recipes • Clay Ovens
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-16 px-6 gap-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {MENU_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, rotate: 2 }}
            className="snap-center shrink-0 w-[280px] md:w-[350px] bg-parchment rounded-2xl border-2 border-terracotta p-4 group cursor-pointer relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6">
              <img 
                src={item.image} 
                alt={item.english}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="bg-terracotta text-parchment font-sans font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Add to Order
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-urdu text-3xl text-forest mb-2">{item.urdu}</h3>
              <p className="font-sans font-medium text-indigo mb-2">{item.english}</p>
              <p className="font-serif font-bold text-terracotta text-xl">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
