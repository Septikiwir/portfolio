import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import FeaturedProjectsBanner from "../components/sections/FeaturedProjectsBanner";
import ProjectsSection from "../components/sections/ProjectsSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary-green/30 selection:text-white">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-green/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />

      <div className="relative z-10">
        <FeaturedProjectsBanner />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
