"use client";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      entreprise: "EPITECH, Établissement d'enseignement supérieur",
      lieu: "Rennes, France",
      poste: "Développeur informatique (stage)",
      date: "Avril 2026 - Juillet 2026",
      desc: [
        "Développement d'une plateforme d'analyse: conception d'API et intégration de sources de données",
        "Automatisation des traitements en Python",
        "Agrégation et exploitation de volumes de logs pour produire des indicateurs de supervision",
        "Rédaction de rapports techniques documentés",
      ],
    },
    {
      entreprise: "Jehovah Nissi Petroleum",
      lieu: "Cotonou, Bénin",
      poste: "Chargé de données & reporting ERP",
      date: "Mars 2024 - Octobre 2024",
      desc: [
        "Déploiement et administration de l'ERP Odoo: structuration des données et paramétrage des flux",
        "Extractions et requêtes SQL pour produire des tableaux de suivi d'activité multi-sites (ventes, stocks, parc)",
        "Fiabilisation et contrôle des données: détection d'anomalies, correction et harmonisation",
        "Recueil des besoins des équipes terrain et restitution d'indicateurs décisionnels sous Excel",
      ],
    },
    {
      entreprise: "NET2ALL",
      lieu: "Calavi, Bénin",
      poste: "Développeur & Administrateur SI",
      date: "Septembre 2023 - Octobre 2023",
      desc: [
        "Déploiement d'infrastructures et scripting d'automatisation",
        "Exploitation des données d'inventaire via GLPI (extractions et reporting)",
      ],
    },
    {
      entreprise: "TECHNODATA SOLUTIONS",
      lieu: "Cotonou, Bénin",
      poste: "Développeur & Technicien SI (stage)",
      date: "Novembre 2022 - Février 2023",
      desc: [
        "Développement de scripts d'automatisation",
        "Configuration d'équipements et gestion des hébergements web (Plesk)",
      ],
    },
    {
      entreprise: "Ministère des Enseignements Secondaires (MESTFP)",
      lieu: "Cotonou, Bénin",
      poste: "Stagiaire à la Direction des Systèmes d’Informations (DSI)",
      date: "Mai 2022 - Août 2022",
      desc: [
        "Support technique et helpdesk",
        "Asistance au service technique, installation et maintenance d’équipements",
        "Suivi et contrôle du matériel pour garantir leur disponibilité",
        "Assistance dans le cadre de configuration du pare-feu (Fortigate)",
      ],
    },
  ];

  return (
    <section className="bg-white py-12 px-5" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          EXPERIENCES PROFESSIONNELLES
          {/* <div className="w-60 h-1 bg-blue-600 mx-auto rounded-full"></div> */}
        </h2>
        

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">
                    {exp.poste}
                  </h3>
                  <p className="text-gray-700 font-medium">{exp.entreprise}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-1">{exp.lieu}</p>
              <p className="text-gray-500 italic mb-3">{exp.date}</p>

              <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside space-y-1">
                {exp.desc.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
