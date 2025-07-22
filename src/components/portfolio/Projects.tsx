import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getOptimizedImageProps } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ODBC Interface API",
      description: "Production-grade FastAPI service that connects ODBC-compatible data sources to cloud systems. Features secure lookups, trend data, Redis caching, and MQTT streaming.",
      image: "media/odbc.png", 
      tags: ["FastAPI", "Python", "ODBC", "MQTT", "Redis/Valkey"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 2,
      title: "Inmation Integration Interface & Extractor ",
      description: "Backend system that integrates with the an Inmation Base URL, managing subscriptions, WebSocket streams, and dynamic data routing for industrial data platforms. Handles real-time data processing, implements custom authentication protocols, and provides FastAPI endpoints for data access. Features automatic reconnection logic, data validation, and comprehensive error handling for mission-critical industrial applications.",
      image: "media/inmation.png",
      tags: ["Python", "FastAPI", "WebSocket", "Inmation", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Crypto Extractor for Demo Data",
      description: "Microservice that fetches live and historical cryptocurrency data from public APIs and publishes it into internal systems for visualization and trend tracking.",
      image: "media/crypto.png",
      tags: ["Python", "Docker", "Time Series Data", "Data Ingestion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "API Architecture & Design",
      description: "Collaborated with the CTO and senior developers to design scalable APIs and align architecture across teams. Created system diagrams in Miro for technical documentation and company-wide clarity. Built FastAPI services with authentication, rate limiting, monitoring, and full test coverage. Documented setup processes for future APIs. Established coding standards, CI/CD pipelines, and deployment strategies for consistent development.",
      image: "media/api.png",
      tags: ["API Design", "FastAPI", "Miro", "Documentation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Date/Time Lookup Interface & Extractor",
      description: "FastAPI microservice that streams demo data for testing and validation purposes. Ensures systems are functioning correctly by providing consistent live data streams. Implements configurable data generation patterns, supports multiple data formats, and includes built-in data validation. Features real-time streaming endpoints, customizable data frequency controls, and comprehensive logging for debugging and monitoring.",
      image: "media/time.png",
      tags: ["FastAPI", "Python", "Testing", "Demo Data"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "System Monitoring with Netdata",
      description: "Configured Netdata on cloud and containerized environments to monitor Kubernetes and Docker metrics, feeding key insights into custom dashboards.",
      image: "media/system.png",
      tags: ["Netdata", "Docker", "Monitoring", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Predictive Modeling with Historical Time-Series Data",
      description: "An ML model (LSTM/XGBoost) that analyzes historical data to forecast future trends in industrial output, resource demand, or financial metrics. Features dynamic visualizations and real-time predictions for operational decision-making.",
      image: "media/prediction.png",
      tags: ["Python", "LSTM", "XGBoost", "Time Series", "ML", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "AI-Powered Script-to-Video Generation Pipeline",
      description: "A comprehensive pipeline that transforms written scripts into short video content using LLMs, image/video APIs, and voice synthesis. Demonstrates advanced AI coordination across language processing, media generation, and rendering tasks.",
      image: "media/script.png",
      tags: ["Python", "LLM", "Video Generation", "Voice Synthesis", "AI Pipeline"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 9,
      title: "Natural Language Agent for Structured Data Analysis",
      description: "An intelligent AI agent that interprets natural language queries and analyzes uploaded or connected data sources (e.g., CSVs). Leverages LLM technology to provide accurate, human-readable answers and visual insights from real business data.",
      image: "media/llm.png",
      tags: ["Python", "LLM", "Data Analysis", "NLP", "Business Intelligence"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const ComingSoonOverlay = () => (
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 z-10 flex items-center justify-center rounded-lg transition-all duration-300">
      <div className="text-center bg-black/60 group-hover:bg-black/40 backdrop-blur-sm px-8 py-6 rounded-xl transition-all duration-300 border border-white/20">
        <div className="text-xl font-bold text-white group-hover:text-white/90 mb-2 transition-all duration-300">Coming Soon</div>
        <div className="text-white/90 group-hover:text-white/70 text-base transition-all duration-300">Under Construction</div>
      </div>
    </div>
  );

  return (
    <section className="portfolio-section" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore a collection of backend systems and data services I've designed and deployed in real production environments. 
          Each project shows my focus on scalable design, reliability, and real-world impact
          </p>
        </div>

        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className="portfolio-glow mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:flex lg:justify-center">
                <div className="portfolio-card group cursor-pointer overflow-hidden h-80 w-full lg:max-w-xl">
                  <OptimizedImage
                    src={project.image.replace('public/', '/')}
                    alt={project.title}
                    width={554}
                    height={369}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                      <div className="flex gap-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white text-white bg-black/20 backdrop-blur-sm"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" /> 
                      Work Project
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
                      <Badge key={tag} variant="secondary" className="bg-primary/15 text-foreground border-primary/25 text-base font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-background/80"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Work Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card portfolio-glow group cursor-pointer relative"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeInUp 0.4s ease-out both'
                }}
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-lg relative">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {(project.id === 7 || project.id === 8 || project.id === 9) && <ComingSoonOverlay />}
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/15 text-foreground border-primary/25 text-base font-medium">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-muted text-muted-foreground text-base">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-background/80 text-sm"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      {(project.id === 7 || project.id === 8 || project.id === 9) ? 'Personal Project' : 'Work Project'}
                    </Button>
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
 