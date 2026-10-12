import React, { useState } from 'react';
import { PROFILE_DATA, PROJECTS_DATA, SKILLS_CATEGORIES, LABS_DATA } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, FileText, CheckCircle2, Shield } from 'lucide-react';
import { getLocalizedProfile, getLocalizedProjects, useLanguage } from '../i18n';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const profile = getLocalizedProfile(language);
  const projects = getLocalizedProjects(language);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
JUNIAS - ANALYSTE SOC & CYBERSÉCURITÉ CLOUD
Statut: ${PROFILE_DATA.status}
Email: ${PROFILE_DATA.email} | Localisation: ${PROFILE_DATA.location}
Spécialisation: ${PROFILE_DATA.specialisation}

FORMATION:
• ${PROFILE_DATA.formation}

CERTIFICATIONS:
${PROFILE_DATA.certifications.map(c => `• ${c.name} (${c.status})`).join('\n')}

COMPÉTENCES CLÉS:
• SIEM & Logs: Splunk, ELK Stack, Wazuh, Sysmon, Sigma Rules, KQL
• Cloud & Infra: AWS Security (GuardDuty, IAM, CloudTrail), Linux, Active Directory, Docker
• DFIR: Volatility 3, Wireshark, YARA, Analyse Malware
• DevSecOps: Python, Bash, GitLab CI, Trivy, Semgrep

PROJETS MAJEURS:
${PROJECTS_DATA.map(p => `• [${p.date}] ${p.title}\n  ${p.summary}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#09100b] border border-[#3c4a41] rounded w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#3c4a41] bg-[#161d18]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#61f9b1]" />
            <span className="font-mono text-xs font-bold text-[#dce5dc]">
              CURRICULUM VITAE // JUNIAS_SEC_CV.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="font-mono text-xs px-2.5 py-1 bg-[#1a211c] border border-[#3c4a41] rounded text-[#dce5dc] hover:text-[#61f9b1] flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#61f9b1]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t.modal.copiedText : t.modal.copyText}</span>
            </button>

            <button
              onClick={handlePrint}
              className="font-mono text-xs px-3 py-1 bg-[#61f9b1] text-[#003822] font-bold rounded hover:bg-[#65fdb5] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.modal.print}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[#859489] hover:text-[#ff5555] rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted CV Document Canvas */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-[#0e1510] text-[#dce5dc]">
          {/* Header */}
          <div className="border-b border-[#3c4a41] pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-headline text-3xl font-bold text-[#61f9b1]">Junias</h1>
              <div className="font-mono text-sm text-[#5de6ff] font-semibold mt-1">
                Analyste SOC &amp; Ingénieur Sécurité Cloud (Alternance)
              </div>
              <div className="font-body text-xs text-[#bbcabe] mt-2 max-w-lg leading-relaxed">
                {PROFILE_DATA.bio}
              </div>
            </div>

            <div className="font-mono text-xs text-[#859489] space-y-1 bg-[#161d18] border border-[#3c4a41] p-3 rounded shrink-0">
              <div><span className="text-[#61f9b1]">Email:</span> {PROFILE_DATA.email}</div>
              <div><span className="text-[#61f9b1]">{t.modal.location}:</span> {profile.location}</div>
              <div><span className="text-[#61f9b1]">Habilitation:</span> {PROFILE_DATA.clearance}</div>
              <div className="text-[#61f9b1] font-bold">● {PROFILE_DATA.status}</div>
            </div>
          </div>

          {/* Formations & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="font-mono text-xs font-bold text-[#61f9b1] border-b border-[#3c4a41]/50 pb-1 uppercase tracking-wider">
                01. {t.modal.formation}
              </h2>
              <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded space-y-1">
                <div className="font-mono text-xs font-bold text-[#dce5dc]">{PROFILE_DATA.formation}</div>
                <div className="font-body text-xs text-[#5de6ff]">Spécialisation : {PROFILE_DATA.specialisation}</div>
                <div className="font-body text-xs text-[#859489]">Architecture de défense réseau, analyse forensique et sécurité cloud.</div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-mono text-xs font-bold text-[#61f9b1] border-b border-[#3c4a41]/50 pb-1 uppercase tracking-wider">
                02. {t.modal.certifications}
              </h2>
              <div className="space-y-2">
                {PROFILE_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="bg-[#161d18] border border-[#3c4a41] p-2.5 rounded flex items-center justify-between">
                    <span className="font-mono text-xs text-[#dce5dc]">{cert.name}</span>
                    <span className="font-mono text-[10px] text-[#61f9b1] bg-[#09100b] px-2 py-0.5 rounded border border-[#3c4a41]">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Technical Matrix */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-[#61f9b1] border-b border-[#3c4a41]/50 pb-1 uppercase tracking-wider">
                03. {t.modal.skills}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded space-y-1.5">
                <div className="text-[#5de6ff] font-bold">SIEM, SOC &amp; DFIR</div>
                <div className="text-[#bbcabe] text-[11px] leading-relaxed">
                  Splunk, Wazuh, ELK Stack, Sysmon, Suricata, Wireshark, Volatility 3, Règles Sigma/YARA, KQL, Threat Hunting.
                </div>
              </div>
              <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded space-y-1.5">
                <div className="text-[#5de6ff] font-bold">Cloud, Infra &amp; DevSecOps</div>
                <div className="text-[#bbcabe] text-[11px] leading-relaxed">
                  AWS Security (GuardDuty, IAM, EventBridge), Active Directory Hardening, Docker/K8s, Linux, Python, Bash, GitLab CI, Trivy.
                </div>
              </div>
            </div>
          </div>

          {/* Projects & Experiences */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-[#61f9b1] border-b border-[#3c4a41]/50 pb-1 uppercase tracking-wider">
                04. {t.modal.projects}
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-[#161d18] border border-[#3c4a41] p-3 rounded space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[#dce5dc]">{proj.title}</span>
                    <span className="font-mono text-[10px] text-[#859489]">{proj.date}</span>
                  </div>
                  <p className="font-body text-xs text-[#bbcabe]">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
