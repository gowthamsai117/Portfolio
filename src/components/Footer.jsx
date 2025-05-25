// import React, { useState, useEffect } from "react";

// const Footer = () => {
//   // State for like count and whether the user has liked
//   const [likes, setLikes] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);

//   // State for view count
//   const [views, setViews] = useState(0);

//   // Load likes and views from local storage on mount
//   useEffect(() => {
//     // Load like count
//     const storedLikes = localStorage.getItem("portfolioLikes");
//     if (storedLikes) {
//       setLikes(parseInt(storedLikes, 10));
//     }

//     // Check if user has already liked
//     const userHasLiked = localStorage.getItem("userHasLiked");
//     if (userHasLiked === "true") {
//       setHasLiked(true);
//     }

//     // Load and increment view count
//     const storedViews = localStorage.getItem("portfolioViews");
//     const newViews = storedViews ? parseInt(storedViews, 10) + 1 : 1;
//     setViews(newViews);
//     localStorage.setItem("portfolioViews", newViews.toString());
//   }, []);

//   // Handle like button click
//   const handleLike = () => {
//     if (!hasLiked) {
//       const newLikes = likes + 1;
//       setLikes(newLikes);
//       setHasLiked(true);
//       localStorage.setItem("portfolioLikes", newLikes.toString());
//       localStorage.setItem("userHasLiked", "true");
//     }
//   };

//   return (
//     <footer className="relative w-full bg-gradient-to-b from-[#1A0324] to-[#2E073F] text-white py-8 sm:py-10 px-4 sm:px-6 md:px-16">
//       {/* Footer Content */}
//       <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 sm:gap-0">
//         {/* Left Section: Name and Tagline */}
//         <div className="text-center sm:text-left">
//           <h3 className="text-xl sm:text-2xl font-bold text-[#EBD3F8]">
//             Gowtham Satya Sai M
//           </h3>
//           <p className="text-sm sm:text-base text-gray-400 mt-2">
//             Building a Safer Digital World
//           </p>
//         </div>

//         {/* Center Section: Social Media Links, Like Button, and View Count */}
//         <div className="flex flex-col items-center gap-4 sm:gap-6">
//           {/* Social Media Links */}
//           <div className="flex gap-4 sm:gap-6">
//             <a
//               href="https://github.com/gowthamsai117"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="GitHub Profile"
//             >
//               <svg
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//               >
//                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//               </svg>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/gowtham-satya-sai-m"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="LinkedIn Profile"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.5C4.01 7.5 3 6.49 3 5.22S4.01 3 5.33 3c1.33 0 2.34 1 2.34 2.22S6.66 7.5 5.33 7.5zM20.45 20.45h-3.53v-5.56c0-1.32-.48-2.22-1.69-2.22-1.36 0-2.06.92-2.06 2.22v5.56h-3.53V9h3.53v1.6h.05c.49-.87 1.69-1.8 3.48-1.8 2.47 0 4.35 1.6 4.35 4.84v6.81z" />
//               </svg>
//             </a>
//             <a
//               href="https://tryhackme.com/p/gowtham116"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="TryHackMe Profile"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .04.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.04.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.041-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .04-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .04.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.04.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .098-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .04.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.098-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.40-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .04-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .04.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.098-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.04-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .098-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .04.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.04.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.098-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.04-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .04-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .098-.061zm-9.713.185a.465.465 0 0 0-.232.055.452.452 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.465.465 0 0 0 .232.055c.086 0 .16-.019.232-.055a.656.656 0 0 0 .157-.149.63.63 0 0 0 .90-.216 1.205 1.205 0 0 0 0-.519.63.63 0 0 0-.90-.215.648.648 0 0 0-.157-.146.465.465 0 0 0-.232-.055z" />
//               </svg>
//             </a>
//             {/* Email Icon */}
//             <a
//               href="mailto:gowthamsatyasai123@gmail.com"
//               className="group relative"
//               aria-label="Email Me"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </a>
//           </div>

