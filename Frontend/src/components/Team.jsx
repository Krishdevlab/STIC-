import React from 'react';

export default function Team({ onOpenCliModal }) {
  const members = [
    {
      id: 1,
      name: 'Dileep Yadav',
      role: 'Faculty Coordinator',
      dept: 'Computer Science & Engineering',
      focus: 'Academic Mentorship, Institutional Support & Innovation',
      avatar: 'DY',
      avatarBg: 'linear-gradient(135deg, #10b981, #059669)',
      email: 'stic.sarecm@gmail.com'
    },
    {
      id: 2,
      name: 'Piyush Kushwaha',
      role: 'Overall Coordinator & Founder',
      dept: 'CSE SAREC Mirzapur',
      focus: 'Full-Stack Dev, Hackathons, Community Architecture',
      avatar: 'PK',
      avatarBg: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
      linkedin: 'https://www.linkedin.com/in/piyush-k-4302ba226/',
      github: 'https://github.com/stic-sarec'
    },
    {
      id: 3,
      name: 'Pawan Kumar Yadav',
      role: 'Coordinator & Founding Member',
      dept: 'CSE SAREC Mirzapur',
      focus: 'Systems Engineering, Open Source, Event Operations',
      avatar: 'PY',
      avatarBg: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      github: 'https://github.com/stic-sarec'
    },
    {
      id: 4,
      name: 'Vikas Gangwar',
      role: 'Competitive Programming Lead',
      dept: 'CSE SAREC Mirzapur',
      focus: 'Competitive Programming, Advanced Algorithms, Codeforces Div.2',
      avatar: 'VG',
      avatarBg: 'linear-gradient(135deg, #f59e0b, #d97706)'
    },
    {
      id: 5,
      name: 'Aditi Yadav',
      role: 'Design Lead & Social Media',
      dept: 'SAREC Mirzapur',
      focus: 'UI/UX Architecture, Visual Branding, Motion Design',
      avatar: 'AY',
      avatarBg: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      instagram: 'https://www.instagram.com/stic.sarecm/?hl=en'
    },
    {
      id: 6,
      name: 'Khushi',
      role: 'App Dev Lead',
      dept: 'CSE SAREC Mirzapur',
      focus: 'Android, Flutter, Mobile Systems & State Management',
      avatar: 'KH',
      avatarBg: 'linear-gradient(135deg, #14b8a6, #0d9488)'
    },
    {
      id: 7,
      name: 'Shital Kushwaha',
      role: 'DSA & CP Core',
      dept: 'SAREC Mirzapur',
      focus: 'Graph Algorithms, Dynamic Programming, Mentorship',
      avatar: 'SK',
      avatarBg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
    }
  ];

  return (
    <section id="team" className="team-section reveal-on-scroll">
      <div className="container">
        <div className="section-header-wrap">
          <div className="section-tag">Leadership</div>
          <h2 className="section-title">Meet Our Team & Mentors</h2>
          <p className="section-subtitle">
            The students and faculty driving technical culture at SAREC Mirzapur.
          </p>
        </div>

        <div className="team-grid">
          {members.map(member => (
            <article key={member.id} className="member-card">
              <div>
                <div className="member-header">
                  <div className="avatar" style={{ background: member.avatarBg }}>
                    {member.avatar}
                  </div>
                  <div>
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>

                <div className="member-links">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="member-link-icon" title="Email">✉</a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link-icon" title="LinkedIn">in</a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="member-link-icon" title="GitHub">git</a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="member-link-icon" title="Instagram">ig</a>
                  )}
                  {!member.email && !member.linkedin && !member.github && !member.instagram && (
                    <span className="member-link-icon" title="Core Lead">★</span>
                  )}
                </div>
              </div>

              <button 
                className="member-cli-btn"
                onClick={() => onOpenCliModal(member)}
              >
                <span className="cli-prompt">$</span>
                <span>view-profile</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
