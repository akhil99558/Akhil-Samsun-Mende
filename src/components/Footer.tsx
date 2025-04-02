
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary group">
              Portfolio<span className="text-secondary inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">.</span>
            </h2>
            <p className="mt-2 text-muted-foreground max-w-md">
              Creating beautiful digital experiences with clean code and user-centered design.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item} className="transition-transform duration-300 hover:translate-x-1">
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', url: 'https://github.com/akhil99558' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akhil-mende-b9a584136/' },
                  { name: 'Email', url: 'akhilsamsunmende@gmail.com' },
                ].map((item) => (
                  <li key={item.name} className="transition-transform duration-300 hover:translate-x-1">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {currentYear} Akhil Samsun Mende. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
