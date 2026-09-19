import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import ProblemGrid from './components/ProblemGrid';
import ClubsHub from './components/ClubsHub';
import CuratedOffers from './components/CuratedOffers';
import Mission from './components/Mission';
import Partners from './components/Partners';
import Events from './components/Events';
import Projects from './components/Projects';
import Team from './components/Team';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { PerkModal, CliModal } from './components/Modals';

export default function App() {
  const [activePerkModal, setActivePerkModal] = useState(null);
  const [activeCliModal, setActiveCliModal] = useState(null);
  const [selectedClubForForm, setSelectedClubForForm] = useState('');

  useEffect(() => {
    // Scroll reveal fade-up using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

      revealElements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealElements.forEach(el => el.classList.add('is-revealed'));
    }
  }, []);

  const handleSelectClub = (clubName) => {
    setSelectedClubForForm(clubName);
  };

  const handleOpenPerk = (perk) => {
    setActivePerkModal(perk);
  };

  const handleOpenCli = (member) => {
    setActiveCliModal(member);
  };

  return (
    <div className="app-root">
      {/* Ambient Mesh Glows */}
      <div className="mesh-bg">
        <div className="mesh-glow-1"></div>
        <div className="mesh-glow-2"></div>
        <div className="mesh-grid"></div>
      </div>

      {/* Floating Pill Navigation */}
      <Header />

      <main>
        {/* Campus Connect Style Hero Section */}
        <Hero />

        {/* Dual Angled Continuous Marquee Ticker */}
        <Ticker />

        {/* Why Students Get Stuck - Problem Bento Grid */}
        <ProblemGrid />

        {/* Different Clubs & Communities Hub */}
        <ClubsHub onJoinTrack={handleSelectClub} />

        {/* Curated Offers & Student Perks */}
        <CuratedOffers onOpenPerkModal={handleOpenPerk} />

        {/* The Community Tech Inspired Mission & Core Pillars */}
        <Mission />

        {/* Industry Partners & Supporting Organizations */}
        <Partners />

        {/* Upcoming Flagship Events & Milestones */}
        <Events />

        {/* Featured Student Projects Showcase */}
        <Projects />

        {/* Core Team & Mentors with Interactive CLI */}
        <Team onOpenCliModal={handleOpenCli} />

        {/* Multi-Club Registration Form (Google Apps Script) */}
        <JoinForm selectedClub={selectedClubForForm} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp and Analytics / Cookie Toast */}
      <FloatingWidgets />

      {/* Interactive Modal Dialogs */}
      <PerkModal perk={activePerkModal} onClose={() => setActivePerkModal(null)} />
      <CliModal member={activeCliModal} onClose={() => setActiveCliModal(null)} />
    </div>
  );
}
