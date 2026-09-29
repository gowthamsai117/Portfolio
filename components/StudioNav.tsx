"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X, Github, Linkedin } from "lucide-react";

const links = [["Home","/"],["Work","/work"],["CTF","/#ctf"],["About","/about"],["Contact","/contact"]];

export default function StudioNav() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive:true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="nav-left">
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label,href]) => (
            <a key={href} href={href} className="nav-link">
              <span>{label}</span>
              {label === "Home" && <i className="nav-active-dot" />}
            </a>
          ))}
        </nav>
      </div>
      <a href="/" className="brand" aria-label="Gowtham home">
        <span className="brand-mark">G</span><span>GOWTHAM</span>
      </a>
      <div className="nav-right">
        <div className="social-nav">
          <a href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
          <a href="https://www.linkedin.com/in/gowtham-satya-sai-m" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
        </div>
        <a className="nav-talk" href="/contact">Let&apos;s Talk</a>
        <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>
            {links.map(([label,href]) => <a key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}
            <a className="mobile-status" href="/contact" onClick={()=>setOpen(false)}>Cybersecurity · Software Engineering <ArrowUpRight size={15}/></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}