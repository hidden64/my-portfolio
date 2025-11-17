"use client";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Globe, Gamepad2, Server, Lock } from "lucide-react";

export default function Projets() {
  const projets = [
    // EPITECH
    {
      titre: "My-Marvin",
      desc: "Projet DevOps avec mise en place de pipeline CI/CD, conteneurisation Docker et automatisation Jenkins.",
      etablissement: "EPITECH",
      statut: "À venir",
      icon: <Server size={24} />,
      couleur: "from-indigo-500 to-indigo-600",
      tags: ["DevOps", "Docker", "Jenkins", "CI/CD"]
    },
    {
      titre: "Redditech",
      desc: "Application desktop utilisant OAuth2 et communication avec l'API REST de Reddit (JS, .Net, Java).",
      etablissement: "EPITECH",
      statut: "À venir",
      icon: <Globe size={24} />,
      couleur: "from-red-500 to-red-600",
      tags: ["OAuth2", "API REST", "Desktop"]
    },
    {
      titre: "Tower Defense - Jeu 2D",
      desc: "Création d'un jeu Tower Defense en Java avec libgdx. Documentation avec UML et Doxygen.",
      etablissement: "EPITECH",
      statut: "En cours",
      icon: <Gamepad2 size={24} />,
      couleur: "from-orange-500 to-orange-600",
      tags: ["Java", "libgdx", "UML", "Doxygen"]
    },
    {
      titre: "Portfolio",
      desc: "Plateforme web de mise en relation recruteurs/candidats et portfolio personnel.",
      etablissement: "EPITECH",
      statut: "Terminé",
      icon: <Code2 size={24} />,
      couleur: "from-green-500 to-green-600",
      tags: ["Next.js", "TypeScript", "CSS", "Framer Motion"]
    },

    {
      titre: "Jobboard",
      desc: "Plateforme web de mise en relation recruteurs/candidats et portfolio personnel.",
      etablissement: "EPITECH",
      statut: "Terminé",
      icon: <Code2 size={24} />,
      couleur: "from-green-500 to-green-600",
      tags: [ "Node.js", "MySQL", "Express"]
    },
    // IFRI

    {
      titre: "VPN Client-to-Site",
      desc: "Projet de soutenance : mise en place d'un VPN avec GNS3, VMware. Configuration réseau avec protocoles IKEv2, IPsec, TLS.",
      etablissement: "IFRI",
      statut: "Terminé",
      icon: <Lock size={24} />,
      couleur: "from-teal-500 to-teal-600",
      tags: ["GNS3", "IKEv2", "IPsec", "Wireshark"]
    },
    {
      titre: "Proposition d'une PSSI de l'université",
      desc: "Rédaction et déploiement d'une Politique de Sécurité du Système d'Information. Audit de sécurité selon référentiels EBIOS / ISO 27001.",
      etablissement: "IFRI",
      statut: "Terminé",
      icon: <ShieldCheck size={24} />,
      couleur: "from-green-600 to-green-700",
      tags: ["EBIOS", "ISO 27001", "Audit"]
    },
    {
      titre: "GESTIO",
      desc: "Application web complète de gestion académique pour université : étudiants, enseignants, notes, emplois du temps.",
      etablissement: "IFRI",
      statut: "Terminé",
      icon: <Globe size={24} />,
      couleur: "from-blue-500 to-blue-600",
      tags: ["PHP", "MySQL", "HTML", "CSS"]
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8" id="projets">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Mes Projets
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projets.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col border border-gray-100">
                  {/* Header avec icône et statut */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${p.couleur} p-3 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {p.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      p.statut === "Terminé" ? "bg-green-100 text-green-700" :
                      p.statut === "En cours" ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {p.statut}
                    </span>
                  </div>

                  {/* Titre et établissement */}
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {p.titre}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">{p.etablissement}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compétences transverses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl shadow-md p-8 border border-gray-100"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Compétences Transverses
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {competences.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all cursor-default"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full text-center py-12 bg-gray-50"
      >
        <motion.a
          href="#contact-section"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-blue-600 text-white text-lg sm:text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
        >
          Contacter Junias
        </motion.a>
      </motion.div>
    </>
  );
}