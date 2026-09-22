"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import StudioNav from "./StudioNav";
import ProjectCard from "./ProjectCard";

import profile from "../src/assets/profile.png";
import project1 from "../src/assets/project1.png";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.png";
import project6 from "../src/assets/project6.png";

const projects = [
  {
    number: "01",
    title: "Fintrack",
    description: "A focused finance experience built around clarity, useful information, and calm interaction.",
    category: "Product",
    year: "2026",
    image: project1,
    href: "/work/fintrack",
  },
  {
    number: "02",
    title: "Cyber Crew Website",
    description: "A community platform redesigned as a polished digital product experience.",
    category: "Web",
    year: "2025",
    image: project6,
    href: "/work/cyber-crew",
  },
  {
    number: "03",
    title: "Wireless Campus Network",
    description: "A systems project presented through a clean, structured product lens.",
    category: "Systems",
    year: "2024",
    image: project3,
    href: "/work/wireless-campus",
  },
  {
    number: "04",
    title: "File Transfer Tool",
    description: "A practical network utility with a simple interface and focused workflow.",
    category: "Tool",
    year: "2025",
    image: project4,
    href: "/work/file-transfer",
  },
];

export default function PortfolioHome() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  return (
    <main>
      <StudioNav />

      <section className="hero">
        <motion.div className="hero-inner" style={{ y: heroY, scale: heroScale }}>
          <div className="hero-topline">
            <span>FRONTEND ENGINEER / CREATIVE TECHNOLOGY</span>
            <span>INDIA / 2026</span>
          </div>

          <div className="hero-title">
            <span>Ideas,</span>
            <span className="hero-title-indent">shaped into</span>
            <span className="serif">digital experiences.</span>
          </div>

          <div className="hero-bottom">
            <p>I design and build expressive interfaces, interactive products, and thoughtful web experiences.</p>
            <a className="circle-cta" href="#work" aria-label="Scroll to selected work">
              <ArrowDown size={20} />
            </a>
          </div>
        </motion.div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core" />
        </div>
      </section>

      <section className="statement">
        <span className="eyebrow">/ 01 — THE APPROACH</span>
        <p>Good digital work is felt before it is explained. I care about the details between design, motion, and code.</p>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">/ 02 — SELECTED WORK</span>
            <h2>Built to be <span className="serif">experienced.</span></h2>
          </div>
          <a href="/work" className="text-link">View all work <ArrowUpRight size={16} /></a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>

      <section className="about-preview">
        <div className="about-image">
          <Image src={profile} alt="Gowtham" fill sizes="(max-width: 768px) 90vw, 42vw" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">/ 03 — ABOUT</span>
          <h2>A developer with a <span className="serif">visual instinct.</span></h2>
          <p>I enjoy turning complex ideas into clear, engaging digital experiences. My work sits between frontend engineering, interface design, and product thinking.</p>
          <a className="text-link" href="/about">More about me <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="capabilities">
        <span className="eyebrow">/ 04 — CAPABILITIES</span>
        <div className="capability-list">
          {[
            ["01", "Frontend Development", "React · Next.js · TypeScript · JavaScript"],
            ["02", "Interface Engineering", "Responsive UI · Component systems · Accessibility"],
            ["03", "Product Thinking", "Interaction · Prototyping · Visual systems"],
          ].map(([n, title, text]) => (
            <div className="capability" key={n}>
              <span>{n}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <span className="eyebrow">/ 05 — LET&apos;S MAKE SOMETHING</span>
        <h2>Have an idea?<br /><span className="serif">Let&apos;s build it.</span></h2>
        <a href="/contact" className="big-link">Start a conversation <ArrowUpRight size={24} /></a>
      </section>

      <footer className="site-footer">
        <span>© 2026 GOWTHAM SATYA SAI</span>
        <div>
          <a href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://www.linkedin.com/in/gowtham-satya-sai-m" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href="mailto:gowthamsatyasai123@gmail.com"><Mail size={17} /> Email</a>
        </div>
      </footer>
    </main>
  );
}
