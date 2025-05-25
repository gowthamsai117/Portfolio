// import React from "react";

// import projectImage1 from "../assets/project1.png";
// import projectImage2 from "../assets/project2.png";
// import projectImage3 from "../assets/project3.png";
// import projectImage4 from "../assets/project4.png";

// const projects = [
//   {
//     title: "Web Vulnerability Scanner",
//     description: "A web application that scans websites for OWASP vulnerabilities and generates detailed reports.",
//     previewLink: "#",
//     codeLink: "#"
//   },
//   {
//     title: "IoT Honeypot",
//     description: "An ESP32-based honeypot that creates a fake Wi-Fi network to capture attacker credentials.",
//     previewLink: "#",
//     codeLink: "#"
//   },
//   {
//     title: "CTF Challenge: SQL Injection",
//     description: "A Capture The Flag challenge designed to teach SQL injection techniques and mitigation strategies.",
//     previewLink: "#",
//     codeLink: "#"
//   },    
//   {
//     title: "CTF Challenge: SQL Injection",
//     description: "A Capture The Flag challenge designed to teach SQL injection techniques and mitigation strategies.",
//     previewLink: "#",
//     codeLink: "#"
//   }
// ];
// const projectImages = [projectImage1, projectImage2, projectImage3, projectImage4];
// const Projects = () => {
//     return (
//       <section className="min-h-screen bg-[#1A0324] text-white p-6 flex flex-col items-center">
//         <h2 className="text-4xl text-[#EBD3F8] font-bold text-center mt-12 mb-10">Projects</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl px-4 place-items-stretch">
//               {projects.map((project, index) => (
//             <div key={index} className="w-full h-auto sm:h-[450px] rounded-[20px] bg-[#e0e0e0] shadow-md flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg relative">
//                 <div
//                     className="w-full h-[300px] flex justify-between sm:h-[250px] md:h-[250px] lg:h-[380px] bg-cover bg-center rounded-t-[20px]"
//                     style={{backgroundImage: `url(${projectImages[index]})`,backgroundSize: "cover",backgroundPosition: "center",
//                         }}
//                 ></div>
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <p className="text-[#323232] text-center font-bold text-lg mb-2">{project.title}</p>
//                 <p className="text-[#323232] text-sm flex-grow">{project.description}</p>
//                 <div className="mt-4 flex justify-between">
//                   <a className="flex items-center text-[#7A1CAC] font-semibold text-sm hover:underline" href={project.previewLink} target="_blank" rel="noopener noreferrer">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6 mr-1 fill-[#7A1CAC]"><path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7z"/></svg>
//                     Preview
//                   </a>
//                   <a className="flex items-center text-[#7A1CAC] font-semibold text-sm hover:underline" href={project.codeLink} target="_blank" rel="noopener noreferrer">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-6 h-6 mr-1 fill-[#7A1CAC]"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default Projects;

// import React from "react";

// const projects = [
//   {
//     title: "GDSC Website",
//     description:
//       "Welcome to the official repository for the GDSC MJVC Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MJVC. From insightful blog posts to incredible community projects, and from exciting ...",
//     image: "https://via.placeholder.com/300x200.png?text=GDSC+Website",
//     tags: ["#next.js", "#styled-components", "#three.js"],
//   },
//   {
//     title: "Netfix Clone",
//     description:
//       "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to creat...",
//     image: "https://via.placeholder.com/300x200.png?text=Netflix+Clone",
//     tags: ["#next.js", "#typescript", "#tailwindcss", "#mongodb"],
//   },
//   {
//     title: "Van-Life",
//     description:
//       "Vanlife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and convenient tag-based filtering for easy browsing.",
//     image: "https://via.placeholder.com/300x200.png?text=Van-Life",
//     tags: ["#react", "#mirage.js", "#firebase-firestore"],
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="min-h-screen bg-[#1A1B2E] text-white p-6 flex flex-col items-center">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <p className="text-sm uppercase text-gray-400">My Work</p>
//         <h2 className="text-5xl font-bold mt-2">Projects.</h2>
//         <p className="text-lg text-gray-300 mt-4 max-w-2xl">
//           These projects showcase my practical skills and experience, each with
//           descriptions and links to code repositories and live demos. They
//           demonstrate my ability to handle complex challenges, adapt to
//           different technologies, and oversee projects from start to finish.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-[#2A2B4A] rounded-lg overflow-hidden shadow-lg"
//           >
//             {/* Project Image */}
//             <div className="relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               {/* GitHub Icon (Placeholder) */}
//               <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2">
//                 <svg
//                   className="w-6 h-6 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//                 </svg>
//               </div>
//             </div>

