"use client";

import Image,{StaticImageData} from "next/image";
import {motion} from "motion/react";
import {ArrowUpRight} from "lucide-react";

type Project={number:string;title:string;description:string;category:string;year:string;image:StaticImageData;href:string;stack:string[]};

export default function ProjectCard({project,index}:{project:Project;index:number}) {
  return <motion.a href={project.href} className={`project-card project-card-${index+1}`} initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.7,delay:index*.05,ease:[.22,1,.36,1]}}>
    <div className="project-media">
      <Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 65vw"/>
      <div className="project-shade"/>
      <div className="project-topline"><span>{project.number}</span><span>{project.category}</span></div>
      <span className="project-arrow"><ArrowUpRight size={21}/></span>
      <div className="project-hover-label">View case study <ArrowUpRight size={14}/></div>
    </div>
    <div className="project-meta">
      <div><span className="eyebrow">{project.category} · {project.year}</span><h3>{project.title}</h3></div>
      <div className="project-right"><p>{project.description}</p><div className="project-tags">{project.stack.map(item=><span key={item}>{item}</span>)}</div></div>
    </div>
  </motion.a>;
}