  import React from "react";
  import { 
    FaCss3Alt, FaJs, FaPython, FaNodeJs, 
    FaReact, FaDocker, FaGitAlt, FaGithub, 
    FaLinux, FaNetworkWired, FaLock, FaDatabase 
  } from "react-icons/fa";
  import html from '../icons/html.webp';
  import ts from '../icons/ts.png';
  import meta from '../icons/meta.png';
  import burp from '../icons/burp.png';
  import nmap from '../icons/nmap.png';
  import sqlmap from '../icons/sqlmap.png';
  import nes from '../icons/nes.png';
  import open from '../icons/open.png';
  import tryh from '../icons/try.png';
  import wire from '../icons/wire.png';
  import owasp from '../icons/owasp.png';
  import three from '../icons/three.webp'
  import StarsCanvas from '../components/StarsCanvas'; // Import the StarsCanvas component

  // Skills data with categories and items
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "HTML", icon: <img src={html} alt="HTML" className="w-11 h-11" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-11 h-11" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-11 h-11" /> },
        { name: "Python", icon: <FaPython className="text-blue-500 w-11 h-11" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-11 h-11" /> },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Tailwind CSS", icon: <img src={ts} alt="Tailwind CSS" className="w-11 h-11" /> },
        { name: "Flask", icon: <FaPython className="text-gray-400 w-11 h-11" /> },
        { name: "Metasploit Framework", icon: <img src={meta} alt="Metasploit" className="w-12 h-12" /> },
      ],
    },
    {
      category: "Libraries",
      items: [
        { name: "React.js", icon: <FaReact className="text-cyan-400 w-11 h-11" /> },
        { name: "Three Js", icon: <img src={three} alt="three js" className="w-28 h-11" />  },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <FaDatabase className="text-blue-600 w-11 h-11" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600 w-11 h-11" /> },
        { name: "GitHub", icon: <FaGithub className="text-white w-11 h-11" /> },
        { name: "Kali Linux", icon: <FaLinux className="text-purple-600 w-11 h-11" /> },
        { name: "Burp Suite", icon: <img src={burp} alt="Burp Suite" className="w-10 h-10" /> },
        { name: "Nmap", icon: <img src={nmap} alt="Nmap" className="w-11 h-11" /> },
        { name: "SQLmap", icon: <img src={sqlmap} alt="SQLmap" className="w-11 h-11" /> },
        { name: "Nessus", icon: <img src={nes} alt="Nessus" className="w-11 h-11" /> },
        { name: "OpenVAS", icon: <img src={open} alt="OpenVAS" className="w-11 h-11" /> },
        { name: "TryHackMe", icon: <img src={tryh} alt="TryHackMe" className="w-11 h-11" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500 w-11 h-11" /> },
        { name: "Wireshark", icon: <img src={wire} alt="Wireshark" className="w-11 h-11" /> },
      ],
    },
    {
      category: "Environments",
      items: [
        { name: "Web Penetration Testing", icon: <FaLock className="text-red-400 w-8 h-8" /> },
        { name: "Network Security", icon: <FaNetworkWired className="text-blue-400 w-8 h-8" /> },
        { name: "Vulnerability Assessment", icon: <FaLock className="text-orange-400 w-8 h-8" /> },
        { name: "OWASP Top 10", icon: <img src={owasp} alt="OWASP" className="w-11 h-11" /> },
      ],
    },
  ];

  const Skills = () => {
    return (
      <section className="relative min-h-screen bg-[#1A0324] text-white p-6 flex flex-col items-center">
        {/* Stars Canvas Background */}
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>

        {/* Header */}
        <div className="relative z-0 text-center mb-10">
          <p className="text-sm uppercase text-gray-400 mt-16">What I Have Learnt So Far</p>
          <h2 className="text-5xl font-bold mt-2">Skills.</h2>
        </div>

        {/* Skills Container */}
        <div className="relative z-0  rounded-lg p-8 w-full max-w-6xl">
          <div className="flex flex-col space-y-9">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center"
              >
                {/* Category Label */}
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-semibold text-gray-200 uppercase tracking-wider">
                    {skill.category}
                  </h3>
                </div>

                {/* Vertical Line (hidden on mobile) */}
                <div className="hidden sm:block w-px h-20 bg-gray-600 mx-4" />

                {/* Skills Icons */}
                <div className="sm:w-3/4 mt-4 sm:mt-0 sm:pl-4">
                  <div className="flex flex-wrap gap-4">
                    {skill.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="w-12 h-12 text-2xl flex items-center justify-center">
                          {item.icon}
                        </div>
                        <p className="text-sm mt-2 text-gray-300">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Skills;