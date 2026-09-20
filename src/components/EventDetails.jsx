import React from 'react';
import { invitationData } from '../data/invitation';
import { CornerDecorations } from './Decorations';

export default function EventDetails() {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      tag: "📅 दिनांक",
      title: "सोमवार",
      detail: "21 सितंबर 2026",
      subDetail: "भाद्रपद शुक्ल पक्ष"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tag: "🕖 समय",
      title: "शाम 7:00 बजे",
      detail: "शाम 7 बजे से",
      subDetail: "आपके आगमन तक"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tag: "📍 स्थान",
      title: "बापू नगर",
      detail: "आपातापा रोड",
      subDetail: "अकोला (महाराष्ट्र)"
    }
  ];

  return (
    <section className="py-10 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="font-yatra text-amber-800 text-sm sm:text-base tracking-wider font-bold">
          ॥ कार्यक्रम विवरण ॥
        </span>
        <h2 className="font-rozha text-2xl sm:text-4xl text-[#4A0A16] font-bold mt-1">
          महाप्रसाद का पावन समय व स्थल
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="parchment-card relative rounded-2xl p-6 text-center border-2 border-amber-300/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
          >
            <CornerDecorations />
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-serif-deva font-bold text-xs sm:text-sm mb-4">
              <span>{card.tag}</span>
            </div>

            {/* Icon Container with glowing gold circle */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-200 via-yellow-100 to-amber-300 flex items-center justify-center border border-amber-400/60 shadow-sm group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>

            {/* Card Content */}
            <h3 className="font-rozha text-xl sm:text-2xl text-[#3D0713] font-bold mb-1">
              {card.title}
            </h3>
            <p className="font-serif-deva text-base sm:text-lg text-amber-950 font-bold">
              {card.detail}
            </p>
            <p className="font-sans-deva text-xs sm:text-sm text-amber-800/80 mt-1 font-medium">
              {card.subDetail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
