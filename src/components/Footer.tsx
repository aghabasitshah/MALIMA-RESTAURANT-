import { Instagram, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo text-parchment py-12 pb-32 md:pb-24 border-t-8 border-forest">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-serif font-black text-3xl tracking-tighter">MAILMA</span>
            <span className="font-urdu text-terracotta text-2xl mt-1">میلہ</span>
          </div>
          <p className="font-sans text-sm text-parchment/70 leading-relaxed max-w-xs">
            Authentic Pakistani flavors, served with truck-art soul. Where tradition breathes and every meal is a celebration.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold uppercase tracking-widest text-terracotta mb-6">Visit Us</h4>
          <ul className="space-y-4 font-sans text-sm text-parchment/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-forest shrink-0" />
              <span>Lahore, Pakistan<br/>Find us on Maps</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold uppercase tracking-widest text-terracotta mb-6">Connect</h4>
          <a 
            href="https://instagram.com/mailmarestaurant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-parchment/80 hover:text-terracotta transition-colors w-fit"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-sans text-sm">@mailmarestaurant</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-parchment/10 text-center font-sans text-xs text-parchment/50">
        <p>&copy; {new Date().getFullYear()} MAILMA Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
