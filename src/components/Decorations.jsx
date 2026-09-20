import React from 'react';

/**
 * Traditional Marigold & Mango Leaves Toran
 */
export function ToranHeader() {
  return (
    <div className="w-full overflow-hidden select-none pointer-events-none z-20">
      <svg viewBox="0 0 1200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md" preserveAspectRatio="none">
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="60%" stopColor="#1B5E20" />
            <stop offset="100%" stopColor="#0E3812" />
          </linearGradient>
          <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="60%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </radialGradient>
          <radialGradient id="marigoldYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#EAB308" />
          </radialGradient>
          <linearGradient id="goldString" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B48222" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#B48222" />
          </linearGradient>
        </defs>

        {/* Hanging Festive Golden Cord */}
        <path d="M0 12 Q300 24 600 12 T1200 12" stroke="url(#goldString)" strokeWidth="3" strokeLinecap="round" />
        <path d="M0 14 Q300 26 600 14 T1200 14" stroke="#7A152E" strokeWidth="1.5" strokeDasharray="6 4" strokeLinecap="round" />

        {/* Repeated Floral Clusters */}
        {[30, 110, 190, 270, 350, 430, 510, 590, 670, 750, 830, 910, 990, 1070, 1150].map((x, idx) => (
          <g key={idx} transform={`translate(${x}, 12)`}>
            {/* Mango Leaves */}
            <path d="M0 0 C-10 18, -8 38, -2 50 C6 38, 4 18, 0 0 Z" fill="url(#leafGrad)" />
            <path d="M0 0 C-4 18, -6 38, 2 50 C10 38, 12 18, 0 0 Z" fill="url(#leafGrad)" />
            <path d="M0 2 C-8 22, -7 46, 0 60 C7 46, 8 22, 0 2 Z" fill="url(#leafGrad)" />

            {/* Marigold Flower */}
            <circle cx="0" cy="10" r="13" fill={idx % 2 === 0 ? "url(#marigoldOrange)" : "url(#marigoldYellow)"} />
            <circle cx="0" cy="10" r="9" fill={idx % 2 === 0 ? "#FB923C" : "#FDE047"} />
            <circle cx="0" cy="10" r="5" fill="#B45309" />
            <circle cx="0" cy="10" r="2" fill="#78350F" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * Hanging Brass Temple Bell
 */
export function HangingBell({ className = "", isLeft = true }) {
  return (
    <div className={`select-none pointer-events-none flex flex-col items-center ${isLeft ? 'bell-swing-left' : 'bell-swing-right'} ${className}`}>
      <svg width="42" height="100" viewBox="0 0 42 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bellBrass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="40%" stopColor="#E5A93C" />
            <stop offset="80%" stopColor="#B47B16" />
            <stop offset="100%" stopColor="#6C480A" />
          </linearGradient>
          <linearGradient id="bellRope" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B91C1C" />
            <stop offset="50%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#7A152E" />
          </linearGradient>
        </defs>

        {/* Sacred Red Thread / Rope */}
        <line x1="21" y1="0" x2="21" y2="40" stroke="url(#bellRope)" strokeWidth="3" />
        <circle cx="21" cy="40" r="4" fill="#D97706" />

        {/* Bell Body */}
        <path d="M12 45 C12 40, 30 40, 30 45 C30 55, 38 65, 40 76 L2 76 C4 65, 12 55, 12 45 Z" fill="url(#bellBrass)" stroke="#8C530A" strokeWidth="1" />
        <ellipse cx="21" cy="76" rx="19" ry="5" fill="#8C530A" />
        <ellipse cx="21" cy="76" rx="17" ry="3.5" fill="url(#bellBrass)" />

        {/* Bell Clapper / Striker */}
        <circle cx="21" cy="85" r="4.5" fill="#6C480A" />
        <line x1="21" y1="76" x2="21" y2="85" stroke="#451A03" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

/**
 * Traditional Brass Diya with Animated Glowing Flame
 */
export function BrassDiya({ size = 48, className = "" }) {
  return (
    <div className={`inline-flex flex-col items-center justify-center relative select-none ${className}`} style={{ width: size, height: size * 0.9 }}>
      {/* Diya Flame */}
      <div className="absolute top-0 flex flex-col items-center diya-flame z-10">
        <div className="w-3.5 h-6 bg-gradient-to-t from-orange-600 via-amber-300 to-yellow-100 rounded-full blur-[0.4px] shadow-[0_0_16px_#F59E0B]" />
        <div className="w-1.5 h-3 -mt-3 bg-white rounded-full opacity-90" />
      </div>

      {/* Brass Lamp Base */}
      <svg viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mt-4">
        <defs>
          <linearGradient id="diyaBrass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>
        <path d="M8 8 C14 26, 50 26, 56 8 C52 14, 46 22, 32 23 C18 22, 12 14, 8 8 Z" fill="url(#diyaBrass)" stroke="#78350F" strokeWidth="1.2" />
        <ellipse cx="32" cy="8" rx="24" ry="4.5" fill="#B45309" stroke="#78350F" strokeWidth="1" />
        <ellipse cx="32" cy="8" rx="19" ry="2.8" fill="#7A152E" opacity="0.85" />
        <path d="M27 23 L25 32 L39 32 L37 23 Z" fill="url(#diyaBrass)" stroke="#78350F" strokeWidth="1" />
        <ellipse cx="32" cy="32" rx="14" ry="3" fill="#B45309" stroke="#78350F" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * Sacred Lotus Flower Motif
 */
export function LotusIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 6 C21 16, 21 28, 24 38 C27 28, 27 16, 24 6 Z" fill="#F43F5E" />
      <path d="M24 14 C17 20, 12 28, 14 38 C20 34, 23 26, 24 14 Z" fill="#FB7185" />
      <path d="M24 14 C31 20, 36 28, 34 38 C28 34, 25 26, 24 14 Z" fill="#FB7185" />
      <path d="M24 22 C14 26, 6 32, 6 39 C14 40, 21 34, 24 22 Z" fill="#FDA4AF" />
      <path d="M24 22 C34 26, 42 32, 42 39 C34 40, 27 34, 24 22 Z" fill="#FDA4AF" />
      <ellipse cx="24" cy="40" rx="10" ry="3" fill="#D97706" />
    </svg>
  );
}

/**
 * Decorative Floral Divider with Gold & Ruby Highlights
 */
export function DecorativeDivider({ text = "", className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 select-none ${className}`}>
      <div className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-amber-400 to-amber-600 rounded-full" />
      <div className="flex items-center gap-1.5 text-amber-600">
        <span className="text-xs">❖</span>
        <LotusIcon size={20} />
        {text ? <span className="font-serif-deva font-bold text-sm text-amber-800 px-1">{text}</span> : null}
        <span className="text-xs">❖</span>
      </div>
      <div className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-amber-400 to-amber-600 rounded-full" />
    </div>
  );
}

/**
 * Traditional Royal Corner Filigree Ornaments
 */
export function CornerDecorations() {
  return (
    <>
      <div className="corner-filigree corner-tl text-amber-500">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2 H14 C14 8, 8 14, 2 14 V2 Z" opacity="0.35" />
          <path d="M2 2 V22 H4 V4 H22 V2 H2 Z" />
          <circle cx="8" cy="8" r="2.5" />
        </svg>
      </div>
      <div className="corner-filigree corner-tr text-amber-500">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2 H14 C14 8, 8 14, 2 14 V2 Z" opacity="0.35" />
          <path d="M2 2 V22 H4 V4 H22 V2 H2 Z" />
          <circle cx="8" cy="8" r="2.5" />
        </svg>
      </div>
      <div className="corner-filigree corner-bl text-amber-500">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2 H14 C14 8, 8 14, 2 14 V2 Z" opacity="0.35" />
          <path d="M2 2 V22 H4 V4 H22 V2 H2 Z" />
          <circle cx="8" cy="8" r="2.5" />
        </svg>
      </div>
      <div className="corner-filigree corner-br text-amber-500">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2 H14 C14 8, 8 14, 2 14 V2 Z" opacity="0.35" />
          <path d="M2 2 V22 H4 V4 H22 V2 H2 Z" />
          <circle cx="8" cy="8" r="2.5" />
        </svg>
      </div>
    </>
  );
}
