import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2E073F]/90 text-[#EBD3F8] p-4 shadow-md fixed w-full top-0 z-10 backdrop-blur-sm">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#EBD3F8]">Gowtham</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 lg:space-x-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 lg:px-4 lg:py-2 border border-[#AD49E1] rounded-lg bg-[#3B0C59] 
                text-white transition duration-300 shadow-lg text-sm lg:text-md
                hover:bg-[#7A1CAC] hover:border-white cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#EBD3F8] focus:outline-none focus:ring-2 focus:ring-[#AD49E1] rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  bg-[#2E073F]/90 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex gap-4 flex-col items-center space-y-3">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-5 py-2 border border-[#AD49E1] rounded-lg bg-[#3B0C59] 
                text-white transition duration-300 shadow-lg text-sm
                hover:bg-[#7A1CAC] hover:border-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;