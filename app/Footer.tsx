import React from 'react';
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";
import { MdOutlineCall } from "react-icons/md";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-12 space-y-6 md:space-y-0">
          
          {/* Logo and Social Links - Reordered on mobile view */}
          <div className="relative flex flex-col items-center border-2 border-white p-6 rounded-lg w-full md:w-1/3 order-1 md:order-2 space-y-4">
            {/* Logo above the border */}
            <div className="absolute top-[-50px] bg-black flex justify-center items-center ">
              <img
                src="/logose.png" // Replace with your actual logo path
                alt="Deep Net Soft Logo"
                className="w-24 h-24" // Adjust logo size as needed
              />
            </div>
            {/* Company Name */}
            <h3 className="text-lg font-semibold text-blue-400 mt-10 font-oswald">DEEP <span className='text-white'>NET</span> <span className='text-gray-600'>SOFT</span></h3>
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-gray-400"><LuFacebook/></a>
              <a href="#" className="text-gray-400"><CiTwitter/></a>
              <a href="#" className="text-gray-400"><CiYoutube/></a>
              <a href="#" className="text-gray-400"><FaInstagram/></a>
            </div>
          </div>

          {/* CONNECT WITH US */}
          <div className="flex flex-col items-center border-2 border-white p-6 rounded-lg w-full md:w-1/3 order-2 md:order-1">
            <h3 className="text-lg font-semibold text-blue-400 font-oswald">CONNECT WITH US</h3>
            <p className="text-sm text-start mt-2 text-gray-400 font-oswald  flex items-cenmter jusify-center "><span className='m-1'><MdOutlineCall/></span> +91 95678143340</p>
            <p className="text-sm text-gray-400 font-oswald  flex items-cenmter jusify-center"><span  className='m-1'><SlEnvolope/></span> info@deepnetsoft.com</p>
          </div>

          {/* FIND US */}
          <div className="flex flex-col items-center border-2 border-white p-6 rounded-lg w-full md:w-1/3 order-3">
            <h3 className="text-lg font-semibold text-blue-400 font-oswald">FIND US</h3>
            <p className="text-sm mt-2 text-gray-400 font-oswald flex items-cenmter jusify-center"><span  className='m-1'><FaLocationDot/></span> First floor, Geo Infopark,</p>
            <p className="text-sm text-gray-400 font-oswald">Infopark EXPY, Kakkanad</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-400 font-oswald">&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
          <div className="flex space-x-4 text-xs mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
