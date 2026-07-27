import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-12 px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/junias.png"
          alt="junias"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />


        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">PROFIL</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Étudiant en Master of Science à Epitech Rennes, passionné par les nouvelles innovations et la technologie, je mène une veille active sur les actualités dans le monde de la tech.
          </p>


          
          <div id="contact-section" className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-5">
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
                    +33 7 46 52 50 59
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

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 8 4-16 3 8h4"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Permis</p>
                  <p className="font-medium">Permis B</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Portfolio</p>
                  <a href="https://juniaskouti.me" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600">juniaskouti.me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
