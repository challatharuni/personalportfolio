import { ArrowDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const roles = [
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
  "Cloud Practitioner",
];

export function HeroSection() {
  const typedText = useTypingEffect(roles, 100, 50, 2000);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm{" "}
          <span className="text-gradient">Taruni Challa</span>
        </h1>

        <div className="h-12 md:h-14 mb-8 animate-slide-up animation-delay-100">
          <p className="text-xl md:text-2xl text-muted-foreground">
            <span className="text-foreground font-medium">{typedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </p>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg animate-slide-up animation-delay-200">
          Enthusiastic B.Tech CSE student with a passion for Artificial Intelligence
          and Machine Learning. Ready to apply knowledge in web development, data
          analysis, and cloud computing to drive innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Eye className="h-5 w-5 mr-2" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a href="/taruni_cv.pdf" download="Taruni_Challa_CV.pdf">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={() => {
              const element = document.querySelector("#about");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