//             {/* Project Details */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-300 text-sm mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="text-xs text-gray-400 uppercase tracking-wider"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "GDSC Website",
//     description:
//       "Welcome to the official repository for the GDSC MJVC Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MJVC. From insightful blog posts to incredible community projects, and from exciting events to resources for developers, it’s a one-stop platform for tech enthusiasts.",
//     image: "https://via.placeholder.com/300x200.png?text=GDSC+Website",
//     tags: ["#next.js", "#styled-components", "#three.js"],
//     githubLink: "https://github.com/your-username/gdsc-website", // Replace with actual GitHub link
//   },
//   {
//     title: "Netflix Clone",
//     description:
//       "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB, and TypeScript. This project aims to showcase the implementation of these technologies to create a seamless streaming experience.",
//     image: "https://via.placeholder.com/300x200.png?text=Netflix+Clone",
//     tags: ["#next.js", "#typescript", "#tailwindcss", "#mongodb"],
//     githubLink: "https://github.com/your-username/netflix-clone", // Replace with actual GitHub link
//   },
//   {
//     title: "Van-Life",
//     description:
//       "Vanlife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans, allowing users to log in and use convenient tag-based filtering for easy browsing. The app integrates Mirage.js for mock APIs and Firebase Firestore for data storage.",
//     image: "https://via.placeholder.com/300x200.png?text=Van-Life",
//     tags: ["#react", "#mirage.js", "#firebase-firestore"],
//     githubLink: "https://github.com/your-username/van-life", // Replace with actual GitHub link
//   },
//   {
//     title: "Van-Life",
//     description:
//       "Vanlife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans, allowing users to log in and use convenient tag-based filtering for easy browsing. The app integrates Mirage.js for mock APIs and Firebase Firestore for data storage.",
//     image: "https://via.placeholder.com/300x200.png?text=Van-Life",
//     tags: ["#react", "#mirage.js", "#firebase-firestore"],
//     githubLink: "https://github.com/your-username/van-life", // Replace with actual GitHub link
//   },
// ];

// const Projects = () => {
//   // Animation variants for the project cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, delay: i * 0.2 },
//     }),
//   };

//   return (
//     <section className="min-h-screen bg-[#1A1B2E] text-white p-6 flex flex-col items-center">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <p className="text-sm uppercase text-gray-400">My Work</p>
//         <h2 className="text-4xl sm:text-5xl font-bold mt-2">Projects.</h2>
//         <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl">
//           These projects showcase my practical skills and experience, each with
//           descriptions and links to code repositories and live demos. They
//           demonstrate my ability to handle complex challenges, adapt to
//           different technologies, and oversee projects from start to finish.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="relative w-full max-w-[350px] mx-auto bg-gradient-to-br from-green-400 to-blue-700 rounded-[20px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]"
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             custom={index}
//           >
//             <div className="relative w-full h-[450px] bg-[#1a1a1a] rounded-[16px] overflow-hidden transition-all duration-200 hover:scale-[0.98] hover:rounded-[20px]">
//               {/* Project Image */}
//               <div className="relative">
//                 <img
//                   src={project.image}
//                   alt={`${project.title} screenshot`}
//                   className="w-full h-52 object-cover rounded-t-[16px]"
//                 />
//                 {/* GitHub Button */}
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
//                   aria-label={`View ${project.title} on GitHub`}
//                 >
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//                   </svg>
//                 </a>
//               </div>

