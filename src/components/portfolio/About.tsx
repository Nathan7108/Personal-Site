import { Code2, Palette, Lightbulb, Zap } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Building scalable APIs and infrastructure for real-world applications",
      tech: ["FastAPI", "Python", "SQL", "Docker"]
    },
    {
      icon: Palette,
      title: "System Architecture",
      description: "Designing robust data pipelines and backend systems",
      tech: ["Redis/Valkey", "Kubernetes", "MQTT", "Time-Series"]
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creating practical solutions for complex software and integration challenges",
      tech: ["API Design", "Data Integration", "Optimization", "Security"]
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      description: "Exploring AI and automation to drive innovation and performance",
      tech: ["AI Agents", "Automation", "LLMs", "System Design"]
    }
  ];

  return (
    <section className="portfolio-section pt-100" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a backend developer with 2+ years of experience building robust APIs, optimizing data flow, 
            and designing scalable architectures that support real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.title}
                className="portfolio-card text-center group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.4s ease-out both'
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/15 text-foreground border border-primary/25 text-base rounded-full font-medium"
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
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I started as a curious developer drawn to how software can solve real-world problems. 
                  Over time, I found my niche in backend systems, where clean architecture and smart APIs make the biggest impact.
                </p>
                <p>
                  Whether I'm optimizing data flows, designing scalable infrastructure, or integrating new tools, 
                  I love building systems that are fast, reliable, and easy to maintain.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground text-base">Enterprise Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground text-base">Custom APIs Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};