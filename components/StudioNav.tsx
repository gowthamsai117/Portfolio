"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function StudioNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a href="/" className="brand" aria-label="Gowtham home">
        GOWTHAM<span>®</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="nav-link">
            {label}<ArrowUpRight size={14} />
          </a>
        ))}
      </nav>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}<ArrowUpRight size={18} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
