"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Terminal, ScanLine } from "lucide-react";
import StudioNav from "./StudioNav";
import ProjectCard from "./ProjectCard";
import profile from "../src/assets/profile.png";
import project1 from "../src/assets/project1.png";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.png";
import project6 from "../src/assets/project6.png";

const projects = [
  {number:"01",title:"Fintrack",description:"A focused finance product built for clear tracking, useful information, and calm interaction.",category:"Product",year:"2026",image:project1,href:"/work/fintrack",stack:["Next.js","TypeScript","Prisma"]},
  {number:"02",title:"Cyber Crew",description:"A cybersecurity community platform shaped around events, learning, and a strong digital identity.",category:"Security",year:"2025",image:project6,href:"/work/cyber-crew",stack:["React","Tailwind","Motion"]},
  {number:"03",title:"Wireless Campus",description:"A campus networking project covering architecture, connectivity, and practical infrastructure.",category:"Network",year:"2024",image:project3,href:"/work/wireless-campus",stack:["CCNA","Cisco","Networking"]},
  {number:"04",title:"File Transfer Tool",description:"A practical socket-based utility for direct file sharing with a focused workflow.",category:"Security Tool",year:"2025",image:project4,href:"/work/file-transfer",stack:["Python","Sockets","Networking"]}
];

const services = [
  ["01","Penetration Testing","Web application testing · Recon · Vulnerability research"],
  ["02","Frontend Engineering","React · Next.js · TypeScript · Interactive UI"],
  ["03","Security Engineering","Linux · Networking · Security tooling"]
];

export default function PortfolioHome() {
  const {scrollYProgress} = useScroll();
  const heroY = useTransform(scrollYProgress,[0,.22],[0,-55]);
  const heroOpacity = useTransform(scrollYProgress,[0,.18],[1,.2]);

  return (
    <main className="security-theme">
      <StudioNav/>
      <section className="hero-security">
        <div className="security-noise" aria-hidden="true"/>
        <div className="security-grid" aria-hidden="true"/>
        <div className="security-glow security-glow-a" aria-hidden="true"/>
        <div className="security-glow security-glow-b" aria-hidden="true"/>
        <div className="hero-security-inner">
          <motion.div className="hero-security-copy" style={{y:heroY,opacity:heroOpacity}}>
            <div className="hero-status"><span className="hero-status-dot"/> Available for opportunities <span className="hero-status-line"/></div>
            <div className="hero-security-title">
              <span className="hero-ghost">SECURITY</span>
              <span className="hero-script">Gowtham Sai</span>
              <h1><span>HACK.</span><span>LEARN.</span><em>BUILD.</em></h1>
            </div>
            <p className="hero-security-sub">Cybersecurity engineer focused on offensive security, secure systems, and modern digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View my work <ArrowUpRight size={16}/></a>
              <a className="button button-ghost" href="/contact">Let&apos;s connect <ArrowUpRight size={16}/></a>
            </div>
          </motion.div>
          <div className="hero-portrait-wrap">
            <div className="hero-portrait-glow"/>
            <div className="hero-portrait">
              <Image src={profile} alt="Gowtham" fill priority sizes="(max-width: 800px) 82vw, 54vw"/>
            </div>
            <div className="hero-orb-label hero-orb-label-a">ETHICAL<br/>HACKING</div>
            <div className="hero-orb-label hero-orb-label-b">CYBER<br/>SECURITY</div>
          </div>
          <aside className="hero-note">
            <div className="hero-note-copy"><strong>Building a safer<br/>digital world through<br/>offensive security.</strong><span className="hero-note-rule"/><a href="/contact">Let&apos;s connect <ArrowUpRight size={15}/></a></div>
            <div className="hero-sticker"><ShieldCheck size={25}/><span>OPEN<br/>TO<br/>OPPORTUNITIES</span><ArrowUpRight size={15}/></div>
          </aside>
          <div className="hero-scroll"><div className="hero-scroll-icon">↓</div><span>SCROLL DOWN</span></div>
        </div>
      </section>

      <section className="security-marquee">
        <div className="security-marquee-track">
          {["PENETRATION TESTING","WEB SECURITY","LINUX","NETWORKING","REACT","NEXT.JS","PYTHON","BURP SUITE","NMAP","PENETRATION TESTING","WEB SECURITY","LINUX"].map((item,i)=><span key={item+i}>{item}<b>✦</b></span>)}
        </div>
      </section>

      <section className="security-intro">
        <div className="security-label"><span>/ 01</span><span>PROFILE</span></div>
        <div className="security-intro-content">
          <p className="security-intro-lead">I turn curiosity into <span className="serif">secure solutions.</span></p>
          <p className="security-intro-copy">My work combines cybersecurity, software engineering, and interface design—building tools and experiences that make technical systems practical, understandable, and safer to use.</p>
          <div className="security-stat-row"><div><strong>01</strong><span>Security focus</span></div><div><strong>20+</strong><span>Projects & labs</span></div><div><strong>2000+</strong><span>Students trained</span></div></div>
        </div>
      </section>

      <section id="work" className="security-work">
        <div className="section-heading"><div><span className="eyebrow">/ 02 — SELECTED WORK</span><h2>Built to <span className="serif">solve.</span></h2></div><a href="/work" className="button button-ghost">View all projects <ArrowUpRight size={16}/></a></div>
        <div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.title} project={project} index={index}/>)}</div>
      </section>

      <section id="ctf" className="ctf-banner">
        <div className="ctf-glow"/>
        <div className="ctf-icon"><Terminal size={24}/></div>
        <div><span className="eyebrow">/ 03 — SECURITY PRACTICE</span><h2>CTFs, labs & <span className="serif">offensive security.</span></h2><p>Hands-on practice across web security, network exploitation, reconnaissance, and vulnerability research.</p></div>
        <a href="/about" className="button button-primary">Explore profile <ArrowUpRight size={16}/></a>
      </section>

      <section className="security-about">
        <div className="security-about-image"><Image src={profile} alt="Gowtham" fill sizes="(max-width:800px) 92vw, 45vw"/></div>
        <div className="security-about-copy"><span className="eyebrow">/ 04 — ABOUT ME</span><h2>Security brain.<br/><span className="serif">Builder&apos;s mindset.</span></h2><p>I enjoy moving between reconnaissance, code, systems, and interface design. The common thread is simple: understand how something works, find where it can improve, and build a better result.</p><a className="text-link" href="/about">More about me <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="security-capabilities">
        <div className="security-label"><span>/ 05</span><span>CAPABILITIES</span></div>
        <div className="capability-list">{services.map(([n,title,text])=><div className="capability" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ScanLine className="capability-arrow" size={18}/></div>)}</div>
      </section>

      <section className="security-contact">
        <div className="contact-top"><span className="eyebrow">/ 06 — CONTACT</span><Mail size={18}/></div>
        <h2>Have a problem<br/><span className="serif">worth solving?</span></h2>
        <div className="contact-bottom"><p>Open to cybersecurity, frontend engineering, internships, collaborations, and useful products.</p><a className="big-link" href="/contact">Start a conversation <ArrowUpRight size={20}/></a></div>
      </section>

      <footer className="site-footer"><span>© 2026 GOWTHAM SATYA SAI</span><div><a href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer"><Github size={13}/> GitHub</a><a href="https://www.linkedin.com/in/gowtham-satya-sai-m" target="_blank" rel="noreferrer"><Linkedin size={13}/> LinkedIn</a><a href="mailto:gowthamsatyasai123@gmail.com"><Mail size={13}/> Email</a></div></footer>
    </main>
  );
}