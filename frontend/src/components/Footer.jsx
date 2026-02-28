import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E27]/80 backdrop-blur-lg border-t border-cyan-500/20 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 group"
            >
              <Github className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-pink-500 animate-pulse" fill="currentColor" /> por{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent font-bold">
                madejiq
              </span>
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} madejiq. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;