import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MessageCircle, Instagram, QrCode, Mail, Flame } from 'lucide-react';
import { contactInfo, servicesData } from '../data/portfolio';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService || servicesData[0]?.title || 'Video Editing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'qr'>('form');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} — ${name}`);
    const body = encodeURIComponent(
      `Hi Ashwin,\n\nName: ${name}\nEmail: ${email}\nService: ${selectedService}\n\nProject Scope:\n${projectBrief}\n\nLooking forward to collaborating.`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-[1520px] mx-auto border-t border-[rgba(243,238,229,0.08)] select-none">
      {/* Massive Editorial Header */}
      <div className="pb-16 md:pb-24 border-b border-[rgba(243,238,229,0.12)]">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F] block mb-4">
          06 / DIRECT COMMISSION &amp; COLLABORATION
        </span>
        <h2
          className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.85]"
          style={{ fontSize: 'clamp(52px, 11vw, 150px)' }}
        >
          LET&apos;S
          <br />
          WORK
          <br />
          <span className="font-serif italic text-[#D6A84F] font-normal lowercase tracking-normal">
            together.
          </span>
        </h2>
      </div>

      {/* Main Grid: Direct Channels & Interactive Inquiry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16">
        
        {/* Left Column: Direct Links & Central Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          <div className="space-y-8">
            {/* Direct Email with One-Click Copy */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9D9991] block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg md:text-2xl font-mono text-[#F3EEE5] hover:text-[#D6A84F] transition-colors"
                >
                  {contactInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#9D9991] hover:text-[#F3EEE5] transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#D6A84F]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social & Messaging Channels */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9D9991] block">
                AUTHENTIC COMMUNICATION CHANNELS
              </span>

              <div className="space-y-3 font-mono text-sm">
                {/* Instagram Direct */}
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#101010] border border-[rgba(243,238,229,0.08)] hover:border-[#D6A84F] transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F3EEE5]">
                    <Instagram className="w-4 h-4 text-[#D6A84F]" />
                    <span>Instagram</span>
                  </div>
                  <span className="text-xs text-[#9D9991] group-hover:text-[#F3EEE5] flex items-center gap-1">
                    {contactInfo.instagram} <ArrowUpRight className="w-3.5 h-3.5 text-[#D6A84F]" />
                  </span>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#101010] border border-[rgba(243,238,229,0.08)] hover:border-[#D6A84F] transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F3EEE5]">
                    <MessageCircle className="w-4 h-4 text-[#D6A84F]" />
                    <span>WhatsApp Direct</span>
                  </div>
                  <span className="text-xs text-[#9D9991] group-hover:text-[#F3EEE5] flex items-center gap-1">
                    {contactInfo.whatsapp} <ArrowUpRight className="w-3.5 h-3.5 text-[#D6A84F]" />
                  </span>
                </a>
              </div>
            </div>

            {/* Geographic & Response Time Notes */}
            <div className="pt-4 border-t border-[rgba(243,238,229,0.08)] space-y-2 text-xs font-mono text-[#9D9991]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                <span>{contactInfo.locationNote}</span>
              </div>
              <p className="text-[#9D9991]/70">{contactInfo.responseTimeNote}</p>
            </div>
          </div>

          {/* Quick Tab Switcher: Direct Brief Form vs. Scannable Instagram QR */}
          <div className="flex items-center gap-3 pt-6">
            <button
              onClick={() => setActiveTab('form')}
              className={`text-xs font-mono tracking-widest uppercase px-4 py-2 border transition-all ${
                activeTab === 'form'
                  ? 'border-[#D6A84F] text-[#D6A84F] bg-[#D6A84F]/08'
                  : 'border-[rgba(243,238,229,0.1)] text-[#9D9991] hover:text-[#F3EEE5]'
              }`}
            >
              PROJECT BRIEF
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`text-xs font-mono tracking-widest uppercase px-4 py-2 border transition-all flex items-center gap-2 ${
                activeTab === 'qr'
                  ? 'border-[#D6A84F] text-[#D6A84F] bg-[#D6A84F]/08'
                  : 'border-[rgba(243,238,229,0.1)] text-[#9D9991] hover:text-[#F3EEE5]'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>INSTAGRAM QR</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Brief Form OR Animated Fire/Amber Glow Scannable QR */}
        <div className="lg:col-span-7">
          {activeTab === 'form' ? (
            /* Inquiry Form Card */
            <div className="bg-[#0c0c0c] border border-[rgba(243,238,229,0.12)] p-8 md:p-12 rounded-sm shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-[rgba(243,238,229,0.08)] mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6A84F]">
                  COMMISSION BRIEF ENGINE
                </span>
                <span className="text-xs font-mono text-[#9D9991]">DIRECT DISPATCH</span>
              </div>

              {isSent ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#D6A84F]/10 border border-[#D6A84F] flex items-center justify-center text-[#D6A84F] mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[#F3EEE5] uppercase">
                    INQUIRY DISPATCHED
                  </h3>
                  <p className="text-sm font-sans text-[#9D9991] max-w-sm mx-auto">
                    Your email client should have opened. I typically review and reply to production briefs within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 text-xs font-mono text-[#D6A84F] uppercase tracking-widest hover:underline"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Discipline Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#9D9991] mb-3">
                      PRIMARY DISCIPLINE OF INTEREST
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {servicesData.map((service) => {
                        const isSelected = selectedService === service.title;
                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => setSelectedService(service.title)}
                            className={`p-3 text-left border rounded-xs transition-all text-xs font-mono ${
                              isSelected
                                ? 'border-[#D6A84F] bg-[#D6A84F]/10 text-[#F3EEE5]'
                                : 'border-[rgba(243,238,229,0.08)] bg-[#121212] text-[#9D9991] hover:border-[rgba(243,238,229,0.2)]'
                            }`}
                          >
                            <span className="text-[#D6A84F] block text-[10px] mb-1">
                              {service.number}
                            </span>
                            <span className="truncate block font-medium uppercase">{service.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-mono uppercase tracking-widest text-[#9D9991] mb-2">
                        YOUR NAME / BRAND
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan / Studio V"
                        className="w-full bg-[#121212] border border-[rgba(243,238,229,0.1)] px-4 py-3 text-sm font-sans text-[#F3EEE5] focus:outline-none focus:border-[#D6A84F] transition-colors rounded-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-xs font-mono uppercase tracking-widest text-[#9D9991] mb-2">
                        CONTACT EMAIL
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full bg-[#121212] border border-[rgba(243,238,229,0.1)] px-4 py-3 text-sm font-sans text-[#F3EEE5] focus:outline-none focus:border-[#D6A84F] transition-colors rounded-xs"
                      />
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label htmlFor="brief-input" className="block text-xs font-mono uppercase tracking-widest text-[#9D9991] mb-2">
                      PROJECT VISION &amp; TIMELINE (OPTIONAL)
                    </label>
                    <textarea
                      id="brief-input"
                      rows={4}
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Outline your timeline, desired pacing, reference styles, or deliverables..."
                      className="w-full bg-[#121212] border border-[rgba(243,238,229,0.1)] px-4 py-3 text-sm font-sans text-[#F3EEE5] focus:outline-none focus:border-[#D6A84F] transition-colors rounded-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D6A84F] hover:bg-[#e2b967] text-[#080808] font-mono text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 rounded-xs flex items-center justify-center gap-3 shadow-xl"
                  >
                    <span>INITIALIZE PROJECT INQUIRY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          ) : (
            /* Premium Animated Amber/Flame Glow Scannable Instagram QR Presentation */
            <div className="bg-[#0c0c0c] border border-[rgba(243,238,229,0.12)] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden flex flex-col items-center justify-center animate-in fade-in duration-500">
              
              {/* Subtle Ambient Flame/Amber Glow Effect Behind QR */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-t from-[#D6A84F]/25 via-[#ff6b00]/15 to-transparent blur-[60px] animate-pulse" />
              </div>

              {/* QR Header Badge */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#D6A84F] mb-6 uppercase">
                <Flame className="w-4 h-4 text-[#D6A84F] animate-bounce" />
                <span>{contactInfo.instagramQR.label}</span>
              </div>

              {/* Scannable Frame with Controlled Flame/Amber Edge */}
              <div className="relative p-6 bg-[#080808] rounded-md border-2 border-[#D6A84F]/60 shadow-[0_0_35px_rgba(214,168,79,0.25)] group transition-transform duration-300 hover:scale-[1.02]">
                {/* Replaceable QR image asset if provided, or high-fidelity scannable SVG QR representation */}
                {contactInfo.instagramQR.qrAssetUrl ? (
                  <img
                    src={contactInfo.instagramQR.qrAssetUrl}
                    alt={contactInfo.instagramQR.caption}
                    className="w-56 h-56 object-contain rounded"
                  />
                ) : (
                  /* High-contrast precision SVG QR matrix for @oye_ashwin */
                  <div className="w-56 h-56 bg-[#F3EEE5] p-3 rounded flex flex-col items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-[#080808]"
                      fill="currentColor"
                      shapeRendering="crispEdges"
                    >
                      {/* Precise QR Finder Patterns */}
                      {/* Top-Left Finder */}
                      <rect x="5" y="5" width="28" height="28" fill="#080808" />
                      <rect x="9" y="9" width="20" height="20" fill="#F3EEE5" />
                      <rect x="13" y="13" width="12" height="12" fill="#080808" />
                      
                      {/* Top-Right Finder */}
                      <rect x="67" y="5" width="28" height="28" fill="#080808" />
                      <rect x="71" y="9" width="20" height="20" fill="#F3EEE5" />
                      <rect x="75" y="13" width="12" height="12" fill="#080808" />

                      {/* Bottom-Left Finder */}
                      <rect x="5" y="67" width="28" height="28" fill="#080808" />
                      <rect x="9" y="71" width="20" height="20" fill="#F3EEE5" />
                      <rect x="13" y="75" width="12" height="12" fill="#080808" />

                      {/* Timing Tracks */}
                      <rect x="37" y="17" width="4" height="4" fill="#080808" />
                      <rect x="45" y="17" width="4" height="4" fill="#080808" />
                      <rect x="53" y="17" width="4" height="4" fill="#080808" />
                      <rect x="17" y="37" width="4" height="4" fill="#080808" />
                      <rect x="17" y="45" width="4" height="4" fill="#080808" />
                      <rect x="17" y="53" width="4" height="4" fill="#080808" />

                      {/* Data Dots */}
                      <rect x="37" y="37" width="6" height="6" fill="#080808" />
                      <rect x="47" y="37" width="6" height="6" fill="#080808" />
                      <rect x="57" y="37" width="6" height="6" fill="#080808" />
                      <rect x="37" y="47" width="6" height="6" fill="#080808" />
                      <rect x="47" y="47" width="8" height="8" fill="#D6A84F" />
                      <rect x="57" y="47" width="6" height="6" fill="#080808" />
                      <rect x="37" y="57" width="6" height="6" fill="#080808" />
                      <rect x="47" y="57" width="6" height="6" fill="#080808" />
                      <rect x="57" y="57" width="6" height="6" fill="#080808" />

                      <rect x="67" y="37" width="4" height="4" fill="#080808" />
                      <rect x="75" y="41" width="4" height="4" fill="#080808" />
                      <rect x="83" y="37" width="4" height="4" fill="#080808" />
                      <rect x="71" y="49" width="4" height="4" fill="#080808" />
                      <rect x="79" y="53" width="4" height="4" fill="#080808" />
                      <rect x="87" y="49" width="4" height="4" fill="#080808" />

                      <rect x="37" y="67" width="4" height="4" fill="#080808" />
                      <rect x="45" y="71" width="4" height="4" fill="#080808" />
                      <rect x="53" y="67" width="4" height="4" fill="#080808" />
                      <rect x="41" y="79" width="4" height="4" fill="#080808" />
                      <rect x="49" y="83" width="4" height="4" fill="#080808" />
                      <rect x="57" y="79" width="4" height="4" fill="#080808" />

                      <rect x="67" y="67" width="8" height="8" fill="#080808" />
                      <rect x="79" y="67" width="8" height="8" fill="#080808" />
                      <rect x="67" y="79" width="8" height="8" fill="#080808" />
                      <rect x="79" y="79" width="8" height="8" fill="#080808" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Instagram Handle & Direct Open Action */}
              <div className="mt-6 text-center space-y-2">
                <a
                  href={contactInfo.instagramQR.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-base md:text-lg text-[#F3EEE5] hover:text-[#D6A84F] transition-colors font-bold tracking-wider inline-flex items-center gap-1.5"
                >
                  <span>{contactInfo.instagramQR.accountHandle}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D6A84F]" />
                </a>
                <p className="text-xs font-mono text-[#9D9991] max-w-xs">
                  {contactInfo.instagramQR.caption}
                </p>
                <div className="pt-2 text-[10px] font-mono text-[#D6A84F]/80 uppercase tracking-widest">
                  [ SCAN VIA CAMERA OR INSTAGRAM APP ]
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
