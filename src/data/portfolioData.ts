import { Project, LabEntry, SkillCategory, ThreatLog } from '../types';

export const PROFILE_DATA = {
  name: 'Junias',
  sysId: 'JUNIAS_SEC',
  idNum: '0x4A756E',
  headline: 'Analyste SOC & Passionné de Sécurité Cloud',
  heroTagline: 'Sécuriser le Présent, Anticiper les Menaces.',
  bio: "Spécialisé dans la détection des menaces, l'analyse d'artefacts et l'automatisation de la réponse aux incidents au sein d'environnements hybrides et cloud. Je combine une rigueur d'ingénierie Blue Team et des connaissances offensives (Red Team) pour durcir les périmètres critiques.",
  operationalProfile: "Face à l'évolution constante des menaces cloud et hybrides, je me positionne en tant qu'analyste de première ligne. Mon objectif est de réduire la surface d'attaque et de minimiser le MTTR (Mean Time To Respond). J'opère quotidiennement sur des SIEM de pointe, analysant des logs hétérogènes pour isoler les comportements anormaux, de l'escalade de privilèges aux exfiltrations discrètes.",
  location: 'Paris, FR',
  clearance: 'Level 2 (Habilité Confidentiel)',
  status: 'Disponible en Alternance (Rythme flexible)',
  formation: 'Master Cybersécurité (En cours)',
  specialisation: 'Cloud Security & DFIR',
  certifications: [
    { name: 'eJPTv2 (eLearnSecurity Junior Penetration Tester)', status: 'Obtenu / Validé' },
    { name: 'CompTIA Security+ (SY0-701)', status: 'En cours de validation' },
    { name: 'AWS Certified Security - Specialty', status: 'En préparation' }
  ],
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0FCvHY3EjGDmUxpafT1hENIAuZjvAfqvPjxWJap5wiYwzmbPGmgu9Dvsv0gZYp00bf4KoFhLXA9CIW9dCvTBuPYeZLzgDw2-04Cly7GHUjQrIkrfstRgOo0tpHfIq9sWqGhLJfVXg6UU_l1IvEbngK1EhBXDAKBzyl3ClcSugSJZjJzp59uBdSBdmN5LhWb5Zxo3fhr12bNUee7EM9o0Q0yxrkC_aI_cgI32v8Yt5wowHZQR4pvT8',
  email: 'duarinali@gmail.com',
  github: 'https://github.com',
  tryhackme: 'https://tryhackme.com',
  rootme: 'https://root-me.org',
  linkedin: 'https://linkedin.com',
  stats: {
    ctfSolved: '180+',
    siemRules: '45+',
    incidentsAnalyzed: '200+',
    uptime: '99.9%'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'siem-distribue',
    code: 'PROJET_ALPHA',
    title: 'Déploiement SIEM Distribué & Ingestion Multi-Source',
    category: 'siem',
    categoryLabel: 'SIEM & SOC',
    date: '2023-Q4',
    summary: "Architecture et mise en place d'une stack ELK / Wazuh pour la centralisation, le parsing et l'analyse de logs d'une infrastructure cloud hybride.",
    description: "Conception complète d'un pipeline d'ingestion de télémétrie sécurisé. Déploiement d'agents Fleet/Elastic-Agent et Wazuh sur des endpoints Linux, Windows Server et conteneurs. Corrélation d'événements Sysmon et audits Linux contre les tactiques MITRE ATT&CK.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Visualisation de données et tableau de bord réseau en temps réel',
    tags: ['Elasticsearch', 'Kibana', 'Logstash', 'Wazuh', 'Sysmon', 'Sigma Rules'],
    metrics: [
      { label: 'Volume journalier', value: '45 Go/jour' },
      { label: 'Temps de détection (MTTD)', value: '< 90 sec' },
      { label: 'Règles déployées', value: '38 règles' }
    ],
    architecture: [
      'Ingestion via Beats & Logstash avec enrichissement GeoIP et Threat Intel feeds (MISP)',
      'Indexation dans cluster Elasticsearch 3 nœuds avec rétention tiered',
      'Dashboards Kibana personnalisés pour analyste L1/L2 avec alertes webhook Discord/Slack',
      'Mapping exhaustif des détections sur le framework MITRE ATT&CK (T1059, T1078, T1047)'
    ],
    detectionRule: {
      type: 'Sigma',
      title: 'Suspicious PowerShell Encoded Download Cradle',
      code: `title: Suspicious PowerShell Encoded Download
status: production
description: Detects encoded base64 payload execution downloading remote payload
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - ' -enc '
      - ' -EncodedCommand '
      - 'DownloadString'
      - 'IEX'
  condition: selection
level: high
tags:
  - attack.execution
  - attack.t1059.001`
    },
    githubUrl: 'https://github.com'
  },
  {
    id: 'cloud-soar-aws',
    code: 'PROJET_BETA',
    title: 'Automatisation SOAR & Réponse Incident AWS Serverless',
    category: 'cloud',
    categoryLabel: 'Sécurité Cloud',
    date: '2024-Q1',
    summary: 'Pipeline automatisé de confinement des menaces cloud basé sur AWS GuardDuty, EventBridge, Lambda et AWS WAF.',
    description: 'Automatisation de la remédiation en temps réel lors de compromissions identifiées sur AWS. Lors d’un événement GuardDuty à haute sévérité (ex: clé IAM compromise ou communication C2), une Step Function isole instantanément l’instance EC2 et révoque les sessions IAM.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Architecture de sécurité cloud et réponse incident AWS',
    tags: ['AWS GuardDuty', 'EventBridge', 'AWS Lambda', 'Python', 'Terraform', 'KMS'],
    metrics: [
      { label: 'Temps de confinement', value: '< 4 sec' },
      { label: 'Faux positifs', value: '< 1.2%' },
      { label: 'Couverture Cloud', value: 'Multi-Region' }
    ],
    architecture: [
      'Surveillance continue des flux VPC Flow Logs, DNS Logs et CloudTrail par GuardDuty',
      'EventBridge filtre et route les événements vers des fonctions AWS Lambda sécurisées',
      'Isolation réseau via Security Groups de quarantaine et snapshots EBS automatiques pour analyse forensic',
      'Notification chiffrée SNS vers l’équipe astreinte SOC avec rapport d’investigation généré'
    ],
    detectionRule: {
      type: 'KQL',
      title: 'CloudTrail Anomalous IAM Privilege Escalation',
      code: `AWSCloudTrail
| where EventName in ("AttachUserPolicy", "PutUserPolicy", "CreateAccessKey")
| where UserIdentityType != "AssumedRole"
| summarize count() by UserIdentityArn, bin(TimeGenerated, 5m), ClientIPAddress
| where count_ > 3
| project TimeGenerated, UserIdentityArn, ClientIPAddress, count_`
    },
    githubUrl: 'https://github.com'
  },
  {
    id: 'dfir-malware-sandbox',
    code: 'PROJET_GAMMA',
    title: 'Plateforme DFIR & Analyse Dynamique de Malwares',
    category: 'dfir',
    categoryLabel: 'DFIR & Forensics',
    date: '2024-Q2',
    summary: 'Laboratoire d’investigation numérique isolé pour l’analyse statique/dynamique d’échantillons malveillants et l’extraction d’IOCs.',
    description: 'Mise en œuvre d’un environnement sécurisé basé sur Cuckoo/CAPEv2 et FlareVM avec passerelle Tor/INetSim pour émuler les services Internet. Extraction automatisée de hashes, clés de registre modifiées, requêtes DNS suspectes et génération de règles YARA.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Sandbox forensic et analyse de mémoire Volatility',
    tags: ['Volatility 3', 'Ghidra', 'Wireshark', 'YARA', 'CAPEv2', 'Procmon'],
    metrics: [
      { label: 'Échantillons analysés', value: '120+' },
      { label: 'IOCs extraits', value: '650+' },
      { label: 'Règles YARA', value: '24 créées' }
    ],
    architecture: [
      'Segment réseau hermétique avec isolation VLAN et simulation de réseau INetSim',
      'Analyse de dumps mémoire Windows avec Volatility 3 (recherche de malfind, dlllist, pslist)',
      'Décompilation et rétro-ingénierie binaire sous Ghidra',
      'Export automatique des IOCs au format STIX/TAXII vers plateforme Threat Intel MISP'
    ],
    detectionRule: {
      type: 'YARA',
      title: 'Detect CobaltStrike Beacon Config in Process Memory',
      code: `rule CobaltStrike_Beacon_Memory {
  meta:
    description = "Detects Cobalt Strike Beacon memory strings and reflection markers"
    author = "Junias DFIR Lab"
    date = "2024-05-12"
  strings:
    $s1 = "%s as %s\\\\%s: %d" ascii wide
    $s2 = "ReflectiveLoader" ascii
    $s3 = "beacon.dll" ascii
    $s4 = "\\\\.\\pipe\\msagent_%x" ascii
  condition:
    2 of ($s*)
}`
    },
    githubUrl: 'https://github.com'
  },
  {
    id: 'devsecops-pipeline-audit',
    code: 'PROJET_DELTA',
    title: 'Pipeline CI/CD DevSecOps & Hardening Active Directory',
    category: 'devsecops',
    categoryLabel: 'DevSecOps',
    date: '2024-Q3',
    summary: 'Intégration d’outils SAST/DAST/SCA dans GitLab CI et audit de chemins d’attaque Active Directory via BloodHound.',
    description: 'Automatisation de la sécurité dès la phase de build. Intégration de Trivy pour le scan de conteneurs, Semgrep pour le SAST, et Gitleaks pour la détection de secrets. Audit et remédiation des délégations ACL et Kerberoasting sur un domaine AD de test.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDQO7D68kD4gsf0RWLr0El5vfipx5O5Ej3IgeWRWAWrl8yLkBVFednJ6S-NcC56m8jUH2DUAMG7rbWKzbg2TN96sogkaicgQDcQqpQHwDUU7AHuQguxVHYymaY5AQVJnyMAq5mt3x3YCEsDj6sRLK1AyDO7QX9dEhB9m1VUvN7zIVU1hAuYY0QvI0_mWwd-Ie4BkZVjI-1xy3q-jouMNPOQe4IEnAPIkvGW6D5mVGJERBISBR-Db',
    imageAlt: 'Pipeline DevSecOps et graphe BloodHound Active Directory',
    tags: ['GitLab CI', 'Trivy', 'Semgrep', 'BloodHound', 'Docker', 'SonarQube'],
    metrics: [
      { label: 'Vulnérabilités bloquées', value: '100% High/Crit' },
      { label: 'Temps de build security', value: '< 45s' },
      { label: 'Postures CIS', value: 'Niveau 2' }
    ],
    architecture: [
      'GitLab CI Pipeline sécurisé avec stages SAST, SCA, Container Scan et Secret Detection',
      'Politiques de blocage de merge request si vulnérabilité CVSS >= 7.0 identifiée',
      'Audit de domaine Active Directory avec BloodHound & PingCastle pour identifier les abus de permissions (DCSync, AS-REP roasting)',
      'Déploiement de GPO de durcissement basées sur les benchmarks CIS Windows Server 2022'
    ],
    githubUrl: 'https://github.com'
  }
];

