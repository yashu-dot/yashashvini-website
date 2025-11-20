import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const roles = ["Machine Learning Engineer", "AI Developer", "Software Engineer", "Data Scientist"];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-pulse" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Yashashvini Rachamallu</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground h-12 flex items-center justify-center">
              <span className="mr-2">{displayText.startsWith('A') ? 'An' : 'A'}</span>
              <span className="text-primary font-semibold min-w-[300px] text-left">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A self-motivated and innovative computer scientist with a profound passion for programming and
            a keen aptitude for solving complex, real-world problems. Expertise spans across machine learning,
            deep learning, computer vision, and natural language processing.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="group" asChild>
              <a href="#about">
                Learn More
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="https://www.linkedin.com/in/yashashvinir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="https://github.com/yashu-dot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="mailto:rachama2@msu.edu?subject=Contact%20from%20Portfolio" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
