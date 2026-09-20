import React, { useState } from 'react';
import { BrassDiya, ToranHeader, HangingBell, CornerDecorations } from './Decorations';
import { audioEngine } from '../utils/audioEngine';
import { triggerFlowerShower } from '../utils/confetti';

export default function OpeningScreen({ onOpen, isOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    
    // Play divine temple bell & start background music
    audioEngine.play();
    
    // Trigger celebratory flower petals
    triggerFlowerShower();

    // Notify parent to reveal invitation
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  if (isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none transition-opacity duration-700 ${
        isOpening ? 'curtain-open pointer-events-none' : 'pointer-events-auto'
      }`}
      aria-label="निमंत्रण उद्घाटन पर्दा"
    >
      {/* Left Royal Curtain Panel */}
      <div className="curtain-panel-left absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#24030B] via-[#3D0713] to-[#4A0A16] border-r-2 sm:border-r-4 border-amber-400/80 shadow-2xl overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-amber-300 via-amber-400 to-transparent opacity-80" />
        <HangingBell className="absolute top-16 left-6 sm:left-14 opacity-70" isLeft={true} />
      </div>

      {/* Right Royal Curtain Panel */}
      <div className="curtain-panel-right absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#24030B] via-[#3D0713] to-[#4A0A16] border-l-2 sm:border-l-4 border-amber-400/80 shadow-2xl overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-amber-300 via-amber-400 to-transparent opacity-80" />
        <HangingBell className="absolute top-16 right-6 sm:right-14 opacity-70" isLeft={false} />
      </div>

      {/* Top Toran Overlay */}
      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <ToranHeader />
      </div>

      {/* Center Sacred Royal Invitation Seal */}
      <div className="curtain-seal-wrap relative z-50 max-w-md w-full mx-4 sm:mx-auto text-center px-4">
        <div className="relative bg-gradient-to-b from-[#4A0A16] via-[#380612] to-[#24030B] rounded-3xl p-6 sm:p-10 border-2 border-amber-400 shadow-[0_10px_60px_rgba(0,0,0,0.85)] overflow-hidden">
          <CornerDecorations />
          
          {/* Glowing Brass Diya */}
          <div className="flex justify-center mb-4">
            <BrassDiya size={54} />
          </div>

          {/* Devotional Shlok Heading */}
          <p className="font-yatra text-amber-300 font-bold text-lg sm:text-2xl tracking-wider mb-2 drop-shadow-md">
            🙏 श्री गणेशाय नमः 🙏
          </p>

          <h1 className="font-rozha text-2xl sm:text-4xl text-amber-100 font-bold tracking-normal leading-snug my-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            गणेश जी का महाप्रसाद
          </h1>

          <p className="font-serif-deva text-amber-200/90 text-sm sm:text-base font-semibold mb-6">
            🌺 सपरिवार सादर आमंत्रण 🌺
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-xs sm:text-sm text-amber-300 font-serif-deva font-bold">॥ शुभारंभ ॥</span>
            <span className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <p className="text-xs sm:text-sm text-amber-200/80 font-serif-deva mb-6">
            आयोजक: <span className="text-amber-100 font-bold">गोकुल जी रघुवंशी</span>
          </p>

          {/* Majestic Open Invitation Button */}
          <button
            type="button"
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-maroon-950 font-rozha font-bold text-lg sm:text-2xl shadow-[0_4px_30px_rgba(245,158,11,0.6)] hover:shadow-[0_6px_40px_rgba(245,158,11,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 border-2 border-white/80 cursor-pointer"
            aria-label="आमंत्रण खोलें"
          >
            <span className="text-xl">🌺</span>
            <span>आमंत्रण खोलें</span>
            <span className="text-xl">✨</span>
          </button>

          <p className="text-[11px] sm:text-xs text-amber-200/70 mt-4 font-sans-deva">
            (पवित्र आमंत्रण देखने व मधुर संगीत सुनने हेतु ऊपर क्लिक करें)
          </p>
        </div>
      </div>
    </div>
  );
}
