import React, { useState, useEffect } from 'react';

export default function JoinForm({ selectedClub }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    year: '',
    club: '',
    interest: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  useEffect(() => {
    if (selectedClub) {
      setFormData(prev => ({ ...prev, club: selectedClub }));
    }
  }, [selectedClub]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    const formEndpoint = 'https://script.google.com/macros/s/AKfycbxXI59ceq99apRfS656UR1H-wrsO3I9oefcD1ktieMFUeaGLpuLuEJEH9GkkJs9oPT3/exec';
    const bodyData = new FormData();
    Object.keys(formData).forEach(key => {
      bodyData.append(key, formData[key]);
    });

    try {
      await fetch(formEndpoint, {
        method: 'POST',
        body: bodyData,
        mode: 'no-cors'
      });

      setStatus({ submitting: false, submitted: true, error: false });
      alert("🎉 Welcome to STIC — SAREC, Mirzapur! Your membership application has been recorded. Check your email for further updates.");
      
      setFormData({
        name: '',
        email: '',
        branch: '',
        year: '',
        club: '',
        interest: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (err) {
      // Form submission error handled gracefully
      setStatus({ submitting: false, submitted: false, error: true });
      alert("An error occurred during submission. Please verify your connection or email sticsarecmzp@gmail.com directly.");
    }
  };

  return (
    <section id="join" className="join-section reveal-on-scroll">
      <div className="container join-grid">
        <div className="join-info">
          <div className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#94a3b8', borderColor: 'rgba(255,255,255,0.15)' }}>
            Membership Registration
          </div>
          <h2>Ready to build something real?</h2>
          <p>
            No prior expertise needed—just curiosity and consistency. Pick your club tracks, connect with mentors, and start shipping.
          </p>

          <ul className="perks-checklist">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Open to all batches & branches of SAREC Mirzapur</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Direct access to project labs, GitHub org & hardware gear</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Free entry to Season of Code, SIH bootcamps & mock interviews</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Official STIC swags, certificates, and alumni referrals</span>
            </li>
          </ul>
        </div>

        {/* Form Card */}
        <div className="join-form-card">
          <form className="join-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                className="form-input" 
                placeholder="e.g. Aditi Sharma" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-row">
              <label htmlFor="email" className="form-label">College / Personal Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                className="form-input" 
                placeholder="you@sarec.ac.in" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-row-2 form-row">
              <div>
                <label htmlFor="branch" className="form-label">Branch</label>
                <input 
                  id="branch" 
                  name="branch" 
                  type="text" 
                  className="form-input" 
                  placeholder="CSE / ECE / ME / CE" 
                  value={formData.branch}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div>
                <label htmlFor="year" className="form-label">Year</label>
                <select 
                  id="year" 
                  name="year" 
                  className="form-select" 
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="clubSelection" className="form-label">Primary Club Track</label>
              <select 
                id="clubSelection" 
                name="club" 
                className="form-select" 
                value={formData.club}
                onChange={handleChange}
                required
              >
                <option value="">Choose a Club to Join</option>
                <option value="STIC Coding Guild">💻 STIC Coding & CP Guild</option>
                <option value="RoboTech & Automation">🤖 RoboTech & IoT Guild</option>
                <option value="AI/ML Syndicate">🧠 AI/ML & Data Science Syndicate</option>
                <option value="Web & Mobile Guild">⚡ Web & Mobile Engineering Guild</option>
                <option value="CyberSec Guild">🛡️ CyberSec & Ethical Hacking</option>
                <option value="Open Source SAREC">🐧 Open Source & Linux Community</option>
                <option value="Pixels UI/UX Guild">🎨 Pixels UI/UX & Digital Media</option>
                <option value="E-Cell & Innovation">🚀 E-Cell & Tech Entrepreneurship</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="interest" className="form-label">Specific Domain Focus</label>
              <select 
                id="interest" 
                name="interest" 
                className="form-select" 
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Choose your specialization</option>
                <option>Full-Stack Web Development</option>
                <option>Competitive Programming & DSA</option>
                <option>AI / Machine Learning / LLMs</option>
                <option>Robotics & Hardware Prototyping</option>
                <option>Mobile App (Flutter / React Native)</option>
                <option>Cyber Security & CTFs</option>
                <option>UI/UX & Product Design</option>
                <option>Open Source Contributions</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="message" className="form-label">Tell us about your goals (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows="2" 
                className="form-textarea" 
                placeholder="Projects you want to build, current skills, or questions..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full" 
              disabled={status.submitting}
              style={status.submitted ? { background: '#10b981' } : {}}
            >
              {status.submitting ? (
                <span>Submitting Application...</span>
              ) : status.submitted ? (
                <span>✓ Application Submitted Successfully!</span>
              ) : (
                <>
                  <span>Submit Interest Form</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>

            <p className="form-note">⚡ No spam. You'll receive onboarding details via email.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
