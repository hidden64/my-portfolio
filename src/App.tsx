import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LabsSection } from './components/LabsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SensorsModal } from './components/SensorsModal';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { Project } from './types';
import { ArrowUp, Radio } from 'lucide-react';
import { useLanguage } from './i18n';

export default function App() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('profil');
  const [isSensorsOpen, setIsSensorsOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ScrollSpy to determine active navbar item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setShowScrollTop(window.scrollY > 400);

      const sections = ['hero', 'profil', 'competences', 'projets', 'labs', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'hero' ? 'profil' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1510] text-[#dce5dc] font-body tech-grid relative antialiased flex flex-col selection:bg-[#61f9b1]/30 selection:text-[#61f9b1]">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenSensors={() => setIsSensorsOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-[1200px] mx-auto px-4 md:px-6 pt-[90px] md:pt-[110px] pb-16 flex flex-col gap-16 md:gap-24 flex-1">
        {/* Hero Section with Interactive Terminal */}
        <HeroSection
          onScrollToProjects={() => scrollToSection('projets')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* 01. Operational Profile */}
        <ProfileSection />

        {/* 02. Skills Matrix */}
        <SkillsSection />

        {/* 03. Project Archives */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 04. Labs Timeline */}
        <LabsSection />

        {/* 05. Encrypted Contact Dispatcher */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick Actions */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t.backToTop}
            className="p-2.5 bg-[#161d18] text-[#61f9b1] hover:text-[#5de6ff] border border-[#3c4a41] hover:border-[#61f9b1] rounded-full shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Modals */}
      <SensorsModal
        isOpen={isSensorsOpen}
        onClose={() => setIsSensorsOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
}
