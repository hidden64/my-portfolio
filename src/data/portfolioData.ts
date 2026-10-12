import { Project, LabEntry, SkillCategory, ThreatLog } from '../types';

export const PROFILE_DATA = {
  name: 'Junias',
  sysId: 'JUNIAS_SEC',
  idNum: '0x4A756E',
  headline: 'Systèmes, Réseaux & Cybersécurité',
  heroTagline: 'Sécuriser le Présent, Anticiper les Menaces.',
  bio: "Étudiant en Master of Science Cybersécurité à Epitech, avec deux ans de terrain entre l'administration d'infrastructures multi-sites, le support IT et un centre opérationnel de sécurité. Convaincu qu'un système bien protégé est d'abord un système bien connu, et que la sécurité tient autant aux utilisateurs qu'aux outils.",
  operationalProfile: "Fort de deux ans d'expérience en administration systèmes et réseaux, j'ai géré des infrastructures allant d'un réseau de 26 sites à la mise en place d'une plateforme SOC. Mon approche allie rigueur technique et pédagogie : sécuriser les systèmes, superviser les alertes, et accompagner les utilisateurs dans les bonnes pratiques. Je cherche une alternance pour approfondir mes compétences en cybersécurité au sein d'une équipe opérationnelle.",
  location: 'Rennes, FR',
  clearance: 'Non classifié',
  status: 'Disponible en Alternance (6 sem. entreprise / 2 sem. école)',
  formation: 'Master Cybersécurité, Epitech Rennes (En cours)',
  specialisation: 'Systèmes, Réseaux & Cybersécurité',
  certifications: [
    { name: 'DefHack 2026 — COMCYBER', status: 'Participant' },
    { name: 'Hack The Box — Profil actif', status: 'En cours' },
    { name: 'Root-Me — Profil actif', status: 'En cours' }
  ],
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0FCvHY3EjGDmUxpafT1hENIAuZjvAfqvPjxWJap5wiYwzmbPGmgu9Dvsv0gZYp00bf4KoFhLXA9CIW9dCvTBuPYeZLzgDw2-04Cly7GHUjQrIkrfstRgOo0tpHfIq9sWqGhLJfVXg6UU_l1IvEbngK1EhBXDAKBzyl3ClcSugSJZjJzp59uBdSBdmN5LhWb5Zxo3fhr12bNUee7EM9o0Q0yxrkC_aI_cgI32v8Yt5wowHZQR4pvT8',
  email: 'duarinali@gmail.com',
  github: 'https://github.com',
  tryhackme: 'https://tryhackme.com',
  rootme: 'https://root-me.org',
  linkedin: 'https://linkedin.com/in/junias-kouti',
  stats: {
    ctfSolved: '2+ ans',
    siemRules: '26 sites',
    incidentsAnalyzed: '4 postes',
    uptime: 'MSc'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'plateforme-soc',
    code: 'PROJET_ALPHA',
    title: 'Mise en Place d\'une Plateforme SOC',
    category: 'siem',
    categoryLabel: 'SIEM & SOC',
    date: '2026-Q2',
    summary: "Déploiement des services d'une plateforme SOC : conteneurisation, intégration des composants SIEM et mise en service opérationnelle.",
    description: "Conception et déploiement d'une plateforme de supervision de sécurité dans le cadre d'un stage chez Epitech. Conteneurisation des services avec Docker, intégration des composants SIEM, supervision des alertes, analyse de journaux et traitement des incidents. Automatisation de tâches d'analyse en Python.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Plateforme SOC avec tableau de bord de supervision',
    tags: ['Docker', 'Python', 'SIEM', 'ELK', 'Snort', 'Automatisation'],
    metrics: [
      { label: 'Services conteneurisés', value: '6 conteneurs' },
      { label: 'Durée du projet', value: '4 mois' },
      { label: 'Scripts d\'automatisation', value: '8 scripts Python' }
    ],
    architecture: [
      'Conteneurisation des services SOC avec Docker et Docker Compose pour un déploiement reproductible',
      'Intégration des composants SIEM (collecte, indexation, visualisation) pour la centralisation des logs',
      'Supervision des alertes et analyse de journaux pour le traitement des incidents de sécurité',
      'Automatisation des tâches récurrentes d\'analyse et de reporting en Python'
    ],
    detectionRule: {
      type: 'Sigma',
      title: 'Détection de connexion SSH suspecte hors horaires',
      code: `title: Suspicious Off-Hours SSH Login
status: test
description: Détecte les connexions SSH réussies en dehors des horaires de bureau
logsource:
  category: authentication
  product: linux
detection:
  selection:
    EventType: 'sshd'
    Action: 'Accepted'
  timeframe:
    - hours: '0-6'
    - hours: '20-23'
  condition: selection AND timeframe
level: medium
tags:
  - attack.initial_access
  - attack.t1078`
    },
    githubUrl: 'https://github.com'
  },
  {
    id: 'pssi-ebios',
    code: 'PROJET_BETA',
    title: 'PSSI et Analyse de Risque EBIOS RM',
    category: 'governance',
    categoryLabel: 'Gouvernance & Conformité',
    date: '2025-Q4',
    summary: "Audit complet et rédaction d'une politique de sécurité des systèmes d'information selon la méthode EBIOS RM et la norme ISO 27001.",
    description: "Réalisation d'une analyse de risque complète selon la méthodologie EBIOS RM sur un système d'information cible. Identification des biens essentiels, cartographie des menaces, évaluation des scénarios de risque et rédaction d'un plan de traitement avec mesures argumentées auprès des décideurs.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Matrice de risques et cartographie EBIOS RM',
    tags: ['EBIOS RM', 'ISO 27001', 'Analyse de risque', 'PSSI', 'Gouvernance', 'Conformité'],
    metrics: [
      { label: 'Scénarios de risque', value: '15 identifiés' },
      { label: 'Mesures de sécurité', value: '22 proposées' },
      { label: 'Couverture Annexe A', value: 'ISO 27001' }
    ],
    architecture: [
      'Identification et classification des biens essentiels et biens support du système d\'information',
      'Cartographie des sources de menaces et des événements redoutés selon la méthode EBIOS RM',
      'Évaluation de la vraisemblance et de la gravité des scénarios de risque',
      'Rédaction de la PSSI et du plan de traitement des risques avec arbitrage des mesures auprès des décideurs'
    ],
    githubUrl: 'https://github.com'
  },
  {
    id: 'vpn-client-to-site',
    code: 'PROJET_GAMMA',
    title: 'VPN Client-to-Site & Analyse de Trafic Réseau',
    category: 'network',
    categoryLabel: 'Réseau & Infrastructure',
    date: '2025-Q3',
    summary: "Mise en place d'un accès distant chiffré IKEv2/IPsec en environnement virtualisé GNS3, avec routage et analyse de trafic Wireshark.",
    description: "Conception et déploiement d'une architecture VPN client-to-site dans un environnement réseau simulé sous GNS3. Configuration du protocole IKEv2/IPsec, mise en place du routage inter-sites et analyse du trafic chiffré avec Wireshark pour valider l'intégrité et la confidentialité des échanges.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Architecture VPN et topologie réseau GNS3',
    tags: ['GNS3', 'IKEv2', 'IPsec', 'Wireshark', 'VPN', 'Routage'],
    metrics: [
      { label: 'Protocole VPN', value: 'IKEv2/IPsec' },
      { label: 'Environnement', value: 'GNS3 virtualisé' },
      { label: 'Validation', value: 'Analyse PCAP' }
    ],
    architecture: [
      'Conception de la topologie réseau complète sous GNS3 (routeurs, pare-feu, clients distants)',
      'Configuration du tunnel VPN IKEv2/IPsec entre le site distant et le réseau interne',
      'Mise en place du routage pour l\'acheminement du trafic à travers le tunnel chiffré',
      'Capture et analyse du trafic avec Wireshark pour valider le chiffrement et détecter d\'éventuelles fuites'
    ],
    githubUrl: 'https://github.com'
  },
  {
    id: 'audit-owasp',
    code: 'PROJET_DELTA',
    title: 'Audit de Sécurité Applicative OWASP Top 10',
    category: 'devsecops',
    categoryLabel: 'Audit & DevSecOps',
    date: '2025-Q2',
    summary: "Qualification des vulnérabilités d'une application web selon l'OWASP Top 10 avec analyse SAST via SonarQube et plan de remédiation priorisé.",
    description: "Réalisation d'un audit de sécurité applicative complet sur une application web. Utilisation d'outils SAST (analyse statique du code source) et DAST pour identifier les vulnérabilités selon le référentiel OWASP Top 10. Rédaction d'un rapport détaillé avec classification par criticité et plan de remédiation priorisé.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Rapport d\'audit OWASP et tableau SonarQube',
    tags: ['OWASP', 'SAST', 'DAST', 'SonarQube', 'Sécurité applicative', 'Remédiation'],
    metrics: [
      { label: 'Vulnérabilités identifiées', value: '12 failles' },
      { label: 'Criticité haute corrigées', value: '3 failles' },
      { label: 'Couverture OWASP', value: 'Top 10 complet' }
    ],
    architecture: [
      'Analyse statique du code source (SAST) avec SonarQube pour détecter les failles dès la compilation',
      'Tests dynamiques (DAST) sur l\'application déployée pour identifier les vulnérabilités exploitables',
      'Classification des vulnérabilités selon le référentiel OWASP Top 10 et scoring CVSS',
      'Rédaction du rapport d\'audit et du plan de remédiation priorisé par criticité'
    ],
    githubUrl: 'https://github.com'
  }
];

