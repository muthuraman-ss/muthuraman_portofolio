"use client";

import React from "react";
import { motion } from "framer-motion";

const programmingSkills = [
  "Java",
  "JavaScript",
  "Selenium WebDriver",
  "Playwright",
  "TestNG",
  "Maven",
  "Page Object Model",
  "Selenium Grid",
];

const testingSkills = [
  "Manual Testing",
  "Functional Testing",
  "Regression Testing",
  "Smoke Testing",
  "UI Testing",
  "Exploratory Testing",
  "REST API Testing",
  "Test Case Design",
  "Defect Life Cycle",
  "SDLC",
  "STLC",
  "Agile",
];

const apiCISkills = ["Postman", "REST APIs", "Git", "GitHub", "Jenkins"];

const webToolsSkills = ["HTML", "CSS", "Jira", "VS Code", "Eclipse"];

function SkillGroup({ title, skills, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Group Title */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="w-8 h-[2px]"
          style={{
            background: "#76b900",
          }}
        />

        <h3
          className="text-sm md:text-base tracking-[0.16em] uppercase font-semibold"
          style={{
            color: featured ? "#76b900" : "var(--muted)",
            fontFamily: "Inter, Arial, Helvetica, sans-serif",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="group relative rounded-xl px-5 py-5 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: featured
                ? "rgba(118, 185, 0, 0.12)"
                : "rgba(255, 255, 255, 0.025)",
              border: featured
                ? "1px solid rgba(118, 185, 0, 0.45)"
                : "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: featured
                ? "inset 0 0 25px rgba(118,185,0,0.03)"
                : "none",
            }}
          >
            <div className="flex items-center gap-3">
              {/* Green indicator */}
              <span
                className="w-2 h-2 rounded-full shrink-0 transition-all duration-300 group-hover:scale-125"
                style={{
                  background: "#76b900",
                  boxShadow: "0 0 8px rgba(118,185,0,0.55)",
                }}
              />

              <span
                className="text-sm font-medium"
                style={{
                  color: "#ffffff",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                }}
              >
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
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
              QA Toolkit
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
            TOOLS I USE TO
            <span
              className="block"
              style={{
                color: "#76b900",
              }}
            >
              TEST & AUTOMATE.
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
            A practical toolkit built around manual testing, UI automation, API
            testing, test design, and development tools used throughout my QA
            projects.
          </p>
        </motion.div>

        {/* Programming & Automation */}
        <div className="mb-14">
          <SkillGroup
            title="PROGRAMMING & AUTOMATION"
            skills={programmingSkills}
          />
        </div>

        {/* Manual / Testing */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(118,185,0,0.07), rgba(255,255,255,0.015))",
            border: "1px solid rgba(118,185,0,0.25)",
          }}
        >
          <SkillGroup
            title="MANUAL & SOFTWARE TESTING"
            skills={testingSkills}
            featured={true}
          />
        </div>

        {/* API & CI/CD */}
        <div className="mb-14">
          <SkillGroup title="API & CI/CD" skills={apiCISkills} />
        </div>

        {/* Web & Tools */}
        <div>
          <SkillGroup title="WEB & TOOLS" skills={webToolsSkills} />
        </div>

        {/* Bottom QA Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-16 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span
              className="text-xs tracking-[0.15em] uppercase font-semibold"
              style={{
                color: "#76b900",
              }}
            >
              QA STACK
            </span>

            {[
              "Manual Testing",
              "Selenium",
              "Playwright",
              "REST API",
              "Java",
              "TestNG",
              "Maven",
              "Postman",
              "Git",
              "Jenkins",
            ].map((item) => (
              <span
                key={item}
                className="text-xs"
                style={{
                  color: "var(--muted)",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
