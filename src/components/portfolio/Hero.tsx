import { motion, useScroll } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { getOptimizedImageProps } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={targetRef} className="portfolio-section relative overflow-hidden">
      {/* Simplified background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30"
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] pt-4">
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Nathan</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Backend Developer crafting robust APIs and scalable systems
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="w-11 h-11 rounded-full hover:bg-primary/10 transition-colors"
                      onClick={() => window.open('https://github.com/nathanluckock', '_blank')}
                      aria-label="Visit Nathan's GitHub profile"
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
                      aria-label="Visit Nathan's LinkedIn profile"
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

          {/* Right Column - Image */}
          <motion.div 
            className="flex justify-center lg:justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="perspective-card w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="card-inner"> 
                <div className="card-face card-front">
                  <OptimizedImage
                    src="media/myself.png"
                    alt="Nathan Luckock - Professional Portrait"
                    width={382}
                    height={382}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="eager"
                    priority={true}
                  />
                </div>
                <div className="card-face card-back rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-gradient">Let's Connect!</h2>
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
        className="absolute left-1/2 transform -translate-x-1/2 lg:bottom-8 bottom-2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-2 lg:space-y-3">
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-2 lg:h-3 bg-primary rounded-full mt-1 lg:mt-2 animate-bounce"></div>
          </div>
          <motion.p 
            className="text-sm lg:text-base text-muted-foreground font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Scroll to explore
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};