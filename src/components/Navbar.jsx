import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // First navigate to home if not already there
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
    <motion.nav
      initial={{ transform: "translate3d(0,-100px,0)" }}
      animate={{ transform: "translate3d(0,0,0)" }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#282B4C]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <motion.img
              src="/logo_full_white.png"
              alt="Logic Nodes"
              whileHover={{ transform: "translate3d(0,-2px,0)" }}
              className="h-20 cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ transform: "translate3d(0,-3px,0)" }}
                whileTap={{ transform: "translate3d(0,2px,0)" }}
                className="text-white hover:text-[#25B8F2] transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.name}
              </motion.button>
            ))}
            <Link to="/portfolio">
              <motion.button
                whileHover={{ transform: "translate3d(0,-3px,0)" }}
                whileTap={{ transform: "translate3d(0,2px,0)" }}
                className="px-6 py-2 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#25B8F2]/50 transition-all duration-300 cursor-pointer"
              >
                Portfolio
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ transform: "translate3d(0,2px,0)" }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#282B4C]/98 backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileTap={{ transform: "translate3d(0,2px,0)" }}
                  className="block w-full text-left px-4 py-3 text-white hover:text-[#25B8F2] hover:bg-white/5 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ))}
              <Link
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                <motion.button
                  whileTap={{ transform: "translate3d(0,2px,0)" }}
                  className="w-full px-4 py-3 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-lg font-semibold cursor-pointer"
                >
                  Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
