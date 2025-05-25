import React from "react";
import { motion } from "framer-motion";
import StarsCanvas from '../components/StarsCanvas';

// Import images from src/assets/
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.png';

// Map image paths to imported assets
const imageMap = {
  'src/assets/project1.png': project1,
  'src/assets/project2.png': project2,
  'src/assets/project3.jpg': project3,
  'src/assets/project4.png': project4,
  'src/assets/project5.jpg': project5,
  'src/assets/project6.png': project6,
};

const projects = [
  {
    title: "CYBER CREW WEBSITE",
    description: "A cyber-themed website showcasing Cyber Crew’s research, events, blogs, and workshops.",
    image: "src/assets/project6.png",
    tags: ["#react","#Node.js","#tailwind Css","#Json","#React Native"],
    githubLink: "https://github.com/gowthamsai117/cybercrew",
  },
  {
    title: "Vulnerbilty Web Scanner",
    description: "A Web Scanner that detects OWASP Top 10 vulnerabilities & gathers detailed website information including IP, MAC, protocols, domains.",
    image: "src/assets/project1.png",
    tags: ["#Python", "#JSON", "#Bash", "#Linux"],
    githubLink: "https://github.com/gowthamsai117/Vulnerability-Web-Scanner",
  },
  {
    title: "KeyLoggers",
    description: "A Keylogger that silently records and logs all keystrokes on a target system for monitoring and analysis purposes.",
    image: "src/assets/project2.png",
    tags: ["#Python", "#Linux"],
    githubLink: "https://github.com/gowthamsai117/Key-Loggers",
  },
  {
    title: "Wireless Campus Network",
    description: "A Wireless Campus Network simulation using Cisco Packet Tracer to connect and manage IoT devices across a smart educational campus.",
    image: "src/assets/project3.jpg",
    tags: ["#Cisco-Packet-tracer"],
    githubLink: "https://github.com/gowthamsai117/Wireless-Campus-Network---Cisco-Packet-tracer",
  },
  {
    title: "File Transfer Tool",
    description: "A File Transfer Tool that enables fast and secure file sharing between devices over a network using the UDP protocol.",
    image: "src/assets/project4.png",
    tags: ["#python","HTML"],
    githubLink: "https://github.com/gowthamsai117/file-transfer-tool",
  },
  {
    title: "Pixel Manipulation for Image Encryption",
    description: "A project that encrypts images using pixel manipulation techniques to ensure secure and unauthorized access prevention.",
    image: "src/assets/project5.jpg",
    tags: ["#Python","HTML","CSS","javascript"],
    githubLink: "https://github.com/gowthamsai117/Pixel-Manipulation-for-Image-Encryption",
  },
    
  
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1A0324] to-[#1A0324] text-white p-6 sm:p-10 lg:p-20 flex flex-col items-center">
      {/* Stars Canvas Background */}
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      {/* Header */}
      <div className="relative z-0 text-center mb-10">
        <p className="text-sm uppercase text-gray-400 mt-11">My Work</p>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2">Projects.</h2>
        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl">
          These projects showcase my practical skills and experience, each with
          descriptions and links to code repositories and live demos. They
          demonstrate my ability to handle complex challenges, adapt to
          different technologies, and oversee projects from start to finish.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl px-2 sm:px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-[350px] mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-[20px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div className="relative w-full h-auto min-h-[400px] sm:h-[450px] bg-gray-800 rounded-[16px] overflow-hidden transition-all duration-200 hover:scale-[0.98] hover:rounded-[20px]">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={imageMap[project.image]} // Use the mapped image
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 sm:h-52 object-cover rounded-t-[16px]"
                />
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>

              {/* Project Details */}
              <div className="p-3 sm:p-4 flex flex-col h-auto sm:h-[calc(100%-13rem)]">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-xs sm:text-sm mb-4 line-clamp-3 sm:line-clamp-3 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs text-white uppercase tracking-wider bg-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;