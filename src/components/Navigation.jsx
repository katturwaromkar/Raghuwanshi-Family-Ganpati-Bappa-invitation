import React from 'react';

export default function Navigation() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#3D0713]/90 backdrop-blur-md border-b border-amber-400/40 py-2.5 px-3 shadow-md select-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        {/* Sacred Small Brand Icon */}
        <div className="flex items-center gap-1.5 text-amber-300 font-yatra font-bold text-sm shrink-0">
          <span>🌺</span>
          <span>श्री गणेश महाप्रसाद</span>
        </div>

        {/* Navigation Section Links */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-2.5 py-1 rounded-full text-xs font-serif-deva font-bold text-amber-200 hover:text-white hover:bg-amber-800/60 transition-colors cursor-pointer"
          >
            मुख्य पृष्ठ
          </button>
          <button
            type="button"
            onClick={() => scrollTo('invitation-card')}
            className="px-2.5 py-1 rounded-full text-xs font-serif-deva font-bold text-amber-200 hover:text-white hover:bg-amber-800/60 transition-colors cursor-pointer"
          >
            आमंत्रण
          </button>
          <button
            type="button"
            onClick={() => scrollTo('location-section')}
            className="px-2.5 py-1 rounded-full text-xs font-serif-deva font-bold text-amber-200 hover:text-white hover:bg-amber-800/60 transition-colors cursor-pointer"
          >
            स्थान
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact-section')}
            className="px-2.5 py-1 rounded-full text-xs font-serif-deva font-bold text-amber-200 hover:text-white hover:bg-amber-800/60 transition-colors cursor-pointer"
          >
            संपर्क
          </button>
        </div>
      </div>
    </nav>
  );
}
