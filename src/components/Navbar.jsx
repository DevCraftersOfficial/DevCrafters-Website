import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Logo.avif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = scrolled
    ? "text-white hover:text-white/90"
    : "text-[#331b18] hover:text-[#FF725E]";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? "bg-[#FF725E] shadow-md" : "bg-transparent"
    }`}>
    
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="DevCrafters Logo"
            className="h-10 w-auto"
            loading="eager" 
            decoding="async"
            fetchpriority="high"
          />
          <span
            className={`font-bold text-xl tracking-wide hidden sm:inline ${
              scrolled ? "text-white" : "text-[#331b18]"
            }`}
          >
            DevCrafters
          </span>
        </NavLink>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={`text-lg transition ${linkStyle}`}>
            Home
          </NavLink>
          <NavLink to="/services" className={`text-lg transition ${linkStyle}`}>
            Services
          </NavLink>
          <NavLink to="/about-us" className={`text-lg transition ${linkStyle}`}>
            About Us
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="contact"
            className="bg-[#FF725E] text-white px-5 py-2.5 rounded-full font-semibold border border-white hover:bg-white hover:text-[#FF725E] transition"
          >
            Get Started
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${scrolled ? "text-white" : "text-[#331b18]"}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-center bg-[#FF725E] shadow-md rounded-b-xl text-white">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-base hover:text-white/80 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-base hover:text-white/80 transition"
          >
            Services
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className="block text-base hover:text-white/80 transition"
          >
            About Us
          </NavLink>
          <a
            href="/contact"
            className="inline-block bg-white text-[#FF725E] px-5 py-2 rounded-full font-semibold hover:bg-[#f3e9e8] hover:text-[#FF725E] transition"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
