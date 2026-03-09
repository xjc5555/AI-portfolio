import { HeroSection } from "./components/HeroSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { CaseStudies } from "./components/CaseStudies";
import { SkillsSection } from "./components/SkillsSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <HeroSection />
      <ExperienceTimeline />
      <CaseStudies />
      <SkillsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
