import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "nathan.luckock@gmail.com",
      link: "mailto:nathan.luckock@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Remote / Available Worldwide",
      link: "#"
    }
  ];

  return (
    <section className="portfolio-section" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={info.title}
                    className="flex items-center space-x-4 group cursor-pointer"
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      animation: 'slideInLeft 0.8s ease-out both'
                    }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-base"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-card portfolio-glow p-8">
            <form 
              action="https://formspree.io/f/myzpzvrl"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="your.email@gmail.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-base font-medium text-foreground">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="Project inquiry or collaboration"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-base font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[160px] resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full portfolio-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="portfolio-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Live Demo Sites Coming Soon</h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
              I'm actively developing interactive demo versions of my personal projects. These live demonstrations 
              will showcase real-time functionality, API integrations, and the full scope of my technical capabilities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Predictive Modeling</h4>
                <p className="text-muted-foreground text-sm">
                  Advanced ML models for industrial forecasting and trend analysis
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎬</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Script-to-Video Pipeline</h4>
                <p className="text-muted-foreground text-sm">
                  Comprehensive video generation pipeline using LLMs and voice synthesis
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">NL Data Analysis Agent</h4>
                <p className="text-muted-foreground text-sm">
                  Intelligent agent for natural language queries and business data insights
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm">In Development</span>
              </div>
              <span className="text-sm">•</span>
              <span className="text-sm">Interactive Demos</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Real-time Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};