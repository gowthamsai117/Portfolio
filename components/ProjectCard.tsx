"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  number: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: StaticImageData;
  href: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      className={`project-card project-card-${index + 1}`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay: index * 0.06 }}
    >
      <div className="project-media">
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 70vw" />
        <div className="project-overlay" />
        <span className="project-arrow"><ArrowUpRight size={22} /></span>
      </div>
      <div className="project-meta">
        <div>
          <span className="eyebrow">{project.number} / {project.category}</span>
          <h3>{project.title}</h3>
        </div>
        <div className="project-right">
          <span>{project.year}</span>
          <p>{project.description}</p>
        </div>
      </div>
    </motion.a>
  );
}
