import React from 'react';

export default function Team() {
  const members = [
    {
      id: 1,
      name: 'Professor Amit Kumar Tiwari',
      role: 'Faculty Coordinator',
      avatar: 'AT',
      avatarBg: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
      id: 2,
      name: 'Piyush Kushwaha',
      role: 'Co-founder',
      avatar: 'PK',
      avatarBg: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
      email: 'piyushkushwaha414@gmail.com',
      phone: '+91 94515 01321',
      phoneTel: '+919451501321'
    },
    {
      id: 3,
      name: 'Pawan Kumar Yadav',
      role: 'Co-founder',
      avatar: 'PY',
      avatarBg: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      email: 'sspawanky@gmail.com',
      phone: '+91 72008 06065',
      phoneTel: '+917200806065'
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
              <div className="member-header">
                <div className="avatar" style={{ background: member.avatarBg }}>
                  {member.avatar}
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  {member.email && (
                    <p className="member-role">
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </p>
                  )}
                  {member.phone && (
                    <p className="member-role">
                      <a href={`tel:${member.phoneTel}`}>{member.phone}</a>
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
