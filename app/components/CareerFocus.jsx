import React from 'react';

export function CareerFocus() {
  return (
    <section id="career-focus" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-6"
          style={{
            color: 'var(--foreground)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
          }}
        >
          NEXT CHALLENGE
        </h2>
        <p className="text-lg text-muted mb-8"
          style={{
            color: 'var(--muted)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            lineHeight: 1.8,
          }}
        >
          I am focused on growing as a QA Automation Engineer and contributing to software quality through structured testing, automation, API testing, and continuous learning.
        </p>
        <button
          className="px-6 py-3 bg-accent text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          style={{
            background: 'var(--accent)',
            color: 'var(--background)',
          }}
        >
          LET'S CONNECT →
        </button>
      </div>
    </section>
  );
}