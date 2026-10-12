import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US') + ' UTC');
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <footer className="w-full py-8 border-t border-[#3c4a41] bg-[#09100b] mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 max-w-[1200px] mx-auto gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="font-mono text-sm text-[#61f9b1] hover:text-[#5de6ff] transition-colors font-bold"
          >
            ~/junias
          </a>
          <span className="font-mono text-[10px] text-[#859489]">
            [{time || 'ONLINE'}]
          </span>
        </div>

        {/* Middle: Links from Design */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-[#bbcabe]">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5de6ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE_DATA.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5de6ff] transition-colors"
          >
            TryHackMe
          </a>
          <a
            href={PROFILE_DATA.rootme}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5de6ff] transition-colors"
          >
            RootMe
          </a>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5de6ff] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Right: Security & Build Status */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#859489] tracking-widest opacity-75">
          <ShieldCheck className="w-3.5 h-3.5 text-[#61f9b1]" />
          <span>STATIC_BUILD_V1.0 // ENCRYPTED_CONNECTION</span>
        </div>
      </div>
    </footer>
  );
};
