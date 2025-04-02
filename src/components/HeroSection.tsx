import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import yourPhoto from '../images/Akhil_o.jpg'; // Import your photo

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Text content (now takes half width on larger screens) */}
        <div className="max-w-3xl md:w-1/2">
          <p className="text-secondary mb-4 font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Akhil Samsun Mende
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-muted-foreground">
            I'm a <TypewriterEffect texts={["GenAI Enthusiast", "Full Stack Engineer", "Student"]} />
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Building digital experiences that combine stunning design with clean, 
            efficient code. Passionate about creating intuitive, user-focused applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary">
              Contact Me
            </button>
            <a href="#projects" className="px-6 py-3 border border-secondary text-secondary rounded-md font-medium transition-all duration-300 hover:bg-secondary/10 hover:scale-105 hover:shadow-md">
              View My Work
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <a href="https://github.com/akhil99558" target="_blank" rel="noopener noreferrer" 
               className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/akhil-mende-b9a584136/" target="_blank" rel="noopener noreferrer" 
               className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Photo container (hidden on mobile, shown on md screens and up) */}
        <div className="hidden md:block md:w-1/2 flex justify-center">
          <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-secondary/20 shadow-xl">
            <img 
              src={yourPhoto} 
              alt="Akhil Samsun Mende"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;