import React from 'react';

export default function Partners() {
  const partners = [
    { type: 'Community', logo: 'Google GDG', name: 'GDG Prayagraj', isAws: false },
    { type: 'Cloud Partner', logo: 'aws', name: 'AWS Educate', isAws: true },
    { type: 'Open Source', logo: 'GitHub', name: 'Campus Program', isAws: false },
    { type: 'Networking', logo: 'CISCO', name: 'NetAcad SAREC', isAws: false },
    { type: 'Student Program', logo: 'Microsoft', name: 'Learn Ambassadors', isAws: false },
  ];

  return (
    <section className="partners-section reveal-on-scroll">
      <div className="container">
        <p className="partners-title">Proudly Supported By & Connected With</p>
        <div className="partners-carousel">
          {partners.map((partner, idx) => (
            <div key={idx} className={`partner-card ${partner.isAws ? 'aws' : ''}`}>
              <span className="partner-badge-top" style={partner.isAws ? { color: '#cbd5e1' } : {}}>
                {partner.type}
              </span>
              <div className="partner-logo-box">{partner.logo}</div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
