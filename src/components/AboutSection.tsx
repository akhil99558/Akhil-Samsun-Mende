
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm John Doe, a passionate <span className="gradient-text font-medium">full-stack developer</span> with 
              a knack for creating elegant solutions to complex problems. I enjoy building everything from small business sites 
              to rich interactive web applications.
            </p>
            <p className="text-lg">
              I've been working in web development for 5 years, specializing in modern JavaScript frameworks like React
              and Next.js. My approach combines clean code with thoughtful user experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or 
              hiking in the mountains. I believe in continuous learning and pushing the boundaries of what's possible on the web.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="button-primary">
                Download CV
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-blue-500/20 rounded-lg blur-xl opacity-70"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-secondary/50">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '20+', label: 'Happy Clients' },
            { number: '10+', label: 'Open Source Contributions' }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-2">{item.number}</h3>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
