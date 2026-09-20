import React, { useState, useEffect } from 'react';
import { triggerFlowerShower } from '../utils/confetti';
import { audioEngine } from '../utils/audioEngine';
import { invitationData } from '../data/invitation';

export default function FlowerAnimation() {
  const [toastMessage, setToastMessage] = useState(null);
  const [backgroundPetals, setBackgroundPetals] = useState([]);

  useEffect(() => {
    // Generate 12 ambient floating background petals
    const petals = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 5,
      emoji: ['🌸', '🌺', '🌼', '✨'][Math.floor(Math.random() * 4)],
      rotation: Math.random() * 360
    }));
    setBackgroundPetals(petals);
  }, []);

  const handleOfferFlowers = () => {
    triggerFlowerShower();
    audioEngine.playTempleBell();
    setToastMessage(invitationData.blessingToast);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <>
      {/* Ambient Floating Background Petals */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
        {backgroundPetals.map((petal) => (
          <div
            key={petal.id}
            className="absolute select-none opacity-40 float-slow"
            style={{
              left: `${petal.left}%`,
              top: '-5%',
              fontSize: `${petal.size}px`,
              animation: `floatPetal ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${petal.rotation}deg)`
            }}
          >
            {petal.emoji}
          </div>
        ))}
      </div>

      {/* Interactive Floating Flower Offer Button */}
      <div className="fixed bottom-6 left-5 z-40">
        <button
          type="button"
          onClick={handleOfferFlowers}
          className="group relative inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-maroon-950 font-serif-deva font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 cursor-pointer"
          aria-label="पुष्प अर्पित करें"
        >
          <span className="text-lg animate-bounce">🌺</span>
          <span>पुष्प अर्पित करें</span>
        </button>
      </div>

      {/* Devotional Toast Blessing */}
      {toastMessage && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#3D0713] text-amber-200 border border-amber-400 font-serif-deva text-sm sm:text-base font-bold shadow-2xl animate-fade-in flex items-center gap-2">
          <span>🌺</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* CSS Keyframes for Falling Petals */}
      <style>{`
        @keyframes floatPetal {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(40px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