export const LABS_DATA: LabEntry[] = [
  {
    id: 'defhack-2026',
    dateTag: 'RÉCENT',
    statusType: 'recent',
    title: 'DefHack 2026 — Challenge Cyberdéfense COMCYBER',
    platform: 'COMCYBER / Ministère des Armées',
    category: 'CTF Cyberdéfense',
    description: 'Participation au challenge national DefHack 2026 organisé par le Commandement de la Cyberdéfense (COMCYBER). Épreuves couvrant la détection d\'intrusion, l\'analyse forensique, la cryptographie et la défense de systèmes en conditions réalistes.',
    technologies: ['Forensics', 'Network Analysis', 'Cryptographie', 'Défense système', 'OSINT'],
    difficulty: 'Hard',
    scoreOrCert: 'Participant',
    writeupSnippet: 'Compétition nationale mêlant épreuves individuelles et en équipe sur des scénarios réalistes de cyberdéfense. Mise en pratique des compétences en analyse de logs, détection d\'intrusion et réponse aux incidents dans un cadre compétitif encadré par le Ministère des Armées.'
  },
  {
    id: 'htb-labs',
    dateTag: 'EN COURS',
    statusType: 'recent',
    title: 'Hack The Box — Machines & Challenges',
    platform: 'Hack The Box',
    category: 'Pentest & Exploitation',
    description: 'Pratique régulière sur la plateforme Hack The Box : compromission de machines virtuelles, escalade de privilèges Linux et Windows, exploitation de services vulnérables et challenges techniques.',
    technologies: ['Nmap', 'Burp Suite', 'Metasploit', 'Linux Privesc', 'Windows Privesc'],
    difficulty: 'Medium',
    scoreOrCert: 'Profil actif',
    writeupSnippet: 'Résolution de machines de difficulté variable : reconnaissance réseau avec Nmap, exploitation de services, escalade de privilèges et post-exploitation. Focus sur les environnements Active Directory et les applications web vulnérables.'
  },
  {
    id: 'rootme-challenges',
    dateTag: 'EN COURS',
    statusType: 'past',
    title: 'Root-Me — Challenges de Sécurité Informatique',
    platform: 'Root-Me',
    category: 'Sécurité Web, Réseau & Forensic',
    description: 'Résolution de challenges variés sur Root-Me couvrant la sécurité web, l\'analyse réseau, la cryptographie et le forensic. Montée en compétences progressive sur les différentes catégories de la plateforme.',
    technologies: ['Wireshark', 'Burp Suite', 'Python', 'Forensics', 'Cryptographie'],
    difficulty: 'Medium',
    scoreOrCert: 'Profil actif',
    writeupSnippet: 'Épreuves de sécurité web (injections SQL, XSS, SSRF), analyse réseau (captures PCAP), cryptographie (RSA, AES, hachage) et forensic (analyse de fichiers, stéganographie, artefacts système).'
  },
  {
    id: 'thm-practice',
    dateTag: 'CONTINU',
    statusType: 'past',
    title: 'TryHackMe — Parcours de Formation Offensive & Défensive',
    platform: 'TryHackMe',
    category: 'Formation Continue Cybersécurité',
    description: 'Parcours de formation et labs pratiques sur TryHackMe pour approfondir les techniques offensives et défensives. Rooms couvrant le pentest réseau, la sécurité web, l\'analyse de logs et la réponse aux incidents.',
    technologies: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'Linux'],
    difficulty: 'Easy',
    scoreOrCert: 'Parcours en cours',
    writeupSnippet: 'Rooms thématiques sur la reconnaissance réseau, l\'exploitation de vulnérabilités connues, l\'analyse de journaux Windows (EVTX, Sysmon) et la configuration de règles de détection. Apprentissage progressif des méthodologies Red Team et Blue Team.'
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: 'systemes-infra',
    title: 'Systèmes & Infrastructure',
    iconName: 'shield',
    type: 'blue',
    skills: [
      { name: 'Windows Server & Active Directory', level: 'avancé', tag: 'Systèmes' },
      { name: 'Linux (Debian, Ubuntu)', level: 'avancé', tag: 'Systèmes' },
      { name: 'VMware / VirtualBox', level: 'avancé', tag: 'Virtualisation' },
      { name: 'WSUS / GLPI', level: 'intermédiaire', tag: 'Gestion de parc' },
      { name: 'Docker', level: 'intermédiaire', tag: 'Conteneurs' },
      { name: 'CI/CD', level: 'intermédiaire', tag: 'Automation' }
    ]
  },
  {
    id: 'reseau-securite',
    title: 'Réseau & Sécurité Réseau',
    iconName: 'cloud',
    type: 'infra',
    skills: [
      { name: 'VLAN / Routage', level: 'avancé', tag: 'Réseau' },
      { name: 'VPN IKEv2/IPsec', level: 'avancé', tag: 'Accès distant' },
      { name: 'pfSense', level: 'avancé', tag: 'Pare-feu' },
      { name: 'Fortigate', level: 'intermédiaire', tag: 'Pare-feu' },
      { name: 'Wireshark', level: 'avancé', tag: 'Analyse réseau' },
      { name: 'Snort / Suricata', level: 'intermédiaire', tag: 'IDS/IPS' }
    ]
  },
  {
    id: 'cybersecurite-soc',
    title: 'Cybersécurité & SOC',
    iconName: 'terminal',
    type: 'devsec',
    skills: [
      { name: 'SIEM / ELK / EDR', level: 'intermédiaire', tag: 'Détection' },
      { name: 'EBIOS RM / ISO 27001', level: 'avancé', tag: 'Gouvernance' },
      { name: 'OWASP / SAST / DAST', level: 'intermédiaire', tag: 'AppSec' },
      { name: 'SonarQube', level: 'intermédiaire', tag: 'Qualité code' },
      { name: 'KQL / Analyse de logs', level: 'intermédiaire', tag: 'Hunting' },
      { name: 'RGPD / Conformité', level: 'intermédiaire', tag: 'Réglementation' }
    ]
  },
  {
    id: 'dev-automatisation',
    title: 'Développement & Automatisation',
    iconName: 'swords',
    type: 'gov',
    skills: [
      { name: 'Python', level: 'avancé', tag: 'Scripting' },
      { name: 'Bash', level: 'avancé', tag: 'Scripting' },
      { name: 'PowerShell', level: 'intermédiaire', tag: 'Scripting' },
      { name: 'Java', level: 'intermédiaire', tag: 'Développement' },
      { name: 'MySQL / PostgreSQL', level: 'intermédiaire', tag: 'Bases de données' },
      { name: 'GNS3 / Packet Tracer', level: 'avancé', tag: 'Simulation' }
    ]
  }
];

