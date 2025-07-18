import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "john.smith@example.com",
      link: "mailto:john.smith@example.com"
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
      details: "San Francisco, CA",
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

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
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
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3D Floating Elements */}
            <div className="relative mt-12">
              <div className="absolute top-0 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute top-10 right-10 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float animation-delay-400"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float animation-delay-800"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card portfolio-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[120px] resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full portfolio-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <div className="portfolio-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's turn your vision into reality. I'm here to help bring your ideas to life.
            </p>
            <Button size="lg" className="portfolio-glow">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};