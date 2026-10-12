import React, { useState } from 'react';
import { Shield, Cloud, Terminal, Swords, CheckCircle, Search, Layers, Cpu } from 'lucide-react';
import { getLocalizedSkills, useLanguage } from '../i18n';

export const SkillsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const skillsCategories = getLocalizedSkills(language);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'blue' | 'red'>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-4 h-4 text-[#61f9b1]" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-[#5de6ff]" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 text-[#61f9b1]" />;
      case 'swords':
        return <Swords className="w-4 h-4 text-[#ffb4ab]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#61f9b1]" />;
    }
  };

  const filteredCategories = skillsCategories.filter((cat) => {
    if (activeTab === 'blue') return cat.type === 'blue' || cat.type === 'infra' || cat.type === 'gov';
    if (activeTab === 'red') return cat.type === 'devsec' || cat.type === 'gov' || cat.id.includes('offensif');
    return true;
  });

  return (
    <section className="flex flex-col gap-8 pt-8" id="competences">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3c4a41] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#61f9b1] font-bold">02.</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#dce5dc]">
            {t.sections.skills}
          </h2>
        </div>

        {/* Perspective Filter Pills */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#61f9b1] text-[#003822] font-bold shadow'
                : 'bg-[#1a211c] text-[#bbcabe] hover:text-[#dce5dc] border border-[#3c4a41]'
            }`}
          >
            {t.skills.all}
          </button>
          <button
            onClick={() => setActiveTab('blue')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'blue'
                ? 'bg-[#5de6ff] text-[#00363e] font-bold shadow'
                : 'bg-[#1a211c] text-[#bbcabe] hover:text-[#5de6ff] border border-[#3c4a41]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{t.skills.blue}</span>
          </button>
          <button
            onClick={() => setActiveTab('red')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'red'
                ? 'bg-[#ffb4ab] text-[#690005] font-bold shadow'
                : 'bg-[#1a211c] text-[#bbcabe] hover:text-[#ffb4ab] border border-[#3c4a41]'
            }`}
          >
            <Swords className="w-3.5 h-3.5" />
            <span>{t.skills.red}</span>
          </button>
        </div>
      </div>

      {/* Grid of Skill Categories (4 Columns on Desktop as in designs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-[#0e1510] border border-[#3c4a41] rounded p-5 hover:border-[#5de6ff] transition-all duration-300 group flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            {/* Top Header */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-[#3c4a41]/40 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#61f9b1] group-hover:scale-125 transition-transform" />
                  <h3 className="font-mono text-xs font-bold text-[#dce5dc] tracking-tight">
                    {category.title}
                  </h3>
                </div>
                {getCategoryIcon(category.iconName)}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.map((skill, sIdx) => {
                  const isSelected = selectedTag === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => setSelectedTag(isSelected ? null : skill.name)}
                      className={`font-mono text-[11px] px-2.5 py-1.5 rounded border transition-all text-left flex items-center gap-1 cursor-pointer ${
                        isSelected
                          ? 'border-[#61f9b1] bg-[#61f9b1]/15 text-[#61f9b1] font-semibold'
                          : 'border-[#3c4a41] bg-[#161d18] text-[#bbcabe] group-hover:border-[#5de6ff]/40 hover:text-[#61f9b1] hover:border-[#61f9b1]'
                      }`}
                    >
                      <span>{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-[#3c4a41]/30 flex items-center justify-between text-[10px] font-mono text-[#859489]">
              <span className="flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#61f9b1]" />
                <span>{category.skills.length} {t.skills.technologies}</span>
              </span>
              <span className="text-[#5de6ff] uppercase">{category.type}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Skill Quick Detail Drawer */}
      {selectedTag && (
        <div className="bg-[#161d18] border border-[#61f9b1]/50 rounded p-4 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#61f9b1] shrink-0" />
            <div className="font-mono text-xs text-[#dce5dc]">
              <span className="text-[#61f9b1] font-bold">{t.skills.selected}</span> {selectedTag}
              <span className="text-[#859489] ml-2">| {t.skills.deployed}</span>
            </div>
          </div>
          <button
            onClick={() => setSelectedTag(null)}
            className="font-mono text-xs text-[#859489] hover:text-[#dce5dc] px-2 py-1"
          >
            ✕ {t.skills.close}
          </button>
        </div>
      )}
    </section>
  );
};
