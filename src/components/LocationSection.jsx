import React from 'react';
import { invitationData } from '../data/invitation';
import { CornerDecorations } from './Decorations';

export default function LocationSection() {
  return (
    <section id="location-section" className="py-10 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="font-yatra text-amber-800 text-sm sm:text-base tracking-wider font-bold">
          ॥ पावन स्थल ॥
        </span>
        <h2 className="font-rozha text-2xl sm:text-4xl text-[#4A0A16] font-bold mt-1">
          📍 आयोजन स्थल
        </h2>
        <p className="font-serif-deva text-amber-800/90 text-sm sm:text-base font-semibold mt-1">
          गणेश जी के दर्शन एवं महाप्रसाद हेतु सादर आमंत्रित
        </p>
      </div>

      <div className="parchment-card relative rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl overflow-hidden">
        <CornerDecorations />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Address Details */}
          <div className="md:col-span-5 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-serif-deva font-bold text-xs sm:text-sm">
              <span>📍 आयोजन स्थल</span>
            </div>

            <h3 className="font-rozha text-2xl sm:text-3xl text-[#3D0713] font-bold">
              बापू नगर
            </h3>

            <p className="font-serif-deva text-lg sm:text-xl text-amber-950 font-bold leading-relaxed">
              {invitationData.locationText}
            </p>

            <p className="font-sans-deva text-sm text-amber-800">
              आपातापा रोड, अकोला - ४४४००४ (महाराष्ट्र)
            </p>

            {/* Premium Google Maps Action Button */}
            <div className="pt-2">
              <a
                href={invitationData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-rozha font-bold text-base sm:text-lg shadow-[0_4px_20px_rgba(220,38,38,0.35)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-200/50 cursor-pointer text-decoration-none"
                aria-label="गूगल मैप्स पर मार्ग देखें"
              >
                <svg className="w-5 h-5 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <span>📍 मार्ग देखें (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Frame */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-md h-64 sm:h-80 relative bg-amber-50">
            <iframe
              title="आयोजन स्थल - बापू नगर, आपातापा रोड, अकोला"
              src={invitationData.embedMapUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-serif-deva font-bold text-amber-900 border border-amber-300 pointer-events-none shadow-xs">
              अकोला (Akola)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
