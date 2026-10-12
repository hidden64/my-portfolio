import React, { useState } from 'react';
import { Project } from '../types';
import { X, Copy, Check, ExternalLink, Github, Shield, Terminal, Activity, Layers } from 'lucide-react';
import { useLanguage } from '../i18n';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [copiedRule, setCopiedRule] = useState(false);

  if (!project) return null;

  const handleCopyRule = () => {
    if (project.detectionRule) {
      navigator.clipboard.writeText(project.detectionRule.code);
      setCopiedRule(true);
      setTimeout(() => setCopiedRule(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#09100b] border border-[#3c4a41] rounded w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#3c4a41] bg-[#161d18]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-[#5de6ff] bg-[#09100b] border border-[#3c4a41] px-2 py-0.5 rounded">
              {project.code}
            </span>
            <span className="font-mono text-xs text-[#dce5dc] font-semibold">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#859489] hover:text-[#ff5555] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
          {/* Banner with image and title */}
          <div className="space-y-3">
            <div className="h-44 w-full rounded overflow-hidden relative border border-[#3c4a41] bg-[#09100b]">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-75 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09100b] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 font-mono text-xs text-[#61f9b1] bg-[#09100b]/90 px-2.5 py-1 rounded border border-[#3c4a41]">
                {t.projects.execution} {project.date}
              </div>
            </div>

            <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#dce5dc]">
              {project.title}
            </h2>
            <p className="font-body text-sm text-[#bbcabe] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#161d18] border border-[#3c4a41] p-3 rounded flex flex-col">
                  <span className="font-mono text-[10px] text-[#859489] uppercase">{m.label}</span>
                  <span className="font-mono text-lg font-bold text-[#61f9b1] mt-0.5">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Architecture & Mode Opératoire */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#5de6ff] border-b border-[#3c4a41]/40 pb-2">
              <Layers className="w-4 h-4" />
              <span>{t.projects.architecture}</span>
            </div>
            <ul className="space-y-2">
              {project.architecture.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-body text-xs text-[#bbcabe]">
                  <span className="font-mono text-[10px] text-[#61f9b1] bg-[#1a211c] px-1.5 py-0.5 rounded border border-[#3c4a41] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detection Rule / Code Block (Sigma, YARA, KQL) */}
          {project.detectionRule && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#61f9b1]">
                  <Terminal className="w-4 h-4" />
                  <span>{t.projects.detection} ({project.detectionRule.type}) : {project.detectionRule.title}</span>
                </div>

                <button
                  onClick={handleCopyRule}
                  className="font-mono text-[11px] text-[#5de6ff] hover:text-[#61f9b1] flex items-center gap-1 cursor-pointer"
                >
                  {copiedRule ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRule ? t.projects.copied : t.projects.copyRule}</span>
                </button>
              </div>

              <pre className="p-3.5 bg-[#09100b] border border-[#3c4a41] rounded font-mono text-[11px] text-[#bbcabe] overflow-x-auto leading-relaxed">
                {project.detectionRule.code}
              </pre>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#3c4a41]/40">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] px-2.5 py-1 bg-[#161d18] border border-[#3c4a41] text-[#859489] rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#161d18] border-t border-[#3c4a41] flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#859489]">
            PROJET_ID: {project.id} // SEC_CLASSIFIED
          </span>

          <button
            onClick={onClose}
            className="font-mono text-xs px-4 py-1.5 bg-[#61f9b1] text-[#003822] font-bold rounded hover:bg-[#65fdb5] transition-colors cursor-pointer"
          >
            {t.projects.inspector}
          </button>
        </div>
      </div>
    </div>
  );
};
