import React from 'react';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <Card className="bg-gray-900/50 border-gray-800 p-8 md:p-12 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed">
            {about.description}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
