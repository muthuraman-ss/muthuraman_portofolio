"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
  const focusAreas = [
    {
      number: "01",
      title: "MANUAL TESTING",
      description:
        "Designing and executing positive, negative, functional, regression, smoke, integration, and exploratory test scenarios.",
    },
    {
      number: "02",
      title: "TEST AUTOMATION",
      description:
        "Building maintainable UI automation using Java, Selenium WebDriver, TestNG, Maven, Page Object Model, and Playwright.",
    },
    {
      number: "03",
      title: "API TESTING",
      description:
        "Working with REST APIs and Postman to validate requests, responses, data, and application behavior.",
    },
    {
      number: "04",
      title: "QUALITY MINDSET",
      description:
        "Turning requirements into meaningful test scenarios, identifying defects, and following structured testing practices.",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
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
              About Me
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
            QUALITY IS MORE THAN
            <span
              className="block"
              style={{
                color: "#76b900",
              }}
            >
              FINDING BUGS.
            </span>
          </h2>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed mb-8"
              style={{
                color: "var(--foreground)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.65,
              }}
            >
              I am a Computer Science graduate focused on building my career in{" "}
              <span style={{ color: "#76b900" }}>
                software quality and test automation
              </span>
              .
            </p>

            <p
              className="text-lg leading-relaxed mb-7"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.8,
              }}
            >
              My QA work combines{" "}
              <span style={{ color: "#ffffff" }}>manual testing</span> with{" "}
              <span style={{ color: "#ffffff" }}>automation</span>. I design
              test cases, cover positive and negative scenarios, perform
              exploratory testing, identify defects, and validate application
              behavior against expected results.
            </p>

            <p
              className="text-lg leading-relaxed mb-7"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.8,
              }}
            >
              On the automation side, I work with{" "}
              <span style={{ color: "#ffffff" }}>
                Java, Selenium WebDriver, TestNG, Maven, Playwright, and Page
                Object Model
              </span>
              . I also work with REST API testing and Postman as part of my
              broader QA practice.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.8,
              }}
            >
              My goal is simple: understand how software is supposed to behave,
              find where it doesn't, and build reliable tests that help improve
              confidence in the product.
            </p>
          </motion.div>

          {/* Right - QA Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl p-7"
              style={{
                background: "rgba(118, 185, 0, 0.05)",
                border: "1px solid rgba(118, 185, 0, 0.25)",
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-sm tracking-[0.18em] uppercase font-semibold"
                  style={{
                    color: "#76b900",
                  }}
                >
                  QA FOCUS
                </span>

                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "#76b900",
                    boxShadow: "0 0 12px rgba(118,185,0,0.8)",
                  }}
                />
              </div>

              <div className="space-y-7">
                {focusAreas.map((area) => (
                  <div key={area.number} className="flex gap-5">
                    <span
                      className="text-sm font-semibold pt-1"
                      style={{
                        color: "#76b900",
                        minWidth: "24px",
                      }}
                    >
                      {area.number}
                    </span>

                    <div>
                      <h3
                        className="text-base font-bold mb-2"
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
                          lineHeight: 1.7,
                        }}
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom QA Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 pt-10"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            className="text-sm tracking-[0.15em] uppercase mb-5"
            style={{
              color: "#76b900",
            }}
          >
            My QA Approach
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Understand Requirements",
              "Design Test Scenarios",
              "Execute & Validate",
              "Identify Defects",
              "Retest & Regression",
              "Automate Repetitive Flows",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#76b900",
                  }}
                />

                <span
                  className="text-sm"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
