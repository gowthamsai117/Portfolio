import StudioNav from "@/components/StudioNav";
import Image,{StaticImageData} from "next/image";
import { ArrowUpRight } from "lucide-react";
import project1 from "../../src/assets/project1.png";
import project2 from "../../src/assets/project2.png";
import project3 from "../../src/assets/project3.jpg";
import project4 from "../../src/assets/project4.png";
import project5 from "../../src/assets/project5.jpg";
import project6 from "../../src/assets/project6.png";

type ProjectRow = {
  n:string;
  title:string;
  type:string;
  year:string;
  href:string;
  image:StaticImageData;
  stack:string;
};

const projects: ProjectRow[] = [
  {n:"01",title:"Vulnerability Web Scanner",type:"Cybersecurity",year:"2025",href:"/work/vulnerability-web-scanner",image:project1,stack:"Python · JSON · Bash · Linux"},
  {n:"02",title:"Cyber Crew Website",type:"Web Security",year:"2025",href:"/work/cyber-crew",image:project6,stack:"React · Node.js · Tailwind"},
  {n:"03",title:"Wireless Campus Network",type:"Systems",year:"2024",href:"/work/wireless-campus",image:project3,stack:"Cisco · Packet Tracer · Networking"},
  {n:"04",title:"Keylogger",type:"Security Research",year:"2025",href:"/work/keylogger",image:project2,stack:"Python · Linux"},
  {n:"05",title:"File Transfer Tool",type:"Security Tool",year:"2025",href:"/work/file-transfer",image:project4,stack:"Python · UDP · Networking"},
  {n:"06",title:"Pixel Image Encryption",type:"Cryptography",year:"2025",href:"/work/pixel-image-encryption",image:project5,stack:"Python · HTML · CSS"}
];

export default function WorkPage(){
  return <>
    <StudioNav/>
    <main className="page-shell">
      <span className="eyebrow">/ 02 — SELECTED WORK</span>
      <h1 className="page-title">A collection of things I&apos;ve <span className="serif">built.</span></h1>
      <div className="work-list">
        {projects.map(project=>(
          <a href={project.href} className="work-row" key={project.href}>
            <div className="work-row-image"><Image src={project.image} alt={project.title} fill sizes="210px"/></div>
            <span className="work-number">{project.n}</span>
            <div className="work-row-title"><h2>{project.title}</h2><p>{project.stack}</p></div>
            <div className="work-row-meta"><span>{project.type}</span><span>{project.year}</span></div>
            <span className="work-row-arrow"><ArrowUpRight size={19}/></span>
          </a>
        ))}
      </div>
    </main>
  </>;
}