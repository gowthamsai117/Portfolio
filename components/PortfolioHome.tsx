"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Github, Linkedin, Mail, Terminal, ScanLine } from "lucide-react";
import StudioNav from "./StudioNav";
import ProjectCard from "./ProjectCard";
import profile from "../src/assets/profile-hero.webp";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.png";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.png";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.png";

const projects = [
  {number:"01",title:"Vulnerability Web Scanner",description:"A Python-based web scanner focused on OWASP Top 10 checks and reconnaissance.",category:"Cybersecurity",year:"2025",image:project1,href:"/work/vulnerability-web-scanner",stack:["Python","Linux","JSON"]},
  {number:"02",title:"Cyber Crew Website",description:"A cybersecurity community platform for research, events, workshops, and technical content.",category:"Web Security",year:"2025",image:project6,href:"/work/cyber-crew",stack:["React","Node.js","Tailwind"]},
  {number:"03",title:"Wireless Campus Network",description:"A Cisco Packet Tracer network simulation connecting services and IoT devices across a smart campus.",category:"Networking",year:"2024",image:project3,href:"/work/wireless-campus",stack:["Cisco","Packet Tracer","Networking"]},
  {number:"04",title:"Keylogger",description:"A Python and Linux security project for keystroke capture and controlled monitoring research.",category:"Security Research",year:"2025",image:project2,href:"/work/keylogger",stack:["Python","Linux"]},
  {number:"05",title:"File Transfer Tool",description:"A UDP-based network utility for fast file sharing between devices.",category:"Security Tool",year:"2025",image:project4,href:"/work/file-transfer",stack:["Python","UDP","Networking"]},
  {number:"06",title:"Pixel Image Encryption",description:"An image encryption project using pixel manipulation techniques to protect image data.",category:"Cryptography",year:"2025",image:project5,href:"/work/pixel-image-encryption",stack:["Python","HTML","CSS"]}
];

const services = [
  ["01","Penetration Testing","Web application testing · Recon · Vulnerability research"],
  ["02","Frontend Engineering","React · Next.js · TypeScript · Interactive UI"],
  ["03","Security Engineering","Linux · Networking · Security tooling"]
];

export default function PortfolioHome() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const q = gsap.utils.selector(root);
    const ctx = gsap.context(() => {
      gsap.set(q(".hero-ghost-bg"), { opacity: 0, x: -70 });
      gsap.set(q(".hero-portrait-wrap"), { opacity: 0, y: 55, scale: 0.96 });
      gsap.set(q(".hero-script span"), { opacity: 0, y: 22 });
      gsap.set(q(".hero-orb-label"), { opacity: 0, scale: 0.82 });
      gsap.set(q(".hero-security-copy > *"), { opacity: 0, y: 28 });
      gsap.set(q(".hero-note"), { opacity: 0, x: 35, y: 18 });
      gsap.set(q(".hero-scroll"), { opacity: 0, y: 12 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to(q(".hero-ghost-bg"), { opacity: 0.5, x: 0, duration: 1.05 })
        .to(q(".hero-portrait-wrap"), { opacity: 1, y: 0, scale: 1, duration: 1.15 }, "-=.72")
        .to(q(".hero-script span"), { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: "power2.out" }, "-=.72")
        .to(q(".hero-security-copy > *"), { opacity: 1, y: 0, duration: 0.62, stagger: 0.08 }, "-=.55")
        .to(q(".hero-orb-label"), { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, "-=.42")
        .to(q(".hero-note"), { opacity: 1, x: 0, y: 0, duration: 0.7 }, "-=.42")
        .to(q(".hero-scroll"), { opacity: 1, y: 0, duration: 0.5 }, "-=.3");

      const portrait = q(".hero-portrait-wrap");
      const script = q(".hero-script");
      const glow = q(".hero-portrait-glow");

      const moveX = gsap.quickTo(portrait, "x", { duration: 0.7, ease: "power3" });
      const moveY = gsap.quickTo(portrait, "y", { duration: 0.7, ease: "power3" });
      const scriptX = gsap.quickTo(script, "x", { duration: 1, ease: "power3" });
      const scriptY = gsap.quickTo(script, "y", { duration: 1, ease: "power3" });
      const glowX = gsap.quickTo(glow, "x", { duration: 1.1, ease: "power3" });
      const glowY = gsap.quickTo(glow, "y", { duration: 1.1, ease: "power3" });

      const onPointer = (event: MouseEvent) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        moveX(x * 18);
        moveY(y * 10);
        scriptX(x * -12);
        scriptY(y * -7);
        glowX(x * 28);
        glowY(y * 18);
      };

      const onScroll = () => {
        const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
        gsap.to(q(".hero-portrait-wrap"), {
          y: progress * -42,
          duration: 0.7,
          overwrite: true,
          ease: "power2.out"
        });
        gsap.to(q(".hero-ghost-bg"), {
          y: progress * -26,
          duration: 0.7,
          overwrite: true,
          ease: "power2.out"
        });
        gsap.to(q(".hero-script"), {
          y: progress * -18,
          duration: 0.7,
          overwrite: true,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", onPointer, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        window.removeEventListener("mousemove", onPointer);
        window.removeEventListener("scroll", onScroll);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main className="security-theme">
      <StudioNav/>
      <section ref={heroRef} className="hero-security">
        <div className="security-noise" aria-hidden="true"/>
        <div className="security-grid" aria-hidden="true"/>
        <div className="security-glow security-glow-a" aria-hidden="true"/>
        <div className="security-glow security-glow-b" aria-hidden="true"/>
        <div className="hero-red-disc" aria-hidden="true"/>
        <div className="hero-security-inner">
          <span className="hero-ghost-bg" aria-hidden="true">SECURITY</span>

          <div className="hero-security-copy">
            <div className="hero-kicker">HELLO, I&apos;M <strong>GOWTHAM</strong></div>
            <div className="hero-security-title">
              <h1><span>HACK</span><span>LEARN</span><em>BUILD.</em></h1>
            </div>
            <p className="hero-security-sub">Turning curiosity into secure solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View My Work <ArrowUpRight size={16}/></a>
            </div>
          </div>

          <div className="hero-script" aria-hidden="true">
            <span>Gowtham</span>
            <span>Sai</span>
          </div>

          <div className="hero-portrait-wrap">
            <div className="hero-portrait-glow"/>
            <div className="hero-portrait">
              <Image src={profile} alt="Gowtham" fill priority sizes="(max-width: 800px) 92vw, 66vw"/>
            </div>
            <div className="hero-orb-label hero-orb-label-a">Ethical Hacking</div>
            <div className="hero-orb-label hero-orb-label-b">Cyber Security</div>
          </div>

          <aside className="hero-note">
            <div className="hero-note-copy">
              <strong>Building a safer<br/>digital world through<br/>offensive security.</strong>
              <span className="hero-note-rule"/>
              <a href="/contact">Let&apos;s connect <ArrowUpRight size={15}/></a>
            </div>
            <div className="hero-sticker"><span>HIRE ME</span><ArrowUpRight size={15}/></div>
          </aside>

          <div className="hero-scroll"><div className="hero-scroll-icon">⌄</div><span>SCROLL DOWN</span></div>
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
        <div><span className="eyebrow">/ 03 — SECURITY PRACTICE</span><h2>CTFs, labs & <span className="serif">field practice.</span></h2><p>Hands-on security practice through CTFs, web testing, reconnaissance, network labs, and vulnerability research.</p></div>
        <a href="/about" className="button button-primary">View security profile <ArrowUpRight size={16}/></a>
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