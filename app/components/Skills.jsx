import React from 'react';

const programmingSkills = [
  { name: 'Java', category: 'Programming & Automation' },
  { name: 'JavaScript', category: 'Programming & Automation' },
  { name: 'Selenium WebDriver', category: 'Programming & Automation' },
  { name: 'Playwright', category: 'Programming & Automation' },
  { name: 'TestNG', category: 'Programming & Automation' },
  { name: 'Maven', category: 'Programming & Automation' },
  { name: 'Page Object Model (POM)', category: 'Programming & Automation' },
  { name: 'Selenium Grid', category: 'Programming & Automation' },
];

const testingSkills = [
  { name: 'Manual Testing', category: 'Testing Practices' },
  { name: 'Functional Testing', category: 'Testing Practices' },
  { name: 'Regression Testing', category: 'Testing Practices' },
  { name: 'Smoke Testing', category: 'Testing Practices' },
  { name: 'UI Testing', category: 'Testing Practices' },
  { name: 'Exploratory Testing', category: 'Testing Practices' },
  { name: 'REST API Testing', category: 'Testing Practices' },
  { name: 'Test Case Design', category: 'Testing Practices' },
  { name: 'Defect Life Cycle', category: 'Testing Practices' },
  { name: 'SDLC', category: 'Testing Practices' },
  { name: 'STLC', category: 'Testing Practices' },
  { name: 'Agile', category: 'Testing Practices' },
];

const apiCISkills = [
  { name: 'Postman', category: 'API & CI/CD' },
  { name: 'REST APIs', category: 'API & CI/CD' },
  { name: 'Git', category: 'API & CI/CD' },
  { name: 'GitHub', category: 'API & CI/CD' },
  { name: 'Jenkins', category: 'API & CI/CD' },
];

const webToolsSkills = [
  { name: 'HTML', category: 'Web & Tools' },
  { name: 'CSS', category: 'Web & Tools' },
  { name: 'JavaScript', category: 'Web & Tools' },
  { name: 'Jira', category: 'Web & Tools' },
  { name: 'VS Code', category: 'Web & Tools' },
  { name: 'Eclipse', category: 'Web & Tools' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative max-w-7xl mx-auto px-6">
      <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-12"
        style={{
          color: 'var(--foreground)',
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
        THE TOOLKIT
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programmingSkills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center py-4 px-5 rounded-lg border transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
            style={{
              border: '1px solid var(--muted)',
              background: 'var(--card)',
            }}
          >
            <span
              className="w-10 h-10 rounded-md flex items-center justify-center mb-3 group-hover:bg-accent transition-colors"
              style={{
                background: 'var(--muted)',
              }}
            >
              {skill.name.charAt(0)}
            </span>
            <span className="text-center text-sm font-medium"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
        {testingSkills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center py-4 px-5 rounded-lg border transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
            style={{
              border: '1px solid var(--muted)',
              background: 'var(--card)',
            }}
          >
            <span
              className="w-10 h-10 rounded-md flex items-center justify-center mb-3 group-hover:bg-accent transition-colors"
              style={{
                background: 'var(--muted)',
              }}
            >
              {skill.name.charAt(0)}
            </span>
            <span className="text-center text-sm font-medium"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
        {apiCISkills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center py-4 px-5 rounded-lg border transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
            style={{
              border: '1px solid var(--muted)',
              background: 'var(--card)',
            }}
          >
            <span
              className="w-10 h-10 rounded-md flex items-center justify-center mb-3 group-hover:bg-accent transition-colors"
              style={{
                background: 'var(--muted)',
              }}
            >
              {skill.name.charAt(0)}
            </span>
            <span className="text-center text-sm font-medium"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
        {webToolsSkills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center py-4 px-5 rounded-lg border transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
            style={{
              border: '1px solid var(--muted)',
              background: 'var(--card)',
            }}
          >
            <span
              className="w-10 h-10 rounded-md flex items-center justify-center mb-3 group-hover:bg-accent transition-colors"
              style={{
                background: 'var(--muted)',
              }}
            >
              {skill.name.charAt(0)}
            </span>
            <span className="text-center text-sm font-medium"
              style={{
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}