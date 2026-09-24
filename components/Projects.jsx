"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "The Chapter Den",
    subtitle: "E-Commerce UI Automation",
    category: "PLAYWRIGHT AUTOMATION",
    technology: "Playwright | JavaScript",
    description:
      "Built an end-to-end UI automation suite for an e-commerce application using Playwright and Page Object Model architecture. The project focuses on reusable automation, dynamic test data, authentication flows, and reliable test execution.",
    tags: [
      "Playwright",
      "JavaScript",
      "POM",
      "Fixtures",
      "API Utilities",
      "Storage State",
    ],
    capabilities: [
      "Automated user registration and core e-commerce workflows",
      "Created reusable Page Object classes",
      "Used dynamic test data for registration scenarios",
      "Configured Chromium execution",
      "Used headless execution",
      "Captured screenshots on test failures",
      "Used trace and video retention for debugging",
      "Handled dynamic UI elements and loading overlays",
      "Worked with Playwright fixtures",
      "Created API utilities for test flows",
      "Used storage state for authenticated scenarios",
      "Worked with token-based authentication for API-assisted flows",
    ],
  },

  {
    id: "02",
    title: "SecureBank",
    subtitle: "Banking Application Manual Testing",
    category: "MANUAL TESTING",
    technology: "Manual Testing",
    description:
      "Performed manual testing on a banking application covering key user workflows. Designed and executed positive, negative, boundary, equivalence partitioning, functional, regression, smoke, integration, UI, and exploratory test scenarios.",
    tags: [
      "Manual Testing",
      "Test Case Design",
      "BVA",
      "Equivalence Partitioning",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Exploratory Testing",
      "Defect Life Cycle",
    ],
    capabilities: [
      "Tested Dashboard functionality",
      "Tested Accounts module",
      "Tested Transfer workflows",
      "Tested Send Money functionality",
      "Tested Pay a Bill functionality",
      "Tested Transactions",
      "Tested Apply for Loan workflow",
      "Created positive and negative test cases",
      "Applied Equivalence Partitioning",
      "Applied Boundary Value Analysis",
      "Performed exploratory testing",
      "Compared expected and actual results",
      "Identified and documented defects",
      "Followed the defect life cycle",
    ],
  },

  {
    id: "03",
    title: "E-Commerce Automation Framework",
    subtitle: "Selenium WebDriver Automation",
    category: "SELENIUM AUTOMATION",
    technology: "Java | Selenium WebDriver | TestNG | Maven",
    description:
      "Developed an end-to-end UI automation framework covering important e-commerce workflows including login, product selection, cart, checkout, and order validation.",
    tags: [
      "Java",
      "Selenium WebDriver",
      "TestNG",
      "Maven",
      "POM",
      "PageFactory",
      "Explicit Waits",
    ],
    capabilities: [
      "Automated Login workflow",
      "Automated product selection",
      "Automated cart operations",
      "Automated checkout flow",
      "Validated order workflows",
      "Implemented Page Object Model",
      "Used PageFactory",
      "Created reusable automation code",
      "Implemented explicit waits",
      "Handled Selenium synchronization",
      "Explored cross-browser execution",
      "Explored headless execution",
      "Explored Selenium Grid",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
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
              className="text-sm tracking-[0.2em] uppercase font-semibold"
              style={{
                color: "#76b900",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
              }}
            >
              Selected Work
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
            QA PROJECTS.
            <span
              className="block"
              style={{
                color: "#76b900",
              }}
            >
              TESTED. AUTOMATED. VALIDATED.
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
            A collection of hands-on QA projects covering manual testing,
            Selenium automation, Playwright automation, test design,
            API-assisted flows, and defect analysis.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(118,185,0,0.06), rgba(255,255,255,0.015))",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="p-7 md:p-10">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex gap-5">
                    {/* Number */}
                    <div
                      className="text-2xl md:text-3xl font-black shrink-0"
                      style={{
                        color: "#76b900",
                        fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      }}
                    >
                      {project.id}
                    </div>

                    <div>
                      {/* Category */}
                      <p
                        className="text-xs tracking-[0.18em] uppercase font-semibold mb-3"
                        style={{
                          color: "#76b900",
                          fontFamily: "Inter, Arial, Helvetica, sans-serif",
                        }}
                      >
                        {project.category}
                      </p>

                      {/* Title */}
                      <h3
                        className="text-2xl md:text-3xl font-extrabold"
                        style={{
                          color: "#ffffff",
                          fontFamily: "Inter, Arial, Helvetica, sans-serif",
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className="mt-2 text-sm md:text-base"
                        style={{
                          color: "var(--muted)",
                          fontFamily: "Inter, Arial, Helvetica, sans-serif",
                        }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Technology */}
                  <div
                    className="px-4 py-2 rounded-full text-xs md:text-sm whitespace-nowrap self-start"
                    style={{
                      background: "rgba(118,185,0,0.08)",
                      border: "1px solid rgba(118,185,0,0.25)",
                      color: "#ffffff",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {project.technology}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-base md:text-lg max-w-5xl mt-8 leading-relaxed"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    lineHeight: 1.8,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(118,185,0,0.08)",
                        border: "1px solid rgba(118,185,0,0.25)",
                        color: "#ffffff",
                        fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Capabilities */}
                <div
                  className="mt-9 pt-7"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <h4
                    className="text-sm tracking-[0.15em] uppercase font-semibold mb-6"
                    style={{
                      color: "#76b900",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    }}
                  >
                    What I Worked On
                  </h4>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                    {project.capabilities.map((capability) => (
                      <div key={capability} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{
                            background: "#76b900",
                          }}
                        />

                        <span
                          className="text-sm leading-relaxed"
                          style={{
                            color: "var(--muted)",
                            fontFamily: "Inter, Arial, Helvetica, sans-serif",
                            lineHeight: 1.6,
                          }}
                        >
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Category */}
                <div
                  className="mt-8 pt-5 flex items-center gap-3"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "#76b900",
                      boxShadow: "0 0 10px rgba(118,185,0,0.6)",
                    }}
                  />

                  <span
                    className="text-xs tracking-[0.12em] uppercase"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-16 text-center"
        >
          <p
            className="text-sm tracking-[0.15em] uppercase"
            style={{
              color: "var(--muted)",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
            }}
          >
            Manual Testing <span style={{ color: "#76b900" }}>·</span> Selenium{" "}
            <span style={{ color: "#76b900" }}>·</span> Playwright{" "}
            <span style={{ color: "#76b900" }}>·</span> API Testing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
