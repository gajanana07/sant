import React from 'react';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { Github, Linkedin, Mail, Laptop, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-24 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently open to internship and full-time opportunities. Feel free to reach out if you'd like to collaborate on projects or discuss tech!
        </p>

        <Card className="bg-gray-900/50 border-gray-800 p-8 md:p-12 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-cyan-400" size={20} />
                <a href={`mailto:${personal.email}`} className="hover:text-cyan-400 transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-cyan-400" size={20} />
                <a href={`tel:${personal.phone}`} className="hover:text-cyan-400 transition-colors">
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-cyan-400" size={20} />
                <span>{personal.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="text-cyan-400" size={20} />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="text-cyan-400" size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personal.codelio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Laptop className="text-cyan-400" size={20} />
                <span>Codolio Profile</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg"
            >
              <a href={`mailto:${personal.email}`}>Send Email</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-white px-8 py-6 text-lg"
            >
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </Card>

        <footer className="mt-16 text-center text-gray-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
