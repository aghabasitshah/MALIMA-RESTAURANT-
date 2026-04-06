import React, { useState } from 'react';

export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+92 ',
    partySize: '2 People',
    preference: 'Dine-in',
    date: '',
    time: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation requested:', formData);
  };

  return (
    <section id="reservations" className="py-24 bg-parchment relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-black text-forest tracking-tighter mb-4">
            THE DASTARKHWAN BOOKING
          </h2>
          <p className="font-sans text-terracotta tracking-widest uppercase text-sm md:text-base">
            Reserve Your Experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Integration */}
          <div className="w-full h-[500px] rounded-2xl overflow-hidden border-4 border-terracotta shadow-xl relative">
            {/* Placeholder for Google Maps iframe to avoid actual API calls in preview, styled darkly */}
            <div className="absolute inset-0 bg-indigo flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-2xl text-parchment mb-2">MAILMA میلہ</p>
                <p className="font-sans text-terracotta">Lahore, Pakistan</p>
              </div>
            </div>
            <iframe
              title="Mailma Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108924.96696142753!2d74.25667795!3d31.4422203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017432b1835b%3A0xe396992a5b05891c!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) sepia(20%) hue-rotate(320deg) brightness(80%) contrast(120%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 opacity-80 mix-blend-overlay"
            ></iframe>
          </div>

          {/* Lead Capture Form */}
          <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-2 border-terracotta/30 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b-2 border-forest/20 focus:border-terracotta py-3 outline-none transition-colors font-serif text-lg text-indigo"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Phone</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-transparent border-b-2 border-forest/20 focus:border-terracotta py-3 outline-none transition-colors font-serif text-lg text-indigo"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Party Size</label>
                  <select 
                    className="w-full bg-transparent border-b-2 border-forest/20 focus:border-terracotta py-3 outline-none transition-colors font-serif text-lg text-indigo appearance-none"
                    value={formData.partySize}
                    onChange={(e) => setFormData({...formData, partySize: e.target.value})}
                  >
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6-8 People</option>
                    <option>Large Event</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Preference</label>
                  <div className="flex gap-4 pt-3">
                    {['Dine-in', 'Delivery', 'Takeaway'].map(pref => (
                      <label key={pref} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="preference" 
                          value={pref}
                          checked={formData.preference === pref}
                          onChange={(e) => setFormData({...formData, preference: e.target.value})}
                          className="accent-terracotta"
                        />
                        <span className="font-sans text-sm text-indigo">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-transparent border-b-2 border-forest/20 focus:border-terracotta py-3 outline-none transition-colors font-serif text-lg text-indigo"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Time</label>
                  <input 
                    type="time" 
                    required
                    className="w-full bg-transparent border-b-2 border-forest/20 focus:border-terracotta py-3 outline-none transition-colors font-serif text-lg text-indigo"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wider">Special Requests</label>
                <textarea 
                  className="w-full bg-transparent border-b-2 border-forest/20 focus:border-terracotta py-3 outline-none transition-colors font-serif text-lg text-indigo resize-none"
                  rows={3}
                  placeholder="Birthday decoration, Extra spicy, etc."
                  value={formData.requests}
                  onChange={(e) => setFormData({...formData, requests: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-forest text-parchment font-sans font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-terracotta transition-colors duration-300 mt-4"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
