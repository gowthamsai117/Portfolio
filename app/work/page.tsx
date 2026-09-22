import StudioNav from "@/components/StudioNav";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import project1 from "../../src/assets/project1.png";
import project3 from "../../src/assets/project3.jpg";
import project4 from "../../src/assets/project4.png";
import project6 from "../../src/assets/project6.png";

const projects=[
 ["01","Fintrack","Product","2026","/work/fintrack",project1,"Next.js · TypeScript · Prisma"],
 ["02","Cyber Crew Website","Web","2025","/work/cyber-crew",project6,"React · Tailwind · UI"],
 ["03","Wireless Campus Network","Systems","2024","/work/wireless-campus",project3,"CCNA · Cisco · Networking"],
 ["04","File Transfer Tool","Tool","2025","/work/file-transfer",project4,"Python · Sockets · Networking"]
];
export default function WorkPage(){return <><StudioNav/><main className="page-shell"><span className="eyebrow">/ 02 — SELECTED WORK</span><h1 className="page-title">A collection of things I&apos;ve <span className="serif">built.</span></h1><div className="work-list">{projects.map(([n,title,type,year,href,image,stack])=><a href={href} className="work-row" key={href}><div className="work-row-image"><Image src={image} alt={title} fill sizes="180px"/></div><span className="work-number">{n}</span><div className="work-row-title"><h2>{title}</h2><p>{stack}</p></div><div className="work-row-meta"><span>{type}</span><span>{year}</span></div><span className="work-row-arrow"><ArrowUpRight size={19}/></span></a>)}</div></main></>}
