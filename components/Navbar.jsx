'use client'

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Budget Traveling</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a
              href="#introduction"
              className="hover:text-gray-400 transition duration-200 font-bold" 
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href="#sidebar"
              className="hover:text-gray-400 transition duration-200 font-bold"
            >
              Popular Posts
            </a>
          </li>
        </ul>

        {/* Mobile Menu (hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-indigo-700 text-white mt-2 rounded shadow-md ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-14 left-0 right-0 z-50`}
      >
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <a
              href="#introduction"
              className="hover:text-gray-300 transition duration-300"
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href="#sidebar"
              className="hover:text-gray-300 transition duration-300"
            >
              Popular Posts
            </a>
          </li>
        </ul>
      </div>

      
    </nav>
  );
};

export default Navbar;
