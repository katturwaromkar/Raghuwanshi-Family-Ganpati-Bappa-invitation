import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import CalendarButton from './components/CalendarButton';
import LocationSection from './components/LocationSection';
import SharingSection from './components/SharingSection';
import PrayerSection from './components/PrayerSection';
import OrganizerSection from './components/OrganizerSection';
import Footer from './components/Footer';
import FlowerAnimation from './components/FlowerAnimation';
import SoundToggle from './components/SoundToggle';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#2C140E] antialiased selection:bg-amber-200 selection:text-amber-950 font-sans-deva">
      {/* 1. Opening Curtain Screen */}
      <OpeningScreen onOpen={() => setIsOpened(true)} isOpen={isOpened} />

      {/* Main Invitation Web App (revealed after opening) */}
      <div className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-95'}`}>
        {/* Top Minimal Navigation */}
        <Navigation />

        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Sacred Invitation Card Section */}
        <InvitationSection />

        {/* 4. Event Details Grid (Date, Time, Venue) */}
        <EventDetails />

        {/* 5. Live IST Countdown */}
        <Countdown />

        {/* 6. Calendar Integration Button */}
        <div className="px-4 text-center">
          <CalendarButton />
        </div>

        {/* 7. Location & Google Maps */}
        <LocationSection />

        {/* 8. WhatsApp Sharing & Copy Link */}
        <SharingSection />

        {/* 9. Sacred Prayer & Shloka Section */}
        <PrayerSection />

        {/* 10. Organizer Section */}
        <OrganizerSection />

        {/* 11. Devotional Footer */}
        <Footer />

        {/* 12. Floating Interactive Flower Offering & Background Petals */}
        <FlowerAnimation />

        {/* 13. Persistent Floating Sound Toggle */}
        <SoundToggle />
      </div>
    </div>
  );
}
