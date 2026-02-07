import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Code2, Rocket } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 stars-bg"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0E27]/50 to-[#0A0E27]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Coders Student</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Olá, sou </span>
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                {profileData.username}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 font-medium">
              {profileData.tagline}
            </p>

            <p className="text-lg text-gray-400 max-w-xl">
              Adolescente apaixonada por tecnologia e programação. A criar o futuro uma linha de código de cada vez.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Ver Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Sobre Mim
              </Button>
            </div>
          </div>

          {/* Right content - Avatar */}
          <div className="flex-1 flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Avatar container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/50 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-4 border-pink-500/50 animate-spin-slow-reverse"></div>
                <img
                  src={profileData.avatar}
                  alt={profileData.username}
                  className="absolute inset-8 w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;