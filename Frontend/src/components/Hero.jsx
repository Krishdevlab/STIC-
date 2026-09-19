import React, { useState, useEffect } from 'react';

export default function Hero() {
  const words = ['ASSUMING', 'PANICKING', 'CODING ALONE', 'HESITATING'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="top" className="hero-section reveal-on-scroll">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="pulse-dot"></span>
            <span>Official Tech Community • SAREC Mirzapur</span>
          </div>

          <h1 className="hero-title">
            <span className="word-stop">STOP</span>
            <div className="outline-rotator">
              <span
                key={words[currentWordIndex]}
                className="rotator-word active-slide"
              >
                {words[currentWordIndex]}
              </span>
            </div>
          </h1>

          <p className="hero-description">
            Before you spend 4 years on outdated syllabi and theoretical exams, talk to students who are actually building. Get real roadmaps on placements, open source, hackathons, and everything that actually matters.
          </p>

          <div className="hero-actions">
            <a href="#clubs" className="btn btn-primary">
              <span>Explore All Clubs</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="#team" className="btn btn-outline">
              <span>Browse Senior Mentors</span>
            </a>
          </div>

          <div className="hero-proof-bar">
            <div className="proof-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <span>500+ Active Builders</span>
            </div>

            <div className="proof-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>8+ Campus Clubs & Guilds</span>
            </div>
          </div>
        </div>

        {/* Floating Bento Grid */}
        <div className="hero-bento-grid">
          <div className="bento-card bento-card-ask">
            <div className="bento-header">
              <span className="bento-label">What Freshers Ask</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 14a2 2 0 0 0 2-2V8h-2"/>
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
                <path d="M8 14a2 2 0 0 0 2-2V8H8"/>
              </svg>
            </div>
            <p className="bento-quote">“What is the actual placement & internship reality?”</p>
            <p className="bento-desc">Ask the uncomfortable questions before you spend years in confusion.</p>
          </div>

          <div className="bento-card bento-card-cost">
            <div className="bento-header">
              <span className="bento-label">Opportunity Cost</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <p className="bento-number">4 Years</p>
            <p className="bento-desc">Too much valuable time to spend based on outdated slides and random opinions.</p>
          </div>

          <div className="bento-card bento-card-cta" onClick={() => { window.location.href = '#clubs'; }}>
            <div>
              <span className="cta-tag">Campus Blueprint</span>
              <p className="cta-headline">Find your club first. Ship your flagship project next.</p>
            </div>
            <div className="cta-circle-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
