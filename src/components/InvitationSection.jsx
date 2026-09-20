import React from 'react';
import { invitationData } from '../data/invitation';
import { DecorativeDivider, CornerDecorations, LotusIcon } from './Decorations';

export default function InvitationSection() {
  return (
    <section id="invitation-card" className="py-12 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="parchment-card-gold relative rounded-3xl p-6 sm:p-12 text-center overflow-hidden">
        <CornerDecorations />

        {/* Top Auspicious Lotus Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <LotusIcon size={26} />
          <span className="font-yatra text-amber-800 text-lg sm:text-2xl font-bold">
            ॥ सादर आमंत्रण ॥
          </span>
          <LotusIcon size={26} />
        </div>

        {/* Sacred Heartfelt Invitation Message */}
        <div className="my-6 max-w-2xl mx-auto">
          <p className="font-serif-deva text-lg sm:text-2xl text-[#2B050E] leading-relaxed font-semibold">
            {invitationData.invitationMessage}
          </p>
        </div>

        <DecorativeDivider />

        {/* Warm Hospitality & Closing Lines */}
        <div className="space-y-3 my-6 max-w-xl mx-auto">
          <p className="font-serif-deva text-base sm:text-xl text-amber-900 font-bold">
            "{invitationData.closingLines[0]}"
          </p>
          <p className="font-serif-deva text-base sm:text-xl text-[#7A152E] font-semibold">
            {invitationData.closingLines[1]}
          </p>
        </div>

        {/* Auspicious Seal Badge */}
        <div className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-amber-200/80 via-amber-300/80 to-amber-200/80 border border-amber-500/60 shadow-xs">
          <span className="text-amber-900 font-serif-deva font-bold text-sm sm:text-base">
            🌺 सपरिवार पधारें 🌺
          </span>
        </div>
      </div>
    </section>
  );
}
