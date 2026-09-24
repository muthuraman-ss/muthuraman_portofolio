'use client';

import React, { useState, useEffect } from 'react';

const NavLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrolling(currentScroll > lastScroll);
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolling
          ? 'rgba(10, 10, 10, 0.9)'
          : 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--muted)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg tracking-wider"
          style={{
            color: 'var(--foreground)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
          }}
        >
          MUTHURAMAN S
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link color-muted transition-colors relative"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-accent transition-width"
                style={{
                  width: 0,
                  background: 'var(--accent)',
                }}
                onMouseEnter={e => {
                  e.target.style.width = '100%';
                }}
                onMouseLeave={e => {
                  e.target.style.width = 0;
                }}
              />
            </a>
          ))}
        </div>
        <div className="hidden md:block status-indicator"
          style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: '500' }}
        >
          QA AUTOMATION ENGINEER
        </div>
      </div>
    </nav>
  );
}