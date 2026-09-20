import React from 'react';
import { invitationData } from '../data/invitation';
import { LotusIcon, BrassDiya, DecorativeDivider } from './Decorations';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2B050E] via-[#1F0309] to-[#120105] text-amber-100 py-12 px-4 text-center border-t-2 border-amber-500/60 overflow-hidden">
      {/* Background Subtle Mandala */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {/* Diyas & Final Chants */}
        <div className="flex items-center justify-center gap-4">
          <BrassDiya size={34} />
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-300 font-bold tracking-wide">
            {invitationData.finalDevotionalMessage}
          </h2>
          <BrassDiya size={34} />
        </div>

        <p className="font-rozha text-xl sm:text-2xl text-amber-200/90 font-bold">
          {invitationData.moryaChant}
        </p>

        <DecorativeDivider className="opacity-60" />

        <div className="pt-2 space-y-1">
          <p className="font-serif-deva text-base text-amber-300 font-semibold">
            सादर आमंत्रण
          </p>
          <p className="font-rozha text-2xl sm:text-3xl text-white font-bold">
            {invitationData.organizerName}
          </p>
          <p className="font-serif-deva text-sm text-amber-200/80">
            रघुवंशी परिवार • अकोला
          </p>
          <p className="font-sans-deva text-xs sm:text-sm text-amber-300/80 pt-1">
            संपर्क: {invitationData.phoneFormatted}
          </p>
        </div>

        <div className="pt-6 text-xs text-amber-400/60 font-serif-deva flex items-center justify-center gap-2">
          <span>🌺</span>
          <span>आपकी पावन उपस्थिति हमारे लिए अत्यंत सौभाग्यपूर्ण होगी</span>
          <span>🌺</span>
        </div>
      </div>
    </footer>
  );
}
