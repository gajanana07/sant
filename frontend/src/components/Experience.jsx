import React, { useState, useEffect } from "react";
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight, Briefcase, Award } from 'lucide-react';
import { Button } from './ui/button';

const Experience = () => {
  const { experience } = portfolioData;
  const [activeImages, setActiveImages] = useState({});

  


  const handleImageChange = (expId, direction) => {
    setActiveImages(prev => {
      const currentIndex = prev[expId] || 0;
      const exp = experience.find(e => e.id === expId);
      const maxIndex = exp.images.length - 1;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }
      
      return { ...prev, [expId]: newIndex };
    });
  };

  return (
    <section id="experience" className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience & Leadership
          </span>
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {exp.type === 'Internship' ? (
                        <Briefcase className="text-cyan-400" size={24} />
                      ) : (
                        <Award className="text-purple-400" size={24} />
                      )}
                      <span className="text-sm text-gray-400 uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 text-lg mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-gray-400 text-sm mb-6">
                      {exp.duration}
                    </p>

                    <ul className="space-y-3">
                      {exp.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Carousel Side */}
                <div className="relative h-64 md:h-auto bg-gray-800">
                  <img
                    src={exp.images[activeImages[exp.id] || 0]}
                    alt={`${exp.organization} ${activeImages[exp.id] || 0 + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => handleImageChange(exp.id, 'prev')}
                      variant="ghost"
                      size="icon"
                      className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <ChevronLeft size={24} />
                    </Button>
                    <Button
                      onClick={() => handleImageChange(exp.id, 'next')}
                      variant="ghost"
                      size="icon"
                      className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {exp.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImages(prev => ({ ...prev, [exp.id]: idx }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          (activeImages[exp.id] || 0) === idx
                            ? 'bg-cyan-400 w-8'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
