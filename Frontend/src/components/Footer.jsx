import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-college-identity">
              <img src="/assets/logos/sarec-college-seal.png" alt="SAREC College Seal" className="footer-college-seal" />
              <div className="footer-college-info">
                <h4>STIC — SAREC, Mirzapur</h4>
                <p className="footer-college-name">Samrat Ashok Rajkiya Engineering College, Mirzapur (SAREC)</p>
                <p className="footer-tagline">Code • Build • Innovate</p>
                <p className="footer-sub">Technology and Innovation Community</p>
              </div>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#94a3b8' }}>
              Contact: <a href="mailto:sticsarecmzp@gmail.com" style={{ color: '#38bdf8' }}>sticsarecmzp@gmail.com</a>
            </p>
          </div>

          <div className="footer-col">
            <h5>Explore Clubs</h5>
            <ul>
              <li><a href="#clubs">STIC Coding</a></li>
              <li><a href="#clubs">RoboTech & IoT</a></li>
              <li><a href="#clubs">AI/ML Syndicate</a></li>
              <li><a href="#clubs">Web & Mobile Dev</a></li>
              <li><a href="#clubs">Open Source SAREC</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#perks">Curated Perks</a></li>
              <li><a href="#events">Upcoming Events</a></li>
              <li><a href="#projects">Student Projects</a></li>
              <li><a href="#team">Senior Mentors</a></li>
              <li><a href="#join">Membership Form</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Socials & Code</h5>
            <ul>
              <li><a href="https://github.com/stic-sarec" target="_blank" rel="noopener noreferrer">GitHub (@stic-sarec)</a></li>
              <li><a href="https://www.instagram.com/sticsarecmzp" target="_blank" rel="noopener noreferrer" aria-label="STIC on Instagram">Instagram (@sticsarecmzp)</a></li>
              <li><a href="https://t.me/+0ejpCeyf8FRmYzNl" target="_blank" rel="noopener noreferrer">Telegram Community</a></li>
              <li><a href="https://www.linkedin.com/in/piyush-k-4302ba226/" target="_blank" rel="noopener noreferrer">LinkedIn Network</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 STIC — SAREC, Mirzapur. All rights reserved.</p>
          <p>Designed with ♥ by STIC Web Team • Powered by Google Apps Script</p>
        </div>
      </div>
    </footer>
  );
}
