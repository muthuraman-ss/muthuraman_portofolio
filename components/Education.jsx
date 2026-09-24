"use client";

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    year: "2023",
    level: "B.Sc. COMPUTER SCIENCE",
    institution: "Sri Krishna Adithya College of Arts and Science, Coimbatore",
    result: "83.03%",
    primary: true,
  },
  {
    year: "2020",
    level: "HIGHER SECONDARY — 12TH",
    institution: "Government Higher Secondary School, Coimbatore",
    result: "65%",
    primary: false,
  },
  {
    year: "2018",
    level: "SSLC — 10TH",
    institution: "Government Higher Secondary School, Coimbatore",
    result: "83%",
    primary: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
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
              Education
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
            THE FOUNDATION
            <span
              className="block"
              style={{
                color: "#76b900",
              }}
            >
              BEHIND MY QA JOURNEY.
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
            My academic background in Computer Science provided the foundation
            for my transition into software testing, automation, and quality
            engineering.
          </p>
        </motion.div>

        {/* Main Degree */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl p-8 md:p-10 mb-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(118,185,0,0.09), rgba(255,255,255,0.015))",
            border: "1px solid rgba(118,185,0,0.3)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <p
                className="text-xs tracking-[0.18em] uppercase font-semibold mb-4"
                style={{
                  color: "#76b900",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                }}
              >
                COMPUTER SCIENCE
              </p>

              <h3
                className="text-3xl md:text-4xl font-extrabold"
                style={{
                  color: "#ffffff",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                }}
              >
                B.Sc. Computer Science
              </h3>

              <p
                className="mt-4 text-base md:text-lg"
                style={{
                  color: "var(--muted)",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  lineHeight: 1.7,
                }}
              >
                Sri Krishna Adithya College of Arts and Science, Coimbatore
              </p>
            </div>

            <div className="flex md:flex-col gap-4 md:items-end">
              <div
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap"
                style={{
                  background: "rgba(118,185,0,0.1)",
                  border: "1px solid rgba(118,185,0,0.3)",
                  color: "#76b900",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                2023
              </div>

              <div
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                83.03%
              </div>
            </div>
          </div>

          {/* Academic Foundation */}
          <div
            className="mt-8 pt-7"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p
              className="text-sm"
              style={{
                color: "var(--muted)",
                fontFamily: "Inter, Arial, Helvetica, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Computer Science graduate with an academic foundation supporting
              my current focus on software quality assurance and test
              automation.
            </p>
          </div>
        </motion.div>

        {/* School Education */}
        <div className="grid md:grid-cols-2 gap-6">
          {education
            .filter((item) => !item.primary)
            .map((item, index) => (
              <motion.div
                key={item.level}
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span
                    className="text-xs tracking-[0.15em] uppercase font-semibold"
                    style={{
                      color: "#76b900",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {item.level}
                  </span>

                  <span
                    className="text-sm"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                  }}
                >
                  {item.institution}
                </h3>

                <div
                  className="mt-6 pt-5 flex items-center justify-between"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    Percentage
                  </span>

                  <span
                    className="font-semibold"
                    style={{
                      color: "#76b900",
                    }}
                  >
                    {item.result}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Bottom Statement */}
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
            duration: 0.5,
          }}
          className="mt-12 pt-7"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span
              className="text-xs tracking-[0.15em] uppercase font-semibold"
              style={{
                color: "#76b900",
              }}
            >
              ACADEMIC BACKGROUND
            </span>

            <span
              className="text-xs"
              style={{
                color: "var(--muted)",
              }}
            >
              Computer Science
            </span>

            <span style={{ color: "#76b900" }}>·</span>

            <span
              className="text-xs"
              style={{
                color: "var(--muted)",
              }}
            >
              B.Sc. Graduate
            </span>

            <span style={{ color: "#76b900" }}>·</span>

            <span
              className="text-xs"
              style={{
                color: "var(--muted)",
              }}
            >
              2023
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
