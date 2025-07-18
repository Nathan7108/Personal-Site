import { Code2, Palette, Lightbulb, Zap } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Full-stack development with modern frameworks and technologies",
      tech: ["React", "TypeScript", "Node.js", "Python"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces",
      tech: ["Figma", "Adobe Creative Suite", "UI/UX", "Branding"]
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Problem-solving and strategic thinking for complex challenges",
      tech: ["Product Strategy", "Research", "Analytics", "Optimization"]
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and trends",
      tech: ["AI/ML", "Web3", "AR/VR", "IoT"]
    }
  ];

  return (
    <section className="portfolio-section" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate creative developer with 5+ years of experience crafting digital experiences 
            that blend beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.title}
                className="portfolio-card portfolio-glow text-center group cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.8s ease-out both'
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 portfolio-card max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started as a curious developer fascinated by the intersection of technology and creativity. 
                  Over the years, I've evolved into a full-stack creative who loves turning complex problems into simple, elegant solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, experimenting with emerging technologies, 
                  or contributing to open-source projects that make a difference.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};