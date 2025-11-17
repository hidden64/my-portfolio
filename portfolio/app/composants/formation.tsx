export default function Formation() {
  const formations = [
    {
      titre: "Master of Science – Epitech Rennes",
      date: "Sept. 2025 - Juil. 2028",
      desc: "Administration systèmes et réseaux, programmation orientée objet, programmation web",
      lien: "https://www.epitech.eu/formation-alternance/pre-msc-post-bac2"
    },
    {
      titre: "Licence en Sécurité Informatique – UAC/IFRI, Bénin",
      date: "Octobre 2019 - Juillet 2023",
      desc: "Réseau, Hacking, Développement Web & Systèmes",
      lien: "https://ifri-uac.bj/formation/licence-securite-informatique"
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">FORMATIONS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {formations.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <a
                href={f.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  text-xl font-semibold text-blue-600
                  mb-2
                  transition
                  duration-200
                  ease-out
                  hover:text-blue-700
                  hover:scale-[1.02]
                  relative
                "
              >
                {/* Texte du titre */}
                {f.titre}

                {/* Barre animée en dessous du texte */}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-blue-600
                    transition-all
                    duration-200
                    ease-out
                    hover:w-full
                  "
                />
              </a>

              <p className="text-gray-500 italic mb-3">{f.date}</p>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
