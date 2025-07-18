import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="portfolio-section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.p 
                className="text-primary font-medium text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                John Smith
              </motion.h1>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
                  Creative Developer
                </h2>
                <h3 className="text-xl text-muted-foreground">
                  & Digital Artist
                </h3>
              </motion.div>
            </div>

            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I craft exceptional digital experiences through innovative design and cutting-edge technology. 
              Passionate about creating solutions that make a difference.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="portfolio-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                View Portfolio
              </Button>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="perspective-card">
              <div className="card-inner">
                <div className="card-face portfolio-card w-80 h-80 lg:w-96 lg:h-96">
                  <img 
                    src="/lovable-uploads/f0d52b36-941c-41c1-91df-7d5ed8faa7d3.png"
                    alt="John Smith - Professional Portrait"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="card-face card-back portfolio-card w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gradient">Let's Connect</h3>
                    <p className="text-muted-foreground">Ready to bring your ideas to life</p>
                    <Button className="portfolio-glow">
                      <Mail className="mr-2 h-4 w-4" />
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};