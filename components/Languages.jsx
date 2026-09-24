"use client";

import { motion } from "framer-motion";

/* Same font as the CareerFocus section */
const FONT = "Inter, Arial, Helvetica, sans-serif";

/* =========================================================
   DATA  (x / y live in a 1000 x 480 grid)
   Nodes alternate TOP / BOTTOM => real zig-zag
========================================================= */

const TOP = 170;
const BOTTOM = 330;

const roadmap = [
  {
    step: "01",
    title: "START",
    text: "QA Foundation",
    icon: "✦",
    completed: true,
    x: 100,
    y: TOP,
  },
  {
    step: "02",
    title: "BUILD",
    text: "Hands-on Projects",
    icon: "◈",
    completed: true,
    x: 300,
    y: BOTTOM,
  },
  {
    step: "03",
    title: "GET A QA JOB",
    text: "Begin My QA Career",
    icon: "⚡",
    completed: false,
    x: 500,
    y: TOP,
  },
  {
    step: "04",
    title: "CONTRIBUTE",
    text: "Create Value",
    icon: "◆",
    completed: false,
    x: 700,
    y: BOTTOM,
  },
  {
    step: "05",
    title: "LAUNCH",
    text: "Grow With the Team",
    icon: "🚀",
    completed: false,
    x: 900,
    y: TOP,
  },
];

