import React, { useState, useEffect } from 'react';
import { audioEngine } from '../utils/audioEngine';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    audioEngine.toggle();
  };

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <button
        type="button"
        onClick={handleToggle}
        className="group relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-amber-400 bg-[#FFFDF8] text-[#3D0713] hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label={isPlaying ? "संगीत बंद करें" : "संगीत चालू करें"}
      >
        <span className="text-xl sm:text-2xl select-none" role="img" aria-hidden="true">
          {isPlaying ? '🔊' : '🔇'}
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-sans-deva font-bold text-amber-700 uppercase tracking-wider">
            भक्ति संगीत
          </span>
          <span className="text-xs font-serif-deva font-bold">
            {isPlaying ? 'संगीत चालू' : 'संगीत सुनें'}
          </span>
        </div>
      </button>
    </div>
  );
}