//           {/* Like Button and View Count */}
//           <div className="flex items-center gap-4">
//             {/* Like Button */}
//             <button
//               onClick={handleLike}
//               disabled={hasLiked}
//               className={`flex items-center gap-2 text-sm sm:text-base ${
//                 hasLiked ? "text-gray-100 cursor-not-allowed" : "text-[#EBD3F8] hover:text-[#AD49E1]"
//               } transition-colors duration-200`}
//               aria-label="Like this portfolio"
//             >
//               <svg
//                 className={`w-5 sm:w-6 h-5 sm:h-6 ${
//                   hasLiked ? "fill-[#AD49E1]" : "fill-none stroke-current"
//                 }`}
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.59C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 />
//               </svg>
//               <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
//             </button>

//             {/* View Count */}
//             <div className="flex items-center gap-2 text-sm sm:text-base text-gray-100">
//               <svg
//                 className="w-5 sm:w-6 h-5 sm:h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                 />
//               </svg>
//               <span>{views} {views === 1 ? "View" : "Views"}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Copyright */}
//         <div className="text-center sm:text-right">
//           <p className="text-sm sm:text-base text-gray-400">
//             © 2025 Gowtham Satya Sai M. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";

// const Footer = () => {
//   // State for like count and whether the user has liked
//   const [likes, setLikes] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);

//   // State for view count
//   const [views, setViews] = useState(0);

//   // Load likes and views from local storage on mount
//   useEffect(() => {
//     // Load like count
//     const storedLikes = localStorage.getItem("portfolioLikes");
//     if (storedLikes) {
//       setLikes(parseInt(storedLikes, 10));
//     }

//     // Check if user has already liked
//     const userHasLiked = localStorage.getItem("userHasLiked");
//     if (userHasLiked === "true") {
//       setHasLiked(true);
//     }

//     // Load and increment view count
//     const storedViews = localStorage.getItem("portfolioViews");
//     const newViews = storedViews ? parseInt(storedViews, 10) + 1 : 1;
//     setViews(newViews);
//     localStorage.setItem("portfolioViews", newViews.toString());
//   }, []);

//   // Handle like button click
//   const handleLike = () => {
//     if (!hasLiked) {
//       const newLikes = likes + 1;
//       setLikes(newLikes);
//       setHasLiked(true);
//       localStorage.setItem("portfolioLikes", newLikes.toString());
//       localStorage.setItem("userHasLiked", "true");
//     }
//   };

//   // Handle reset button click
 
//   return (
//     <footer className="relative w-full bg-gradient-to-b from-[#1A0324] to-[#2E073F] text-white py-8 sm:py-10 px-4 sm:px-6 md:px-16">
//       {/* Footer Content */}
//       <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 sm:gap-0">
//         {/* Left Section: Name and Tagline */}
//         <div className="text-center sm:text-left">
//           <h3 className="text-xl sm:text-2xl font-bold text-[#EBD3F8]">
//             Gowtham Satya Sai M
//           </h3>
//           <p className="text-sm sm:text-base text-gray-400 mt-2">
//             Building a Safer Digital World
//           </p>
//         </div>

//         {/* Center Section: Social Media Links, Like Button, View Count, and Reset Button */}
//         <div className="flex flex-col items-center gap-4 sm:gap-6">
//           {/* Social Media Links */}
//           <div className="flex gap-4 sm:gap-6">
//             <a
//               href="https://github.com/gowthamsai117"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="GitHub Profile"
//             >
//               <svg
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//               >
//                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//               </svg>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/gowtham-satya-sai-m"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="LinkedIn Profile"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.5C4.01 7.5 3 6.49 3 5.22S4.01 3 5.33 3c1.33 0 2.34 1 2.34 2.22S6.66 7.5 5.33 7.5zM20.45 20.45h-3.53v-5.56c0-1.32-.48-2.22-1.69-2.22-1.36 0-2.06.92-2.06 2.22v5.56h-3.53V9h3.53v1.6h.05c.49-.87 1.69-1.8 3.48-1.8 2.47 0 4.35 1.6 4.35 4.84v6.81z" />
//               </svg>
//             </a>
//             <a
//               href="https://tryhackme.com/p/gowtham116"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="TryHackMe Profile"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.40.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .04.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.04.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.041-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .04-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .04.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.40.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .098-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .04.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.40.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.098-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.40-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .40-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .40.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.40.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.098-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.40-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .098-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .40.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.40.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.098-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.40-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .40-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .098-.061zm-9.713.185a.465.465 0 0 0-.232.055.452.452 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.465.465 0 0 0 .232.055c.086 0 .16-.019.232-.055a.656.656 0 0 0 .157-.149.63.63 0 0 0 .90-.216 1.205 1.205 0 0 0 0-.519.63.63 0 0 0-.90-.215.648.648 0 0 0-.157-.146.465.465 0 0 0-.232-.055z" />
//               </svg>
//             </a>
//             {/* Email Icon */}
//             <a
//               href="mailto:gowthamsatyasai123@gmail.com"
//               className="group relative"
//               aria-label="Email Me"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </a>
//           </div>

