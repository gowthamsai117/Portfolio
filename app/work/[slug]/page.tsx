import StudioNav from "@/components/StudioNav";
import Image,{StaticImageData} from "next/image";
import {ArrowLeft,ArrowUpRight} from "lucide-react";
import project1 from "../../../src/assets/project1.png";
import project2 from "../../../src/assets/project2.png";
import project3 from "../../../src/assets/project3.jpg";
import project4 from "../../../src/assets/project4.png";
import project5 from "../../../src/assets/project5.jpg";
import project6 from "../../../src/assets/project6.png";
const data:Record<string,{title:string;category:string;year:string;description:string;image:StaticImageData;stack:string[]}>={
 "vulnerability-web-scanner":{title:"Vulnerability Web Scanner",category:"Cybersecurity",year:"2025",description:"A Python-based web scanner focused on OWASP Top 10 checks, reconnaissance, and structured target information.",image:project1,stack:["Python","JSON","Bash","Linux"]},
 "cyber-crew":{title:"Cyber Crew Website",category:"Web Security",year:"2025",description:"A cybersecurity community website for research, events, workshops, blogs, and technical learning.",image:project6,stack:["React","Node.js","Tailwind","JSON"]},
 "wireless-campus":{title:"Wireless Campus Network",category:"Networking",year:"2024",description:"A Cisco Packet Tracer simulation connecting and managing services and IoT devices across a smart educational campus.",image:project3,stack:["Cisco Packet Tracer","Networking"]},
 "keylogger":{title:"Keylogger",category:"Security Research",year:"2025",description:"A Python and Linux project exploring keystroke capture and controlled monitoring in an authorized lab environment.",image:project2,stack:["Python","Linux"]},
 "file-transfer":{title:"File Transfer Tool",category:"Security Tool",year:"2025",description:"A UDP-based network utility for fast and direct file sharing between devices.",image:project4,stack:["Python","UDP","Networking"]},
 "pixel-image-encryption":{title:"Pixel Image Encryption",category:"Cryptography",year:"2025",description:"An image encryption project using pixel manipulation techniques to protect image data.",image:project5,stack:["Python","HTML","CSS","JavaScript"]}
};
export function generateStaticParams(){return Object.keys(data).map(slug=>({slug}))}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=data[slug]??data.fintrack;return <><StudioNav/><main className="page-shell"><a className="back-link" href="/work"><ArrowLeft size={14}/> Back to all work</a><div className="detail-hero"><div><span className="eyebrow">/ {project.category} — {project.year}</span><h1>{project.title}</h1></div><p className="detail-copy">{project.description}</p></div><div className="detail-image"><Image src={project.image} alt={project.title} fill sizes="95vw"/></div><div className="detail-grid"><span className="eyebrow">THE PROJECT</span><div><p>{project.description}</p><div className="detail-meta"><div>Category<strong>{project.category}</strong></div><div>Year<strong>{project.year}</strong></div><div>Stack<strong>{project.stack.join(" · ")}</strong></div></div></div></div><div className="case-study-note"><span className="eyebrow">PROJECT NOTE</span><p>Explore the implementation, interface direction, and technical stack through the project repository.</p><a className="text-link" href="https://github.com/gowthamsai117" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15}/></a></div></main></>}
