import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserPlus, FaSignInAlt, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState('About Us');

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Carrers', href: '#carrer' },
    { name: 'Candidates', href: '#candidates' },
    { name: 'Employers', href: '#employers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[#0D4D66] fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-bold text-xl cursor-pointer">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <span>Bhagyavathi</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-white text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-200 ${
                activeLink === link.name
                  ? 'bg-[#9FBFC5] text-[#0D4D66]'
                  : 'hover:bg-[#9FBFC5]/80 hover:text-[#0D4D66]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916303130025?text=Hi%20Bhagyavathi%20Group%2C%20I%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D4D66] px-6 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setMenuOpen(false);
              }}
              className={`block text-white text-sm px-4 py-2 rounded-full font-medium ${
                activeLink === link.name
                  ? 'bg-[#9FBFC5] text-[#0D4D66]'
                  : 'hover:bg-[#9FBFC5]/80 hover:text-[#0D4D66]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916303130025?text=Hi%20Bhagyavathi%20Group%2C%20I%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          {!isLoggedIn ? (
            <>
              
            </>
          ) : (
            <button
              className="w-full border border-white text-white font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#0D4D66] transition flex items-center justify-center gap-2"
            >
              <FaUserCircle />
              Profile
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
