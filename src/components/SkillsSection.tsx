
import React from 'react';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
];

const tools = [
  'Visual Studio Code',
  'Git & GitHub',
  'Figma',
  'Docker',
  'AWS',
  'Firebase',
  'MongoDB',
  'PostgreSQL',
];

const SkillProgress: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between mb-1">
        <span className="font-medium group-hover:text-secondary transition-colors duration-300">{name}</span>
        <span className="text-secondary">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-secondary to-blue-500 h-2.5 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${level}%`, transformOrigin: 'left' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <SkillProgress key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool} className="skill-card group">
                  <p className="text-lg font-medium transition-colors duration-300 group-hover:text-secondary">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">My Development Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Discovery & Research',
                description: 'Understand project requirements and research best solutions'
              },
              {
                title: 'Planning & Design',
                description: 'Create wireframes, mockups and design system'
              },
              {
                title: 'Development',
                description: 'Write clean, efficient, and maintainable code'
              },
              {
                title: 'Testing & Deployment',
                description: 'Ensure quality and deploy to production'
              }
            ].map((step, index) => (
              <div key={index} className="p-6 border border-border rounded-lg group transition-all duration-300 hover:border-secondary/50 hover:-translate-y-2 hover:shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-lg text-xl font-bold mb-4 transition-all duration-300 group-hover:bg-secondary/20">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-secondary">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
