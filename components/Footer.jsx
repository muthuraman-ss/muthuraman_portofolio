import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 relative max-w-7xl mx-auto px-6"
      style={{
        borderTop: '1px solid var(--muted)',
      }}
    >
      <div className="text-center">
        <p className="text-muted"
          style={{
            color: 'var(--muted)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            fontSize: '0.875rem',
          }}
        >
          MUTHURAMAN S &bull; SDET | QA Automation Engineer &bull; Coimbatore, Tamil Nadu
        </p>
      </div>
    </footer>
  );
}