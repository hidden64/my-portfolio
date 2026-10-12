import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, ArrowRight, Play, RotateCcw } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { getLocalizedProfile, useLanguage } from '../i18n';

interface HeroSectionProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
  time: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToProjects,
  onScrollToContact
}) => {
  const { language, t } = useLanguage();
  const profile = getLocalizedProfile(language);
  const [inputVal, setInputVal] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialLog: CommandHistory[] = [
    {
      command: 'nmap -sV -sC -Pn 10.0.0.45',
      time: '10:42:01',
      output: (
        <div className="space-y-1 font-mono text-[11px] text-[#bbcabe]">
          <div className="text-[#61f9b1]"># Init scan on subnet 10.0.0.1/24...</div>
          <div>Starting Nmap 7.93 ( https://nmap.org ) at 2026-08-14 10:42 UTC</div>
          <div>NSE: Loaded 153 scripts for scanning.</div>
          <div>Initiating Ping Scan at 10:42:02</div>
          <div>Scanning 10.0.0.1/24 [4 ports]</div>
          <div className="text-[#5de6ff] font-semibold mt-1">Discovered open port 22/tcp on 10.0.0.45 (OpenSSH 8.9p1)</div>
          <div className="text-[#5de6ff] font-semibold">Discovered open port 80/tcp on 10.0.0.45 (Nginx Reverse Proxy)</div>
          <div className="text-[#5de6ff] font-semibold">Discovered open port 443/tcp on 10.0.0.45 (TLS 1.3 Secured)</div>
          <div className="text-[#5de6ff] font-semibold">Discovered open port 9200/tcp on 10.0.0.45 (Elasticsearch SIEM Node)</div>
          <div className="text-[#61f9b1] mt-1 font-medium">Nmap scan report for target.internal (10.0.0.45) - 0 vulnerabilities found, all defenses active.</div>
        </div>
      )
    }
  ];

  const [history, setHistory] = useState<CommandHistory[]>(initialLog);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    const time = new Date().toLocaleTimeString('fr-FR');
    let out: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        out = (
          <div className="text-xs space-y-1 font-mono">
            <div className="text-[#61f9b1] font-bold">AVAILABLE COMMANDS:</div>
            <div><span className="text-[#5de6ff]">whoami</span> - Afficher le profil de Junias</div>
            <div><span className="text-[#5de6ff]">nmap</span> - Relancer une analyse de ports réseau simulée</div>
            <div><span className="text-[#5de6ff]">infra</span> - Afficher l'expérience et les projets</div>
            <div><span className="text-[#5de6ff]">skills</span> - Lister les compétences techniques</div>
            <div><span className="text-[#5de6ff]">flag</span> - Tenter d'extraire le flag CTF</div>
            <div><span className="text-[#5de6ff]">clear</span> - Nettoyer la console</div>
          </div>
        );
        break;

      case 'whoami':
        out = (
          <div className="text-xs space-y-1 text-[#dce5dc] font-mono">
            <div className="text-[#61f9b1] font-semibold">&gt; Utilisateur: {PROFILE_DATA.name} (SYS_ID: {PROFILE_DATA.sysId})</div>
            <div>Role: Admin Systèmes & Réseaux | Cybersécurité</div>
            <div>Status: <span className="text-[#61f9b1] font-bold">{profile.status}</span></div>
            <div>Formation: {profile.formation}</div>
          </div>
        );
        break;

      case 'nmap':
        setIsScanning(true);
        out = (
          <div className="space-y-1 font-mono text-[11px] text-[#bbcabe]">
            <div className="text-[#61f9b1] animate-pulse"># Scanning active hosts and defense perimeters...</div>
            <div className="text-[#5de6ff]">Host is up (0.00042s latency).</div>
            <div>PORT     STATE SERVICE     VERSION</div>
            <div>22/tcp   open  ssh         OpenSSH 8.9p1 (hardened)</div>
            <div>80/tcp   open  http        Nginx proxy (WAF Active)</div>
            <div>443/tcp  open  https       TLS 1.3 (HSTS Enabled)</div>
            <div>5044/tcp open  logstash    Beats Ingestion Engine</div>
            <div className="text-[#61f9b1] font-bold mt-1">[✓] Scan complete: No vulnerable service exposed.</div>
          </div>
        );
        setTimeout(() => setIsScanning(false), 800);
        break;

      case 'infra':
        out = (
          <div className="text-xs space-y-1 font-mono text-[#dce5dc]">
            <div className="text-[#61f9b1] font-bold">INFRASTRUCTURE & EXPÉRIENCE :</div>
            <div>• Stage SOC: <span className="text-[#61f9b1]">Plateforme SOC déployée (Docker, Python)</span></div>
            <div>• IT Multi-sites: <span className="text-[#5de6ff]">26 stations-service administrées</span></div>
            <div>• Projets sécu: <span className="text-[#61f9b1]">PSSI EBIOS RM, VPN IKEv2, Audit OWASP</span></div>
            <div>• CTF: <span className="text-[#ffd8b6]">DefHack 2026 COMCYBER, HTB, Root-Me</span></div>
          </div>
        );
        break;

      case 'skills':
        out = (
          <div className="text-xs space-y-1 font-mono text-[#bbcabe]">
            <div className="text-[#61f9b1] font-bold">STACK TECHNIQUE PRINCIPALE :</div>
            <div>• Systèmes : Windows Server, Linux, Active Directory, VMware</div>
            <div>• Réseau : VLAN, VPN IKEv2/IPsec, pfSense, Fortigate, Wireshark</div>
            <div>• Sécu & Dev : SIEM, EBIOS RM, OWASP, Python, Bash, Docker</div>
          </div>
        );
        break;

      case 'flag':
      case 'cat flag.txt':
        out = (
          <div className="text-xs font-mono text-[#61f9b1] bg-[#1a211c] p-2 border border-[#61f9b1]/40 rounded">
            FLAG&#123;Junias_SysAdmin_Cyber_Alternance_2026&#125;
            <div className="text-[10px] text-[#bbcabe] mt-1">Bravo ! Prêt à sécuriser vos infrastructures. Contactez-moi !</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        out = (
          <div className="text-xs text-[#ffb4ab] font-mono">
            Commande non reconnue : "{cmdText}". Tapez <span className="text-[#61f9b1] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> pour voir les commandes.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output: out, time }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px] pt-4 md:pt-8" id="hero">
      {/* Left: Hero Copy */}
      <div className="lg:col-span-6 flex flex-col gap-6">
        {/* Terminal Header Tag */}
        <div className="inline-flex items-center gap-2">
          <span className="font-mono text-xs text-[#61f9b1] font-semibold bg-[#1a211c] border border-[#3c4a41] px-2.5 py-1 rounded">
            &gt; whoami
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-[#bbcabe]">
            <Shield className="w-3.5 h-3.5 text-[#61f9b1]" />
            <span>{t.hero.level}</span>
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#dce5dc] tracking-tight leading-[1.15]">
          {t.hero.role.split(' & ')[0]} &amp;<br />
          <span className="text-[#5de6ff]">{t.hero.role.split(' & ')[1]}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base text-[#bbcabe] leading-relaxed max-w-xl">
          {profile.bio}
        </p>

        {/* CTA Buttons matching design */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <button
            onClick={onScrollToProjects}
            className="font-mono text-xs md:text-sm bg-[#61f9b1] text-[#003822] font-bold px-6 py-3 border border-[#61f9b1] hover:bg-transparent hover:text-[#61f9b1] transition-all cursor-pointer rounded shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>{t.hero.projects}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToContact}
            className="font-mono text-xs md:text-sm bg-transparent text-[#61f9b1] font-semibold px-6 py-3 border border-[#3c4a41] hover:border-[#5de6ff] hover:text-[#5de6ff] hover:bg-[#1a211c]/50 transition-all cursor-pointer rounded active:scale-95"
          >
            <span>{t.hero.contact}</span>
          </button>
        </div>

      </div>

      {/* Right: Live Interactive Terminal Simulation */}
      <div className="lg:col-span-6 bg-[#09100b] border border-[#3c4a41] rounded p-4 relative overflow-hidden group hover:border-[#5de6ff] transition-all duration-300 shadow-2xl flex flex-col h-[390px] md:h-[420px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#3c4a41] pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5555] opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffb368] opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#61f9b1] opacity-80" />
            <span className="font-mono text-[11px] text-[#bbcabe] ml-2 font-semibold">
              root@junias-sec-vm:~
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleCommand('nmap')}
              disabled={isScanning}
              title={t.hero.scan}
              className="text-[10px] font-mono text-[#859489] hover:text-[#61f9b1] px-2 py-0.5 rounded border border-[#3c4a41] hover:border-[#61f9b1] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>scan</span>
            </button>
            <span className="font-mono text-[10px] text-[#61f9b1] border border-[#61f9b1]/30 bg-[#1a211c] px-1.5 py-0.5 rounded">
              BASH
            </span>
          </div>
        </div>

        {/* Terminal Scrollable Logs */}
        <div className="font-mono text-[11px] text-[#bbcabe] leading-relaxed flex-1 overflow-y-auto space-y-3 pr-1">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#61f9b1]">
                <span className="text-[#859489]">[{item.time}]</span>
                <span className="text-[#5de6ff]">root@junias-sec-vm#</span>
                <span className="text-[#dce5dc] font-semibold">{item.command}</span>
              </div>
              <div className="pl-3 border-l border-[#3c4a41]/60">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Pills for quick user interaction */}
        <div className="flex items-center gap-1.5 pt-2 border-t border-[#3c4a41]/50 overflow-x-auto pb-1 text-[10px] font-mono">
            <span className="text-[#859489] text-[9px] uppercase tracking-wider shrink-0">{t.hero.quick}</span>
          {['help', 'whoami', 'infra', 'skills', 'flag', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 bg-[#1a211c] text-[#5de6ff] hover:text-[#61f9b1] hover:border-[#61f9b1] border border-[#3c4a41] rounded transition-colors cursor-pointer shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Live Input Field */}
        <form onSubmit={handleFormSubmit} className="mt-2 flex items-center gap-2 bg-[#161d18] border border-[#3c4a41] px-2.5 py-1.5 rounded focus-within:border-[#61f9b1] transition-colors">
          <span className="text-[#61f9b1] font-mono text-xs font-bold">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={t.hero.placeholder}
            className="flex-1 bg-transparent font-mono text-xs text-[#dce5dc] outline-none placeholder-[#859489]"
          />
          <button
            type="submit"
            className="text-[#61f9b1] hover:text-[#5de6ff] transition-colors cursor-pointer"
            title={t.hero.execute}
          >
            <Play className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Scanlines Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none scanlines-overlay opacity-30" />
      </div>
    </section>
  );
};
