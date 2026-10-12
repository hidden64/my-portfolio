export interface Project {
  id: string;
  code: string;
  title: string;
  category: 'siem' | 'cloud' | 'dfir' | 'devsecops';
  categoryLabel: string;
  date: string;
  summary: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  detectionRule?: {
    type: 'Sigma' | 'YARA' | 'KQL' | 'Suricata';
    title: string;
    code: string;
  };
  githubUrl?: string;
  demoUrl?: string;
}

export interface LabEntry {
  id: string;
  dateTag: string;
  statusType: 'recent' | 'past';
  title: string;
  platform: string;
  category: string;
  description: string;
  technologies: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  scoreOrCert?: string;
  writeupSnippet?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  type: 'blue' | 'infra' | 'devsec' | 'gov' | 'red';
  skills: { name: string; level?: 'expert' | 'avancé' | 'intermédiaire'; tag?: string }[];
}

export interface ThreatLog {
  id: string;
  timestamp: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  sourceIp: string;
  destIp: string;
  protocol: string;
  signature: string;
  action: 'BLOCKED' | 'ALERT' | 'QUARANTINED' | 'ANALYZED';
}
