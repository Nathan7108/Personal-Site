import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Current Role", href: "#employer" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out ${
        isScrolled 
          ? "shadow-lg" 
          : ""
      }`}
      style={{
        willChange: 'transform, opacity, background-color',
        transform: 'translateZ(0)', 
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {}
          <div 
            className="text-2xl font-bold text-gradient cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("#home")}
          >
            NL
          </div>

          {}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-lg relative group focus:outline-none focus:ring-0 focus:border-none focus:shadow-none px-0 py-0 min-w-0 min-h-0"
                style={{ fontSize: '1.125rem', lineHeight: '1.75rem' }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-0 focus:border-none focus:shadow-none w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-lg hover:bg-primary/10 rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-none focus:shadow-none min-h-0"
                  style={{ fontSize: '1.125rem', lineHeight: '1.75rem' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};