import React from 'react';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Programming Languages', skills: skills.languages, color: 'cyan' },
    { title: 'Backend & System Design', skills: skills.backend, color: 'blue' },
    { title: 'Cloud & DevOps', skills: skills.cloud, color: 'purple' },
    { title: 'Databases', skills: skills.databases, color: 'green' },
    { title: 'Tools & Platforms', skills: skills.tools, color: 'yellow' },
    { title: 'Data Analysis', skills: skills.dataAnalysis, color: 'pink' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      green: 'bg-green-500/10 text-green-400 border-green-500/30',
      yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      pink: 'bg-pink-500/10 text-pink-400 border-pink-500/30'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="skills" className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300 opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`${getColorClasses(category.color)} border hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
