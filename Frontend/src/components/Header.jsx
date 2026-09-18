import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Read active theme from data-theme on <html>
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {}
    setTheme(nextTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="site-header-wrapper">
        <div className="nav-pill">
          <a href="#top" className="site-brand">
            <div className="brand-icon">
              <img src="/assets/logos/stic-logo-light.png" alt="STIC Logo" className="logo-light" />
              <img src="/assets/logos/stic-logo-dark.png" alt="STIC Logo" className="logo-dark" />
            </div>
            <div className="brand-text">
              <span className="brand-title">STIC <span>SAREC</span></span>
              <span className="brand-sub">SAREC, Mirzapur — Technology and Innovation Community</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#clubs">Clubs</a>
            <a href="#perks">Perks & Offers</a>
            <a href="#problem">Why Join</a>
            <a href="#mission">Mission</a>
            <a href="#events">Events</a>
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
          </nav>

          <div className="nav-actions">
            <a href="#clubs" className="btn-portal">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>All Clubs</span>
            </a>

            {/* Dark / Light Mode Accessible Toggle */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <svg className="theme-icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg className="theme-icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>

            <a href="#join" className="nav-cta-btn">
              <span>Join Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>

            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#clubs" className="mobile-nav-item" onClick={closeMobileMenu}>Explore Clubs</a>
        <a href="#perks" className="mobile-nav-item" onClick={closeMobileMenu}>Curated Offers</a>
        <a href="#problem" className="mobile-nav-item" onClick={closeMobileMenu}>Why Students Get Stuck</a>
        <a href="#mission" className="mobile-nav-item" onClick={closeMobileMenu}>Our Mission</a>
        <a href="#events" className="mobile-nav-item" onClick={closeMobileMenu}>Flagship Events</a>
        <a href="#projects" className="mobile-nav-item" onClick={closeMobileMenu}>Featured Projects</a>
        <a href="#team" className="mobile-nav-item" onClick={closeMobileMenu}>Core Team</a>
        <a href="#join" className="mobile-nav-item btn btn-primary" onClick={closeMobileMenu}>Join STIC Community</a>
      </div>
    </>
  );
}
