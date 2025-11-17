"use client";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Globe, Gamepad2 } from "lucide-react";

export default function Projets() {
  const projets = [
    {
      titre: "Plateforme de Gestion Académique (Gestio)",
      desc: "Développement d’une application web complète de gestion académique pour université (étudiants, enseignants, notes, emplois du temps).",
      etablissement: "IFRI",
      icon: <Globe size={26} />,
      couleur: "bg-blue-500",
    },
    {
      titre: "Mise en place d’une PSSI",
      desc: "Rédaction et déploiement d’une Politique de Sécurité du Système d’Information (PSSI) pour une université, assurant conformité et sécurité du SI.",
      etablissement: "IFRI",
      icon: <ShieldCheck size={26} />,
      couleur: "bg-green-500",
    },
    {
      titre: "Projet Web : Jobboard & Portfolio",
      desc: "Création d’une plateforme web moderne de mise en relation entre recruteurs et candidats, ainsi qu’un portfolio personnel interactif.",
      etablissement: "EPITECH (en cours)",
      icon: <Code2 size={26} />,
      couleur: "bg-purple-500",
    },
    {
      titre: "Projet Java : Jeu Vidéo 2D",
      desc: "Développement d’un jeu vidéo 2D avec Java : gestion des collisions, animations et logique de gameplay.",
      etablissement: "EPITECH (en cours)",
      icon: <Gamepad2 size={26} />,
      couleur: "bg-orange-500",
    },
  ];

  const competences = [
    "Travail en équipe",
    "Curiosité",
    "Communication",
    "Adaptabilité",
    "Esprit d'analyse",
    "Gestion de projet",
    "Autonomie",
  ];

  return (
    <>
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6" id="projets">
      <div className="max-w-6xl mx-auto">
       
        <h2 className="text-3xl font-bold text-gray-800 mb-16 text-center">
          MES PROJETS REALISES & EN COURS DE REALISATION
        </h2>

      
        <div className="relative border-l-4 border-blue-200 pl-8 space-y-12">
          {projets.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                i % 2 === 0 ? "md:pl-10" : "md:pl-0 md:pr-10"
              }`}
            >
            
              <div
                className={`absolute -left-10 md:static md:translate-x-0 flex items-center justify-center w-12 h-12 ${p.couleur} text-white rounded-full shadow-md`}
              >
                {p.icon}
              </div>

           
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300 md:w-3/4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {p.titre}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{p.etablissement}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
             COMPETENCES TRANSVERSES
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {competences.map((c, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      

    </section>
    <div className="w-full text-center py-10">
        <a href="#contact-section" className="inline-block bg-blue-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow hover:bg-blue-700 transition">
          Cliquer moi pour contacter Junias !
        </a>
      </div>
    </>

    
    
  );
}
