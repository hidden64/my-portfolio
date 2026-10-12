import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Menu, X, Radio, FileText, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n';

interface NavbarProps {
  activeSection: string;
  onOpenSensors: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenSensors,
  onOpenCV
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'profil', label: t.nav.profile },
    { id: 'competences', label: t.nav.skills },
    { id: 'projets', label: t.nav.projects },
    { id: 'labs', label: t.nav.labs },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e1510]/90 backdrop-blur-md border-b border-[#3c4a41] py-2">
      <div className="flex justify-between items-center px-4 md:px-6 max-w-[1200px] mx-auto">
        {/* Brand & Availability Badge */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono text-xl md:text-2xl text-[#61f9b1] tracking-tighter hover:opacity-80 transition-opacity font-bold flex items-center gap-1"
          >
            <span>~/junias</span>
          </a>

          {/* Availability Badge */}
          <div className="hidden md:flex items-center gap-2 border border-[#3c4a41] rounded-full px-3 py-1 bg-[#1a211c]/60 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#61f9b1] status-dot" />
            <span className="font-mono text-[10px] text-[#bbcabe] tracking-widest uppercase font-semibold">
              {t.available}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#61f9b1] font-bold border-b-2 border-[#61f9b1]'
                    : 'text-[#bbcabe] hover:text-[#61f9b1]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions (CV Download & Sensors Telemetry Trigger) */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-0.5 border border-[#3c4a41] rounded p-0.5 font-mono text-[10px]" aria-label={t.language}>
            {(['fr', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`px-1.5 py-1 rounded transition-colors cursor-pointer ${language === lang ? 'bg-[#61f9b1] text-[#003822] font-bold' : 'text-[#859489] hover:text-[#61f9b1]'}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={onOpenSensors}
            title={t.sensorsTitle}
            className="text-[#bbcabe] hover:text-[#61f9b1] hover:bg-[#1a211c] border border-transparent hover:border-[#3c4a41] rounded px-2.5 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-mono"
          >
            <Radio className="w-4 h-4 text-[#61f9b1] animate-pulse" />
            <span className="hidden sm:inline text-[11px]">{t.sensorsButton}</span>
          </button>

          <button
            onClick={onOpenCV}
            className="hidden sm:flex font-mono text-xs bg-[#61f9b1] text-[#003822] font-semibold px-4 py-2 hover:bg-[#65fdb5] transition-all items-center gap-1.5 rounded cursor-pointer active:scale-95 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.cv}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.mobileMenu}
            className="md:hidden text-[#dce5dc] hover:text-[#61f9b1] p-1.5 rounded focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161d18] border-b border-[#3c4a41] px-4 py-4 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 pb-2 border-b border-[#3c4a41]/50 text-xs font-mono text-[#bbcabe]">
            <span className="w-2 h-2 rounded-full bg-[#61f9b1] status-dot" />
            <span>{t.available.toUpperCase()}</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-left font-mono text-sm py-2 px-2 rounded transition-colors flex items-center justify-between ${
                activeSection === item.id
                  ? 'text-[#61f9b1] bg-[#1a211c] font-bold border-l-2 border-[#61f9b1]'
                  : 'text-[#bbcabe] hover:text-[#61f9b1] hover:bg-[#1a211c]'
              }`}
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-[#859489]">0{navItems.indexOf(item) + 1}</span>
            </button>
          ))}
          <div className="pt-2 border-t border-[#3c4a41] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-2.5 bg-[#61f9b1] text-[#003822] font-mono text-xs font-bold rounded flex justify-center items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{t.cvPdf}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSensors();
              }}
              className="w-full py-2.5 border border-[#3c4a41] text-[#61f9b1] font-mono text-xs rounded flex justify-center items-center gap-2 hover:bg-[#1a211c]"
            >
              <ShieldAlert className="w-4 h-4 text-[#61f9b1]" />
              <span>{t.sensorsButton}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
