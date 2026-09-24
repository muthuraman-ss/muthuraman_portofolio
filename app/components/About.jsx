import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-8"
          style={{
            color: 'var(--foreground)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
          }}
        >
          ABOUT ME
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-8"
          style={{
            color: 'var(--muted)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            lineHeight: 1.8,
          }}
        >
          I am a QA Automation Engineer (SDET) with hands-on training and project experience across manual testing, UI automation, and REST API testing.
        </p>
        <p className="text-lg text-muted leading-relaxed"
          style={{
            color: 'var(--muted)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            lineHeight: 1.8,
          }}
        >
          I work with Java, Selenium WebDriver, Playwright, TestNG, Maven, Postman, Git/GitHub, and Jenkins. I focus on creating maintainable automation frameworks, designing effective test cases, identifying defects, and improving software quality through structured testing practices.
        </p>
      </div>
    </section>
  );
}