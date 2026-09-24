import React from "react";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative w-full">
        <div className="relative pt-16 sm:pt-20">
          {/* Main Heading */}
          <h1
            className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-5 sm:mb-6"
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              lineHeight: "1.1",
            }}
          >
            MUTHURAMAN S
          </h1>

          {/* Role */}
          <p
            className="text-xl sm:text-2xl md:text-3xl font-medium text-muted mb-6 sm:mb-8"
            style={{
              color: "var(--muted)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontWeight: "400",
            }}
          >
            SDET | QA AUTOMATION ENGINEER
          </p>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-accent mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
            style={{
              color: "var(--accent)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontWeight: "500",
            }}
          >
            Building reliable software through quality engineering, automation,
            and continuous improvement.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Explore Work */}
            <button
              className="px-8 py-3 bg-accent text-background font-medium rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
              style={{
                background: "var(--accent)",
                color: "var(--background)",
              }}
            >
              EXPLORE MY WORK
            </button>

            {/* Let's Connect */}
            <button
              className="px-8 py-3 border border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-background transition-all w-full sm:w-auto"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              LET'S CONNECT
            </button>
          </div>
        </div>

        {/* Bottom Right Glow */}
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-transparent via-black to-black blur-3xl"
          style={{
            width: "480px",
            height: "480px",
            right: "-120px",
            bottom: "-80px",
          }}
        />
      </div>

      {/* Hero Background Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black to-black"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
}
