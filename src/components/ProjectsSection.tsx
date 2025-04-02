
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import tms from '../images/TMS.png'
import xlm from '../images/xlm.jpeg'
import eda from '../images/eda.png'
import kp from '../images/tripguide.png'
import drone from '../images/drone.jpeg'
import dashboard from '../images/dashboard_start.png'
import js from '../images/js.png'
import quest from '../images/quest.jpg'
const projects = [
  {
    title: " Zero-Shot Learning with XLM-RoBERTA",
    description: "Explored Zero-Shot Learning for toxic comment classification in Telugu using XLM-RoBERTa, enhancing the accuracy of classification in low-resource language datasets, leading to a 25% improvement in model precision",
    image: xlm,
    tags: ["Neural Networks", "Natural Language Processing", "Cross Lingual Model"],
    github: "https://github.com/akhil99558/XLM",
    demo: ""
  },{
    title: "Kp Index Prediction",
    description: "Created a model from scratch using Neural Networks which predicts k-planetary index with high accuracy. Used realtime data from past 8 years from the DSCOVER satellite to do this",
    image: kp,
    tags: ["Neural Networks", "CNN", "Data Engineering"],
    github: "https://github.com/akhil99558/EDA_/blob/main/DSCVRneural.ipynb",
    demo: ""
  },
  {
    title: "Travel Management System",
    description: "A JAVA based web application that enables users to customize their travel plans, book tickets, cancel tickets and manage all travel related responses built completely using JAVA and related libraries and MYSql as database",
    image: tms,
    tags: ["Java", "MySQL", "SwingX"],
    github: "https://github.com/akhil99558/Mini_Project",
    demo: ""
  },
  
  {
    title: "A Simple EDA Project",
    description: "A simple credit card attrition rate prediction using an open source dataset from kaggle using various Machine Learning Algorithms and EDA project",
    image: eda,
    tags: ["Python", "Machine Learning", "Seaborn"],
    github: "https://github.com/akhil99558/EDA_/blob/main/bank.ipynb",
    demo: ""
  },
  {
    title: "Icarus",
    description: "This is originally a submission made as a Minimum Viable project[MVP] for Mircosoft Imagine Cup. Icarus is a automated cluster-drone surveillance system still under works",
    image: drone,
    tags: ["MATLAB", "Python", "OpenCV", "Arduino"],
    github: "https://github.com/akhil99558/Icarus",
    demo: ""
  },
  {
    title: "My Dashboard",
    description: "My dashboard to keep track of all my projects in a visually appleasing manner. The website is deployed using Vercel",
    image: dashboard,
    tags: ["HTML", "CSS", "Three.js", "Tailwind CSS"],
    github: "https://github.com/akhil99558/My-Dashboard?tab=readme-ov-file",
    demo: ""
  },
  {
    title: "Compilation of Js Projects",
    description: "A compilation of small js projects done as part of a minor one-month internship",
    image: js,
    tags: ["CSS", "HTML", "JavaScript"],
    github: "https://github.com/akhil99558/Intern_Army",
    demo: ""
  },
  {
    title: "Coming Soon",
    description: "",
    image: quest,
    tags: ["Wait","for","it"],
    github: "",
    demo: ""
  }
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
