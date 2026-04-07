import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import ProjectGrid from "./components/ProjectGrid";
import ToolboxSection from "./components/ToolboxSection";
import MarqueeSection from "./components/MarqueeSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <ProjectGrid />
      <ToolboxSection />
      <MarqueeSection />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <SocialSection />
      <Footer />
    </>
  );
}
