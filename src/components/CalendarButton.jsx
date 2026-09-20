import React, { useState } from 'react';
import { downloadICSFile, getGoogleCalendarUrl } from '../utils/calendar';

export default function CalendarButton() {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    downloadICSFile();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const handleGoogleCalendar = () => {
    window.open(getGoogleCalendarUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-4">
      {/* Download .ics file */}
      <button
        type="button"
        onClick={handleDownload}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-serif-deva font-bold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/40 cursor-pointer"
        aria-label="कैलेंडर में जोड़ें"
      >
        <svg className="w-5 h-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>📅 कैलेंडर में जोड़ें (.ics)</span>
      </button>

      {/* Direct Google Calendar Link */}
      <button
        type="button"
        onClick={handleGoogleCalendar}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white text-amber-900 border-2 border-amber-500 font-serif-deva font-bold text-sm sm:text-base shadow-sm hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="गूगल कैलेंडर में जोड़ें"
      >
        <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
        </svg>
        <span>Google Calendar में जोड़ें</span>
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#3D0713] text-amber-200 border border-amber-400 font-serif-deva text-sm shadow-2xl animate-fade-in flex items-center gap-2">
          <span>📅</span>
          <span>कैलेंडर फाइल (.ics) डाउनलोड हो गई है! 🙏</span>
        </div>
      )}
    </div>
  );
}
