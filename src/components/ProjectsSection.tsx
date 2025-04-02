
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and secure checkout.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app that helps users organize tasks with drag-and-drop functionality and collaboration features.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'app',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio site showcasing projects and skills with smooth animations and dark mode.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A real-time weather app that displays forecasts and weather data with interactive visualizations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'app',
    technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS'],
    demoLink: '#',
    codeLink: '#',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'app', name: 'App' },
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-background rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-md transition-all duration-300",
                  activeCategory === category.id 
                    ? "bg-secondary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-background text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button-primary text-sm px-4 py-2">
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-secondary text-secondary rounded-md text-sm transition-all duration-300 hover:bg-secondary/10">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center button-primary">
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