//               {/* Project Details */}
//               <div className="p-4 flex flex-col h-[calc(100%-13rem)]">
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm mb-4 line-clamp-3 overflow-hidden">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs text-gray-400 uppercase tracking-wider bg-gray-800 px-2 py-1 rounded"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from "react";
// import { motion } from "framer-motion";
// import StarsCanvas from '../components/StarsCanvas';

// const projects = [
//   {
//     title: "GDSC Website",
//     description:
//       "Welcome to the official repository for the GDSC MJVC Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MJVC. From insightful blog posts to incredible community projects, and from exciting events to resources for developers, it’s a one-stop platform for tech enthusiasts.",
//     image: "https://via.placeholder.com/300x200.png?text=GDSC+Website",
//     tags: ["#next.js", "#styled-components", "#three.js"],
//     githubLink: "https://github.com/your-username/gdsc-website",
//   },
//   {
//     title: "Netflix Clone",
//     description:
//       "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB, and TypeScript. This project aims to showcase the implementation of these technologies to create a seamless streaming experience.",
//     image: "https://via.placeholder.com/300x200.png?text=Netflix+Clone",
//     tags: ["#next.js", "#typescript", "#tailwindcss", "#mongodb"],
//     githubLink: "https://github.com/your-username/netflix-clone",
//   },
//   {
//     title: "Van-Life",
//     description:
//       "Vanlife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans, allowing users to log in and use convenient tag-based filtering for easy browsing. The app integrates Mirage.js for mock APIs and Firebase Firestore for data storage.",
//     image: "https://via.placeholder.com/300x200.png?text=Van-Life",
//     tags: ["#react", "#mirage.js", "#firebase-firestore"],
//     githubLink: "https://github.com/your-username/van-life",
//   },
// ];

// const Projects = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, delay: i * 0.2 },
//     }),
//   };

//   return (
//     <section className="relative min-h-screen bg-gradient-to-b from-[#1A0324] to-[#2E073F] text-white p-6 sm:p-10 lg:p-20 flex flex-col items-center">
//       {/* Stars Canvas Background */}
//       <div className="absolute inset-0 z-0">
//         <StarsCanvas />
//       </div>

//       {/* Header */}
//       <div className="relative z-0 text-center mb-10">
//         <p className="text-sm uppercase text-gray-400">My Work</p>
//         <h2 className="text-4xl sm:text-5xl font-bold mt-2">Projects.</h2>
//         <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl">
//           These projects showcase my practical skills and experience, each with
//           descriptions and links to code repositories and live demos. They
//           demonstrate my ability to handle complex challenges, adapt to
//           different technologies, and oversee projects from start to finish.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl px-2 sm:px-4">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="relative w-full max-w-[350px] mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-[20px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]"
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             custom={index}
//           >
//             <div className="relative w-full h-auto min-h-[400px] sm:h-[450px] bg-gray-800 rounded-[16px] overflow-hidden transition-all duration-200 hover:scale-[0.98] hover:rounded-[20px]">
//               {/* Project Image */}
//               <div className="relative">
//                 <img
//                   src={project.image}
//                   alt={`${project.title} screenshot`}
//                   className="w-full h-48 sm:h-52 object-cover rounded-t-[16px]"
//                 />
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
//                   aria-label={`View ${project.title} on GitHub`}
//                 >
//                   <svg
//                     className="w-5 sm:w-6 h-5 sm:h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//                   </svg>
//                 </a>
//               </div>

//               {/* Project Details */}
//               <div className="p-3 sm:p-4 flex flex-col h-auto sm:h-[calc(100%-13rem)]">
//                 <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-white text-xs sm:text-sm mb-4 line-clamp-3 sm:line-clamp-3 overflow-hidden">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
//                   {project.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="text-[10px] sm:text-xs text-white uppercase tracking-wider bg-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

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