import React, { useEffect } from 'react';

export function CliModal({ member, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-container" style={{ background: 'transparent', padding: 0, maxWidth: '620px' }}>
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="term-dot red" onClick={onClose} style={{ cursor: 'pointer' }}></span>
            <span className="term-dot yellow"></span>
            <span className="term-dot green"></span>
            <span className="terminal-title">bash — stic-sarec@mzp:~</span>
          </div>
          <div className="terminal-body">
            <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
              Connecting to SAREC Mirzapur developer node... [OK]
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ color: '#38bdf8' }}>stic@sarec:~$</span>{' '}
              <span style={{ color: '#f8fafc' }}>
                finger profile --user="{member.name.toLowerCase().replace(/\s+/g, '.')}"
              </span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
              <div style={{ color: '#10b981', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                {member.name}
              </div>
              <div style={{ color: '#e2e8f0', fontWeight: 600 }}>
                Role: <span style={{ color: '#38bdf8' }}>{member.role}</span>
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Affiliation: {member.dept}
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '0.5rem', borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: '0.5rem' }}>
                <strong>Core Stack & Focus:</strong><br />
                {member.focus}
              </div>
            </div>
            <div>
              <span style={{ color: '#38bdf8' }}>stic@sarec:~$</span>{' '}
              <span style={{ animation: 'blinkCursor 1s infinite' }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
