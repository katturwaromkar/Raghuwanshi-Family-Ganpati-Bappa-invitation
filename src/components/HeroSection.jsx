import React from 'react';
import { invitationData } from '../data/invitation';
import { ToranHeader, HangingBell, BrassDiya, DecorativeDivider } from './Decorations';

export default function HeroSection() {
  const scrollToInvitation = () => {
    const el = document.getElementById('invitation-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center pt-2 pb-8 px-4 overflow-hidden bg-gradient-to-b from-[#FAF5E8] via-[#FFFDF9] to-[#F7EFE1]">
      {/* Top Toran Garland */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <ToranHeader />
      </div>

      {/* Hanging Brass Bells (Left & Right) */}
      <div className="absolute top-4 left-3 sm:left-12 z-20 hidden xs:block">
        <HangingBell isLeft={true} />
      </div>
      <div className="absolute top-4 right-3 sm:right-12 z-20 hidden xs:block">
        <HangingBell isLeft={false} />
      </div>

      {/* Hero Header Area */}
      <div className="relative z-10 text-center max-w-2xl mx-auto pt-14 sm:pt-16">
        {/* Devotional Shlok */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-900 font-yatra font-bold text-sm sm:text-lg mb-3 shadow-xs">
          <span>{invitationData.devotionalHeading}</span>
        </div>

        {/* Main Invitation Title */}
        <h1 className="font-rozha text-3xl sm:text-5xl md:text-6xl text-[#4A0A16] font-bold leading-tight drop-shadow-xs px-2">
          {invitationData.title}
        </h1>
        <p className="font-serif-deva text-lg sm:text-2xl text-amber-800 font-semibold mt-1 mb-2">
          {invitationData.subtitle}
        </p>

        <DecorativeDivider />
      </div>

      {/* Central Divine Lord Ganesha Visual */}
      <div className="relative z-10 my-3 flex flex-col items-center">
        {/* Glowing Aura Frame */}
        <div className="ganesh-aura relative max-w-[280px] sm:max-w-[360px] md:max-w-[400px] w-full mx-auto">
          <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_15px_45px_rgba(122,21,46,0.25)]">
            <div className="relative rounded-2xl overflow-hidden bg-[#3D0713] border-2 border-amber-200/80">
              <img
                src="/images/ganesha.jpg"
                alt="भगवान श्री गणेश"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 select-none"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24030B]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Auspicious Chants & Diyas */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <BrassDiya size={38} className="hidden sm:inline-flex" />
          <p className="font-yatra text-xl sm:text-2xl md:text-3xl text-amber-800 font-bold tracking-wide drop-shadow-xs text-center">
            {invitationData.finalDevotionalMessage}
          </p>
          <BrassDiya size={38} className="hidden sm:inline-flex" />
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="relative z-10 mt-4 text-center cursor-pointer" onClick={scrollToInvitation}>
        <p className="font-serif-deva text-xs sm:text-sm text-amber-900 font-semibold mb-1 opacity-90">
          नीचे स्क्रॉल करके सादर निमंत्रण देखें
        </p>
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 border border-amber-400/60 text-amber-800 animate-bounce shadow-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