export const INITIAL_THREAT_LOGS: ThreatLog[] = [
  {
    id: 'log-101',
    timestamp: '16:19:42.102',
    severity: 'CRITICAL',
    sourceIp: '194.26.29.112',
    destIp: '10.0.0.45:443',
    protocol: 'TCP/TLS',
    signature: 'ET MALWARE CobaltStrike Malleable C2 Beaconing Detected',
    action: 'BLOCKED'
  },
  {
    id: 'log-102',
    timestamp: '16:19:38.874',
    severity: 'HIGH',
    sourceIp: '185.220.101.5',
    destIp: '10.0.0.12:22',
    protocol: 'SSH',
    signature: 'GPL ATTACK_RESPONSE SSH Brute Force Rate Exceeded (142 attempts/min)',
    action: 'QUARANTINED'
  },
  {
    id: 'log-103',
    timestamp: '16:19:25.419',
    severity: 'MEDIUM',
    sourceIp: '10.0.2.88',
    destIp: '10.0.0.5:389',
    protocol: 'LDAP',
    signature: 'ANOMALY Active Directory Excessive Enumeration Queries',
    action: 'ALERT'
  },
  {
    id: 'log-104',
    timestamp: '16:19:10.012',
    severity: 'LOW',
    sourceIp: '172.16.14.3',
    destIp: '10.0.0.45:80',
    protocol: 'HTTP',
    signature: 'WEB_SPECIFIC_APPS Directory Traversal Attempt /etc/passwd payload',
    action: 'BLOCKED'
  },
  {
    id: 'log-105',
    timestamp: '16:18:55.620',
    severity: 'INFO',
    sourceIp: '10.0.0.1',
    destIp: '224.0.0.251:5353',
    protocol: 'mDNS',
    signature: 'INFO Routine Network Asset Discovery Broadcast',
    action: 'ANALYZED'
  }
];
