import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MessageCircle, Instagram } from 'lucide-react';
import { creatorProfile } from '../data/portfolioData';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService || 'Video Editing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(creatorProfile.contact.email);
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
    window.location.href = `mailto:${creatorProfile.contact.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[rgba(243,238,229,0.08)]">
      {/* Dramatic Massive Typography Header */}
      <div className="pb-16 md:pb-24 border-b border-[rgba(243,238,229,0.12)]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-4">
          06 / DIRECT COMMISSION
        </span>
        <h2
          className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.88]"
          style={{ fontSize: 'clamp(52px, 11vw, 150px)' }}
        >
          LET&apos;S
          <br />
          WORK
          <br />
          <span className="font-serif italic text-[#d6a84f] font-normal lowercase tracking-normal">
            together.
          </span>
        </h2>
      </div>

      {/* Main Grid: Direct Channels & Interactive Inquiry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16">
        {/* Left Column: Direct Links & Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9D9991] block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${creatorProfile.contact.email}`}
                  className="text-lg md:text-2xl font-mono text-[#F3EEE5] hover:text-[#d6a84f] transition-colors"
                >
                  {creatorProfile.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#9D9991] hover:text-[#F3EEE5] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#d6a84f]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social & Messaging Channels */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9D9991] block">
                COMMUNICATION CHANNELS
              </span>

              <div className="space-y-3 font-mono text-sm">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent('Hi Ashwin, I would like to inquire about your creative services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#101010] border border-[rgba(243,238,229,0.08)] hover:border-[#d6a84f] transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F3EEE5]">
                    <MessageCircle className="w-4 h-4 text-[#d6a84f]" />
                    <span>WhatsApp</span>
                  </div>
                  <span className="text-xs text-[#9D9991] group-hover:text-[#F3EEE5] flex items-center gap-1">
                    START CHAT <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#101010] border border-[rgba(243,238,229,0.08)] hover:border-[#d6a84f] transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F3EEE5]">
                    <Instagram className="w-4 h-4 text-[#d6a84f]" />
                    <span>Instagram</span>
                  </div>
                  <span className="text-xs text-[#9D9991] group-hover:text-[#F3EEE5] flex items-center gap-1">
                    {creatorProfile.contact.instagram} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="pt-6 border-t border-[rgba(243,238,229,0.08)] font-mono text-xs text-[#9D9991]">
            <p>Remote studio worldwide.</p>
            <p className="text-[#F3EEE5] mt-1">{creatorProfile.availability}</p>
          </div>
        </div>

        {/* Right Column: Clean Project Brief Composer */}
        <div className="lg:col-span-7 bg-[#0d0d0d] p-8 md:p-10 border border-[rgba(243,238,229,0.12)] rounded-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-6">
            START A PROJECT BRIEF
          </span>

          {isSent ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d6a84f]/20 border border-[#d6a84f] flex items-center justify-center mx-auto text-[#d6a84f]">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold font-sans text-[#F3EEE5]">Inquiry Prepared</h4>
              <p className="text-sm font-sans text-[#9D9991] max-w-md mx-auto">
                Your email client was triggered with your brief details. You can also message directly via WhatsApp or email.
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="text-xs font-mono text-[#d6a84f] uppercase tracking-wider underline pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono text-[#9D9991] uppercase tracking-wider mb-2">
                  DISCIPLINE OF INTEREST
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Video Editing',
                    'Motion Graphics',
                    'Graphic Design',
                    'Thumbnails',
                    'AI Creative',
                    'Full Campaign',
                  ].map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`px-3 py-2 text-xs font-mono text-left transition-all ${
                        selectedService === service
                          ? 'bg-[#d6a84f] text-[#080808] font-bold'
                          : 'bg-[#141414] text-[#9D9991] hover:text-[#F3EEE5]'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#9D9991] uppercase tracking-wider mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#121212] border border-[rgba(243,238,229,0.12)] px-4 py-3 text-sm text-[#F3EEE5] focus:outline-none focus:border-[#d6a84f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9D9991] uppercase tracking-wider mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="w-full bg-[#121212] border border-[rgba(243,238,229,0.12)] px-4 py-3 text-sm text-[#F3EEE5] focus:outline-none focus:border-[#d6a84f]"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-mono text-[#9D9991] uppercase tracking-wider mb-2">
                  PROJECT SCOPE &amp; TIMELINE
                </label>
                <textarea
                  rows={4}
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Outline your timeline, goals, footage status, or visual references..."
                  className="w-full bg-[#121212] border border-[rgba(243,238,229,0.12)] px-4 py-3 text-sm text-[#F3EEE5] focus:outline-none focus:border-[#d6a84f] resize-none"
                />
              </div>

              {/* Warm Ivory Primary Button */}
              <button
                type="submit"
                data-cursor="arrow"
                className="w-full py-4 bg-[#F3EEE5] text-[#080808] hover:bg-[#d6a84f] font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-colors active:scale-[0.99]"
              >
                <span>LET&apos;S WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
