import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Code2, Sparkles } from 'lucide-react';
import { profileData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium">Quem sou eu</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Mim</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bio Card */}
          <Card className="bg-[#1a1f3a]/50 backdrop-blur-lg border-cyan-500/30 p-8 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Bem-vinda!</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {profileData.bio}
              </p>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="bg-[#1a1f3a]/50 backdrop-blur-lg border-pink-500/30 p-6 hover:border-pink-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">A estudar em</p>
                  <p className="text-white text-xl font-bold">{profileData.school}</p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1a1f3a]/50 backdrop-blur-lg border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Área de foco</p>
                  <p className="text-white text-xl font-bold">Programação & Desenvolvimento</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 backdrop-blur-lg border-2 border-cyan-500/30 p-6 hover:scale-105 transition-all duration-300">
              <p className="text-center text-white text-lg font-medium">
                💫 A construir o futuro com código e criatividade!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;