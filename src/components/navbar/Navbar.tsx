import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logoHome from "../../assets/logo-home.svg";
import userAvatar from "../../assets/avatar.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="hidden lg:flex justify-between items-center font-semibold px-4 sm:px-8 lg:px-40 bg-neutral-900 h-10 text-xs text-gray-300">
        <span>
          Mon-Thu: <span className="text-white">9:00 AM - 5:30 PM</span>
        </span>
        <span>
          Visit our showroom in 1234 Street Adress City Address, 1234{" "}
          <Link
            to="#"
            className="border-b-2 border-white text-white hover:text-blue-500"
          >
            Contact Us
          </Link>
        </span>
        <span className="text-white">
          Call us: <span className="font-bold">(00) 1234 5678</span>{" "}
          <a href="#" className="ml-2 text-black bg-white rounded-sm inline-block">
            <FaFacebookF size={15} className="inline mr-1" />
          </a>
          <a href="#" className="ml-2 text-white inline-block">
            <FaInstagram size={21} className="inline mr-1" />
          </a>
        </span>
      </div>

      {/* Main Navbar */}
      <div className="w-full border-b-2 border-gray-300 px-4 sm:px-8 lg:px-40">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img className="w-12 h-12 sm:w-12 sm:h-12" src={logoHome} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            <Link className="hover:text-blue-600" to="/laptops">Laptops</Link>
            <Link className="hover:text-blue-600" to="/desktops">Desktops PCs</Link>
            <Link className="hover:text-blue-600" to="/network">Network Devices</Link>
            <Link className="hover:text-blue-600" to="/printers">Printer & Scanners</Link>
            <Link className="hover:text-blue-600" to="/pc-parts">PC Parts</Link>
            <Link className="hover:text-blue-600" to="/others">All Other Products</Link>
            <Link className="hover:text-blue-600" to="/repairs">Repairs</Link>
            <Link to="/deals">
              <button className="border-2 w-32 h-10 text-blue-600 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                Our Deals
              </button>
            </Link>
          </ul>

          {/* Icons & Hamburger */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Search className="cursor-pointer hover:text-blue-600" />
            <ShoppingCart className="cursor-pointer hover:text-blue-600" />
            <img
              className="border-2 rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
              src={userAvatar}
              alt="User Avatar"
            />
            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 mt-4 mb-4 font-semibold text-sm lg:hidden">
            <Link className="hover:text-blue-600" to="/laptops">Laptops</Link>
            <Link className="hover:text-blue-600" to="/desktops">Desktops PCs</Link>
            <Link className="hover:text-blue-600" to="/network">Network Devices</Link>
            <Link className="hover:text-blue-600" to="/printers">Printer & Scanners</Link>
            <Link className="hover:text-blue-600" to="/pc-parts">PC Parts</Link>
            <Link className="hover:text-blue-600" to="/others">All Other Products</Link>
            <Link className="hover:text-blue-600" to="/repairs">Repairs</Link>
            <Link to="/deals">
              <button className="border-2 w-full h-10 text-blue-600 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                Our Deals
              </button>
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
