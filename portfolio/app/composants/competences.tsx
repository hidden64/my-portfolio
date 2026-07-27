import { BookOpen, BarChart3, Database, Server, FileText, TrendingUp } from "lucide-react";

export default function Competences() {
  const competenceCards = [
    {
      title: "Données & requêtage",
      icon: <Database size={24} />,
      content: [
        "SQL (MySQL, PostgreSQL)",
        "Requêtes, jointures et agrégations",
        "Contrôle et fiabilisation des données",
        "Modélisation relationnelle",
      ],
    },
    {
      title: "Restitution & dataviz",
      icon: <BarChart3 size={24} />,
      content: [
        "Conception de tableaux de bord et d'indicateurs",
        "Microsoft Excel (TCD, formules, mise en forme conditionnelle)",
        "Outils de dataviz",
      ],
    },
    {
      title: "Préparation de données (ETL)",
      icon: <Server size={24} />,
      content: [
        "Extraction, transformation et chargement de données applicatives",
        "Automatisation de traitements et de rapports en Python",
      ],
    },
    {
      title: "Environnement applicatif",
      icon: <BookOpen size={24} />,
      content: [
        "ERP (Odoo), GLPI, bases de données",
        "Docker, Jenkins/CI-CD, Git",
        "Linux et Windows Server",
      ],
    },
    {
      title: "Fonctionnel",
      icon: <FileText size={24} />,
      content: [
        "Recueil et analyse des besoins utilisateurs",
        "Esprit d'analyse et de synthèse",
        "Résolution méthodique de problèmes",
        "Documentation des développements",
      ],
    },
    {
      title: "En cours d'apprentissage",
      icon: <TrendingUp size={24} />,
      content: [
        "Talend",
        "Qlik Cloud / Qlik Sense (autoformation)",
      ],
    },
  ];

  return (
    <section className="bg-white py-12 px-5" id="competences">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">COMPÉTENCES</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Compétences techniques et fonctionnelles acquises au cours de mes études,
          de mes projets et de mes expériences en entreprise.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {competenceCards.map((card, index) => (
            <div
              key={index}
              className="group bg-gray-50 border border-gray-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                {card.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
