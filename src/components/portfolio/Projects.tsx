import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "A modern e-commerce solution with AI-driven product recommendations and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "AI/ML", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "An immersive 3D portfolio built with Three.js featuring interactive animations and WebGL effects.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      tags: ["Three.js", "WebGL", "React", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Collaborative Design Tool",
      description: "Real-time collaborative design platform for teams with version control and live editing capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Socket.io", "Canvas API", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with social features and personalized workout plans.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain DeFi Dashboard",
      description: "Comprehensive DeFi analytics dashboard with real-time data visualization and portfolio tracking.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop",
      tags: ["Web3", "Ethereum", "React", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "AR Interior Design App",
      description: "Augmented reality app for visualizing furniture and interior design changes in real-time.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      tags: ["AR.js", "WebXR", "Three.js", "Mobile"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="portfolio-section" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work spanning web development, mobile apps, and emerging technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="portfolio-card portfolio-glow group cursor-pointer overflow-hidden h-80">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" className="portfolio-glow">
                        <Eye className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="portfolio-glow">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                className="portfolio-card portfolio-glow group cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out both'
                }}
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.liveUrl} className="text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
