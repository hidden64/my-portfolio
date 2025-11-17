export default function Formation() {
  const formations = [
    {
      titre: "Master of Science – Epitech Rennes",
      date: "Sept. 2025 - Juil. 2028",
      desc: "Administration systèmes et réseaux, programmation orientée objet, programmation web",
    },
    {
      titre: "Licence en Sécurité Informatique – IFRI Calavi, Bénin",
      date: "2019 - 2023",
      desc: "Réseau, Hacking, Développement Web & Systèmes",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">FORMATIONS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {formations.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{f.titre}</h3>
              <p className="text-gray-500 italic mb-3">{f.date}</p>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
