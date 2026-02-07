import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0E27]/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
            madejiq
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('interests')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Interesses
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Portfolio
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('portfolio')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Ver Projetos
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;