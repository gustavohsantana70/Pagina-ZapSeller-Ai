
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Audience } from './components/Audience';
import { Transparency } from './components/Transparency';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const checkoutUrl = "https://pay.kiwify.com.br/Q0UNNyQ";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-100 selection:text-green-900">
      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 whatsapp-green rounded-lg flex items-center justify-center text-white font-black italic">ZS</div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">ZAPSELLER <span className="text-green-600">AI</span></span>
          </div>
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition-colors"
          >
            Quero meu acesso
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <Audience />
        <Transparency />
        <CTASection />
      </main>

      <Footer />

      {/* Persistent Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 px-4 z-40">
        <a 
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 whatsapp-green text-white font-bold py-4 rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all animate-bounce-subtle"
        >
          <i className="fa-brands fa-whatsapp text-xl"></i>
          QUERO ACESSO (BETA)
        </a>
      </div>
    </div>
  );
};

export default App;
