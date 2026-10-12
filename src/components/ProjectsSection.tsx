import React, { useState } from 'react';
import { Project } from '../types';
import { FolderOpen, ArrowRight, ExternalLink, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { getLocalizedProjects, useLanguage } from '../i18n';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { language, t } = useLanguage();
  const projects = getLocalizedProjects(language);
  const [filter, setFilter] = useState<'all' | 'siem' | 'cloud' | 'dfir' | 'devsecops'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section className="flex flex-col gap-8 pt-8" id="projets">
      {/* Section Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3c4a41] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#61f9b1] font-bold">03.</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#dce5dc]">
            {t.sections.projects}
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {[
            { id: 'all', label: t.projects.all },
            { id: 'siem', label: 'SIEM & SOC' },
            { id: 'cloud', label: t.projects.cloud },
            { id: 'dfir', label: t.projects.dfir },
            { id: 'devsecops', label: 'DevSecOps' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#61f9b1] text-[#003822] font-bold shadow'
                  : 'bg-[#1a211c] text-[#bbcabe] hover:text-[#61f9b1] border border-[#3c4a41]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="bg-[#0e1510] border border-[#3c4a41] rounded overflow-hidden group hover:border-[#5de6ff] transition-all duration-300 flex flex-col cursor-pointer shadow-xl hover:shadow-2xl relative"
          >
            {/* Project Image Banner */}
            <div className="h-44 sm:h-52 w-full relative border-b border-[#3c4a41] overflow-hidden bg-[#09100b]">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1510] via-transparent to-transparent pointer-events-none" />

              {/* Code Identifier Badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#09100b]/90 border border-[#3c4a41] font-mono text-[10px] text-[#5de6ff] rounded backdrop-blur-sm font-bold tracking-wider">
                  {project.code}
                </span>
                <span className="px-2 py-1 bg-[#1a211c]/90 border border-[#3c4a41] font-mono text-[10px] text-[#61f9b1] rounded">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Metric Tag */}
              {project.metrics && project.metrics[0] && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#09100b]/90 border border-[#3c4a41] font-mono text-[10px] text-[#ffd8b6] rounded flex items-center gap-1">
                  <Activity className="w-3 h-3 text-[#61f9b1]" />
                  <span>{project.metrics[0].value}</span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <h3 className="font-headline text-lg sm:text-xl font-bold text-[#dce5dc] group-hover:text-[#5de6ff] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#bbcabe] leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] px-2 py-0.5 bg-[#161d18] border border-[#3c4a41] text-[#859489] group-hover:border-[#3c4a41]/80 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="font-mono text-[10px] px-1.5 py-0.5 text-[#859489]">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-[#3c4a41]/50 mt-auto">
                <span className="font-mono text-[11px] text-[#859489]">
                  {project.date}
                </span>

                <button
                  type="button"
                  className="font-mono text-xs text-[#61f9b1] group-hover:text-[#5de6ff] flex items-center gap-1.5 font-bold hover:underline"
                >
                  <span>{t.projects.details}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
