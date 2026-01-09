import React from 'react';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { Code2, Award, Users, TrendingUp, GraduationCap, Zap } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Award: Award,
  Users: Users,
  TrendingUp: TrendingUp,
  GraduationCap: GraduationCap,
  Zap: Zap
};

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Activities
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Award;
            
            return (
              <Card
                key={achievement.id}
                className="bg-gray-900/50 border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300 opacity-0 animate-slide-up hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <IconComponent className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
