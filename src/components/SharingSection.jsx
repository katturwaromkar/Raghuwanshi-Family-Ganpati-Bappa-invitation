import React, { useState } from 'react';
import { getWhatsAppShareUrl } from '../data/invitation';
import { CornerDecorations, LotusIcon } from './Decorations';

export default function SharingSection() {
  const [copied, setCopied] = useState(false);
  const [customGuest, setCustomGuest] = useState('');
  const [showPersonalizeModal, setShowPersonalizeModal] = useState(false);

  const handleCopyLink = async () => {
    try {
      const url = typeof window !== 'undefined' ? window.location.href : 'https://raghuwanshi-ganesh-mahaprasad.vercel.app';
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    } catch (e) {
      console.warn('Clipboard copy failed:', e);
    }
  };

  const handleDirectShare = () => {
    window.open(getWhatsAppShareUrl(''), '_blank');
  };

  const handleCustomGuestShare = () => {
    window.open(getWhatsAppShareUrl(customGuest), '_blank');
    setShowPersonalizeModal(false);
    setCustomGuest('');
  };

  return (
    <section className="py-10 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="parchment-card-gold relative rounded-3xl p-6 sm:p-10 text-center overflow-hidden">
        <CornerDecorations />

        <div className="flex items-center justify-center gap-2 mb-2">
          <LotusIcon size={24} />
          <h2 className="font-rozha text-2xl sm:text-4xl text-[#3D0713] font-bold">
            💌 स्नेहपूर्वक आमंत्रण साझा करें
          </h2>
          <LotusIcon size={24} />
        </div>

        <p className="font-serif-deva text-base sm:text-lg text-amber-900 font-semibold max-w-xl mx-auto my-3">
          अपने प्रियजनों एवं परिवार के साथ यह सादर निमंत्रण साझा करें।
        </p>

        {/* Share Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* WhatsApp Direct Share */}
          <button
            type="button"
            onClick={handleDirectShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-rozha font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-green-300/40 cursor-pointer"
            aria-label="व्हाट्सऐप पर साझा करें"
          >
            <span className="text-xl">💚</span>
            <span>व्हाट्सऐप पर साझा करें</span>
          </button>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-rozha font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/40 cursor-pointer"
            aria-label="निमंत्रण लिंक कॉपी करें"
          >
            <span className="text-xl">📋</span>
            <span>{copied ? "✓ लिंक कॉपी हो गया!" : "निमंत्रण लिंक कॉपी करें"}</span>
          </button>
        </div>

        {/* Personalized Guest Invite Trigger */}
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setShowPersonalizeModal(true)}
            className="text-amber-800 hover:text-amber-950 font-serif-deva text-xs sm:text-sm font-bold underline cursor-pointer hover:scale-102 transition-transform"
          >
            ✨ पाहुने / मित्र के नाम के साथ व्यक्तिगत आमंत्रण भेजें
          </button>
        </div>
      </div>

      {/* Copy Link Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#3D0713] text-amber-200 border border-amber-400 font-serif-deva text-sm shadow-2xl animate-fade-in flex items-center gap-2">
          <span>🌺</span>
          <span>निमंत्रण लिंक सफलतापूर्वक कॉपी हो गया! 🙏</span>
        </div>
      )}

      {/* Personalized Name Modal */}
      {showPersonalizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="parchment-card-gold relative max-w-md w-full rounded-3xl p-6 sm:p-8 text-center border-2 border-amber-400 shadow-2xl">
            <CornerDecorations />
            
            <h3 className="font-rozha text-xl sm:text-2xl text-[#3D0713] font-bold mb-2">
              ॥ व्यक्तिगत आमंत्रण संदेश ॥
            </h3>
            
            <p className="font-serif-deva text-xs sm:text-sm text-amber-900 mb-4">
              जिनको भेजना है उनका नाम या परिवार का नाम दर्ज करें:
            </p>

            <input
              type="text"
              value={customGuest}
              onChange={(e) => setCustomGuest(e.target.value)}
              placeholder="उदा. श्री रमेश जी पाटिल / वर्मा परिवार"
              className="w-full px-4 py-3 rounded-xl border-2 border-amber-400 bg-white font-serif-deva text-base text-stone-900 focus:outline-none focus:border-amber-600 mb-4 text-center"
              autoFocus
            />

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleCustomGuestShare}
                className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-rozha font-bold text-sm sm:text-base shadow-md cursor-pointer"
              >
                💚 व्हाट्सऐप पर भेजें
              </button>
              <button
                type="button"
                onClick={() => setShowPersonalizeModal(false)}
                className="px-5 py-2.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-serif-deva text-sm cursor-pointer font-semibold"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
