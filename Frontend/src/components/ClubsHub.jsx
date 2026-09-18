import React, { useState } from 'react';

export default function ClubsHub({ onJoinTrack }) {
  const [filter, setFilter] = useState('all');

  const clubs = [
    {
      id: 1,
      name: 'STIC Coding & CP Guild',
      category: 'dev',
      badge: 'Flagship Club',
      badgeStyle: { background: '#e0f2fe', color: '#0369a1' },
      icon: '💻',
      iconStyle: { background: '#e0f2fe', color: '#0284c7' },
      desc: 'Competitive Programming, Data Structures, Algorithms, LeetCode sprints, and hackathon problem solving.',
      members: '200+',
      time: 'Sat 4:00 PM',
      stack: ['C++', 'Java', 'DSA', 'Codeforces'],
      prefill: 'STIC Coding Guild'
    },
    {
      id: 2,
      name: 'RoboTech & Automation',
      category: 'hardware',
      badge: 'Robotics & IoT',
      badgeStyle: { background: '#fef3c7', color: '#b45309' },
      icon: '🤖',
      iconStyle: { background: '#fef3c7', color: '#b45309' },
      desc: 'Embedded systems, Arduino, Raspberry Pi, drone architecture, PCB design, and national robotics contests.',
      members: '85+',
      time: 'Sun 11:00 AM',
      stack: ['Arduino', 'Raspberry Pi', 'Sensors', 'ROS'],
      prefill: 'RoboTech & Automation'
    },
    {
      id: 3,
      name: 'AI/ML Syndicate',
      category: 'ai',
      badge: 'AI & ML',
      badgeStyle: { background: '#ede9fe', color: '#6d28d9' },
      icon: '🧠',
      iconStyle: { background: '#ede9fe', color: '#7c3aed' },
      desc: 'Machine Learning models, Computer Vision, Generative AI, LLM agents, NLP, and Kaggle team competitions.',
      members: '110+',
      time: 'Fri 5:30 PM',
      stack: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI'],
      prefill: 'AI/ML Syndicate'
    },
    {
      id: 4,
      name: 'Web & Mobile Dev Guild',
      category: 'dev',
      badge: 'Full-Stack',
      badgeStyle: { background: '#dcfce7', color: '#15803d' },
      icon: '⚡',
      iconStyle: { background: '#dcfce7', color: '#16a34a' },
      desc: 'Modern full-stack web applications, React, Next.js, Node backends, Flutter mobile apps, and cloud deployment.',
      members: '140+',
      time: 'Thu 6:00 PM',
      stack: ['Next.js', 'TypeScript', 'Node', 'Flutter'],
      prefill: 'Web & Mobile Guild'
    },
    {
      id: 5,
      name: 'CyberSec & Ethical Hacking',
      category: 'dev',
      badge: 'CyberSec',
      badgeStyle: { background: '#ffe4e6', color: '#be123c' },
      icon: '🛡️',
      iconStyle: { background: '#ffe4e6', color: '#e11d48' },
      desc: 'Capture The Flag (CTF) challenges, network security, penetration testing, cryptography, and bug bounty hunting.',
      members: '65+',
      time: 'Wed 5:00 PM',
      stack: ['Linux', 'Wireshark', 'BurpSuite', 'CTFs'],
      prefill: 'CyberSec Guild'
    },
    {
      id: 6,
      name: 'Open Source SAREC',
      category: 'dev',
      badge: 'Open Source',
      badgeStyle: { background: '#f1f5f9', color: '#475569' },
      icon: '🐧',
      iconStyle: { background: '#f1f5f9', color: '#334155' },
      desc: 'Google Summer of Code (GSoC) mentorship, Hacktoberfest, Git mastery, and contributing to top open-source projects.',
      members: '90+',
      time: 'Tue 6:00 PM',
      stack: ['Git', 'GitHub', 'GSoC', 'Linux'],
      prefill: 'Open Source SAREC'
    },
    {
      id: 7,
      name: 'Pixels UI/UX & Media',
      category: 'creative',
      badge: 'Design',
      badgeStyle: { background: '#ffedd5', color: '#c2410c' },
      icon: '🎨',
      iconStyle: { background: '#ffedd5', color: '#ea580c' },
      desc: 'User interface design, Figma wireframing, design systems, 3D graphics, motion animations, and branding.',
      members: '70+',
      time: 'Mon 5:30 PM',
      stack: ['Figma', 'Blender', 'UI/UX', 'Design Systems'],
      prefill: 'Pixels UI/UX Guild'
    },
    {
      id: 8,
      name: 'E-Cell & Innovation',
      category: 'creative',
      badge: 'Startups',
      badgeStyle: { background: '#fdf4ff', color: '#a21caf' },
      icon: '🚀',
      iconStyle: { background: '#fdf4ff', color: '#c026d3' },
      desc: 'Student entrepreneurship, pitch decks, startup ideation, product management, and seed grant applications.',
      members: '80+',
      time: 'Sat 6:30 PM',
      stack: ['Pitching', 'Product', 'Incubators', 'Fundraising'],
      prefill: 'E-Cell & Innovation'
    }
  ];

  const filteredClubs = filter === 'all' 
    ? clubs 
    : clubs.filter(c => c.category === filter);

  const handleJoinClick = (prefill) => {
    if (onJoinTrack) {
      onJoinTrack(prefill);
    }
    const targetElement = document.getElementById('join');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="clubs" className="clubs-section reveal-on-scroll">
      <div className="container">
        <div className="clubs-header-row">
          <div className="section-header-wrap" style={{ marginBottom: 0 }}>
            <div className="section-tag">Campus Communities</div>
            <h2 className="section-title">Explore Different Clubs & Guilds</h2>
            <p className="section-subtitle">
              Find your tribe at SAREC Mirzapur. Specialized technical tracks and collaborative environments for every passion.
            </p>
          </div>

          <div className="club-filter-chips">
            <button 
              className={`chip-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Clubs
            </button>
            <button 
              className={`chip-btn ${filter === 'dev' ? 'active' : ''}`}
              onClick={() => setFilter('dev')}
            >
              Software & Dev
            </button>
            <button 
              className={`chip-btn ${filter === 'hardware' ? 'active' : ''}`}
              onClick={() => setFilter('hardware')}
            >
              Hardware & Robotics
            </button>
            <button 
              className={`chip-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI & Data
            </button>
            <button 
              className={`chip-btn ${filter === 'creative' ? 'active' : ''}`}
              onClick={() => setFilter('creative')}
            >
              Creative & Business
            </button>
          </div>
        </div>

        <div className="clubs-grid">
          {filteredClubs.map(club => (
            <div key={club.id} className="club-card">
              <div>
                <div className="club-card-top">
                  <div className="club-icon-badge" style={club.iconStyle}>
                    {club.icon}
                  </div>
                  <span className="club-meta-pill" style={club.badgeStyle}>
                    {club.badge}
                  </span>
                </div>
                <h3 className="club-title">{club.name}</h3>
                <p className="club-desc">{club.desc}</p>
              </div>

              <div>
                <div className="club-stats-row">
                  <span className="club-stat">👥 <strong>{club.members}</strong> Members</span>
                  <span className="club-stat">⏰ <strong>{club.time}</strong></span>
                </div>
                <div className="club-stack-pills">
                  {club.stack.map(tech => (
                    <span key={tech} className="stack-tag">{tech}</span>
                  ))}
                </div>
                <div className="club-footer-actions">
                  <button 
                    className="btn-join-track"
                    onClick={() => handleJoinClick(club.prefill)}
                  >
                    Join Track →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
