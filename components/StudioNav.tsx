"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["Work","/work"],["About","/about"],["Contact","/contact"]];

export default function StudioNav() {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <header className={`site-nav ${scrolled?"site-nav-scrolled":""}`}>
    <a href="/" className="brand" aria-label="Gowtham home"><span className="brand-mark">G</span><span>GOWTHAM</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {links.map(([label,href])=><a key={href} href={href} className="nav-link">{label}<ArrowUpRight size={13}/></a>)}
      <a className="nav-status" href="/contact"><i/> Available for opportunities</a>
    </nav>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>{open?<X size={20}/>:<Menu size={20}/>}</button>
    <AnimatePresence>{open&&<motion.nav className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.25}}>
      {links.map(([label,href],index)=><a key={href} href={href} onClick={()=>setOpen(false)}><span>0{index+1}</span>{label}<ArrowUpRight size={18}/></a>)}
      <a className="mobile-status" href="/contact" onClick={()=>setOpen(false)}><i/> Available for opportunities</a>
    </motion.nav>}</AnimatePresence>
  </header>;
}