import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Sparkles } from 'lucide-react';
import { projects } from '../data/mock';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium">Meus trabalhos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meu <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projetos em que tenho trabalhado e experiências que aprendi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const borderColors = ['border-cyan-500/30', 'border-pink-500/30'];
            const hoverColors = ['hover:border-cyan-500/60', 'hover:border-pink-500/60'];
            const shadowColors = ['hover:shadow-cyan-500/20', 'hover:shadow-pink-500/20'];
            const colorIndex = index % 2;

            const ProjectCard = (
              <Card
                key={project.id}
                className={`bg-[#1a1f3a]/50 backdrop-blur-lg ${borderColors[colorIndex]} ${hoverColors[colorIndex]} overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${shadowColors[colorIndex]} group cursor-pointer`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a] to-transparent opacity-60"></div>
                  {project.link && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-pink-400 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Card>
            );

            // Wrap in link if project has a link
            return project.link ? (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {ProjectCard}
              </a>
            ) : (
              ProjectCard
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;