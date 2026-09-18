import React from 'react';

export default function Mission() {
  return (
    <section id="mission" className="mission-section reveal-on-scroll">
      <div className="container">
        <div className="mission-card-wrap">
          <div className="mission-content">
            <div className="mission-badge">Our Mission</div>
            <h2 className="mission-title">
              We aim to bridge the gap between academic knowledge and real-world employment.
            </h2>
            <p className="mission-desc">
              As a student-led engineering collective, STIC recognizes that the technology world is not made of isolated test scores; it is driven by active builder communities. We are dedicated to fostering a future where students learn real-world production stacks, collaborate across departments, and seamlessly transition their experience into fulfilling tech careers.
            </p>

            <div className="mission-pillars">
              <div className="pillar-box">
                <h4>🛠️ Project-First Culture</h4>
                <p>Learn by shipping real software—from campus utility bots to open-source contributions.</p>
              </div>
              <div className="pillar-box">
                <h4>🤝 Senior Mentorship</h4>
                <p>Senior peers and alumni help you debug roadblocks, choose stacks, and prep for interviews.</p>
              </div>
              <div className="pillar-box">
                <h4>🏆 Hackathon Team Hub</h4>
                <p>Form high-synergy teams for Smart India Hackathon (SIH), MLH, and national hackathons.</p>
              </div>
              <div className="pillar-box">
                <h4>💼 Direct Referral Rails</h4>
                <p>Get verified resume reviews, GitHub portfolio critiques, and referrals from our alumni network.</p>
              </div>
            </div>
          </div>

          <div className="mission-media">
            <img src="/image.png" alt="Students building technology together" className="mission-img" />
            <div className="mission-img-overlay">
              <strong>Hands-On Collaboration</strong>
              <span>SAREC Mirzapur Technical Lab & Innovation Center</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
