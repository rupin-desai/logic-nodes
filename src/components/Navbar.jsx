import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // schedule mounted state update after paint to avoid synchronous setState in effect
    const raf = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      const element = document.getElementById(sectionId);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#282B4C]/95 shadow-lg border-b border-white/6"
          : "bg-transparent"
      } ${mounted ? "animate-fade-up" : "opacity-0"}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo_full_white.png"
              alt="Logic Nodes"
              className="h-16 md:h-20 cursor-pointer transform transition-transform duration-200 hover:-translate-y-1"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-[#25B8F2] transition-colors duration-300 font-medium cursor-pointer transform hover:-translate-y-1"
              >
                {link.name}
              </button>
            ))}
            <Link to="/portfolio">
              <button className="px-6 py-2 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#25B8F2]/50 transition-all duration-300">
                Portfolio
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[#282B4C]/98 transition-all duration-300 overflow-hidden`}
        style={{ maxHeight: isOpen ? 520 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-4 py-3 text-white hover:text-[#25B8F2] hover:bg-white/5 rounded-lg transition-all duration-300 text-base"
            >
              {link.name}
            </button>
          ))}
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-3 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-lg font-semibold cursor-pointer">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
