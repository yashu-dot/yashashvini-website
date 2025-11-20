import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-16 rounded-full" />

          <Card className="p-8 bg-gradient-card border-0 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              View my complete professional background, skills, and experience in a downloadable PDF format.
            </p>
            
            <Button 
              size="lg" 
              className="gap-2"
              asChild
            >
              <a href="/resume.pdf" download="Yashashvini_Rachamallu_Resume.pdf">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
