import React from 'react';
import { invitationData } from '../data/invitation';
import { CornerDecorations, BrassDiya, LotusIcon } from './Decorations';

export default function PrayerSection() {
  return (
    <section className="py-8 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-[#3D0713] via-[#2B050E] to-[#1A0308] relative rounded-3xl p-6 sm:p-10 text-center border-2 border-amber-400/80 shadow-2xl text-amber-100 overflow-hidden">
        <CornerDecorations />
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

        <div className="flex items-center justify-center gap-3 mb-4">
          <BrassDiya size={32} />
          <h2 className="font-yatra text-xl sm:text-3xl text-amber-300 font-bold tracking-wide">
            🙏 मंगलमय प्रार्थना 🙏
          </h2>
          <BrassDiya size={32} />
        </div>

        {/* Sacred Sanskrit Shloka */}
        <div className="my-5 p-4 sm:p-6 rounded-2xl bg-amber-950/40 border border-amber-400/40 max-w-2xl mx-auto backdrop-blur-xs">
          <p className="font-rozha text-xl sm:text-3xl text-amber-200 leading-relaxed font-bold tracking-wide whitespace-pre-line drop-shadow-md">
            {invitationData.mantra}
          </p>
        </div>

        {/* Bhavarth / Hindi Meaning */}
        <div className="max-w-xl mx-auto mt-4">
          <p className="font-serif-deva text-sm sm:text-base text-amber-100/90 leading-relaxed font-medium">
            "{invitationData.mantraMeaning}"
          </p>
        </div>

        <div className="mt-6 flex justify-center items-center gap-2 text-amber-300 text-xs font-serif-deva">
          <span>❖</span>
          <LotusIcon size={18} />
          <span>सदा मंगलम् शुभम् भवतु</span>
          <LotusIcon size={18} />
          <span>❖</span>
        </div>
      </div>
    </section>
  );
}
