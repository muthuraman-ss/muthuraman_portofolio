"use client";

import React from "react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    number: "01",
    title: "MANUAL TESTING",
    description:
      "Designing and executing structured test scenarios, including positive, negative, functional, regression, smoke, UI, and exploratory testing.",
  },
  {
    number: "02",
    title: "UI AUTOMATION",
    description:
      "Building maintainable browser automation using Selenium WebDriver and Playwright with reusable test structures.",
  },
  {
    number: "03",
    title: "API TESTING",
    description:
      "Working with REST API testing and Postman as part of a broader QA testing approach.",
  },
  {
    number: "04",
    title: "CONTINUOUS LEARNING",
    description:
      "Continuing to strengthen QA fundamentals, automation, API testing, SQL, and practical testing techniques.",
  },
];

export function CareerFocus() {
  return (
    <section id="career-focus" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="w-10 h-[2px]"
              style={{
                background: "#76b900",
              }}
            />

            <span
              className="text-sm tracking-[0.2em] uppercase font-semibold"
              style={{
                color: "#76b900",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              Career Focus
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              fontWeight: 900,
              lineHeight: 1.05,
            }}
          >
            BUILDING TOWARD
            <span
              className="block"
              style={{
                color: "#76b900",
              }}
            >
              QUALITY ENGINEERING.
            </span>
          </h2>

          <p
            className="text-lg max-w-3xl mt-7"
            style={{
              color: "var(--muted)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              lineHeight: 1.8,
            }}
          >
            I am focused on growing as a QA Automation Engineer and contributing
            to software quality through structured testing, automation, API
            testing, and continuous learning.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-2 gap-5">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="flex gap-6">
                {/* Number */}
                <span
                  className="text-sm font-semibold shrink-0"
                  style={{
                    color: "#76b900",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  {area.number}
                </span>

                <div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{
                      color: "#ffffff",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className="mt-7 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: "linear-gradient(to right, #76b900, transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="mt-14 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p
                className="text-sm tracking-[0.15em] uppercase font-semibold"
                style={{
                  color: "#76b900",
                }}
              >
                NEXT STEP
              </p>

              <p
                className="mt-2 text-base"
                style={{
                  color: "var(--muted)",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                }}
              >
                Looking to apply my QA skills through practical testing and
                automation work.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "#76b900",
                color: "#000000",
                boxShadow: "0 8px 25px rgba(118,185,0,0.2)",
              }}
            >
              LET'S CONNECT →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
