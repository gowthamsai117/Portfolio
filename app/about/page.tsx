import StudioNav from "@/components/StudioNav";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import profile from "../../src/assets/profile.png";

export default function AboutPage() {
  return (
    <>
      <StudioNav />
      <main className="page-shell">
        <span className="eyebrow">/ 03 — ABOUT</span>
        <h1 className="page-title">Developer, builder, <span className="serif">curious by default.</span></h1>
        <section className="about-preview">
          <div className="about-image"><Image src={profile} alt="Gowtham" fill sizes="(max-width: 800px) 90vw, 45vw" /></div>
          <div className="about-copy">
            <span className="eyebrow">THE PERSON BEHIND THE INTERFACE</span>
            <p>I enjoy turning complex ideas into clear, engaging digital experiences. My work sits between frontend engineering, interface design, and product thinking.</p>
            <p>My toolkit includes React, Next.js, TypeScript, JavaScript, Python, APIs, databases, and modern component-driven development.</p>
            <a className="text-link" href="/contact">Work together <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>
    </>
  );
}
