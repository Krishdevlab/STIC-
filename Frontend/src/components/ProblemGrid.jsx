import React from 'react';

export default function ProblemGrid() {
  const problems = [
    {
      type: 'rose',
      category: 'Curriculum Gap',
      headline: 'You mostly study what examinations require, not what companies hire for.',
      text: 'Rote theory, obsolete language standards, and zero Git experience. The realization usually hits during your final year placement rounds.'
    },
    {
      type: 'amber',
      category: 'Tutorial Hell',
      headline: 'You cannot ask a pre-recorded video how to debug your distributed project.',
      text: 'Watching tutorials gives the illusion of learning. Real growth happens when you build collaborative software with peers and fix production bugs.'
    },
    {
      type: 'slate',
      category: 'Isolation',
      headline: 'Coding alone in your hostel room is slow, stressful, and demotivating.',
      text: 'The best hackathon winners, open-source contributors, and intern referral networks are born inside active, vibrant community guilds.'
    },
    {
      type: 'sky',
      category: 'Mentorship Void',
      headline: 'You can\'t tell if generic advice applies to your personal career path.',
      text: 'Generic advisors push expensive diplomas. At STIC, senior students and alumni provide unbiased, battlefield-tested roadmaps for free.'
    }
  ];

  return (
    <section id="problem" className="problem-section reveal-on-scroll">
      <div className="container">
        <div className="section-header-wrap">
          <div className="section-tag">Why Students Get Stuck</div>
          <h2 className="section-title">Good marketing can still lead to 4 years of regret.</h2>
          <p className="section-subtitle">
            When the stakes are your engineering career, "learning from standard syllabus" is not enough.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((item, index) => (
            <div key={index} className={`problem-card ${item.type}`}>
              <div>
                <p className="problem-category">{item.category}</p>
                <h3 className="problem-headline">{item.headline}</h3>
              </div>
              <p className="problem-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
