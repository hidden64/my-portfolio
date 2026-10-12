import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Mail, Key, Copy, Check, Send, Shield, Lock, ExternalLink, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'encrypting' | 'sent'>('idle');

  const pgpKeySample = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.10
Comment: https://junias-sec.internal/pgp

mQGNBF+v45EBDAC1l982sKq1bC728JkE92837482910293847291029384729102
9384729102938472910293847291029384729102938472910293847291029384
=3m9A
-----END PGP PUBLIC KEY BLOCK-----`;

  const copyToClipboard = (text: string, type: 'key' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'key') {
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setDispatchStatus('encrypting');
    setTimeout(() => {
      setDispatchStatus('sent');
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setDispatchStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <section className="flex flex-col gap-8 pt-8" id="contact">
      <div className="flex items-center justify-between border-b border-[#3c4a41] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#61f9b1] font-bold">05.</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#dce5dc]">
            {t.sections.contact}
          </h2>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-[#61f9b1] bg-[#1a211c] border border-[#3c4a41] px-2 py-0.5 rounded">
          {t.contact.status}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Channels & PGP Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#0e1510] border border-[#3c4a41] rounded p-5 space-y-4">
            <div className="flex items-center gap-2 text-[#61f9b1] font-mono text-xs font-bold border-b border-[#3c4a41]/40 pb-2">
              <Mail className="w-4 h-4" />
              <span>CANAL DE COMMUNICATION DIRECT</span>
            </div>

            <p className="font-body text-sm text-[#bbcabe] leading-relaxed">
              {t.contact.direct === 'DIRECT COMMUNICATION CHANNEL' ? 'Currently looking for a work-study opportunity (Systems & Network Administrator, SOC Analyst or Cybersecurity Engineer). Feel free to contact me to discuss your technical needs.' : "Actuellement à la recherche d'une opportunité en alternance (Administrateur Systèmes & Réseaux, Analyste SOC ou Ingénieur Cybersécurité). N'hésitez pas à me contacter pour échanger sur vos besoins techniques."}
            </p>

            <div className="p-3 bg-[#161d18] border border-[#3c4a41] rounded flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#859489]">EMAIL DIRECT</span>
                <span className="font-mono text-xs text-[#dce5dc] font-semibold">{PROFILE_DATA.email}</span>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE_DATA.email, 'email')}
                className="p-2 text-[#859489] hover:text-[#61f9b1] bg-[#09100b] border border-[#3c4a41] rounded transition-colors"
                title={t.contact.copyEmail}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#61f9b1]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Availability Box */}
            <div className="p-3 bg-[#09100b] border border-[#61f9b1]/40 rounded font-mono text-xs space-y-1">
              <div className="flex items-center gap-2 text-[#61f9b1] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#61f9b1] status-dot" />
                <span>{t.contact.availability}</span>
              </div>
              <div className="text-[#859489] text-[11px]">
                {t.contact.direct === 'DIRECT COMMUNICATION CHANNEL' ? 'Work-study schedule: 6 weeks company / 2 weeks school. Available immediately.' : 'Rythme alternance : 6 semaines entreprise / 2 semaines école. Disponible immédiatement.'}
              </div>
            </div>
          </div>

          {/* PGP Public Key Section */}
          <div className="bg-[#0e1510] border border-[#3c4a41] rounded p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-[#3c4a41]/40 pb-2">
              <div className="flex items-center gap-2 text-[#5de6ff] font-mono text-xs font-bold">
                <Key className="w-4 h-4" />
                <span>{t.contact.pgp}</span>
              </div>
              <button
                onClick={() => copyToClipboard(pgpKeySample, 'key')}
                className="font-mono text-[10px] text-[#61f9b1] hover:text-[#5de6ff] flex items-center gap-1 cursor-pointer"
              >
                {copiedKey ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey ? t.contact.copied : t.contact.copyPgp}</span>
              </button>
            </div>

            <pre className="p-2.5 bg-[#09100b] border border-[#3c4a41] rounded font-mono text-[10px] text-[#859489] overflow-x-auto leading-tight">
              {pgpKeySample}
            </pre>
          </div>
        </div>

        {/* Right: Encrypted Message Dispatch Terminal Form */}
        <div className="lg:col-span-7 bg-[#0e1510] border border-[#3c4a41] rounded p-6 shadow-xl relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#3c4a41] pb-3 mb-6">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#61f9b1]" />
              <span className="font-mono text-xs font-bold text-[#dce5dc]">
                {t.contact.dispatch}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#859489]">
                {t.contact.encrypted}
            </span>
          </div>

          {dispatchStatus === 'sent' ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#61f9b1]/15 border border-[#61f9b1] flex items-center justify-center text-[#61f9b1]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-[#dce5dc]">{t.contact.sent}</h3>
              <p className="font-body text-sm text-[#bbcabe] max-w-sm">
                {t.contact.sentDescription}
              </p>
              <div className="font-mono text-xs text-[#61f9b1]">
                HASH_TX: 0x9f4a...2c8d // CONFIRMED
              </div>
            </div>
          ) : (
            <form onSubmit={handleDispatch} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#859489] flex items-center gap-1">
                    <span>{t.contact.identity}</span>
                    <span className="text-[#61f9b1]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ex: Alexandre Dubois (Thales / Airbus)"
                    className="w-full bg-[#161d18] border border-[#3c4a41] rounded px-3 py-2 font-mono text-xs text-[#dce5dc] outline-none focus:border-[#61f9b1] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#859489] flex items-center gap-1">
                    <span>{t.contact.email}</span>
                    <span className="text-[#61f9b1]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="recrutement-soc@entreprise.fr"
                    className="w-full bg-[#161d18] border border-[#3c4a41] rounded px-3 py-2 font-mono text-xs text-[#dce5dc] outline-none focus:border-[#61f9b1] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-[#859489] flex items-center gap-1">
                  <span>{t.contact.message}</span>
                  <span className="text-[#61f9b1]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.direct === 'DIRECT COMMUNICATION CHANNEL' ? 'Role details, proposed assignments (Sysadmin, Network, Cybersecurity) or a simple introduction...' : 'Détails du poste, missions proposées (Admin Sys/Réseaux, Cybersécurité) ou prise de contact...'}
                  className="w-full bg-[#161d18] border border-[#3c4a41] rounded px-3 py-2 font-mono text-xs text-[#dce5dc] outline-none focus:border-[#61f9b1] transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="font-mono text-[10px] text-[#859489] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#61f9b1]" />
                  <span>{t.contact.noLogs}</span>
                </div>

                <button
                  type="submit"
                  disabled={dispatchStatus === 'encrypting'}
                  className="w-full sm:w-auto font-mono text-xs bg-[#61f9b1] text-[#003822] font-bold px-6 py-3 rounded hover:bg-[#65fdb5] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 shadow-md"
                >
                  {dispatchStatus === 'encrypting' ? (
                    <>
                      <div className="w-3 h-3 border-2 border-[#003822] border-t-transparent rounded-full animate-spin" />
                      <span>{t.contact.encrypting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.contact.send}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
