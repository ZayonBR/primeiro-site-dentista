import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import PhilosophyBanner from '../components/PhilosophyBanner';

export default function HomePage() {
  return (
    <>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden">
        <HeroSection />
        <Features />
      </div>
      <PhilosophyBanner />
    </>
  );
}
