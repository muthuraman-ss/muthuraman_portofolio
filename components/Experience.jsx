"use client";

import React from "react";
import { motion } from "framer-motion";

export function Experience() {
  const trainingAreas = [
    "Manual Testing",
    "Test Case Design",
    "Selenium WebDriver",
    "Playwright",
    "Java & TestNG",
    "Maven & POM",
    "Defect Life Cycle",
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="w-10 h-[2px]"
              style={{
                background: "#76b900",
              }}
            />

            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{
                color: "#76b900",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                fontWeight: 600,
              }}
            >
              Training & QA Journey
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
            BUILDING MY
            <span
              className="block"
              style={{
                color: "#76b900",
              }}
            >
              QA FOUNDATION.
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl mt-7"
            style={{
              color: "var(--muted)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
              lineHeight: 1.8,
            }}
          >
            Developing practical skills across manual testing, UI automation,
            API testing, and modern QA practices through structured training and
            hands-on projects.
          </p>
        </motion.div>

        {/* Training Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #76b900, rgba(118,185,0,0.05))",
            }}
          />

          {/* Timeline Point */}
          <div
            className="absolute left-[9px] top-8 w-3 h-3 rounded-full hidden md:block"
            style={{
              background: "#76b900",
              boxShadow: "0 0 18px rgba(118,185,0,0.8)",
            }}
          />

          {/* Main Training Card */}
          <div
            className="md:ml-16 rounded-2xl p-8 md:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(118,185,0,0.08), rgba(255,255,255,0.02))",
              border: "1px solid rgba(118,185,0,0.25)",
            }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">
              <div>
                <p
                  className="text-sm tracking-[0.15em] uppercase mb-3"
                  style={{
                    color: "#76b900",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  SDET / QA AUTOMATION TRAINING
                </p>

                <h3
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  Qtree Technologies
                </h3>

                <p
                  className="mt-2"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              <div
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap"
                style={{
                  background: "rgba(118,185,0,0.1)",
                  border: "1px solid rgba(118,185,0,0.25)",
                  color: "#76b900",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                2026 — Present
              </div>
            </div>

            {/* Description */}
            <p
              className="text-lg leading-relaxed mb-8 max-w-4xl"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.8,
              }}
            >
              Building practical QA skills through structured training and
              hands-on testing work across manual testing and UI automation.
            </p>

            {/* Training Areas */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {trainingAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "#76b900",
                      }}
                    />

                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "#ffffff",
                        fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Focus */}
            <div
              className="pt-7"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h4
                className="text-sm tracking-[0.15em] uppercase mb-5"
                style={{
                  color: "#76b900",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Practical Focus
              </h4>

              <div className="space-y-4">
                {/* 01 */}
                <div className="flex gap-4">
                  <span
                    className="text-lg"
                    style={{
                      color: "#76b900",
                    }}
                  >
                    01
                  </span>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    Perform manual and automation testing across web
                    applications using structured QA practices.
                  </p>
                </div>

                {/* 02 */}
                <div className="flex gap-4">
                  <span
                    className="text-lg"
                    style={{
                      color: "#76b900",
                    }}
                  >
                    02
                  </span>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    Design and execute positive, negative, functional,
                    regression, smoke, and UI test scenarios.
                  </p>
                </div>

                {/* 03 */}
                <div className="flex gap-4">
                  <span
                    className="text-lg"
                    style={{
                      color: "#76b900",
                    }}
                  >
                    03
                  </span>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    Build UI automation scripts using Selenium WebDriver and
                    Playwright, with TestNG, Maven, and Page Object Model.
                  </p>
                </div>

                {/* 04 */}
                <div className="flex gap-4">
                  <span
                    className="text-lg"
                    style={{
                      color: "#76b900",
                    }}
                  >
                    04
                  </span>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    Identify, document, and track defects through the defect
                    life cycle while applying SDLC, STLC, and Agile practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* QA Direction Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-14 grid md:grid-cols-3 gap-5"
        >
          {/* Manual QA */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h4
              className="font-bold mb-3"
              style={{
                color: "#76b900",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              MANUAL QA
            </h4>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Test design, execution, exploratory testing, and defect reporting.
            </p>
          </div>

          {/* Automation */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h4
              className="font-bold mb-3"
              style={{
                color: "#76b900",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              AUTOMATION
            </h4>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Selenium and Playwright automation with maintainable test
              structures.
            </p>
          </div>

          {/* API & CI/CD */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h4
              className="font-bold mb-3"
              style={{
                color: "#76b900",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              API & CI/CD
            </h4>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.7,
              }}
            >
              REST API testing, Postman, Git/GitHub, and Jenkins workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