//           {/* Like Button, View Count, and Reset Button */}
//           <div className="flex items-center gap-4">
//             {/* Like Button */}
//             <button
//               onClick={handleLike}
//               disabled={hasLiked}
//               className={`flex items-center gap-2 text-sm sm:text-base ${
//                 hasLiked ? "text-gray-100 cursor-not-allowed" : "text-[#EBD3F8] hover:text-[#AD49E1]"
//               } transition-colors duration-200`}
//               aria-label="Like this portfolio"
//             >
//               <svg
//                 className={`w-5 sm:w-6 h-5 sm:h-6 ${
//                   hasLiked ? "fill-[#AD49E1]" : "fill-none stroke-current"
//                 }`}
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.59C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 />
//               </svg>
//               <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
//             </button>

//             {/* View Count */}
//             <div className="flex items-center gap-2 text-sm sm:text-base text-gray-100">
//               <svg
//                 className="w-5 sm:w-6 h-5 sm:h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                 />
//               </svg>
//               <span>{views} {views === 1 ? "View" : "Views"}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Copyright */}
//         <div className="text-center sm:text-right">
//           <p className="text-sm sm:text-base text-gray-400">
//             © 2025 Gowtham Satya Sai M. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
// import { db } from "./firebase"; // Adjust path to your firebase.js

// const Footer = () => {
//   const [likes, setLikes] = useState(0);
//   const [views, setViews] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [error, setError] = useState(null);

//   // Generate or retrieve a unique user ID
//   const getUserId = () => {
//     let id = localStorage.getItem("userId");
//     if (!id) {
//       id = Math.random().toString(36).substring(2);
//       localStorage.setItem("userId", id);
//     }
//     return id;
//   };

//   // Fetch and update data
//   useEffect(() => {
//     const fetchData = async () => {
//       const statsDoc = doc(db, "portfolioStats", "stats");
//       try {
//         const docSnap = await getDoc(statsDoc);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setLikes(data.likes || 0);
//           setViews(data.views || 0);

//           const user = getUserId();
//           setUserId(user);
//           if (data.likedUsers && data.likedUsers.includes(user)) {
//             setHasLiked(true);
//           }

//           // Increment view count
//           await updateDoc(statsDoc, {
//             views: (data.views || 0) + 1,
//           });
//           setViews((prev) => prev + 1);
//         } else {
//           // Initialize document if it doesn't exist
//           await setDoc(statsDoc, {
//             likes: 0,
//             views: 1,
//             likedUsers: [],
//           });
//           setViews(1);
//         }
//       } catch (error) {
//         console.error("Error fetching/updating Firestore data:", error);
//         setError("Failed to load data. Please try again later.");
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle like button click
//   const handleLike = async () => {
//     if (!hasLiked && userId) {
//       const statsDoc = doc(db, "portfolioStats", "stats");
//       try {
//         await updateDoc(statsDoc, {
//           likes: likes + 1,
//           likedUsers: arrayUnion(userId),
//         });
//         setLikes((prev) => prev + 1);
//         setHasLiked(true);
//       } catch (error) {
//         console.error("Error updating likes:", error);
//         setError("Failed to like. Please try again.");
//       }
//     }
//   };

//   // Handle reset button click
//   const handleReset = async () => {
//     if (window.confirm("Are you sure you want to reset likes and views?")) {
//       const statsDoc = doc(db, "portfolioStats", "stats");
//       try {
//         await setDoc(statsDoc, {
//           likes: 0,
//           views: 0,
//           likedUsers: [],
//         });
//         setLikes(0);
//         setViews(0);
//         setHasLiked(false);
//         localStorage.removeItem("userId");
//         setError(null);
//       } catch (error) {
//         console.error("Error resetting stats:", error);
//         setError("Failed to reset. Please try again.");
//       }
//     }
//   };

