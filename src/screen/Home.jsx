import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import profile from "../assets/profile.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.png";
import project6 from "../assets/project6.png";
import resume from "../assets/resume.pdf";

const projects = [
  { no:"01", title:"Fintrack", type:"Product / Interface", year:"2026", image:project1, href:"https://github.com/gowthamsai117", text:"A focused finance experience built around clarity, useful information and calm interaction." },
  { no:"02", title:"Cyber Crew Website", type:"Web / Community", year:"2025", image:project6, href:"https://github.com/gowthamsai117/cybercrew", text:"A community platform shaped into a polished digital product experience." },
  { no:"03", title:"Wireless Campus Network", type:"Systems / Interface", year:"2024", image:project3, href:"https://github.com/gowthamsai117/Wireless-Campus-Network---Cisco-Packet-tracer", text:"A structured systems project presented through a clean, visual product lens." },
  { no:"04", title:"File Transfer Tool", type:"Tool / Utility", year:"2025", image:project4, href:"https://github.com/gowthamsai117/file-transfer-tool", text:"A practical utility with a straightforward workflow and focused interface." }
];

export default function Home() {
  const [menu, setMenu] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .22], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, .22], [1, .94]);

  return (
    <div className="studio">
      <header className="studio-nav">
        <a href="#top" className="studio-logo">GOWTHAM<span>®</span></a>
        <nav className="studio-links">
          <a href="#work">Work <ArrowUpRight size={13}/></a>
          <a href="#about">About <ArrowUpRight size={13}/></a>
          <a href="#contact">Contact <ArrowUpRight size={13}/></a>
        </nav>
        <button className="mobile-menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      {menu && <motion.nav className="mobile-panel" initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}}>
        <a href="#work" onClick={()=>setMenu(false)}>01 / Work</a>
        <a href="#about" onClick={()=>setMenu(false)}>02 / About</a>
        <a href="#contact" onClick={()=>setMenu(false)}>03 / Contact</a>
      </motion.nav>}

      <main id="top">
        <section className="studio-hero">
          <motion.div className="hero-content" style={{y:heroY,scale:heroScale}}>
            <div className="micro-row"><span>FRONTEND ENGINEER / CREATIVE TECHNOLOGY</span><span>INDIA / 2026</span></div>
            <h1>Ideas,<br/><em>shaped into</em><br/>digital experiences.</h1>
            <div className="hero-foot">
              <p>I design and build expressive interfaces, interactive products and thoughtful web experiences.</p>
              <a href="#work" className="round-arrow"><ArrowDown/></a>
            </div>
          </motion.div>
          <div className="orbital" aria-hidden="true"><i/><b/></div>
        </section>

        <section className="studio-statement">
          <span className="label">/ 01 — THE APPROACH</span>
          <p>Good digital work is felt before it is explained. I care about the details between <strong>design, motion and code.</strong></p>
        </section>

        <section id="work" className="studio-work">
          <div className="section-head">
            <div><span className="label">/ 02 — SELECTED WORK</span><h2>Built to be <em>experienced.</em></h2></div>
            <span className="work-count">04 PROJECTS</span>
          </div>
          <div className="project-grid">
            {projects.map((p,i)=><motion.a key={p.title} href={p.href} target="_blank" rel="noreferrer" className={`studio-project p-${i+1}`} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.7}}>
              <div className="project-image"><img src={p.image} alt={p.title}/><span className="project-open"><ArrowUpRight/></span></div>
              <div className="project-info"><div><span className="label">{p.no} / {p.type}</span><h3>{p.title}</h3></div><div className="project-side"><span>{p.year}</span><p>{p.text}</p></div></div>
            </motion.a>)}
          </div>
        </section>

        <section id="about" className="studio-about">
          <div className="portrait"><img src={profile} alt="Gowtham Satya Sai"/></div>
          <div className="about-copy"><span className="label">/ 03 — ABOUT</span><h2>A developer with a <em>visual instinct.</em></h2><p>I enjoy turning complex ideas into clear, engaging digital experiences. My work sits between frontend engineering, interface design and product thinking.</p><p>React, JavaScript, TypeScript, Next.js, Python and modern component-driven development are part of my toolkit.</p><a href="#contact" className="line-link">Work together <ArrowUpRight/></a></div>
        </section>

        <section className="capabilities"><span className="label">/ 04 — CAPABILITIES</span><div className="cap-list">
          {[["01","Frontend Development","React · Next.js · TypeScript · JavaScript"],["02","Interface Engineering","Responsive UI · Component systems · Accessibility"],["03","Product Thinking","Interaction · Prototyping · Visual systems"]].map(x=><div className="cap-row" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
        </div></section>

        <section id="contact" className="studio-contact"><span className="label">/ 05 — LET'S MAKE SOMETHING</span><h2>Have an idea?<br/><em>Let's build it.</em></h2><div className="contact-actions"><a className="big-link" href="mailto:gowthamsatyasai123@gmail.com">Start a conversation <ArrowUpRight/></a><a className="resume-link" href={resume} download>Download CV</a></div></section>
      </main>

      <footer className="studio-footer"><span>© 2026 GOWTHAM SATYA SAI</span><div><a href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/gowtham-satya-sai-m" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="mailto:gowthamsatyasai123@gmail.com"><Mail/> Email</a></div></footer>
    </div>
  );
}
