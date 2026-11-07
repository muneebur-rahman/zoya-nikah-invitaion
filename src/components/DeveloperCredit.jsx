import React from 'react';
import { Code2, Mail, Linkedin, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function DeveloperCredit() {
  const { name, role, email, phone, formattedPhone, whatsappUrl, linkedin, ctaText, ctaButton, inquirySubject } = INVITATION_DATA.developer;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(inquirySubject)}`;
  const telUrl = `tel:${phone}`;

  return (
    <div className="relative py-8 px-4 sm:px-6 max-w-2xl mx-auto">
      <div className="rounded-2xl bg-burgundy-950/80 border border-rosegold-500/25 backdrop-blur-md p-5 sm:p-6 text-center relative overflow-hidden shadow-lg">
        {/* Subtle decorative top border */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-rosegold-400/40 to-transparent" />

        <div className="flex flex-col items-center justify-center space-y-2.5">
          {/* Heading & Developer Name */}
          <div className="space-y-0.5">
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-heading text-rosegold-400/90 font-medium">
              {role}
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
              {name}
            </h4>
          </div>

          {/* Contact Links: Direct Call, WhatsApp, Email, LinkedIn */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {/* Direct Call */}
            <a
              href={telUrl}
              className="inline-flex items-center gap-1 text-[11px] text-rosegold-300 hover:text-white transition-colors py-1 px-3 rounded-lg bg-burgundy-900/60 hover:bg-rosegold-500/20 border border-rosegold-500/25 font-medium"
              title="Call Developer"
            >
              <Phone className="w-3 h-3 text-rosegold-400" />
              <span>Call: {formattedPhone || phone}</span>
            </a>

            {/* Direct WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-rosegold-300 hover:text-white transition-colors py-1 px-3 rounded-lg bg-burgundy-900/60 hover:bg-rosegold-500/20 border border-rosegold-500/25 font-medium"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3 h-3 text-rosegold-400" />
              <span>WhatsApp</span>
            </a>

            {/* Email */}
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-1 text-[11px] text-ivory-200 hover:text-white transition-colors py-1 px-3 rounded-lg bg-burgundy-900/60 hover:bg-rosegold-500/20 border border-burgundy-800/60"
              title="Send an Email"
            >
              <Mail className="w-3 h-3 text-rosegold-400" />
              <span>Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-ivory-200 hover:text-white transition-colors py-1 px-3 rounded-lg bg-burgundy-900/60 hover:bg-rosegold-500/20 border border-burgundy-800/60"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3 h-3 text-rosegold-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Business Inquiry CTA */}
          <div className="pt-2 border-t border-rosegold-500/15 flex items-center justify-center gap-2 text-xs">
            <span className="font-serif italic text-[11px] text-ivory-200/70">
              {ctaText}
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-heading tracking-wider uppercase bg-rosegold-500/20 text-rosegold-300 border border-rosegold-400/40 hover:bg-rosegold-500/35 hover:text-white transition-all font-semibold cursor-pointer"
            >
              <Sparkles className="w-2.5 h-2.5 text-rosegold-400" />
              <span>{ctaButton}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

