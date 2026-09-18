import React, { useState, useEffect } from 'react';

export default function FloatingWidgets() {
  const [cookieDismissed, setCookieDismissed] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('stic_analytics_consent');
    if (consent !== 'true') {
      setCookieDismissed(false);
    }
  }, []);

  const handleDismissCookie = () => {
    localStorage.setItem('stic_analytics_consent', 'true');
    setCookieDismissed(true);
  };

  return (
    <>
      {/* Floating WhatsApp Help */}
      <a 
        href="https://wa.me/919999999999?text=Hi%20STIC%20Team%2C%20I%20have%20a%20question%20about%20clubs%20and%20events." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Floating Cookie Toast */}
      <div className={`floating-cookie-toast ${cookieDismissed ? 'hidden' : ''}`}>
        <span>
          We use analytics to improve STIC. <a href="#" style={{ textDecoration: 'underline', color: '#0284c7' }}>Privacy</a>
        </span>
        <button className="cookie-btn-allow" onClick={handleDismissCookie}>Allow</button>
        <button className="cookie-btn-close" onClick={handleDismissCookie} aria-label="Close Announcement">✕</button>
      </div>
    </>
  );
}
