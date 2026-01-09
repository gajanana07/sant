import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Laptop } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-fade-in flex flex-col items-center" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <img 
            src="/profile.png" 
            alt="Santosh B" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-400 mb-6 shadow-lg shadow-cyan-400/50"
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-6">
            {personal.tagline}
          </p>
        </div>

        <div className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personal.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg transition-all"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-white px-8 py-6 text-lg transition-all"
          >
            Contact Me
          </Button>
        </div>

        <div className="flex gap-6 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={28} />
          </a>
          <a
            href={personal.codelio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Laptop size={28} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-bounce-slow" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
