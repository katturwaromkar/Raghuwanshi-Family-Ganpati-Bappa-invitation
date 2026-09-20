import React, { useState, useEffect } from 'react';
import { invitationData } from '../data/invitation';
import { LotusIcon } from './Decorations';

// Converts English digits to Devanagari digits for traditional authentic look
const toDevanagariDigits = (num) => {
  const deva = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return num
    .toString()
    .padStart(2, '0')
    .split('')
    .map((char) => (char >= '0' && char <= '9' ? deva[parseInt(char, 10)] : char))
    .join('');
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    // 21 September 2026, 19:00:00 IST (+05:30)
    const targetTimestamp = new Date(invitationData.targetTimestampISO).getTime();

    const calculateTime = () => {
      const now = Date.now();
      const difference = targetTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-[#3D0713] via-[#2E050E] to-[#1F0309] rounded-3xl p-6 sm:p-10 border-2 border-amber-400 shadow-2xl text-center text-amber-100 relative overflow-hidden">
        {/* Background Mandala Watermark */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <LotusIcon size={24} />
          <p className="font-yatra text-amber-300 text-base sm:text-xl font-bold tracking-wide">
            ॥ महाप्रसाद के शुभ समय की उल्टी गिनती ॥
          </p>
          <LotusIcon size={24} />
        </div>

        {timeLeft.isExpired ? (
          <div className="my-6 py-4 px-6 rounded-2xl bg-amber-500/20 border border-amber-400/60 max-w-lg mx-auto animate-pulse">
            <p className="font-serif-deva text-xl sm:text-2xl text-amber-200 font-bold">
              महाप्रसाद का शुभ समय प्रारंभ हो चुका है। 🙏
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 my-6 max-w-2xl mx-auto">
            {/* Days */}
            <div className="bg-gradient-to-b from-amber-950/60 to-black/60 rounded-2xl p-3 sm:p-5 border border-amber-400/50 shadow-inner flex flex-col items-center justify-center">
              <span className="font-rozha text-2xl sm:text-4xl md:text-5xl text-amber-300 font-bold leading-none mb-1">
                {toDevanagariDigits(timeLeft.days)}
              </span>
              <span className="font-serif-deva text-xs sm:text-sm text-amber-200 font-semibold">
                दिन
              </span>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-b from-amber-950/60 to-black/60 rounded-2xl p-3 sm:p-5 border border-amber-400/50 shadow-inner flex flex-col items-center justify-center">
              <span className="font-rozha text-2xl sm:text-4xl md:text-5xl text-amber-300 font-bold leading-none mb-1">
                {toDevanagariDigits(timeLeft.hours)}
              </span>
              <span className="font-serif-deva text-xs sm:text-sm text-amber-200 font-semibold">
                घंटे
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-gradient-to-b from-amber-950/60 to-black/60 rounded-2xl p-3 sm:p-5 border border-amber-400/50 shadow-inner flex flex-col items-center justify-center">
              <span className="font-rozha text-2xl sm:text-4xl md:text-5xl text-amber-300 font-bold leading-none mb-1">
                {toDevanagariDigits(timeLeft.minutes)}
              </span>
              <span className="font-serif-deva text-xs sm:text-sm text-amber-200 font-semibold">
                मिनट
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-gradient-to-b from-amber-950/60 to-black/60 rounded-2xl p-3 sm:p-5 border border-amber-400/50 shadow-inner flex flex-col items-center justify-center">
              <span className="font-rozha text-2xl sm:text-4xl md:text-5xl text-amber-300 font-bold leading-none mb-1">
                {toDevanagariDigits(timeLeft.seconds)}
              </span>
              <span className="font-serif-deva text-xs sm:text-sm text-amber-200 font-semibold">
                सेकंड
              </span>
            </div>
          </div>
        )}

        <p className="text-xs sm:text-sm text-amber-200/70 font-sans-deva mt-2">
          सोमवार, 21 सितंबर 2026 • शाम 7:00 बजे IST (भारतीय मानक समय)
        </p>
      </div>
    </section>
  );
}
