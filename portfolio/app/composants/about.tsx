import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/junias.png"
          alt="junias"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />


        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Qui suis-je ?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hello. Je m&apos;appelle{" "}
            <span className="font-semibold text-blue-600">Junias KOUTI</span>. <br />
            Je suis passionné par l&apos;informatique et les nouvelles technologies,
            efficaces, modernes et surtout très utiles. J&apos;adore apprendre, relever
            des défis techniques et transformer des idées en projets concrets. À
            travers ce portfolio, je vous présente un aperçu de mon parcours
            académique et professionnel ainsi que quelques projets concrets
            que j&apos;ai réalisés.</p>


          
          <div id="contact-section" className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Comment me contacter ?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <a
                    href="tel:+33746525959"
                    className="font-medium hover:text-blue-600"
                  >
                    +33 07 46 52 50 59
                  </a>
                </div>
              </div>

             
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:duarinali@gmail.com"
                    className="font-medium hover:text-blue-600"
                  >
                    duarinali@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/junias-kouti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-600"
                  >
                    Junias KOUTI
                  </a>
                </div>
              </div>

              
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="font-medium">Rennes, Bretagne, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
