import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="taruni-portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <CertificationsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
