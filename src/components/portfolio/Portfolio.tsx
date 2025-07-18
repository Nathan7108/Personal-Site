import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Navigation } from "./Navigation";

export const Portfolio = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};