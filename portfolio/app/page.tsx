"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // import des icones pour la navbar sur tel
import About from "./composants/about";
import Formation from "./composants/formation";
import Experience from "./composants/experience";
import Competences from "./composants/competences";
import Projets from "./composants/projet";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="flex flex-col min-h-screen">
     
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* <h1 className="text-xl font-bold text-blue-600">Junias KOUTI<strong>.</strong></h1> */}
          <h1 className="text-2xl font-bold text-blue-600">Junias KOUTI<strong className="text-green-500 text-4xl align-middle">.</strong></h1>

          
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-blue-600" onClick={closeMenu}>
              À propos de moi
            </a>
            <a href="#formation" className="hover:text-blue-600" onClick={closeMenu}>
              Formations
            </a>
            <a href="#competences" className="hover:text-blue-600" onClick={closeMenu}>
              Compétences
            </a>
            <a href="#experience" className="hover:text-blue-600" onClick={closeMenu}>
              Expériences
            </a>
            <a href="#projets" className="hover:text-blue-600" onClick={closeMenu}>
              Projets
            </a>
          </div>

          
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md border-t border-gray-100">
            <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
              <a href="#about" className="hover:text-blue-600" onClick={closeMenu}>
                À PROPOS
              </a>
              <a href="#formation" className="hover:text-blue-600" onClick={closeMenu}>
                FORMATIONS
              </a>
              <a href="#competences" className="hover:text-blue-600" onClick={closeMenu}>
                COMPÉTENCES
              </a>
              <a href="#experience" className="hover:text-blue-600" onClick={closeMenu}>
                EXPERIENCES
              </a>
              <a href="#projets" className="hover:text-blue-600" onClick={closeMenu}>
                PROJETS
              </a>
            </div>
          </div>
        )}
      </nav>

     
      <div className="pt-24 space-y-20">
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="formation" className="scroll-mt-20">
          <Formation />
        </section>
        <section id="competences" className="scroll-mt-20">
          <Competences />
        </section>
        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>
        <section id="projets" className="scroll-mt-20">
          <Projets />
        </section>
      </div>

      
      <footer className="mt-16 bg-gray-900 text-gray-200 text-center py-5">
        <p>© Junias K. 2026 - Tous droits réservés.</p>
      </footer>
    </main>
  );
}
