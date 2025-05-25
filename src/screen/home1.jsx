import React from "react";
import { motion } from "framer-motion";
import StarsCanvas from "../components/StarsCanvas";

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#1A0324] text-white flex flex-col items-center px-6 md:px-16 py-10 pt-20 z-10">
      {/* StarsCanvas Background */}
      <StarsCanvas />

      {/* Header */}
      <motion.h1 
        className="text-3xl md:text-5xl font-bold text-[#EBD3F8] mb-6 mt-9"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Terminal Style Container */}
      <motion.div 
        className="w-full max-w-7xl bg-black rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Terminal Toolbar */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-900">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-400">gowtham@portfolio: ~</p>
          <div className="text-white text-sm cursor-pointer">+</div>
        </div>

        {/* Terminal Body */}
        <div className="p-8 bg-gray-800 text-gray-300 font-mono text-lg leading-relaxed">
          <p>
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ I am <span className="text-purple-400">M Gowtham Satya Sai</span>, a passionate
            <span className="text-yellow-400"> Cybersecurity Enthusiast</span>, <span className="text-yellow-400"> Web Pentester</span>, <span className="text-yellow-400"> Full Stack Developer</span>.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ Currently pursuing <span className="text-purple-400">B.Tech in Computer Science & Engineering (Cyber Security)</span> at Kakinada Institute of Engineering & Technology.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ With hands-on experience in <span className="text-purple-400">network analysis</span>, <span className="text-purple-400">web application security</span>, I have worked on Capture The Flag (CTF) challenges, penetration testing projects, and cybersecurity research.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ Additionally, skilled in <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Flask</span>, and <span className="text-purple-400">cloud security</span> to build and secure modern web applications.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ My cybersecurity journey includes participation in <span className="text-purple-400">Capture The Flag (CTF) challenges</span> and cybersecurity workshops, where I learned from industry experts.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ Actively contributing to the <span className="text-purple-400">Cyber Crew</span>, training students in ethical hacking, networking, and security concepts.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ Passionate about identifying vulnerabilities, securing applications, and exploring exploit research to protect digital assets.
          </p>
          <p className="mt-5">
            <span className="text-green-400">gowtham@portfolio:</span>
            <span className="text-blue-400">~</span> $ Proficient in <span className="text-purple-400">Kali Linux</span>, <span className="text-purple-400">Web Exploitation</span>, and various security tools, with expertise in offensive and defensive security strategies.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;