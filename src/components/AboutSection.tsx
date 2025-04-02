
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <p className='text-lg'>
  Hello! I'm Akhil Samsun Mende, a passionate 
  <span className="gradient-text font-medium"> frontend developer</span> with 
  a strong foundation in building interactive and user-friendly web applications.
</p>
<p className="text-lg">
  I specialize in modern JavaScript frameworks like React, Next.js, and Vue.js, 
  crafting seamless user experiences with clean and maintainable code. My expertise extends beyond frontend development,  
  with a keen interest in <span className="font-medium">Generative AI, Machine Learning, and Data Science</span>,  
  where I explore the intersection of AI-powered applications and intelligent user interfaces.
</p>
<p className="text-lg">
  Beyond coding, I am an adrenaline enthusiast—whether it's trekking through challenging trails,  
  engaging in extreme sports, or pushing my limits in adventure travel. I thrive on continuous learning,  
  experimenting with AI-driven innovations, and building solutions that merge technology with creativity.
</p>

            
<div className="flex flex-wrap gap-4 pt-4">
  <a 
    href="https://drive.google.com/file/d/1CSUzBDJ4yC6Cf-VNcjPmm2b_srL-lvEQ/view?usp=sharing" 
    className="button-primary group" 
    download
  >
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
      Download CV
    </span>
  </a>
</div>

          </div>
          
          <div className="relative group animate-float">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-blue-500/20 rounded-lg blur-xl opacity-70 transition-all duration-500 group-hover:opacity-100"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-secondary/50 transition-all duration-300 group-hover:border-secondary group-hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="John Doe" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
           { number: '3+', label: 'Years in AI/ML & Software Dev' },
           { number: '15+', label: 'Projects Completed' },
           { number: '5+', label: 'Hackathons Participated' },
           { number: '1', label: 'Patent On the way' }
           
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-lg transition-all duration-300 hover:shadow-secondary/20 hover:-translate-y-2 hover:bg-background/80">
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-2 transition-transform duration-300 hover:scale-110">{item.number}</h3>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
