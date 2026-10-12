import React, { useState, useEffect } from 'react';
import { INITIAL_THREAT_LOGS } from '../data/portfolioData';
import { ThreatLog } from '../types';
import { Radio, X, Play, Pause, ShieldCheck, AlertTriangle, Filter, Terminal, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n';

interface SensorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SensorsModal: React.FC<SensorsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [logs, setLogs] = useState<ThreatLog[]>(INITIAL_THREAT_LOGS);
  const [isStreaming, setIsStreaming] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState<string>('ALL');

  useEffect(() => {
    if (!isOpen || !isStreaming) return;

    const sampleAttackSignatures = [
      { sig: 'ET ATTACK_RESPONSE Metasploit Meterpreter Reverse TCP Payload', sev: 'CRITICAL' as const, act: 'BLOCKED' as const, proto: 'TCP/4444' },
      { sig: 'SURICATA TLS Certificate Invalid / Fake Let\'s Encrypt Issuer', sev: 'MEDIUM' as const, act: 'ALERT' as const, proto: 'TLS/443' },
      { sig: 'ANOMALY AWS IAM AssumeRole Chain from Untrusted Tor Exit Node', sev: 'HIGH' as const, act: 'QUARANTINED' as const, proto: 'HTTPS' },
      { sig: 'GPL EXPLOIT Spring4Shell RCE (CVE-2022-22965) Payload Ingested', sev: 'CRITICAL' as const, act: 'BLOCKED' as const, proto: 'HTTP/8080' },
      { sig: 'INFO Sysmon Event ID 1: Suspicious rundll32.exe spawned by cmd.exe', sev: 'LOW' as const, act: 'ANALYZED' as const, proto: 'LOCAL' },
    ];

    const interval = setInterval(() => {
      const pick = sampleAttackSignatures[Math.floor(Math.random() * sampleAttackSignatures.length)];
      const randOctet1 = Math.floor(Math.random() * 200) + 20;
      const randOctet2 = Math.floor(Math.random() * 255);
      const newLog: ThreatLog = {
        id: 'log-' + Date.now(),
        timestamp: new Date().toLocaleTimeString('fr-FR') + '.' + Math.floor(Math.random() * 900 + 100),
        severity: pick.sev,
        sourceIp: `${randOctet1}.${randOctet2}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        destIp: '10.0.0.45:443',
        protocol: pick.proto,
        signature: pick.sig,
        action: pick.act
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 30)]);
    }, 2800);

    return () => clearInterval(interval);
  }, [isOpen, isStreaming]);

  if (!isOpen) return null;

  const filteredLogs = logs.filter((log) => {
    if (selectedSeverity === 'ALL') return true;
    return log.severity === selectedSeverity;
  });

  const getSeverityBadge = (sev: ThreatLog['severity']) => {
    switch (sev) {
      case 'CRITICAL':
        return <span className="bg-[#ff5555]/20 text-[#ff5555] border border-[#ff5555]/50 px-2 py-0.5 rounded text-[9px] font-bold">CRITIQUE</span>;
      case 'HIGH':
        return <span className="bg-[#ffb368]/20 text-[#ffb368] border border-[#ffb368]/50 px-2 py-0.5 rounded text-[9px] font-bold">HAUT</span>;
      case 'MEDIUM':
        return <span className="bg-[#5de6ff]/20 text-[#5de6ff] border border-[#5de6ff]/50 px-2 py-0.5 rounded text-[9px] font-bold">MOYEN</span>;
      case 'LOW':
        return <span className="bg-[#61f9b1]/20 text-[#61f9b1] border border-[#61f9b1]/50 px-2 py-0.5 rounded text-[9px] font-bold">FAIBLE</span>;
      default:
        return <span className="bg-[#1a211c] text-[#859489] border border-[#3c4a41] px-2 py-0.5 rounded text-[9px]">INFO</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#09100b] border border-[#3c4a41] rounded w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#3c4a41] bg-[#161d18]">
          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-[#61f9b1] animate-pulse" />
            <div>
              <h3 className="font-mono text-sm font-bold text-[#dce5dc]">
                {t.sensors.title}
              </h3>
              <p className="font-mono text-[10px] text-[#859489]">
                {t.sensors.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className="font-mono text-xs px-2.5 py-1 bg-[#1a211c] border border-[#3c4a41] rounded text-[#dce5dc] hover:text-[#61f9b1] flex items-center gap-1 cursor-pointer"
            >
              {isStreaming ? <Pause className="w-3.5 h-3.5 text-[#ffb368]" /> : <Play className="w-3.5 h-3.5 text-[#61f9b1]" />}
              <span>{isStreaming ? t.sensors.pause : t.sensors.resume}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[#859489] hover:text-[#ff5555] rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Severity Filters Bar */}
        <div className="px-4 py-2 bg-[#0e1510] border-b border-[#3c4a41]/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#859489]" />
            <span className="text-[#859489] text-[11px]">{t.sensors.filter}</span>
            {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSelectedSeverity(sev)}
                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors ${
                  selectedSeverity === sev
                    ? 'bg-[#61f9b1] text-[#003822] font-bold'
                    : 'bg-[#161d18] text-[#859489] hover:text-[#dce5dc]'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-[#61f9b1] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#61f9b1] status-dot" />
            <span>{filteredLogs.length} {t.sensors.events}</span>
          </div>
        </div>

        {/* Logs Table */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-[11px]">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="p-2.5 bg-[#161d18]/70 border border-[#3c4a41]/50 hover:border-[#5de6ff] rounded flex flex-col md:flex-row md:items-center justify-between gap-2 transition-colors"
            >
              <div className="flex items-start md:items-center gap-2.5 flex-1 min-w-0">
                <span className="text-[#859489] text-[10px] shrink-0 font-mono">[{log.timestamp}]</span>
                {getSeverityBadge(log.severity)}
                <span className="text-[#dce5dc] font-semibold truncate" title={log.signature}>
                  {log.signature}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-[10px]">
                <span className="text-[#5de6ff] bg-[#09100b] px-2 py-0.5 rounded border border-[#3c4a41]">
                  SRC: {log.sourceIp}
                </span>
                <span className="text-[#bbcabe]">
                  {log.protocol}
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-bold ${
                    log.action === 'BLOCKED'
                      ? 'bg-[#ff5555]/20 text-[#ff5555]'
                      : log.action === 'QUARANTINED'
                      ? 'bg-[#ffb368]/20 text-[#ffb368]'
                      : 'bg-[#61f9b1]/20 text-[#61f9b1]'
                  }`}
                >
                  {log.action}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#161d18] border-t border-[#3c4a41] flex items-center justify-between font-mono text-[10px] text-[#859489]">
          <span>{t.sensors.engine}</span>
          <span className="text-[#61f9b1]">{t.sensors.protection}</span>
        </div>
      </div>
    </div>
  );
};
