import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      tag: 'Campus Portal',
      status: 'live',
      statusText: 'Live',
      title: 'SAREC Hub Portal',
      desc: 'Centralized platform for semester notes, previous year question papers, lab manuals, and campus announcements.',
      stack: 'React • Node.js • MongoDB',
      team: 'Team of 6'
    },
    {
      id: 2,
      tag: 'AI Recommender',
      status: 'beta',
      statusText: 'Beta',
      title: 'HostelMate',
      desc: 'Smart roommate and hostel allocation platform powered by matching algorithms and preference vectors.',
      stack: 'Python • FastAPI • Scikit',
      team: 'Team of 4'
    },
    {
      id: 3,
      tag: 'Developer Tool',
      status: 'oss',
      statusText: 'Open Source',
      title: 'SAREC CLI Toolkit',
      desc: 'Fast terminal-first CLI to fetch timetables, upcoming events, and transit schedules in milliseconds.',
      stack: 'TypeScript • Node.js CLI',
      team: 'Team of 3'
    }
  ];

  return (
    <section id="projects" className="projects-section reveal-on-scroll">
      <div className="container">
        <div className="section-header-wrap">
          <div className="section-tag">Proof Of Work</div>
          <h2 className="section-title">Built By Students. Shipped To The World.</h2>
          <p className="section-subtitle">
            Real systems and tools built by SAREC engineering students solving real problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(proj => (
            <article key={proj.id} className="project-card">
              <div>
                <div className="project-meta-row">
                  <span className="project-tag">{proj.tag}</span>
                  <span className={`status-pill ${proj.status}`}>{proj.statusText}</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
              <div className="project-details">
                <span>{proj.stack}</span>
                <strong>{proj.team}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
