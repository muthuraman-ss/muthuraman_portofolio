import React from 'react';

const strengths = [
  { name: 'Analytical & Logical Thinking' },
  { name: 'Debugging & Problem Solving' },
  { name: 'Structured Test Documentation' },
  { name: 'Defect Tracking & Communication' },
  { name: 'Agile Mindset' },
  { name: 'Quick Learner' },
];

export function Strengths() {
  return (
    <section id="strengths" className="py-24 relative max-w-7xl mx-auto px-6">
      <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-12"
        style={{
          color: 'var(--foreground)',
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
        HOW I WORK
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-6xl">
        {strengths.map((strength) => (
          <div
            key={strength}
            className="group flex items-center rounded-xl border p-6 transition-all duration-300 hover:border-accent hover:bg-gradient-to-r-from-card-via-muted-to-accent"
            style={{
              border: '1px solid var(--muted)',
              background: 'var(--card)',
            }}
          >
            <span
              className="w-8 h-8 rounded-md flex items-center justify-center mr-4 flex-shrink-0"
              style={{
                background: 'var(--muted)',
              }}
            >
              {strength.charAt(0)}
            </span>
            <div>
              <p className="font-medium"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                }}
              >
                {strength}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}