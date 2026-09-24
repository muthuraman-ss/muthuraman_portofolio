"use client";

import React, { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "All fields are required.",
      });
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setStatus({
        type: "error",
        message: "Please enter a valid email.",
      });
      return;
    }

    if (message.length < 10) {
      setStatus({
        type: "error",
        message: "Please enter at least 10 characters in your message.",
      });
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Contact form is not configured yet. Please email me directly.",
      });
      return;
    }

    setIsSending(true);

    setStatus({
      type: "sending",
      message: "Sending your message...",
    });

    try {
      const formData = new FormData(form);

      formData.append("access_key", accessKey);
      formData.append("subject", `New Portfolio Message from ${name}`);
      formData.append("from_name", "Muthuraman Portfolio");
      formData.append("redirect", "false");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:mr8482742@gmail.com?subject=Portfolio%20Contact";
  };

  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/muthuraman-s-232047253/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contact" className="contactSection">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="contactGrid" />
      <div className="contactGlow contactGlowOne" />
      <div className="contactGlow contactGlowTwo" />

      <div className="contactContainer">
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="contactTop">
          <div className="contactIndex">
            <span>01</span>
            <div />
            <span>CONTACT</span>
          </div>

          <div className="availability">
            <span className="availabilityDot" />
            OPEN TO OPPORTUNITIES
          </div>
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <div className="contactHero">
          <p className="contactEyebrow">LET'S BUILD SOMETHING</p>

          <h2>
            LET'S
            <br />
            <span>CONNECT.</span>
          </h2>

          <p className="contactIntro">
            Have a testing challenge, opportunity, or project in mind?
            <br className="desktopBreak" />
            Let's turn the next idea into something real.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="contactLayout">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="contactLeft">
            <div className="contactStatement">
              <span className="statementLine" />

              <p>
                GOOD SOFTWARE
                <br />
                DESERVES
                <br />
                <strong>GREAT QUALITY.</strong>
              </p>
            </div>

            {/* Contact information */}

            <div className="infoList">
              {/* Location */}

              <div className="infoItem">
                <div className="infoIcon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div>
                  <span>BASED IN</span>
                  <p>Coimbatore, Tamil Nadu</p>
                </div>
              </div>

              {/* Email */}

              <div className="infoItem">
                <div className="infoIcon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <span>EMAIL</span>
                  <p>mr8482742@gmail.com</p>
                </div>
              </div>

              {/* Phone */}

              <div className="infoItem">
                <div className="infoIcon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.63a2 2 0 0 1-.45 2.11L9.04 10.73a16 16 0 0 0 4.23 4.23l1.27-1.27a2 2 0 0 1 2.11-.45c.85.32 1.73.54 2.63.66A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <div>
                  <span>PHONE</span>
                  <p>+91 95666 88434</p>
                </div>
              </div>

              {/* LinkedIn */}

              <div className="infoItem">
                <div className="infoIcon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>

                <div>
                  <span>LINKEDIN</span>
                  <p>linkedin.com/in/muthuraman-s-232047253</p>
                </div>
              </div>
            </div>

            {/* =================================================
                SOCIAL ACTIONS
            ================================================== */}

            <div className="contactActions">
              <button
                type="button"
                className="primaryAction"
                onClick={handleEmail}
              >
                <span>EMAIL ME</span>

                <span className="actionArrow">↗</span>
              </button>

              <button
                type="button"
                className="secondaryAction"
                onClick={handleLinkedIn}
              >
                <span>LINKEDIN</span>

                <span className="actionArrow">↗</span>
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — FORM
          ================================================== */}

          <div className="formWrapper">
            <div className="formHeader">
              <div>
                <span className="formEyebrow">START A CONVERSATION</span>

                <h3>Tell me what you're building.</h3>
              </div>

              <span className="formNumber">02</span>
            </div>

            {/* Status */}

            {status && (
              <div
                className={`statusMessage ${
                  status.type === "success" || status.type === "sending"
                    ? "statusSuccess"
                    : "statusError"
                }`}
              >
                <span>
                  {status.type === "success"
                    ? "✓"
                    : status.type === "sending"
                      ? "..."
                      : "!"}
                </span>

                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}

              <div className="field">
                <label htmlFor="contact-name">
                  <span>01</span>
                  YOUR NAME
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  required
                  disabled={isSending}
                />
              </div>

              {/* Email */}

              <div className="field">
                <label htmlFor="contact-email">
                  <span>02</span>
                  EMAIL ADDRESS
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={isSending}
                />
              </div>

              {/* Message */}

              <div className="field">
                <label htmlFor="contact-message">
                  <span>03</span>
                  YOUR MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your opportunity..."
                  minLength={10}
                  maxLength={2000}
                  required
                  disabled={isSending}
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="submitButton"
                disabled={isSending}
              >
                <span>{isSending ? "SENDING..." : "SEND MESSAGE"}</span>

                <span className="submitArrow">{isSending ? "..." : "→"}</span>
              </button>
            </form>

            <div className="formFooter">
              <span>RESPONSE TIME</span>
              <strong>WITHIN 24–48 HOURS</strong>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL SIGNATURE
        ====================================================== */}

        <div className="contactFooter">
          <div className="footerLine" />

          <div className="footerContent">
            <span>QUALITY IS NOT AN AFTERTHOUGHT.</span>

            <span>© {new Date().getFullYear()} MUTHURAMAN S</span>

            <span>BUILT WITH PURPOSE.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =====================================================
           SECTION
        ====================================================== */

        .contactSection {
          position: relative;

          min-height: 100vh;

          padding: 140px 24px 70px;

          overflow: hidden;

          background: #050505;

          color: #ffffff;
        }

        .contactContainer {
          position: relative;

          width: 100%;

          max-width: 1250px;

          margin: 0 auto;

          z-index: 3;
        }

        /* =====================================================
           BACKGROUND GRID
        ====================================================== */

        .contactGrid {
          position: absolute;

          inset: 0;

          opacity: 0.22;

          background-image:
            linear-gradient(rgba(118, 185, 0, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(118, 185, 0, 0.06) 1px, transparent 1px);

          background-size: 70px 70px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 20%,
            black 80%,
            transparent
          );

          pointer-events: none;
        }

        .contactGlow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(10px);
        }

        .contactGlowOne {
          width: 600px;
          height: 600px;

          top: 15%;
          left: -280px;

          background: radial-gradient(
            circle,
            rgba(118, 185, 0, 0.12),
            transparent 70%
          );
        }

        .contactGlowTwo {
          width: 700px;
          height: 700px;

          right: -350px;
          bottom: -200px;

          background: radial-gradient(
            circle,
            rgba(118, 185, 0, 0.09),
            transparent 70%
          );
        }

        /* =====================================================
           TOP BAR
        ====================================================== */

        .contactTop {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 80px;
        }

        .contactIndex {
          display: flex;

          align-items: center;

          gap: 14px;

          color: #6d6d6d;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 3px;
        }

        .contactIndex span:first-child {
          color: #76b900;
        }

        .contactIndex div {
          width: 55px;

          height: 1px;

          background: rgba(118, 185, 0, 0.4);
        }

        .availability {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #777777;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 2px;
        }

        .availabilityDot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #76b900;

          box-shadow:
            0 0 8px #76b900,
            0 0 18px rgba(118, 185, 0, 0.5);

          animation: pulseDot 2s infinite;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .contactHero {
          position: relative;

          margin-bottom: 100px;
        }

        .contactEyebrow {
          margin: 0 0 18px;

          color: #76b900;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 5px;
        }

        .contactHero h2 {
          margin: 0;

          max-width: 900px;

          font-size: clamp(70px, 12vw, 160px);

          line-height: 0.78;

          font-weight: 900;

          letter-spacing: -9px;
        }

        .contactHero h2 span {
          color: #76b900;

          text-shadow:
            0 0 30px rgba(118, 185, 0, 0.2),
            0 0 80px rgba(118, 185, 0, 0.08);
        }

        .contactIntro {
          max-width: 600px;

          margin: 38px 0 0;

          color: #777777;

          font-size: 16px;

          line-height: 1.8;
        }

        /* =====================================================
           MAIN LAYOUT
        ====================================================== */

        .contactLayout {
          display: grid;

          grid-template-columns: 0.9fr 1.1fr;

          gap: 100px;

          align-items: start;
        }

        /* =====================================================
           LEFT
        ====================================================== */

        .contactLeft {
          padding-top: 20px;
        }

        .contactStatement {
          display: flex;

          gap: 20px;

          margin-bottom: 55px;
        }

        .statementLine {
          width: 2px;

          min-height: 110px;

          background: linear-gradient(to bottom, #76b900, transparent);

          box-shadow: 0 0 15px rgba(118, 185, 0, 0.3);
        }

        .contactStatement p {
          margin: 0;

          color: #666666;

          font-size: 18px;

          font-weight: 700;

          line-height: 1.35;

          letter-spacing: -0.3px;
        }

        .contactStatement strong {
          color: #ffffff;
        }

        /* =====================================================
           INFO LIST
        ====================================================== */

        .infoList {
          display: flex;

          flex-direction: column;

          gap: 18px;
        }

        .infoItem {
          display: flex;

          align-items: center;

          gap: 18px;

          padding: 17px;

          border: 1px solid rgba(255, 255, 255, 0.06);

          background: rgba(255, 255, 255, 0.015);

          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .infoItem:hover {
          transform: translateX(6px);

          border-color: rgba(118, 185, 0, 0.35);

          background: rgba(118, 185, 0, 0.035);
        }

        .infoIcon {
          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border: 1px solid rgba(118, 185, 0, 0.2);

          background: rgba(118, 185, 0, 0.06);

          color: #76b900;
        }

        .infoIcon svg {
          width: 19px;
          height: 19px;
        }

        .infoItem span {
          display: block;

          margin-bottom: 5px;

          color: #555555;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .infoItem p {
          margin: 0;

          color: #d5d5d5;

          font-size: 13px;

          word-break: break-word;
        }

        /* =====================================================
           ACTION BUTTONS
        ====================================================== */

        .contactActions {
          display: flex;

          gap: 12px;

          margin-top: 28px;
        }

        .primaryAction,
        .secondaryAction {
          min-height: 52px;

          padding: 0 20px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;

          border-radius: 0;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 2px;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        }

        .primaryAction {
          border: 1px solid #76b900;

          background: #76b900;

          color: #050505;
        }

        .secondaryAction {
          border: 1px solid rgba(255, 255, 255, 0.2);

          background: transparent;

          color: #ffffff;
        }

        .primaryAction:hover,
        .secondaryAction:hover {
          transform: translateY(-3px);
        }

        .primaryAction:hover {
          box-shadow: 0 10px 35px rgba(118, 185, 0, 0.2);
        }

        .secondaryAction:hover {
          border-color: #76b900;

          color: #76b900;
        }

        .actionArrow {
          font-size: 18px;

          line-height: 1;
        }

        /* =====================================================
           FORM PANEL
        ====================================================== */

        .formWrapper {
          position: relative;

          padding: 38px;

          border: 1px solid rgba(255, 255, 255, 0.09);

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.045),
            rgba(255, 255, 255, 0.012)
          );

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);

          overflow: hidden;
        }

        .formWrapper::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;

          height: 2px;

          background: linear-gradient(90deg, transparent, #76b900, transparent);

          box-shadow: 0 0 20px rgba(118, 185, 0, 0.5);
        }

        .formWrapper::after {
          content: "";

          position: absolute;

          width: 100px;
          height: 100px;

          right: -50px;
          top: -50px;

          border: 1px solid rgba(118, 185, 0, 0.2);

          transform: rotate(45deg);
        }

        .formHeader {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          margin-bottom: 40px;
        }

        .formEyebrow {
          display: block;

          margin-bottom: 10px;

          color: #76b900;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 3px;
        }

        .formHeader h3 {
          margin: 0;

          max-width: 420px;

          color: #ffffff;

          font-size: 28px;

          line-height: 1.1;

          font-weight: 700;

          letter-spacing: -1px;
        }

        .formNumber {
          color: #333333;

          font-size: 38px;

          font-weight: 900;

          line-height: 1;
        }

        /* =====================================================
           STATUS
        ====================================================== */

        .statusMessage {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 13px 15px;

          margin-bottom: 25px;

          font-size: 12px;
        }

        .statusMessage span {
          font-weight: 900;
        }

        .statusSuccess {
          border: 1px solid rgba(118, 185, 0, 0.3);

          background: rgba(118, 185, 0, 0.08);

          color: #76b900;
        }

        .statusError {
          border: 1px solid rgba(255, 70, 70, 0.3);

          background: rgba(255, 70, 70, 0.07);

          color: #ff7070;
        }

        /* =====================================================
           FORM
        ====================================================== */

        .field {
          margin-bottom: 28px;
        }

        .field label {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 10px;

          color: #777777;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .field label span {
          color: #76b900;

          font-size: 9px;
        }

        .field input,
        .field textarea {
          width: 100%;

          box-sizing: border-box;

          border: none;

          border-bottom: 1px solid rgba(255, 255, 255, 0.13);

          border-radius: 0;

          outline: none;

          background: transparent;

          color: #ffffff;

          font-family: Inter, Arial, Helvetica, sans-serif;

          font-size: 15px;

          transition:
            border-color 0.3s ease,
            padding 0.3s ease;
        }

        .field input {
          height: 52px;

          padding: 0;
        }

        .field textarea {
          min-height: 125px;

          padding: 14px 0;

          resize: vertical;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #444444;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: #76b900;

          padding-left: 8px;

          box-shadow: 0 5px 0 -4px rgba(118, 185, 0, 0.3);
        }

        /* =====================================================
           SUBMIT
        ====================================================== */

        .submitButton {
          width: 100%;

          min-height: 58px;

          padding: 0 20px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          border: none;

          background: #76b900;

          color: #050505;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 2px;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .submitButton:hover {
          transform: translateY(-3px);

          box-shadow: 0 12px 35px rgba(118, 185, 0, 0.25);
        }

        .submitButton:disabled {
          cursor: not-allowed;

          opacity: 0.65;

          transform: none;
        }

        .submitButton:disabled:hover {
          transform: none;

          box-shadow: none;
        }

        .submitArrow {
          font-size: 23px;

          transition: transform 0.3s ease;
        }

        .submitButton:hover .submitArrow {
          transform: translateX(6px);
        }

        .submitButton:disabled:hover .submitArrow {
          transform: none;
        }

        /* =====================================================
           FORM FOOTER
        ====================================================== */

        .formFooter {
          display: flex;

          justify-content: space-between;

          gap: 20px;

          margin-top: 22px;

          color: #444444;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }

        .formFooter strong {
          color: #666666;
        }

        /* =====================================================
           FOOTER
        ====================================================== */

        .contactFooter {
          margin-top: 120px;
        }

        .footerLine {
          width: 100%;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(118, 185, 0, 0.35),
            transparent
          );
        }

        .footerContent {
          display: flex;

          justify-content: space-between;

          padding-top: 20px;

          color: #333333;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        /* =====================================================
           ANIMATION
        ====================================================== */

        @keyframes pulseDot {
          0%,
          100% {
            opacity: 1;

            transform: scale(1);
          }

          50% {
            opacity: 0.45;

            transform: scale(0.7);
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .contactSection {
            padding-top: 110px;
          }

          .contactHero h2 {
            font-size: clamp(68px, 13vw, 110px);

            letter-spacing: -6px;
          }

          .contactLayout {
            grid-template-columns: 1fr;

            gap: 70px;
          }

          .contactLeft {
            max-width: 650px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {
          .contactSection {
            padding: 85px 18px 50px;
          }

          .contactTop {
            margin-bottom: 60px;
          }

          .availability {
            display: none;
          }

          .contactHero {
            margin-bottom: 70px;
          }

          .contactHero h2 {
            font-size: clamp(58px, 17vw, 90px);

            line-height: 0.82;

            letter-spacing: -5px;
          }

          .contactIntro {
            font-size: 14px;

            margin-top: 30px;
          }

          .desktopBreak {
            display: none;
          }

          .contactStatement {
            margin-bottom: 40px;
          }

          .contactStatement p {
            font-size: 16px;
          }

          .infoItem p {
            font-size: 12px;
          }

          .contactActions {
            flex-direction: column;
          }

          .primaryAction,
          .secondaryAction {
            width: 100%;
          }

          .formWrapper {
            padding: 25px 20px;
          }

          .formHeader h3 {
            font-size: 23px;
          }

          .formNumber {
            font-size: 28px;
          }

          .footerContent {
            flex-direction: column;

            gap: 10px;

            line-height: 1.5;
          }

          .contactFooter {
            margin-top: 80px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .availabilityDot {
            animation: none;
          }

          .infoItem,
          .primaryAction,
          .secondaryAction,
          .submitButton {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
