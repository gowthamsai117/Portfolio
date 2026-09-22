import StudioNav from "@/components/StudioNav";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <StudioNav />
      <main className="page-shell">
        <span className="eyebrow">/ 05 — CONTACT</span>
        <h1 className="page-title">Let&apos;s make something <span className="serif">worth remembering.</span></h1>
        <div className="detail-grid">
          <span className="eyebrow">START HERE</span>
          <div>
            <p>For opportunities, collaborations, or interesting product ideas, reach out directly.</p>
            <div className="capability-list" style={{marginTop: "50px"}}>
              <a className="capability" href="mailto:gowthamsatyasai123@gmail.com"><span><Mail size={16} /></span><h3>Email</h3><p>gowthamsatyasai123@gmail.com <ArrowUpRight size={14} /></p></a>
              <a className="capability" href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer"><span><Github size={16} /></span><h3>GitHub</h3><p>gowthamsai117 <ArrowUpRight size={14} /></p></a>
              <a className="capability" href="https://www.linkedin.com/in/gowtham-satya-sai-m" target="_blank" rel="noreferrer"><span><Linkedin size={16} /></span><h3>LinkedIn</h3><p>Connect professionally <ArrowUpRight size={14} /></p></a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
