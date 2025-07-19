import { Building2, MapPin, Calendar, Users } from "lucide-react";

export const Employer = () => {
  return (
    <section className="portfolio-section pb-16" id="employer">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Current Role</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Currently working with an amazing team building innovative solutions
          </p>
        </div>

        <div className="portfolio-card max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Company Info & Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Transpara</h3>
                  <p className="text-muted-foreground text-base">Software Engineer & Developer</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-base">Phoenix, AZ (Remote)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-base">2024 - Present</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-base">Industrial Data Platform</span>
                </div>
              </div>


            </div>

            {/* Company Description */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">About Transpara</h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Transpara is a leading industrial data platform that helps companies make sense of their 
                  operational data. We connect to various industrial systems, process real-time data streams, 
                  and provide insights, KPI's and calculations that drive better decision-making.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">KPI's</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">FastAPI</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Python</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">C#</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Redis</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">MQTT</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Docker</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Kubernetes</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">AI Agents</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">ODBC</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Time-Series Data</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Data Visualization</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">Alert Systems</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-base rounded-full">GPS Tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do Section - Centered and Full Width */}
          <div className="mt-8 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">What I Do</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground text-base max-w-4xl mx-auto">
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Design and build scalable backend APIs using FastAPI and Python</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Integrate with industrial data sources like OPC, MQTT, and ODBC</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Develop containerized microservices for data ingestion, transformation, and analytics</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Implement real-time data pipelines using Redis, MQTT, and time-series databases</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Collaborate with product, data, and frontend teams to align architecture and UX</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Maintain robust testing, logging, and observability standards across services</span>
              </div>
            </div>
          </div>

          {/* Visit Transpara Link - Centered */}
          <div className="mt-6 text-center">
            <a 
              href="https://transpara.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <span className="mr-2">Visit Transpara</span>
              <Building2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 