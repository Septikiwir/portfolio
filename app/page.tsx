import {
  articles,
  faqs,
  logos,
  navLinks,
  projects,
  services,
  stats,
} from "@/content/home";

import { AboutStatsSection } from "@/components/sections/AboutStatsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterCta } from "@/components/sections/FooterCta";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--page-bg)]">
      <HeaderNav navLinks={navLinks} />

      <main className="flex-1">
        <HeroSection />
        <LogoStrip logos={logos} />
        <ServicesSection services={services} />
        <ProjectsSection projects={projects} />
        <AboutStatsSection stats={stats} />
        <ArticlesSection articles={articles} />
        <FaqSection faqs={faqs} />
        <FooterCta />
      </main>
    </div>
  );
}
