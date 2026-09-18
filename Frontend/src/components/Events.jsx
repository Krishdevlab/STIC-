import React, { useState } from 'react';

export default function Events() {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      category: 'workshop',
      badge: 'Flagship Upcoming',
      isUpcoming: true,
      date: 'Upcoming • SAREC Computer Lab',
      dateIso: '2026-10-01',
      title: 'Season of Code: Project Bootcamp',
      desc: '8-week intensive mentor-guided program where students build production-grade web & AI projects from scratch.'
    },
    {
      id: 2,
      category: 'hackathon',
      badge: 'Completed',
      isUpcoming: false,
      date: 'September 2025 • SAREC Samiti Bhawan',
      dateIso: '2025-09-15',
      title: 'SIH Internal Hackathon Round',
      desc: 'Internal selection round for Smart India Hackathon 2025 with live project jury and mentor evaluations.'
    },
    {
      id: 3,
      category: 'seminar',
      badge: 'Completed',
      isUpcoming: false,
      date: 'April 2026 • Workshop Hall',
      dateIso: '2026-04-04',
      title: 'GDG Prayagraj Speaker Session',
      desc: 'Interactive meet and greet with Google Developer Group leaders, cloud architectures, and open Q&A.'
    }
  ];

  const filteredEvents = filter === 'all'
    ? events
    : events.filter(e => e.category === filter);

  const handleDownloadIcs = (event) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//STIC SAREC//Events Calendar//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.desc}`,
      `LOCATION:SAREC Mirzapur`,
      `DTSTART:${event.dateIso.replace(/-/g, '')}T100000Z`,
      `DTEND:${event.dateIso.replace(/-/g, '')}T160000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" className="events-section reveal-on-scroll">
      <div className="container">
        <div className="events-filter-bar">
          <div className="section-header-wrap" style={{ marginBottom: 0 }}>
            <div className="section-tag">Campus Happenings</div>
            <h2 className="section-title">Events & Bootcamps</h2>
            <p className="section-subtitle">
              Join us for hands-on hackathons, technical workshops, and speaker sessions throughout the year.
            </p>
          </div>

          <div className="club-filter-chips">
            <button 
              className={`chip-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            <button 
              className={`chip-btn ${filter === 'hackathon' ? 'active' : ''}`}
              onClick={() => setFilter('hackathon')}
            >
              Hackathons
            </button>
            <button 
              className={`chip-btn ${filter === 'workshop' ? 'active' : ''}`}
              onClick={() => setFilter('workshop')}
            >
              Workshops
            </button>
            <button 
              className={`chip-btn ${filter === 'seminar' ? 'active' : ''}`}
              onClick={() => setFilter('seminar')}
            >
              Seminars
            </button>
          </div>
        </div>

        <div className="event-cards-grid">
          {filteredEvents.map(item => (
            <article key={item.id} className="event-card">
              <div>
                <span className={`event-badge ${item.isUpcoming ? 'upcoming' : 'past'}`}>
                  {item.badge}
                </span>
                <div className="event-date-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                  <span>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="event-btn-row">
                <button 
                  className="btn btn-outline btn-small"
                  onClick={() => handleDownloadIcs(item)}
                >
                  Add to Calendar
                </button>
                {item.isUpcoming ? (
                  <a href="#join" className="btn btn-primary btn-small">Register Now</a>
                ) : (
                  <a href="#projects" className="btn btn-primary btn-small">View Highlights</a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline-card">
          <h3>Annual Roadmap & Milestones</h3>
          <div className="timeline-items-grid">
            <div className="timeline-step green">
              <div className="step-title">Freshers Kickoff</div>
              <div className="step-meta">Orientation, track allocations & lab tours</div>
            </div>
            <div className="timeline-step blue">
              <div className="step-title">Season of Code</div>
              <div className="step-meta">8-week flagship mentor-guided project sprints</div>
            </div>
            <div className="timeline-step violet">
              <div className="step-title">DSA & CP Marathon</div>
              <div className="step-meta">Daily problem sets & weekly contest leaderboards</div>
            </div>
            <div className="timeline-step amber">
              <div className="step-title">SIH & Tech Fest</div>
              <div className="step-meta">National hackathon prep & campus hardware exhibitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
