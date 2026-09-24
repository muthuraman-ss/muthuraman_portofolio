import React from 'react';

export function Languages() {
  return (
    <section id="languages" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="max-w-2xl text-center">
        <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-6"
          style={{
            color: 'var(--foreground)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
          }}
        >
          LANGUAGES
        </h2>
        <div className="flex justify-center gap-8">
          <span className="text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            Tamil
          </span>
          <span className="text-muted"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            }}
          >
            English
          </span>
        </div>
      </div>
    </section>
  );
}