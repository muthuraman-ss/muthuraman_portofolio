import React from 'react';

export function Education() {
  return (
    <section id="education" className="py-24 relative max-w-7xl mx-auto px-6">
      <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-12"
        style={{
          color: 'var(--foreground)',
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
        EDUCATION
      </h2>
      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        <div className="group rounded-xl border p-6 transition-all duration-300 hover:border-accent"
          style={{
            border: '1px solid var(--muted)',
            background: 'var(--card)',
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              B.Sc. Computer Science
            </h3>
            <p className="text-sm text-muted"
              style={{
                color: 'var(--muted)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              2023
            </p>
          </div>
          <p className="text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Sri Krishna Adithya College of Arts and Science, Coimbatore
          </p>
          <p className="mt-2 text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Percentage: 83.03%
          </p>
        </div>
        <div className="group rounded-xl border p-6 transition-all duration-300 hover:border-accent"
          style={{
            border: '1px solid var(--muted)',
            background: 'var(--card)',
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              Higher Secondary — 12th
            </h3>
            <p className="text-sm text-muted"
              style={{
                color: 'var(--muted)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              2020
            </p>
          </div>
          <p className="text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Government Higher Secondary School, Coimbatore
          </p>
          <p className="mt-2 text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Percentage: 65%
          </p>
        </div>
        <div className="group rounded-xl border p-6 transition-all duration-300 hover:border-accent"
          style={{
            border: '1px solid var(--muted)',
            background: 'var(--card)',
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              SSLC — 10th
            </h3>
            <p className="text-sm text-muted"
              style={{
                color: 'var(--muted)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              2018
            </p>
          </div>
          <p className="text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Government Higher Secondary School, Coimbatore
          </p>
          <p className="mt-2 text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Percentage: 83%
          </p>
        </div>
      </div>
    </section>
  );
}