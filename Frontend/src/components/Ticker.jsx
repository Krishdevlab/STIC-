import React from 'react';

export default function Ticker() {
  const clubs = [
    'STIC CODING', 'ROBOTECH & IOT', 'AI & MACHINE LEARNING',
    'CYBER SECURITY', 'WEB & APP DEV', 'OPEN SOURCE SAREC',
    'E-CELL & STARTUPS', 'UI/UX & MEDIA'
  ];

  const stacks = [
    'REACT & NEXT.JS', 'PYTHON & PYTORCH', 'RUST & GO',
    'DOCKER & KUBERNETES', 'ARDUINO & RASPBERRY PI',
    'FLUTTER & ANDROID', 'FIGMA & 3D BLENDER', 'FASTAPI & NODE'
  ];

  return (
    <section className="ticker-section" aria-label="Campus Tech Clubs Marquee">
      <div className="ticker-wrapper">
        {/* Dark Angled Ribbon */}
        <div className="ticker-ribbon ticker-ribbon-dark">
          <div className="ticker-track">
            {clubs.concat(clubs).map((club, idx) => (
              <span key={`club-${idx}`} className="ticker-item">
                {club} <span className="ticker-sparkle">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Light Angled Ribbon */}
        <div className="ticker-ribbon ticker-ribbon-light">
          <div className="ticker-track">
            {stacks.concat(stacks).map((tech, idx) => (
              <span key={`tech-${idx}`} className="ticker-item">
                {tech} <span className="ticker-sparkle">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
