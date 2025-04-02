
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Tailwind", "DnD"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design principles.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com"
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="max-w-2xl mb-12 text-muted-foreground">
          Here are some of my recent projects. I've worked on various applications ranging from e-commerce platforms to interactive web apps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/20 group"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-secondary/80 text-xs rounded-md text-white font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-secondary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="group/btn transition-all duration-200 hover:border-secondary">
                  <Github className="mr-2 h-4 w-4 transition-transform duration-200 group-hover/btn:scale-110" />
                  <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                </Button>
                <Button variant="outline" size="sm" className="group/btn transition-all duration-200 hover:border-secondary">
                  <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-200 group-hover/btn:scale-110" />
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
