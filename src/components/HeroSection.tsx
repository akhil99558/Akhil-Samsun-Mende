
import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-secondary mb-4 font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-muted-foreground">
            I'm a <TypewriterEffect texts={["Web Developer", "UI/UX Designer", "Full Stack Engineer"]} />
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
