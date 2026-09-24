import React from 'react';
import { Navbar } from './Navbar';

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <div className="relative pt-20">
          <h1
            className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
            style={{
              color: 'var(--foreground)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              lineHeight: '1.1',
            }}
          >
            MUTHURAMAN S
          </h1>
          <p
            className="text-2xl md:text-3xl font-medium text-muted mb-8"
            style={{
              color: 'var(--muted)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              fontWeight: '400',
            }}
          >
            SDET | QA AUTOMATION ENGINEER
          </p>
          <p
            className="text-lg text-accent mb-10"
            style={{
              color: 'var(--accent)',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              fontWeight: '500',
            }}
          >
            Building reliable software through quality engineering, automation, and continuous improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 bg-accent text-background font-medium rounded-full hover:opacity-90 transition-opacity"
              style={{
                background: 'var(--accent)',
                color: 'var(--background)',
              }}
            >
              EXPLORE MY WORK
            </button>
            <button
              className="px-8 py-3 border border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-background transition-all"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)',
              }}
            >
              LET'S CONNECT
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-transparent via-black to-black blur-3xl"
          style={{
            width: '480px',
            height: '480px',
            right: '-120px',
            bottom: '-80px',
          }}
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black to-black"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </section>
  );
}