//   return (
//     <footer className="relative w-full bg-gradient-to-b from-[#1A0324] to-[#2E073F] text-white py-8 sm:py-10 px-4 sm:px-6 md:px-16">
//       {error && (
//         <div className="text-center text-red-400 mb-4">
//           {error}
//         </div>
//       )}
//       <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 sm:gap-0">
//         <div className="text-center sm:text-left">
//           <h3 className="text-xl sm:text-2xl font-bold text-[#EBD3F8]">
//             Gowtham Satya Sai M
//           </h3>
//           <p className="text-sm sm:text-base text-gray-400 mt-2">
//             Building a Safer Digital World
//           </p>
//         </div>
//         <div className="flex flex-col items-center gap-4 sm:gap-6">
//           <div className="flex gap-4 sm:gap-6">
//             <a
//               href="https://github.com/gowthamsai117"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="GitHub Profile"
//             >
//               <svg
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//               >
//                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//               </svg>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/gowtham-satya-sai-m"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="LinkedIn Profile"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.5C4.01 7.5 3 6.49 3 5.22S4.01 3 5.33 3c1.33 0 2.34 1 2.34 2.22S6.66 7.5 5.33 7.5zM20.45 20.45h-3.53v-5.56c0-1.32-.48-2.22-1.69-2.22-1.36 0-2.06.92-2.06 2.22v5.56h-3.53V9h3.53v1.6h.05c.49-.87 1.69-1.8 3.48-1.8 2.47 0 4.35 1.6 4.35 4.84v6.81z" />
//               </svg>
//             </a>
//             <a
//               href="https://tryhackme.com/p/gowtham116"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative"
//               aria-label="TryHackMe Profile"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.40.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .04.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.04.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.041-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .04-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .04.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.40.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .098-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .04.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.40.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.098-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.40-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .40-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .40.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.40.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.098-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.40-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .098-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .40.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.40.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.098-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.40-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .40-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .098-.061zm-9.713.185a.465.465 0 0 0-.232.055.452.452 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.465.465 0 0 0 .232.055c.086 0 .16-.019.232-.055a.656.656 0 0 0 .157-.149.63.63 0 0 0 .90-.216 1.205 1.205 0 0 0 0-.519.63.63 0 0 0-.90-.215.648.648 0 0 0-.157-.146.465.465 0 0 0-.232-.055z" />
//               </svg>
//             </a>
//             <a
//               href="mailto:gowthamsatyasai123@gmail.com"
//               className="group relative"
//               aria-label="Email Me"
//             >
//               <svg
//                 className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleLike}
//               disabled={hasLiked}
//               className={`flex items-center gap-2 text-sm sm:text-base ${
//                 hasLiked ? "text-gray-100 cursor-not-allowed" : "text-[#EBD3F8] hover:text-[#AD49E1]"
//               } transition-colors duration-200`}
//               aria-label="Like this portfolio"
//             >
//               <svg
//                 className={`w-5 sm:w-6 h-5 sm:h-6 ${
//                   hasLiked ? "fill-[#AD49E1]" : "fill-none stroke-current"
//                 }`}
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.59C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 />
//               </svg>
//               <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
//             </button>
//             <div className="flex items-center gap-2 text-sm sm:text-base text-gray-100">
//               <svg
//                 className="w-5 sm:w-6 h-5 sm:h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                 />
//               </svg>
//               <span>{views} {views === 1 ? "View" : "Views"}</span>
//             </div>
//             <button
//               onClick={handleReset}
//               className="flex items-center gap-2 text-sm sm:text-base text-[#EBD3F8] hover:text-[#AD49E1] transition-colors duration-200"
//               aria-label="Reset stats"
//             >
//               <svg
//                 className="w-5 sm:w-6 h-5 sm:h-6 fill-none stroke-current"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                 />
//               </svg>
//               <span>Reset</span>
//             </button>
//           </div>
//         </div>
//         <div className="text-center sm:text-right">
//           <p className="text-sm sm:text-base text-gray-400">
//             © 2025 Gowtham Satya Sai M. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { db } from "./firebase"; // Adjust path to your firebase.js

