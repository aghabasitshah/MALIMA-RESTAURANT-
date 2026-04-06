/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuShowcase } from './components/MenuShowcase';
import { Testimonials } from './components/Testimonials';
import { Reservation } from './components/Reservation';
import { StickyBar } from './components/StickyBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-parchment">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
