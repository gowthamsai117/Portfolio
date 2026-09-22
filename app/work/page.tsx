import StudioNav from "@/components/StudioNav";
import { ArrowUpRight } from "lucide-react";

const projects = [
  ["01", "Fintrack", "Product", "2026", "/work/fintrack"],
  ["02", "Cyber Crew Website", "Web", "2025", "/work/cyber-crew"],
  ["03", "Wireless Campus Network", "Systems", "2024", "/work/wireless-campus"],
  ["04", "File Transfer Tool", "Tool", "2025", "/work/file-transfer"],
];

export default function WorkPage() {
  return (
    <>
      <StudioNav />
      <main className="page-shell">
        <span className="eyebrow">/ 02 — SELECTED WORK</span>
        <h1 className="page-title">A collection of things I&apos;ve <span className="serif">built.</span></h1>
        <div className="capability-list">
          {projects.map(([n, title, type, year, href]) => (
            <a href={href} className="capability" key={href}>
              <span>{n}</span><h3>{title}</h3><p>{type} · {year} <ArrowUpRight size={14} /></p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
