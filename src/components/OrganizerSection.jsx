import React from 'react';
import { invitationData, getOrganizerWhatsAppChatUrl } from '../data/invitation';
import { CornerDecorations, LotusIcon } from './Decorations';

export default function OrganizerSection() {
  return (
    <section id="contact-section" className="py-10 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="parchment-card-gold relative rounded-3xl p-6 sm:p-10 text-center border-2 border-amber-400 shadow-xl overflow-hidden">
        <CornerDecorations />

        <div className="flex items-center justify-center gap-2 mb-2">
          <LotusIcon size={24} />
          <h2 className="font-yatra text-xl sm:text-3xl text-amber-800 font-bold">
            ॥ आयोजक ॥
          </h2>
          <LotusIcon size={24} />
        </div>

        {/* Organizer Name */}
        <div className="my-4">
          <h3 className="font-rozha text-2xl sm:text-4xl text-[#3D0713] font-bold tracking-wide">
            {invitationData.organizerName}
          </h3>
          <p className="font-serif-deva text-base sm:text-lg text-amber-900 font-semibold mt-1">
            रघुवंशी परिवार
          </p>
        </div>

        {/* Contact Number Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100 border border-amber-400 text-amber-950 font-serif-deva font-bold text-base sm:text-lg my-2 shadow-xs">
          <span>📞</span>
          <span>{invitationData.phoneFormatted}</span>
        </div>

        {/* Action Buttons: Phone & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* Direct Phone Call */}
          <a
            href={invitationData.telLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white font-rozha font-bold text-base sm:text-lg shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/40 cursor-pointer text-decoration-none"
            aria-label="फोन द्वारा संपर्क करें"
          >
            <span>📞 संपर्क करें</span>
          </a>

          {/* Direct WhatsApp Chat */}
          <a
            href={getOrganizerWhatsAppChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-rozha font-bold text-base sm:text-lg shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-green-300/40 cursor-pointer text-decoration-none"
            aria-label="व्हाट्सऐप पर संपर्क करें"
          >
            <span>💚 व्हाट्सऐप पर संपर्क करें</span>
          </a>
        </div>

        <p className="text-xs sm:text-sm text-amber-800/80 font-serif-deva mt-5">
          किसी भी जानकारी अथवा मार्गदर्शन हेतु कृपया संपर्क करें।
        </p>
      </div>
    </section>
  );
}
