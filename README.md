# ~/junias - SOC Analyst & Cloud Security Portfolio

Portfolio technique d'Analyste SOC (Security Operations Center) et Spécialiste Sécurité Cloud (SIEM, DFIR, DevSecOps, Blue/Red Team), avec un émulateur de terminal interactif, un moniteur de télémétrie IDS en direct, une matrice de compétences MITRE/SOC et un journal de labs.

---

## Stack Technique

- **Framework** : React 19 + TypeScript
- **Bundler / Serveur Dev** : Vite 6
- **Styling** : Tailwind CSS v4
- **Icônes** : Lucide React
- **Typographie** : Space Grotesk, Inter, JetBrains Mono

---

## Prérequis

Avant de commencer, vérifiez que vous avez installé :
- **Node.js** (version 18.x ou supérieure recommandée)
- **npm** (inclus avec Node.js) ou **pnpm** / **yarn**

---

## Démarrage Rapide en Local

### 1. Cloner le dépôt

```bash
git clone https://github.com/hidden64/my-portfolio.git
cd my-portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur **http://localhost:3000** (ou sur le port indiqué dans votre terminal).

---

## Scripts Disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Démarre le serveur de développement local avec hot-reload |
| `npm run build` | Compile l'application pour la production dans le dossier `dist/` |
| `npm run preview` | Prévisualise localement le build de production |
| `npm run lint` | Vérifie les types TypeScript (`tsc --noEmit`) |
| `npm run clean` | Nettoie les artefacts de build (`dist/`) |

---

## Structure du Projet

```text
├── index.html                  # Point d'entrée HTML & Polices Google Fonts
├── package.json                # Dépendances et scripts de démarrage
├── vite.config.ts              # Configuration Vite + Tailwind CSS
├── metadata.json               # Métadonnées de l'application
└── src/
    ├── main.tsx                # Point d'entrée React
    ├── App.tsx                 # Composant principal & orchestration des sections
    ├── index.css               # Styles Tailwind v4, grilles cyber et animations
    ├── types.ts                # Définitions TypeScript (Projets, Labs, Logs, Compétences)
    ├── data/
    │   └── portfolioData.ts    # Données du profil, projets, labs et règles de détection
    └── components/
        ├── Navbar.tsx          # Barre de navigation & badge de disponibilité
        ├── HeroSection.tsx     # Hero avec émulateur de terminal interactif
        ├── ProfileSection.tsx  # Profil opérationnel & carte d'accréditation SYS_ID
        ├── SkillsSection.tsx   # Matrice de compétences & filtres Blue/Red Team
        ├── ProjectsSection.tsx # Archives projets et métriques clés
        ├── LabsSection.tsx     # Journal de bord Labs & timeline d'investigation
        ├── ContactSection.tsx  # Canal PGP & formulaire de contact chiffré
        ├── SensorsModal.tsx    # Modal de surveillance IDS en temps réel
        ├── ProjectModal.tsx    # Inspecteur de projet & visualiseur de règles Sigma/YARA
        ├── CVModal.tsx         # Modal interactif de visualisation & impression du CV
        └── Footer.tsx          # Pied de page avec horodatage UTC
```

---

## Personnalisation

Toutes les données du profil (nom, email, certifications, projets, règles de détection, liens sociaux) sont centralisées dans :
`/src/data/portfolioData.ts`