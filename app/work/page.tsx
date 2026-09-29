import StudioNav from "@/components/StudioNav";
import Image,{StaticImageData} from "next/image";
import {ArrowUpRight} from "lucide-react";
import project1 from "../../src/assets/project1.png";
import project3 from "../../src/assets/project3.jpg";
import project4 from "../../src/assets/project4.png";
import project6 from "../../src/assets/project6.png";

type Project={n:string;title:string;type:string;year:string;href:string;image:StaticImageData;stack:string};
const projects:Project[]=[
{n:"01",title:"Fintrack",type:"Product",year:"2026",href:"/work/fintrack",image:project1,stack:"Next.js · TypeScript · Prisma"},
{n:"02",title:"Cyber Crew Website",type:"Web",year:"2025",href:"/work/cyber-crew",image:project6,stack:"React · Tailwind · UI"},
{n:"03",title:"Wireless Campus Network",type:"Systems",year:"2024",href:"/work/wireless-campus",image:project3,stack:"CCNA · Cisco · Networking"},
{n:"04",title:"File Transfer Tool",type:"Tool",year:"2025",href:"/work/file-transfer",image:project4,stack:"Python · Sockets · Networking"}
];
export default function WorkPage(){return <><StudioNav/><main className="page-shell"><span className="eyebrow">/ 02 — SELECTED WORK</span><h1 className="page-title">A collection of things I&apos;ve <span className="serif">built.</span></h1><div className="work-list">{projects.map(project=><a href={project.href} className="work-row" key={project.href}><div className="work-row-image"><Image src={project.image} alt={project.title} fill sizes="180px"/></div><span className="work-number">{project.n}</span><div className="work-row-title"><h2>{project.title}</h2><p>{project.stack}</p></div><div className="work-row-meta"><span>{project.type}</span><span>{project.year}</span></div><span className="work-row-arrow"><ArrowUpRight size={19}/></span></a>)}</div></main></>}