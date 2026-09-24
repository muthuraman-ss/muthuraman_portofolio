import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProfilePanel } from "@/components/ProfilePanel";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Strengths } from "@/components/Strengths";
import Languages from "@/components/Languages";
import { CareerFocus } from "@/components/CareerFocus";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ProfilePanel />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Strengths />
      <Languages />
      <CareerFocus />
      <Contact />
      <Footer />
    </main>
  );
}
