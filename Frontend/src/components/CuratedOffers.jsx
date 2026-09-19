import React from 'react';

export default function CuratedOffers({ onOpenPerkModal }) {
  const perks = [
    {
      id: 'perk-1',
      variant: 'perk-amber',
      tag: '🏛 ADMISSIONS & EXAMS • CBSOT',
      title: 'Scholarship Form & Fee Waiver',
      info: 'Special merit-based scholarship forms for qualifying engineering entrance test holders. Up to 100% tuition subsidy.'
    },
    {
      id: 'perk-2',
      variant: 'perk-sky',
      tag: '🏛 ADMISSIONS • UGSOT',
      title: '₹900 off on upgrad OnTheGo uGNET',
      info: 'Exclusive direct admission coupon code for STIC students applying for specialized technology certificate & mentorship tracks.'
    },
    {
      id: 'perk-3',
      variant: 'perk-emerald',
      tag: '🏛 STELLAR ENTRANCE EXAM • STELLAR',
      title: '90% OFF on Stellar exam voucher',
      info: 'Avail 90% instant discount voucher on Stellar National Engineering Assessment test for SAREC applicants.'
    },
    {
      id: 'perk-4',
      variant: 'perk-violet',
      tag: '🏛 ZENITH AI POTENTIAL TEST • ZENITH AI',
      title: '₹500 Zenith Application Offer',
      info: 'Direct ₹500 fee credit for Zenith AI skill evaluation and personalized mentor report.'
    }
  ];

  return (
    <section id="perks" className="perks-section reveal-on-scroll">
      <div className="container">
        {/* Offers Layout */}
        <div className="perks-layout">
          <div className="perks-sidebar">
            <div className="section-tag">Curated Offers</div>
            <h2>Application offers worth knowing about.</h2>
            <p>
              A handpicked list of application discounts, cloud credits, and fee waivers. Check eligibility and terms on the provider's website.
            </p>

            <div className="perks-stat-row">
              <div className="perk-stat-box">
                <strong>5</strong>
                <span>Curated offers</span>
              </div>
              <a href="#team" className="link-mentors">
                <span>Browse mentors</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="perks-cards-grid">
            {perks.map(perk => (
              <div key={perk.id} className={`perk-card ${perk.variant}`}>
                <div>
                  <span className="perk-tag-badge">{perk.tag}</span>
                  <h3 className="perk-title">{perk.title}</h3>
                </div>
                <span 
                  className="perk-link" 
                  onClick={() => onOpenPerkModal(perk)}
                  role="button"
                  tabIndex={0}
                >
                  VIEW OFFER ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
