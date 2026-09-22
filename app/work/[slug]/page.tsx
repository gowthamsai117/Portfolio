import StudioNav from "@/components/StudioNav";
import Image,{StaticImageData} from "next/image";
import {ArrowLeft,ArrowUpRight} from "lucide-react";
import project1 from "../../../src/assets/project1.png";
import project3 from "../../../src/assets/project3.jpg";
import project4 from "../../../src/assets/project4.png";
import project6 from "../../../src/assets/project6.png";
const data:Record<string,{title:string;category:string;year:string;description:string;image:StaticImageData;stack:string[]}>={
 fintrack:{title:"Fintrack",category:"Product",year:"2026",description:"A personal finance experience focused on clarity, useful information, and calm interaction.",image:project1,stack:["Next.js","TypeScript","Prisma"]},
 "cyber-crew":{title:"Cyber Crew Website",category:"Web",year:"2025",description:"A cybersecurity community platform presented as a polished digital experience with structured content and responsive interfaces.",image:project6,stack:["React","Tailwind CSS","Motion"]},
 "wireless-campus":{title:"Wireless Campus Network",category:"Systems",year:"2024",description:"A campus networking project presented through a clear, structured systems lens.",image:project3,stack:["CCNA","Cisco","Networking"]},
 "file-transfer":{title:"File Transfer Tool",category:"Tool",year:"2025",description:"A practical network utility focused on straightforward file sharing and a simple workflow.",image:project4,stack:["Python","Sockets","Networking"]}
};
export function generateStaticParams(){return Object.keys(data).map(slug=>({slug}))}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=data[slug]??data.fintrack;return <><StudioNav/><main className="page-shell"><a className="back-link" href="/work"><ArrowLeft size={14}/> Back to all work</a><div className="detail-hero"><div><span className="eyebrow">/ {project.category} — {project.year}</span><h1>{project.title}</h1></div><p className="detail-copy">{project.description}</p></div><div className="detail-image"><Image src={project.image} alt={project.title} fill sizes="95vw"/></div><div className="detail-grid"><span className="eyebrow">THE PROJECT</span><div><p>{project.description}</p><div className="detail-meta"><div>Category<strong>{project.category}</strong></div><div>Year<strong>{project.year}</strong></div><div>Stack<strong>{project.stack.join(" · ")}</strong></div></div></div></div><div className="case-study-note"><span className="eyebrow">CASE STUDY</span><p>This project page is ready to expand with the problem, process, interface decisions, engineering details, and measurable outcome.</p><a className="text-link" href="/contact">Discuss a similar project <ArrowUpRight size={15}/></a></div></main></>}