const Footer = () => {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  // Generate or retrieve a unique user ID
  const getUserId = () => {
    let id = localStorage.getItem("userId");
    if (!id) {
      id = Math.random().toString(36).substring(2);
      localStorage.setItem("userId", id);
    }
    return id;
  };

  // Fetch and update data
  useEffect(() => {
    const fetchData = async () => {
      const statsDoc = doc(db, "portfolioStats", "stats");
      try {
        const docSnap = await getDoc(statsDoc);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLikes(data.likes || 0);
          setViews(data.views || 0);

          const user = getUserId();
          setUserId(user);
          if (data.likedUsers && data.likedUsers.includes(user)) {
            setHasLiked(true);
          }

          // Increment view count
          await updateDoc(statsDoc, {
            views: increment(1),
          });
          setViews((prev) => prev + 1);
        } else {
          // Initialize document if it doesn't exist
          await setDoc(statsDoc, {
            likes: 0,
            views: 1,
            likedUsers: [],
          });
          setViews(1);
        }
      } catch (error) {
        console.error("Error fetching/updating Firestore data:", error);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  // Handle like button click
  const handleLike = async () => {
    if (!hasLiked && userId) {
      const statsDoc = doc(db, "portfolioStats", "stats");
      try {
        await updateDoc(statsDoc, {
          likes: increment(1),
          likedUsers: arrayUnion(userId),
        });
        setLikes((prev) => prev + 1);
        setHasLiked(true);
      } catch (error) {
        console.error("Error updating likes:", error);
        setError("Failed to like. Please try again.");
      }
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#1A0324] to-[#2E073F] text-white py-8 sm:py-10 px-4 sm:px-6 md:px-16">
      {error && (
        <div className="text-center text-red-400 mb-4">
          {error}
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 sm:gap-0">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-[#EBD3F8]">
            Gowtham Satya Sai M
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            Building a Safer Digital World
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/gowthamsai117"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="GitHub Profile"
            >
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gowtham-satya-sai-m"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.5C4.01 7.5 3 6.49 3 5.22S4.01 3 5.33 3c1.33 0 2.34 1 2.34 2.22S6.66 7.5 5.33 7.5zM20.45 20.45h-3.53v-5.56c0-1.32-.48-2.22-1.69-2.22-1.36 0-2.06.92-2.06 2.22v5.56h-3.53V9h3.53v1.6h.05c.49-.87 1.69-1.8 3.48-1.8 2.47 0 4.35 1.6 4.35 4.84v6.81z" />
              </svg>
            </a>
            <a
              href="https://tryhackme.com/p/gowtham116"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="TryHackMe Profile"
            >
              <svg
                className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604 Israel attacks Rafah, Gaza, after Hamas fires rockets at Tel Aviv | Gaza News | Al Jazeera
v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.40.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .40-.375c0-.13-.014-.255-.40-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .40.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.40.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.41-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .40-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .40.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.40.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.098-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.40-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .41-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .098-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .40.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.40.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.098-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.40-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .40-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .098-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .40.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.40.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.098-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.40-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .41-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .098-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .40.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.40.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.098-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.40-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .40-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .098-.061zm-9.713.185a.465.465 0 0 0-.232.055.452.452 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.465.465 0 0 0 .232.055c.086 0 .16-.019.232-.055a.656.656 0 0 0 .157-.149.63.63 0 0 0 .90-.216 1.205 1.205 0 0 0 0-.519.63.63 0 0 0-.90-.215.648.648 0 0 0-.157-.146.465.465 0 0 0-.232-.055z" />
              </svg>
            </a>
            <a
              href="mailto:gowthamsatyasai123@gmail.com"
              className="group relative"
              aria-label="Email Me"
            >
              <svg
                className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 duration-200 hover:stroke-[#AD49E1]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`flex items-center gap-2 text-sm sm:text-base ${
                hasLiked ? "text-gray-100 cursor-not-allowed" : "text-[#EBD3F8] hover:text-[#AD49E1]"
              } transition-colors duration-200`}
              aria-label="Like this portfolio"
            >
              <svg
                className={`w-5 sm:w-6 h-5 sm:h-6 ${
                  hasLiked ? "fill-[#AD49E1]" : "fill-none stroke-current"
                }`}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.59C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
            </button>
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-100">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>{views} {views === 1 ? "View" : "Views"}</span>
            </div>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Gowtham Satya Sai M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
