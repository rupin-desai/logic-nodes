/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

  // robust helper: wait for DOM element to exist (or route to change) then scroll
  const ensureScrollToSectionAfterNavigate = (
    targetPath = "/",
    sectionId,
    options = {}
  ) => {
    const { maxFrames = 120 } = options; // default ~2s at 60fps
    let frames = 0;

    const tryScroll = () => {
      frames += 1;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // if too many tries, stop to avoid infinite loop
      if (frames >= maxFrames) return;
      requestAnimationFrame(tryScroll);
    };

    // start polling after next paint so route has chance to render
    requestAnimationFrame(tryScroll);
  };

  const scrollToSection = (sectionId) => {
    // If not on home route, navigate then wait for element to exist before scrolling.
    if (window.location.pathname !== "/") {
      navigate("/");
      ensureScrollToSectionAfterNavigate("/", sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: poll briefly in case element is not mounted yet
        ensureScrollToSectionAfterNavigate("/", sectionId);
      }
    }
    setIsOpen(false);
  };

  const goToPortfolio = () => {
    setIsOpen(false);
    navigate("/portfolio");
    // ensure we're at top after route settles
    const tryTop = (frames = 0) => {
      if (window.location.pathname === "/portfolio") {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      if (frames > 120) return;
      requestAnimationFrame(() => tryTop(frames + 1));
    };
    requestAnimationFrame(() => tryTop(0));
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

            {/* Desktop Portfolio button uses same navigate + ensureScroll logic */}
            <motion.button
              whileHover={{ transform: "translate3d(0,-3px,0)" }}
              whileTap={{ transform: "translate3d(0,2px,0)" }}
              onClick={goToPortfolio}
              className="px-6 py-2 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#25B8F2]/50 transition-all duration-300 cursor-pointer"
            >
              Portfolio
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ transform: "translate3d(0,2px,0)" }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div id="mobile-menu" className="md:hidden bg-[#282B4C]/98">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    // close menu and delegate navigation/scroll to scrollToSection which handles cross-page cases
                    setIsOpen(false);
                    // call immediately; scrollToSection will navigate and poll if needed
                    scrollToSection(link.id);
                  }}
                  className="block w-full text-left px-4 py-3 text-white hover:text-[#25B8F2] hover:bg-white/5 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={goToPortfolio}
                className="w-full px-4 py-3 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-lg font-semibold cursor-pointer"
              >
                Portfolio
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
