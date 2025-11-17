"use client";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      entreprise: "Jehovah Nissi Petroleum (JNP SA)",
      lieu: "Cotonou, Bénin",
      poste: "Administrateur système",
      date: "Mars 2024 - Octobre 2024",
      desc: [
        "Gestion du parc informatique avec GLPI",
        "Déploiement de solutions de virtualisation",
        "Supervision et maintenance du réseau local",
        "Configuration de routeurs et gestion de la sécurité réseau",
        "Gestion du système de visio-surveillance de 26 stations d’essence",
      ],
    },
    {
      entreprise: "NET2ALL",
      lieu: "Calavi, Bénin",
      poste: "Assistant IT",
      date: "Septembre 2023 - Octobre 2023",
      desc: [
        "Déploiement et configuration d’équipements réseau et systèmes",
        "Support technique et contrôle des performances des installations",
      ],
    },
    {
      entreprise: "TECHNODATA SOLUTIONS",
      lieu: "Cotonou, Bénin",
      poste: "Technicien réseau et système (Stage professionnel)",
      date: "Novembre 2022 - Février 2023",
      desc: [
        "Installation et maintenance d’équipements informatiques",
        "Support technique et helpdesk",
        "Assistance dans la configuration du pare-feu (Fortigate)",
        "Suivi et contrôle du matériel pour assurer sa disponibilité",
      ],
    },
    {
      entreprise: "Ministère des Enseignements Secondaires (MESTFP)",
      lieu: "Cotonou, Bénin",
      poste: "Stagiaire à la Direction des Systèmes d’Informations (DSI)",
      date: "Mai 2022 - Août 2022",
      desc: [
        "Installation et maintenance d’équipements informatiques",
        "Support technique et helpdesk",
        "Assistance dans la configuration du pare-feu (Fortigate)",
        "Suivi et contrôle du matériel pour assurer sa disponibilité",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          EXPERIENCES PROFESSIONNELLES
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col"
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
