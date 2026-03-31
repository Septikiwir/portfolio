'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import FeaturedProjectsBanner from "../components/sections/FeaturedProjectsBanner";
import ProjectsSection from "../components/sections/ProjectsSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <LayoutGroup>
      <main className="min-h-screen relative selection:bg-primary-green/30 selection:text-white">
        {/* ═══ Intro / Loading Screen ═══ */}
        <AnimatePresence>
          {!introComplete && (
            <motion.div
              key="intro"
              className="fixed inset-0 z-[100]"
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.77, ease: [0.25, 1, 0.5, 1] }}
            >
              <FeaturedProjectsBanner onComplete={() => setIntroComplete(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══ Main Site ═══ */}
        {introComplete && (
          <div className="relative">
            {/* Background Glow Effects */}
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ duration: 2, ease: "easeOut" }}
               className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
            >
              <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-green/5 rounded-full blur-[150px]"></div>
              <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[100px]"></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <Navbar />
            </motion.div>

            <div className="relative z-10">
              <HeroSection />
              <ProjectsSection />
              <AboutSection />
              <ExperienceSection />
              <ContactSection />
            </div>

            <Footer />
          </div>
        )}
      </main>
    </LayoutGroup>
  );
}
