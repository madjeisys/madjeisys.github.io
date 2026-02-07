import React from 'react';
import { Card } from './ui/card';
import { Gamepad2, Code2, Heart, Film, Users, Moon, Sparkles } from 'lucide-react';
import { interests } from '../data/mock';

const iconMap = {
  Gamepad2: Gamepad2,
  Code2: Code2,
  Heart: Heart,
  Film: Film,
  Users: Users,
  Moon: Moon
};

const Interests = () => {
  return (
    <section id="interests" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">O que eu adoro</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meus <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Interesses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Coisas que me fazem feliz e mantêm-me motivada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = iconMap[interest.icon];
            const colors = [
              { border: 'border-cyan-500/30', hover: 'hover:border-cyan-500/60', bg: 'bg-cyan-500', shadow: 'hover:shadow-cyan-500/20' },
              { border: 'border-pink-500/30', hover: 'hover:border-pink-500/60', bg: 'bg-pink-500', shadow: 'hover:shadow-pink-500/20' },
              { border: 'border-cyan-500/30', hover: 'hover:border-cyan-500/60', bg: 'bg-cyan-500', shadow: 'hover:shadow-cyan-500/20' },
              { border: 'border-pink-500/30', hover: 'hover:border-pink-500/60', bg: 'bg-pink-500', shadow: 'hover:shadow-pink-500/20' },
              { border: 'border-cyan-500/30', hover: 'hover:border-cyan-500/60', bg: 'bg-cyan-500', shadow: 'hover:shadow-cyan-500/20' },
              { border: 'border-pink-500/30', hover: 'hover:border-pink-500/60', bg: 'bg-pink-500', shadow: 'hover:shadow-pink-500/20' }
            ];
            const color = colors[index % colors.length];

            return (
              <Card
                key={interest.id}
                className={`bg-[#1a1f3a]/50 backdrop-blur-lg ${color.border} ${color.hover} p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${color.shadow} group cursor-pointer`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full ${color.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {interest.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;