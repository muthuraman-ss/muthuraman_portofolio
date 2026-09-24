import React from 'react';

const projects = [
  {
    id: 1,
    title: 'The Chapter Den — E-Commerce UI Automation',
    technology: 'Playwright | JavaScript',
    description:
      'Built an end-to-end UI automation suite using Playwright with a Page Object Model architecture for maintainability.',
    tags: ['Playwright', 'JavaScript', 'POM', 'API Utilities', 'Storage State'],
    capabilities: [
      'Automated user registration and core e-commerce workflows',
      'Reusable page objects',
      'Dynamic test data',
      'Chromium execution',
      'Headless mode',
      'Failure screenshots',
      'Trace/video retention for debugging',
      'Synchronization strategies for dynamic UI elements and overlays',
      'Fixtures',
      'API utilities',
      'Storage state',
      'Token-based authentication for API-assisted test flows',
    ],
  },
  {
    id: 2,
    title: 'SecureBank — Banking Application Manual Testing',
    technology: 'Manual Testing',
    description:
      'Tested the following modules: Dashboard, Accounts, Transfer, Send Money, Pay a Bill, Transactions, Apply for Loan.',
    tags: [
      'Manual Testing',
      'Equivalence Partitioning',
      'Boundary Value Analysis',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Integration Testing',
      'UI Testing',
      'Exploratory Testing',
      'Defect Life Cycle',
    ],
  },
  {
    id: 3,
    title: 'E-Commerce Automation Testing Framework',
    technology: 'Java | Selenium WebDriver | TestNG | Maven',
    description:
      'Developed an end-to-end UI automation framework covering Login, Product selection, Cart, Checkout, and Order validation.',
    tags: ['Page Object Model', 'PageFactory', 'Reusable automation code', 'Explicit waits', 'Cross-browser execution', 'Headless execution'],
    capabilities: [
      'Page Object Model',
      'PageFactory',
      'Reusable automation code',
      'Explicit waits',
      'Selenium synchronization',
      'Cross-browser execution',
      'Headless execution',
      'Selenium Grid exploration (as explored in resume)',
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-6">
      <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-12"
        style={{
          color: 'var(--foreground)',
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
        SELECTED WORK
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden bg-card border transition-all duration-500 hover:border-accent hover:bg-gradient-from-card-to-muted"
            style={{
              border: '1px solid var(--muted)',
              background: 'var(--card)',
            }}
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="font-bold text-xl mb-2"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                }}
              >
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1"
                style={{
                  color: 'var(--muted)',
                  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                      borderColor: 'var(--muted)',
                      color: 'var(--muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.capabilities && project.capabilities.length > 0 && (
                <div className="mt-auto pt-4 text-xs"
                  style={{
                    color: 'var(--muted)',
                    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                  }}
                >
                  <strong>Capabilities:</strong> {project.capabilities.join(', ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}