const ZIGZAG_PATH = roadmap
  .map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`)
  .join(" ");

/* only the part already achieved: Start -> Build */
const DONE_PATH = `M${roadmap[0].x} ${roadmap[0].y} L${roadmap[1].x} ${roadmap[1].y}`;

const VB_W = 1000;
const VB_H = 480;

const headingWords = [
  { word: "FROM", green: false },
  { word: "START", green: true },
  { word: "TO", green: false },
  { word: "LAUNCH.", green: true },
];

export default function Languages() {
  return (
    <section id="journey" className="jr-section" style={{ fontFamily: FONT }}>
      {/* ================= BACKGROUND ================= */}

      <div className="jr-stars">
        {Array.from({ length: 60 }).map((_, index) => (
          <span
            key={index}
            className="jr-star"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              animationDelay: `${(index % 8) * 0.35}s`,
              animationDuration: `${2 + (index % 4)}s`,
            }}
          />
        ))}
      </div>

      <span className="jr-shoot jr-shoot1" />
      <span className="jr-shoot jr-shoot2" />
      <span className="jr-shoot jr-shoot3" />

      <motion.div
        className="jr-glow"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="jr-container">
        {/* ================= HEADER ================= */}

        <div className="jr-header">
          <motion.p
            className="jr-eyebrow"
            initial={{ opacity: 0, letterSpacing: "18px" }}
            whileInView={{ opacity: 1, letterSpacing: "6px" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            MY JOURNEY
          </motion.p>

          <h2 className="jr-title">
            {headingWords.map((w, i) => (
              <motion.span
                key={w.word}
                className={`jr-word ${w.green ? "jr-green" : ""}`}
                initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.15,
                  ease: "easeOut",
                }}
              >
                {w.word}
                {i === 1 && <br />}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="jr-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Learn. Build. Explore. Contribute. Then take the next step.
          </motion.p>

          <motion.div
            className="jr-progress"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="jr-progressTrack">
              <motion.div
                className="jr-progressFill"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 1.3, ease: "easeOut" }}
              />
            </div>
            <span>2 of 5 steps complete</span>
          </motion.div>
        </div>

        {/* ================= ZIG-ZAG ROADMAP ================= */}

        <div className="jr-roadmap">
          <svg
            className="jr-zigSvg"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="jrBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>

            {/* dashed guide for the whole zig-zag */}
            <motion.path
              d={ZIGZAG_PATH}
              stroke="rgba(118,185,0,0.28)"
              strokeWidth="2"
              strokeLinejoin="round"
              className="jr-upcomingPath"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* glow under achieved part */}
            <motion.path
              d={DONE_PATH}
              stroke="#76b900"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#jrBlur)"
              opacity="0.55"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
            />

            {/* achieved part */}
            <motion.path
              d={DONE_PATH}
              stroke="#76b900"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
            />

            {/* travelling light */}
            <circle r="5" fill="#b6ff3c">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path={ZIGZAG_PATH}
              />
            </circle>
            <circle r="14" fill="#76b900" opacity="0.25" filter="url(#jrBlur)">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path={ZIGZAG_PATH}
              />
            </circle>
          </svg>

          {roadmap.map((item, index) => {
            const isTop = item.y === TOP;

            return (
              <div
                key={item.step}
                className="jr-stepPos"
                style={{
                  left: `${(item.x / VB_W) * 100}%`,
                  top: `${(item.y / VB_H) * 100}%`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: isTop ? -50 : 50, scale: 0.6 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 14,
                    delay: 0.5 + index * 0.22,
                  }}
                >
                  <motion.div
                    className="jr-item"
                    animate={{ y: [0, isTop ? -7 : 7, 0] }}
                    transition={{
                      duration: 3.2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <div
                      className={`jr-node ${item.completed ? "jr-completed" : "jr-upcoming"}`}
                    >
                      <span className="jr-nodeIcon">{item.icon}</span>

                      {item.completed && (
                        <>
                          <span className="jr-ring" />
                          <span className="jr-ring jr-ring2" />
                        </>
                      )}

                      {index === 2 && <span className="jr-nextRing" />}
                    </div>

                    {/* label sits OUTSIDE the zig-zag (above top nodes, below bottom nodes) */}
                    <div
                      className={`jr-label ${isTop ? "jr-labelUp" : "jr-labelDown"}`}
                    >
                      <div
                        className={`jr-stepNumber ${item.completed ? "jr-stepDone" : ""}`}
                      >
                        {item.step}
                      </div>

                      <h3
                        className={
                          item.completed ? "jr-titleDone" : "jr-titleUp"
                        }
                      >
                        {item.title}
                      </h3>

                      <p className={item.completed ? "jr-descDone" : "jr-desc"}>
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ================= DREAM ================= */}

        <motion.div
          className="jr-dream"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="jr-rocket"
            animate={{ y: [0, -14, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀
          </motion.div>

          <motion.div
            className="jr-trail"
            animate={{ height: [30, 60, 30], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <p className="jr-dreamLabel">THE DREAM</p>

          <h3 className="jr-dreamTitle">
            READY TO <span>FLY.</span>
          </h3>

          <p className="jr-dreamText">The journey starts here.</p>
        </motion.div>
      </div>

      {/* Global on purpose: scoped styled-jsx does not reach <motion.*> elements.
          All classes are prefixed "jr-" so nothing leaks. */}
      <style jsx global>{`
        .jr-section {
          position: relative;
          padding: 130px 24px;
          overflow: hidden;
          background: #050505;
          color: #fff;
          text-align: center;
        }

        .jr-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ---------- background ---------- */
        .jr-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .jr-star {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.3;
          animation: jr-twinkle infinite ease-in-out;
        }
        .jr-star:nth-child(5n) {
          width: 3px;
          height: 3px;
        }
        .jr-star:nth-child(7n) {
          width: 1px;
          height: 1px;
        }

        .jr-shoot {
          position: absolute;
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, rgba(118, 185, 0, 0), #b6ff3c);
          opacity: 0;
          transform: rotate(35deg);
          pointer-events: none;
          z-index: 1;
        }
        .jr-shoot1 {
          top: 8%;
          left: 10%;
          animation: jr-shoot 6s 1s infinite ease-out;
        }
        .jr-shoot2 {
          top: 30%;
          left: 55%;
          animation: jr-shoot 8s 3.5s infinite ease-out;
        }
        .jr-shoot3 {
          top: 60%;
          left: 20%;
          animation: jr-shoot 9s 6s infinite ease-out;
        }

        .jr-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          left: 50%;
          top: 50%;
          margin: -400px 0 0 -400px;
          background: radial-gradient(
            circle,
            rgba(118, 185, 0, 0.1),
            transparent 68%
          );
          pointer-events: none;
        }

        /* ---------- header ---------- */
        .jr-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 70px;
        }

        .jr-eyebrow {
          margin: 0 0 24px;
          color: #76b900;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 6px;
          padding-left: 6px;
        }

        .jr-title {
          margin: 0;
          width: 100%;
          text-align: center;
          font-size: clamp(56px, 10vw, 140px);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.05em;
          color: #fff;
        }

        .jr-word {
          display: inline-block;
          margin: 0 0.1em;
        }

        .jr-green {
          color: #76b900;
          background: linear-gradient(
            100deg,
            #76b900 20%,
            #d4ff70 50%,
            #76b900 80%
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: jr-shimmer 4s linear infinite;
          filter: drop-shadow(0 0 22px rgba(118, 185, 0, 0.3));
        }

        .jr-intro {
          max-width: 620px;
          margin: 32px auto 0;
          color: #8c8c8c;
          font-size: 17px;
          line-height: 1.7;
          text-align: center;
        }

        .jr-progress {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: #76b900;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 800;
        }
        .jr-progressTrack {
          width: 240px;
          height: 4px;
          border-radius: 4px;
          background: rgba(118, 185, 0, 0.15);
          overflow: hidden;
        }
        .jr-progressFill {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #76b900, #b6ff3c);
          box-shadow: 0 0 12px rgba(118, 185, 0, 0.7);
        }

        /* ---------- zig-zag roadmap ---------- */
        .jr-roadmap {
          position: relative;
          width: min(1080px, 100%);
          aspect-ratio: 1000 / 480;
          margin: 0 auto;
        }

        .jr-zigSvg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          z-index: 1;
        }

        .jr-upcomingPath {
          stroke-dasharray: 8 10;
          animation: jr-dash 1.2s linear infinite;
        }

        /* the node CENTRE sits exactly on the zig-zag point */
        .jr-stepPos {
          position: absolute;
          width: 82px;
          height: 82px;
          margin: -41px 0 0 -41px;
          z-index: 3;
        }

        .jr-item {
          position: relative;
          width: 82px;
          height: 82px;
        }

        .jr-node {
          position: relative;
          width: 82px;
          height: 82px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(8, 8, 8, 0.97);
          border: 1px solid rgba(118, 185, 0, 0.25);
          color: #666;
          font-size: 27px;
        }

        .jr-node.jr-completed {
          color: #76b900;
          border-color: #76b900;
          background: radial-gradient(
            circle,
            rgba(118, 185, 0, 0.22),
            rgba(8, 8, 8, 0.98) 65%
          );
          animation: jr-nodeGlow 2.5s ease-in-out infinite;
        }
        .jr-node.jr-upcoming {
          opacity: 0.8;
        }

        .jr-nodeIcon {
          position: relative;
          z-index: 3;
        }

        .jr-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(118, 185, 0, 0.35);
          animation: jr-ringPulse 2.5s ease-out infinite;
        }
        .jr-ring2 {
          inset: -18px;
          animation-delay: 0.8s;
        }

        .jr-nextRing {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px dashed rgba(118, 185, 0, 0.6);
          animation: jr-spin 8s linear infinite;
        }

        /* labels */
        .jr-label {
          position: absolute;
          left: 50%;
          width: 220px;
          margin-left: -110px;
          text-align: center;
        }
        .jr-labelUp {
          bottom: calc(100% + 18px);
        }
        .jr-labelDown {
          top: calc(100% + 18px);
        }

        .jr-stepNumber {
          color: #666;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 8px;
          padding-left: 3px;
        }
        .jr-stepDone {
          color: #76b900;
        }

        .jr-label h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.35;
          letter-spacing: 1.5px;
          font-weight: 800;
          white-space: nowrap;
        }
        .jr-titleDone {
          color: #fff;
          text-shadow: 0 0 12px rgba(118, 185, 0, 0.25);
        }
        .jr-titleUp {
          color: #c4c4c4;
        }

        .jr-label p {
          margin: 8px 0 0;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 500;
        }
        .jr-desc {
          color: #777;
        }
        .jr-descDone {
          color: #76b900;
        }

        /* ---------- dream ---------- */
        .jr-dream {
          margin-top: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .jr-rocket {
          font-size: 58px;
          filter: drop-shadow(0 0 10px rgba(118, 185, 0, 0.4))
            drop-shadow(0 0 26px rgba(118, 185, 0, 0.2));
        }
        .jr-trail {
          width: 2px;
          margin: -2px auto 22px;
          background: linear-gradient(
            to bottom,
            #76b900,
            rgba(118, 185, 0, 0.2),
            transparent
          );
          box-shadow: 0 0 8px rgba(118, 185, 0, 0.5);
        }
        .jr-dreamLabel {
          margin: 0 0 14px;
          color: #76b900;
          font-size: 12px;
          letter-spacing: 4px;
          padding-left: 4px;
          font-weight: 500;
        }
        .jr-dreamTitle {
          margin: 0;
          font-size: clamp(38px, 6vw, 72px);
          font-weight: 900;
          letter-spacing: -0.04em;
          text-align: center;
        }
        .jr-dreamTitle span {
          color: #76b900;
          text-shadow: 0 0 24px rgba(118, 185, 0, 0.4);
        }
        .jr-dreamText {
          margin: 14px 0 0;
          color: #777;
          font-size: 15px;
        }

        /* ---------- keyframes ---------- */
        @keyframes jr-twinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.5);
          }
        }
        @keyframes jr-shoot {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(35deg);
          }
          5% {
            opacity: 1;
          }
          20%,
          100% {
            opacity: 0;
            transform: translate(260px, 180px) rotate(35deg);
          }
        }
        @keyframes jr-shimmer {
          to {
            background-position: 250% 50%;
          }
        }
        @keyframes jr-dash {
          to {
            stroke-dashoffset: -18;
          }
        }
        @keyframes jr-spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes jr-nodeGlow {
          0%,
          100% {
            box-shadow:
              0 0 12px rgba(118, 185, 0, 0.3),
              0 0 28px rgba(118, 185, 0, 0.12),
              inset 0 0 20px rgba(118, 185, 0, 0.05);
          }
          50% {
            box-shadow:
              0 0 22px rgba(118, 185, 0, 0.6),
              0 0 48px rgba(118, 185, 0, 0.28),
              inset 0 0 25px rgba(118, 185, 0, 0.12);
          }
        }
        @keyframes jr-ringPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        /* ---------- tablet ---------- */
        @media (max-width: 1000px) {
          .jr-stepPos,
          .jr-item,
          .jr-node {
            width: 66px;
            height: 66px;
          }
          .jr-stepPos {
            margin: -33px 0 0 -33px;
          }
          .jr-node {
            font-size: 22px;
          }
          .jr-label {
            width: 150px;
            margin-left: -75px;
          }
          .jr-label h3 {
            font-size: 11px;
            white-space: normal;
          }
          .jr-label p {
            font-size: 11px;
          }
        }

        /* ---------- mobile: vertical zig-zag ---------- */
        @media (max-width: 760px) {
          .jr-section {
            padding: 90px 18px;
          }
          .jr-header {
            margin-bottom: 50px;
          }
          .jr-roadmap {
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
          .jr-zigSvg {
            display: none;
          }
          .jr-stepPos {
            position: relative;
            left: auto !important;
            top: auto !important;
            width: 82px;
            height: 82px;
            margin: 0;
          }
          .jr-stepPos:nth-of-type(odd) {
            transform: translateX(-60px);
          }
          .jr-stepPos:nth-of-type(even) {
            transform: translateX(60px);
          }
          .jr-labelUp,
          .jr-labelDown {
            top: 50%;
            bottom: auto;
            transform: translateY(-50%);
            margin: 0;
            width: 150px;
            text-align: left;
          }
          .jr-stepPos:nth-of-type(odd) .jr-label {
            left: 100%;
            margin-left: 16px;
          }
          .jr-stepPos:nth-of-type(even) .jr-label {
            left: auto;
            right: 100%;
            margin-right: 16px;
            text-align: right;
          }
          .jr-label h3 {
            font-size: 12px;
          }
          .jr-dream {
            margin-top: 70px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jr-star,
          .jr-shoot,
          .jr-green,
          .jr-upcomingPath,
          .jr-nextRing,
          .jr-node.jr-completed,
          .jr-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
