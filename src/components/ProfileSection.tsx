import React from 'react';
import { ShieldCheck, Fingerprint, MapPin, Award, Terminal, CheckCircle2, UserCheck } from 'lucide-react';
import { getLocalizedProfile, useLanguage } from '../i18n';

export const ProfileSection: React.FC = () => {
  const { language, t } = useLanguage();
  const profile = getLocalizedProfile(language);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8" id="profil">
      {/* Left: Operational Profile Description */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-[#3c4a41] pb-3">
          <span className="font-mono text-sm text-[#61f9b1] font-bold">01.</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#dce5dc]">
                {t.sections.profile}
          </h2>
        </div>

        <div className="font-body text-base text-[#bbcabe] space-y-4 leading-relaxed">
          <p>
                {profile.operationalProfile}
          </p>
          <p>
            Passionné par la sécurité informatique, je m'entraîne régulièrement sur des plateformes comme Hack The Box et Root-Me, et j'ai participé au DefHack 2026 du COMCYBER. Mon objectif : mettre cette polyvalence systèmes, réseaux et cybersécurité au service d'une équipe à taille humaine.
          </p>
        </div>

        {/* Tactical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded flex items-start gap-3 hover:border-[#61f9b1] transition-colors">
            <ShieldCheck className="w-5 h-5 text-[#61f9b1] shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold text-[#dce5dc]">Administration Systèmes</div>
              <div className="font-body text-xs text-[#859489]">Windows Server, Linux, Active Directory, VMware, GLPI et gestion de parc.</div>
            </div>
          </div>

          <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded flex items-start gap-3 hover:border-[#5de6ff] transition-colors">
            <Terminal className="w-5 h-5 text-[#5de6ff] shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold text-[#dce5dc]">Réseau &amp; Sécurité</div>
              <div className="font-body text-xs text-[#859489]">VLAN, VPN IKEv2/IPsec, pfSense, Fortigate et analyse Wireshark.</div>
            </div>
          </div>

          <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded flex items-start gap-3 hover:border-[#5de6ff] transition-colors">
            <Award className="w-5 h-5 text-[#ffd8b6] shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold text-[#dce5dc]">Cybersécurité &amp; Gouvernance</div>
              <div className="font-body text-xs text-[#859489]">EBIOS RM, ISO 27001, OWASP, SIEM, audit de sécurité et conformité RGPD.</div>
            </div>
          </div>

          <div className="bg-[#161d18] border border-[#3c4a41] p-3 rounded flex items-start gap-3 hover:border-[#61f9b1] transition-colors">
            <UserCheck className="w-5 h-5 text-[#61f9b1] shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold text-[#dce5dc]">Automatisation &amp; Scripting</div>
              <div className="font-body text-xs text-[#859489]">Python, Bash, PowerShell, Docker et pipelines CI/CD.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Cyber Identity Card Module (SYS_ID: JUNIAS_SEC) */}
      <div className="lg:col-span-5 bg-[#0e1510] border border-[#3c4a41] rounded p-5 hover:border-[#61f9b1] transition-all duration-300 relative overflow-hidden group shadow-xl">
        {/* Ambient Fingerprint Watermark */}
        <div className="absolute -top-4 -right-4 pointer-events-none opacity-5 group-hover:opacity-15 transition-opacity text-[#61f9b1]">
          <Fingerprint className="w-44 h-44" />
        </div>

        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-[#3c4a41] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#61f9b1] status-dot" />
            <span className="font-mono text-xs font-bold text-[#dce5dc] tracking-wider">
                  SYS_ID: {profile.sysId}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#859489] border border-[#3c4a41] px-2 py-0.5 rounded bg-[#161d18]">
            SEC_AUTH // VERIFIED
          </span>
        </div>

        {/* User Identity Banner with Avatar Image */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-20 h-20 bg-[#09100b] border border-[#3c4a41] rounded overflow-hidden shrink-0 relative group-hover:border-[#61f9b1] transition-colors">
            <img
                  src={profile.avatarUrl}
              alt="Avatar Junias - Analyste Cybersécurité"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1510]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#859489] tracking-wider">
                  ID_NUM: {profile.idNum}
            </span>
            <span className="font-headline text-2xl font-bold text-[#dce5dc]">
                  {profile.name}
            </span>
            <span className="font-mono text-xs text-[#61f9b1] font-semibold mt-0.5">
              Admin Sys & Réseaux / Cybersécurité
            </span>
            <div className="flex items-center gap-1 text-[11px] font-mono text-[#bbcabe] mt-1">
              <MapPin className="w-3 h-3 text-[#5de6ff]" />
                  <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Key Metrics / Attributes List */}
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center border-b border-[#3c4a41]/40 pb-2">
                <span className="text-[#859489]">{t.modal.formation}</span>
                <span className="text-[#dce5dc] font-medium text-right">{profile.formation}</span>
          </div>

          <div className="flex justify-between items-center border-b border-[#3c4a41]/40 pb-2">
                <span className="text-[#859489]">{t.modal.specialisation}</span>
                <span className="text-[#5de6ff] font-semibold text-right">{profile.specialisation}</span>
          </div>

          <div className="flex justify-between items-center border-b border-[#3c4a41]/40 pb-2">
                <span className="text-[#859489]">{t.modal.clearance}</span>
                <span className="text-[#5de6ff] font-medium text-right">{profile.clearance}</span>
          </div>

          <div className="flex justify-between items-start border-b border-[#3c4a41]/40 pb-2">
                <span className="text-[#859489]">{t.modal.certifications}</span>
            <div className="text-right space-y-1">
              {profile.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-end gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3 h-3 text-[#61f9b1] shrink-0" />
                  <span className="text-[#61f9b1]">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-1">
                <span className="text-[#859489]">{t.modal.status}</span>
            <span className="text-[#61f9b1] font-bold flex items-center gap-1.5 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#61f9b1] status-dot" />
              {profile.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
