import React, { useState } from 'react';
import { LabEntry } from '../types';
import { FlaskConical, Award, Terminal, ChevronDown, ChevronUp, CheckCircle2, ShieldAlert } from 'lucide-react';
import { getLocalizedLabs, useLanguage } from '../i18n';

export const LabsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const labs = getLocalizedLabs(language);
  const [expandedLabId, setExpandedLabId] = useState<string | null>(labs[0].id);

  const toggleExpand = (id: string) => {
    setExpandedLabId(expandedLabId === id ? null : id);
  };

  return (
    <section className="flex flex-col gap-8 pt-8" id="labs">
      <div className="flex items-center justify-between border-b border-[#3c4a41] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#61f9b1] font-bold">04.</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#dce5dc]">
            {t.sections.labs}
          </h2>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-[#859489]">
          {t.labs.timeline}
        </span>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 md:pl-8 border-l border-[#3c4a41] flex flex-col gap-8 py-2 max-w-4xl">
        {labs.map((lab) => {
          const isExpanded = expandedLabId === lab.id;
          const isRecent = lab.statusType === 'recent';

          return (
            <div key={lab.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  isRecent
                    ? 'bg-[#0e1510] border-[#61f9b1] shadow-[0_0_8px_rgba(97,249,177,0.8)]'
                    : 'bg-[#0e1510] border-[#3c4a41] group-hover:border-[#5de6ff]'
                }`}
              />

              {/* Lab Card Container */}
              <div
                className={`bg-[#0e1510] border rounded p-4 md:p-5 transition-all duration-300 ${
                  isRecent
                    ? 'border-[#61f9b1]/60 shadow-lg'
                    : 'border-[#3c4a41] hover:border-[#5de6ff]'
                }`}
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        isRecent
                          ? 'bg-[#61f9b1]/15 text-[#61f9b1] border border-[#61f9b1]/40'
                          : 'bg-[#1a211c] text-[#859489] border border-[#3c4a41]'
                      }`}
                    >
                      {lab.dateTag}
                    </span>
                    <span className="font-mono text-[11px] text-[#5de6ff] font-semibold">
                      {lab.platform}
                    </span>
                  </div>

                  {lab.scoreOrCert && (
                    <span className="font-mono text-[10px] text-[#61f9b1] bg-[#161d18] border border-[#3c4a41] px-2 py-0.5 rounded flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#61f9b1]" />
                      <span>{lab.scoreOrCert}</span>
                    </span>
                  )}
                </div>

                {/* Title & Category */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-headline text-lg md:text-xl font-bold text-[#dce5dc]">
                    {lab.title}
                  </h3>
                  <div className="font-mono text-xs text-[#859489]">
                    {t.labs.category} <span className="text-[#bbcabe]">{lab.category}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-[#bbcabe] leading-relaxed mb-4">
                  {lab.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {lab.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2 py-0.5 bg-[#161d18] border border-[#3c4a41] text-[#859489] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Collapsible Writeup Snippet */}
                {lab.writeupSnippet && (
                  <div>
                    <button
                      onClick={() => toggleExpand(lab.id)}
                      className="font-mono text-xs text-[#61f9b1] hover:text-[#5de6ff] flex items-center gap-1 mt-2 cursor-pointer transition-colors"
                    >
                      <span>{isExpanded ? t.labs.hide : t.labs.show}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-3 bg-[#09100b] border border-[#3c4a41] rounded font-mono text-xs text-[#bbcabe] leading-relaxed space-y-2 animate-in fade-in duration-200">
                        <div className="flex items-center gap-1.5 text-[#5de6ff] text-[11px] font-bold">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>{t.labs.summary}</span>
                        </div>
                        <p>{lab.writeupSnippet}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
