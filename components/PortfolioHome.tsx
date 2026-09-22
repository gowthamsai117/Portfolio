"use client";

import Image from "next/image";
import {motion,useScroll,useTransform} from "motion/react";
import {ArrowDown,ArrowUpRight,Github,Linkedin,Mail,Sparkles} from "lucide-react";
import StudioNav from "./StudioNav";
import ProjectCard from "./ProjectCard";
import profile from "../src/assets/profile.png";
import project1 from "../src/assets/project1.png";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.png";
import project6 from "../src/assets/project6.png";

const projects=[
 {number:"01",title:"Fintrack",description:"A focused finance experience built around clarity, useful information, and calm interaction.",category:"Product",year:"2026",image:project1,href:"/work/fintrack",stack:["Next.js","TypeScript","Prisma"]},
 {number:"02",title:"Cyber Crew",description:"A cybersecurity community platform designed around events, learning, and a strong visual identity.",category:"Web",year:"2025",image:project6,href:"/work/cyber-crew",stack:["React","Tailwind","UI"]},
 {number:"03",title:"Wireless Campus",description:"A campus networking project translated into a clear systems and infrastructure experience.",category:"Systems",year:"2024",image:project3,href:"/work/wireless-campus",stack:["CCNA","Networking","Cisco"]},
 {number:"04",title:"File Transfer Tool",description:"A practical network utility with a simple interface and focused file-sharing workflow.",category:"Tool",year:"2025",image:project4,href:"/work/file-transfer",stack:["Python","Sockets","Networking"]}
];
const services=[["01","Frontend Engineering","React · Next.js · TypeScript"],["02","Interface Design","Responsive UI · Motion · Accessibility"],["03","Product Development","APIs · Databases · Full-stack thinking"]];

export default function PortfolioHome(){
 const {scrollYProgress}=useScroll();
 const heroY=useTransform(scrollYProgress,[0,.2],[0,-70]);
 const heroOpacity=useTransform(scrollYProgress,[0,.12],[1,.15]);
 return <main>
  <StudioNav/>
  <section className="hero">
   <div className="hero-grid" aria-hidden="true"/><motion.div className="hero-glow" aria-hidden="true" style={{opacity:heroOpacity}}/>
   <motion.div className="hero-inner" style={{y:heroY}}>
    <div className="hero-topline"><span><i className="live-dot"/> Frontend engineer · Creative technology</span><span>India · 2026</span></div>
    <div className="hero-copy"><span className="hero-kicker">Hello, I&apos;m Gowtham.</span><h1>I build <span className="serif">digital</span><br/>experiences that <span className="hero-outline">feel</span>.</h1><p className="hero-description">Frontend engineer focused on expressive interfaces, interactive products, and thoughtful web experiences.</p></div>
    <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={16}/></a><a className="button button-ghost" href="/contact">Let&apos;s talk <ArrowUpRight size={16}/></a></div>
    <div className="hero-bottom"><span>Scroll to explore</span><div className="scroll-line"><span/></div><span>01 / 05</span></div>
   </motion.div>
   <div className="hero-orbit" aria-hidden="true"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-core"/></div>
  </section>
  <section className="ticker"><div className="ticker-track">{["NEXT.JS","REACT","TYPESCRIPT","JAVASCRIPT","PYTHON","UI ENGINEERING","MOTION","NEXT.JS","REACT","TYPESCRIPT"].map((item,i)=><span key={item+i}>{item}<b>✦</b></span>)}</div></section>
  <section className="statement"><div className="section-index"><span>/ 01</span><span>THE APPROACH</span></div><div><p className="statement-lead">I care about the space between <span className="serif">design, motion, and code.</span></p><p className="statement-copy">The best interfaces are not just attractive. They make complex ideas easier to understand, products easier to use, and people more confident about what happens next.</p></div></section>
  <section id="work" className="work-section"><div className="section-heading"><div><span className="eyebrow">/ 02 — SELECTED WORK</span><h2>Things I&apos;ve <span className="serif">built.</span></h2></div><a href="/work" className="button button-ghost">View all projects <ArrowUpRight size={16}/></a></div><div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.title} project={project} index={index}/>)}</div></section>
  <section className="about-preview"><div className="about-image-wrap"><div className="about-image"><Image src={profile} alt="Gowtham" fill sizes="(max-width: 800px) 90vw, 42vw"/><div className="image-label">GOWTHAM · 2026</div></div><div className="about-image-caption"><span>Based in India</span><span>Building for the web</span></div></div><div className="about-copy"><span className="eyebrow">/ 03 — ABOUT ME</span><h2>A developer with a <span className="serif">visual instinct.</span></h2><p>I enjoy turning complex ideas into clear, engaging digital experiences. My work sits between frontend engineering, interface design, and product thinking.</p><a className="text-link" href="/about">More about me <ArrowUpRight size={16}/></a><div className="mini-stats"><div><strong>2000+</strong><span>Students trained</span></div><div><strong>20+</strong><span>Projects & labs</span></div><div><strong>3+</strong><span>Years learning & building</span></div></div></div></section>
  <section className="capabilities"><div className="section-index"><span>/ 04</span><span>CAPABILITIES</span></div><div className="capability-list">{services.map(([n,title,text])=><div className="capability" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="capability-arrow" size={18}/></div>)}</div></section>
  <section className="contact-cta"><div className="contact-top"><span className="eyebrow">/ 05 — CONTACT</span><Sparkles size={18}/></div><h2>Have an idea?<br/><span className="serif">Let&apos;s build it.</span></h2><div className="contact-bottom"><p>Open to frontend roles, internships, collaborations, and interesting products.</p><a className="big-link" href="/contact">Start a conversation <ArrowUpRight size={20}/></a></div></section>
  <footer className="site-footer"><span>© 2026 GOWTHAM SATYA SAI</span><div><a href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer"><Github size={13}/> GitHub</a><a href="https://www.linkedin.com/in/gowtham-satya-sai-m" target="_blank" rel="noreferrer"><Linkedin size={13}/> LinkedIn</a><a href="mailto:gowthamsatyasai123@gmail.com"><Mail size={13}/> Email</a></div></footer>
 </main>;
}