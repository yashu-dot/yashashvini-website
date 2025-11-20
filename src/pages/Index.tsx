import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Resume } from "@/components/Resume";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="animate-on-scroll"><About /></div>
      <div className="animate-on-scroll"><Education /></div>
      <div className="animate-on-scroll"><Skills /></div>
      <div className="animate-on-scroll"><Experience /></div>
      <div className="animate-on-scroll"><Publications /></div>
      <div className="animate-on-scroll"><Projects /></div>
      <div className="animate-on-scroll"><Contact /></div>
      <div className="animate-on-scroll"><Resume /></div>
      <Footer />
    </div>
  );
};

export default Index;
