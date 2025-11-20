import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yashashvini Rachamallu. All rights reserved.
            </p>
          </div>

          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="https://linkedin.com/in/yashashvini-rachamallu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="https://github.com/yashu-dot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="mailto:rachamal@msu.edu" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
