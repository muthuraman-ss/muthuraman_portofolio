import React from 'react';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative max-w-7xl mx-auto px-6">
      <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-12"
        style={{
          color: 'var(--foreground)',
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
        EXPERIENCE
      </h2>
      <div className="space-y-8">
        <div className="relative px-4">
          <div className="absolute left-0 top-0 w-6 h-6 bg-accent rounded-full"
            style={{
              background: 'var(--accent)',
            }}
          />
          <div className="relative pt-10">
            <h3 className="font-bold text-2xl mb-4"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              SDET / QA Automation Trainee
            </h3>
            <p className="text-muted mb-2"
              style={{
                color: 'var(--muted)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              Qtree Technologies, Coimbatore
            </p>
            <p className="text-muted mb-6"
              style={{
                color: 'var(--muted)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              2026 – Present
            </p>
            <ul className="space-y-3 text-muted"
              style={{
                color: 'var(--muted)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                lineHeight: 1.7,
              }}
            >
              <li>
                Perform manual and automation testing using Java and Selenium WebDriver across web applications.
              </li>
              <li>
                Design and execute test cases covering positive, negative, functional, regression, smoke, and UI scenarios.
              </li>
              <li>
                Build UI automation scripts using Selenium WebDriver, TestNG, Maven, and Page Object Model for maintainable test suites.
              </li>
              <li>
                Identify, document, and track defects through the full defect life cycle to closure.
              </li>
              <li>
                Apply SDLC, STLC, and Agile methodology across test planning, execution, and reporting.
              </li>
              <li>
                Use Git/GitHub and Jenkins to integrate automated tests into CI/CD pipelines.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}