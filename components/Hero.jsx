"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

export function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");

      if (window.scrollY > 0) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px]
          bg-[radial-gradient(circle,rgba(118,185,0,0.12)_0%,rgba(118,185,0,0)_70%)]"
        />

        <div
          className="absolute -right-40 top-20
          w-[500px] h-[500px]
          bg-[radial-gradient(circle,rgba(118,185,0,0.07)_0%,transparent_70%)]"
        />

        <div
          className="absolute -left-40 bottom-0
          w-[450px] h-[450px]
          bg-[radial-gradient(circle,rgba(118,185,0,0.06)_0%,transparent_70%)]"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
          {/* Left Side */}
          <div className="max-w-5xl">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 whitespace-nowrap"
              style={{
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                fontWeight: 900,
                lineHeight: 1,
                color: "var(--foreground)",
              }}
            >
              MUTHURAMAN{" "}
              <span
                style={{
                  color: "#76b900",
                }}
              >
                S.
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide mb-7"
              style={{
                color: "var(--foreground)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              QA AUTOMATION ENGINEER
              <span
                className="mx-3"
                style={{
                  color: "#76b900",
                }}
              >
                |
              </span>
              <span
                style={{
                  color: "var(--muted)",
                }}
              >
                MANUAL TESTER
              </span>
            </motion.h2>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.75,
              }}
            >
              I focus on building confidence in software through{" "}
              <span style={{ color: "#ffffff" }}>manual testing</span>,{" "}
              <span style={{ color: "#ffffff" }}>test automation</span>, and{" "}
              <span style={{ color: "#ffffff" }}>API testing</span>. I enjoy
              turning requirements into meaningful test scenarios, finding
              defects, and creating reliable automated tests.
            </motion.p>

            {/* QA Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                "Manual Testing",
                "Selenium",
                "Playwright",
                "REST API",
                "Java",
                "SQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(118, 185, 0, 0.1)",
                    border: "1px solid rgba(118, 185, 0, 0.35)",
                    color: "#ffffff",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* View Projects */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "#76b900",
                  color: "#000000",
                  boxShadow: "0 6px 25px rgba(118, 185, 0, 0.25)",
                }}
              >
                VIEW MY WORK
              </button>

              {/* Contact */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                style={{
                  border: "1px solid rgba(255,255,255,0.6)",
                  color: "#ffffff",
                }}
              >
                LET&apos;S CONNECT
              </button>
            </motion.div>
          </div>

          {/* Right QA Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[380px] h-[380px]">
              {/* Outer Ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid rgba(118,185,0,0.25)",
                }}
              />

              {/* Middle Ring */}
              <div
                className="absolute inset-10 rounded-full"
                style={{
                  border: "1px solid rgba(118,185,0,0.18)",
                }}
              />

              {/* Inner Ring */}
              <div
                className="absolute inset-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(118,185,0,0.18), rgba(10,10,10,0.95) 70%)",
                  border: "1px solid rgba(118,185,0,0.35)",
                  boxShadow: "0 0 80px rgba(118,185,0,0.12)",
                }}
              >
                <div className="text-center">
                  <div
                    className="text-5xl font-black"
                    style={{
                      color: "#76b900",
                    }}
                  >
                    QA
                  </div>

                  <div
                    className="text-xs tracking-[0.3em] mt-2"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    QUALITY
                  </div>
                </div>
              </div>

              {/* Orbit Dots */}
              <div
                className="absolute w-3 h-3 rounded-full top-5 left-1/2 -translate-x-1/2"
                style={{
                  background: "#76b900",
                  boxShadow: "0 0 15px rgba(118,185,0,0.8)",
                }}
              />

              <div
                className="absolute w-2 h-2 rounded-full bottom-14 right-8"
                style={{
                  background: "#76b900",
                }}
              />

              <div
                className="absolute w-2 h-2 rounded-full top-24 left-4"
                style={{
                  background: "#76b900",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom QA Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="mt-16 flex items-center gap-3"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#76b900",
              boxShadow: "0 0 10px rgba(118,185,0,0.7)",
            }}
          />

          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "var(--muted)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
            }}
          >
            Manual Testing · Automation · API Testing
          </span>
        </motion.div>
      </div>
    </section>
  );
}
