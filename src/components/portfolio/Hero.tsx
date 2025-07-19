import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={targetRef} className="portfolio-section relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(251, 255, 255, 1) 0%, rgba(221, 233, 233, 0.9) 30%, rgba(66, 110, 111, 0.2) 70%, rgba(52, 111, 111, 0.1) 100%)
            `
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh] pt-4">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Nathan</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Backend Developer crafting robust APIs and scalable systems
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl text-muted-foreground max-w-lg">
                I build fast, reliable backend systems that power real-world applications. 
                From API designs to data optimization, I focus on creating solutions that scale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="lg" 
                        className="portfolio-glow"
                        onClick={() => window.open('mailto:nathan.luckock@gmail.com', '_blank')}
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Get In Touch
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Send me an email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => window.open('/media/Nathan_Luckock_Resume.pdf', '_blank')}
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Resume
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download my resume</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="w-11 h-11 rounded-full hover:bg-primary/10 transition-colors"
                      onClick={() => window.open('https://github.com/nathanluckock', '_blank')}
                    >
                      <Github className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="w-11 h-11 rounded-full hover:bg-primary/10 transition-colors"
                      onClick={() => window.open('https://linkedin.com/in/nathanluckock', '_blank')}
                    >
                      <Linkedin className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-center lg:-translate-y-16 lg:-translate-x-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="perspective-card w-80 h-80 lg:w-96 lg:h-96">
              <div className="card-inner"> 
                <div className="card-face card-front">
                  <img 
                    src="media/myself.png"
                    alt="Nathan Luckock - Professional Portrait"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="card-face card-back flip-card-back rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gradient">Let's Connect! 🚀</h3>
                    <p className="text-muted-foreground text-base">Fun fact: I love photography, especially capturing unique landscapes and candid moments.</p>
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
        <div className="flex flex-col items-center space-y-3">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
          <motion.p 
            className="text-base text-muted-foreground font-medium tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Scroll to explore
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};