export const LABS_DATA: LabEntry[] = [
  {
    id: 'cert-ejptv2',
    dateTag: 'RÉCENT',
    statusType: 'recent',
    title: 'Certification eJPTv2 (eLearnSecurity)',
    platform: 'INE Security',
    category: 'Offensif / Network & Web Pentest',
    description: 'Validation pratique et rigoureuse des compétences en tests d’intrusion réseaux d’entreprise, pivotage multi-sous-réseaux, attaques Active Directory et exploitation d’applications web (OWASP Top 10).',
    technologies: ['Metasploit', 'Nmap', 'Burp Suite Pro', 'John/Hashcat', 'Chisel', 'BloodHound'],
    difficulty: 'Hard',
    scoreOrCert: 'Obtenue (Score 92%)',
    writeupSnippet: 'Examen pratique de 48h en boîte noire : découverte de machines distantes, élévation de privilèges Linux/Windows, exploitation de CMS vulnérable, contournement de pare-feu avec tunneling SSH et pivoting Chisel.'
  },
  {
    id: 'thm-wreath',
    dateTag: 'IL Y A 3 MOIS',
    statusType: 'past',
    title: 'TryHackMe - Réseau Wreath (Pivoting & C2)',
    platform: 'TryHackMe',
    category: 'Pivoting Réseau & C2 Frameworks',
    description: 'Compromission complète d’un réseau d’entreprise simulé composé de serveurs Web publics, bastions Linux et contrôleurs de domaine Windows isolés.',
    technologies: ['Empire C2', 'Proxychains', 'Socat', 'Impacket', 'Mimikatz'],
    difficulty: 'Hard',
    scoreOrCert: '100% Complet',
    writeupSnippet: 'Attaque initiale sur un service web non patché, mise en place d’un agent C2 Empire persistant, création de tunnels socat pour router le trafic vers le LAN interne, exfiltration de hashes NTLM et attaque Pass-the-Hash.'
  },
  {
    id: 'rootme-forensic',
    dateTag: 'IL Y A 5 MOIS',
    statusType: 'past',
    title: 'Root-Me - Investigation Numérique & Forensic',
    platform: 'Root-Me Pro',
    category: 'DFIR & Analyse de Traces',
    description: 'Résolution d’épreuves avancées d’analyse de dumps mémoire RAM, captures réseau PCAP corrompues, artefacts NTFS ($MFT, USN Journal) et logs d’événements Windows EVTX.',
    technologies: ['Volatility 3', 'Wireshark', 'FTK Imager', 'EvtxECmd', 'EZ Tools'],
    difficulty: 'Medium',
    scoreOrCert: 'Top 5% National',
    writeupSnippet: 'Reconstitution de la chronologie complète d’une intrusion APT : détection de l’exécution malveillante via Shimcache, identification de l’IP attaquante dans les flux réseau chiffrés et récupération du payload stéganographié.'
  },
  {
    id: 'aws-cloud-lab',
    dateTag: 'IL Y A 7 MOIS',
    statusType: 'past',
    title: 'AWS Security Workshop - Incident Response in Cloud',
    platform: 'AWS Hands-On Labs',
    category: 'Cloud Threat Detection & IAM Governance',
    description: 'Simulation d’attaques d’escalade de privilèges sur compte AWS (ShadowAdmin, assume-role chains), détection via GuardDuty et analyse forensic de snapshots d’instances compromises.',
    technologies: ['AWS CLI', 'CloudTrail', 'GuardDuty', 'Security Hub', 'Athena'],
    difficulty: 'Medium',
    scoreOrCert: 'Certificat de Complétion',
    writeupSnippet: 'Requêtes SQL sous Amazon Athena sur les journaux CloudTrail pour tracer les appels API non autorisés, verrouillage immédiat des Security Groups et rotation automatique des clés d’accès via Lambda.'
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: 'detection-reponse',
    title: 'Détection & Réponse (Blue)',
    iconName: 'shield',
    type: 'blue',
    skills: [
      { name: 'Splunk / Sentinel', level: 'avancé', tag: 'SIEM' },
      { name: 'ELK Stack / Wazuh', level: 'expert', tag: 'Log Analytics' },
      { name: 'Wireshark / Zeek', level: 'expert', tag: 'Packet Analysis' },
      { name: 'Suricata / Snort', level: 'avancé', tag: 'NIDS' },
      { name: 'Sigma / Yara Rules', level: 'expert', tag: 'Detection Engineering' },
      { name: 'KQL / SPL Query', level: 'avancé', tag: 'Hunting' }
    ]
  },
  {
    id: 'infra-cloud',
    title: 'Infra & Cloud Security',
    iconName: 'cloud',
    type: 'infra',
    skills: [
      { name: 'AWS Security (IAM/GuardDuty)', level: 'avancé', tag: 'Cloud Sec' },
      { name: 'Linux Internals & Hardening', level: 'expert', tag: 'OS Security' },
      { name: 'Active Directory / Windows', level: 'avancé', tag: 'Enterprise' },
      { name: 'Docker / Kubernetes', level: 'avancé', tag: 'Containers' },
      { name: 'Terraform (IaC Sec)', level: 'intermédiaire', tag: 'Automation' },
      { name: 'VPN / Firewalling', level: 'avancé', tag: 'Network' }
    ]
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Code',
    iconName: 'terminal',
    type: 'devsec',
    skills: [
      { name: 'Python (Scripting & Automation)', level: 'expert', tag: 'Coding' },
      { name: 'Bash / PowerShell', level: 'expert', tag: 'Scripting' },
      { name: 'GitLab CI / GitHub Actions', level: 'avancé', tag: 'CI/CD' },
      { name: 'Trivy / Semgrep', level: 'avancé', tag: 'SAST/SCA' },
      { name: 'SonarQube / DefectDojo', level: 'intermédiaire', tag: 'Vulnerability Mgmt' },
      { name: 'Ansible', level: 'intermédiaire', tag: 'Config Mgmt' }
    ]
  },
  {
    id: 'gouvernance-offensif',
    title: 'Gouvernance & Offensif',
    iconName: 'swords',
    type: 'gov',
    skills: [
      { name: 'MITRE ATT&CK Framework', level: 'expert', tag: 'Framework' },
      { name: 'ISO 27001 / CIS Controls', level: 'avancé', tag: 'Standards' },
      { name: 'NIST CSF & RGPD', level: 'avancé', tag: 'Compliance' },
      { name: 'Pentest Web & Réseau (OWASP)', level: 'avancé', tag: 'Red Team' },
      { name: 'Metasploit & Burp Suite', level: 'avancé', tag: 'Offensive' },
      { name: 'OSINT & Threat Intel', level: 'avancé', tag: 'CTI' }
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
    signature: 'ANOMALY Active Directory Excessive BloodHound Enumeration Queries',
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
