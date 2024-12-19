"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-16 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image width={50} height={50} src="/logose.png" alt="Logo" />
          <div className="ml-2">
            <span className="text-blue-500 font-medium text-lg font-oswald">
              DEEP <span className="text-white">NET</span>
            </span>
            <span className="block text-gray-400 font-medium text-lg font-oswald">
              SOFT
            </span>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-white focus:outline-none z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-black md:bg-transparent shadow-lg md:shadow-none md:flex md:items-center z-20`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 text-center md:text-left divide-y md:divide-y-0 divide-gray-700 md:divide-none">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white text-base font-oswald hover:text-blue-500"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white text-base font-oswald hover:text-blue-500"
              >
                MENU
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white text-base font-oswald hover:text-blue-500"
              >
                MAKE A RESERVATION
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white text-base font-oswald hover:text-blue-500"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
