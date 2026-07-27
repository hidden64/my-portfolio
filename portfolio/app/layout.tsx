import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Junias K.",
  description: "Portfolio personnel de Junias KOUTI – Développeur et administrateur systèmes et réseaux.",
  icons: [
    { rel: "icon", url: "/myfavion.svg", type: "image/svg+xml" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
