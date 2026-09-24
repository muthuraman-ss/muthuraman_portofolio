import React from 'react';

export function ProfilePanel() {
  return (
    <section id="profile" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl">
        <div>
          <h3 className="font-semibold text-muted mb-4"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            ROLE
          </h3>
          <p className="text-2xl font-bold"
            style={{
              color: 'var(--foreground)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            SDET | QA Automation Engineer
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-muted mb-4"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            LOCATION
          </h3>
          <p className="text-lg"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Coimbatore, Tamil Nadu
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-muted mb-4"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            EDUCATION
          </h3>
          <p className="text-lg"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            B.Sc. Computer Science
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-muted mb-4"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            GRADUATION
          </h3>
          <p className="text-lg"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            2023
          </p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t"
        style={{
          borderColor: 'var(--card)',
        }}
      />
      <div className="grid grid-cols-2 gap-6 mt-8 max-w-4xl">
        <div>
          <h3 className="font-semibold text-muted mb-2"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            PRIMARY FOCUS
          </h3>
          <p className="text-lg"
            style={{
              color: 'var(--foreground)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            QA Automation
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-muted mb-2"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            EXPERIENCE
          </h3>
          <p className="text-lg"
            style={{
              color: 'var(--foreground)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            SDET / QA Automation Trainee
          </p>
        </div>
      </div>
    </section>
  );
}