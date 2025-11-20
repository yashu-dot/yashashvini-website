import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Connect with me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-16 rounded-full" />

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-0">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:rachama2@msu.edu?subject=Contact%20from%20Portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                    rachama2@msu.edu
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Michigan, United States</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/yashashvinir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="https://github.com/yashu-dot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="mailto:rachama2@msu.edu?subject=Contact%20from%20Portfolio" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};