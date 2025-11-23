import React, { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  ArrowUp,
  Heart,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, transform: "translate3d(0,20px,0)" },
    visible: {
      opacity: 1,
      transform: "translate3d(0,0,0)",
      transition: { duration: 0.6 },
    },
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
  ];

  const services = [
    "Website & App Development",
    "IT Consulting",
    "Software Development",
    "ERP & CRM Solutions",
    "Cloud Solutions",
    "UI/UX Design",
  ];

  const resources = [
    { name: "Case Studies", path: "/portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/logicnodestech/",
      name: "Instagram",
      color: "#EF5BB7",
    },
    {
      icon: Github,
      link: "https://github.com/Logicnodes-Tech",
      name: "GitHub",
      color: "#A672C2",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/logicnodes-tech/",
      name: "LinkedIn",
      color: "#25B8F2",
    },
    {
      icon: Twitter,
      link: "https://x.com/logicnodestech",
      name: "X",
      color: "#25B8F2",
    },
  ];

  const scrollToSection = (sectionId) => {
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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-linear-to-b from-[#1a1d35] to-[#0f1020] pt-20 pb-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20" ref={ref}>
        <div className="bg-blob bg-blob-blue absolute top-0 left-1/4 w-96 h-96 rounded-full animate-blob" />
        <div className="bg-blob bg-blob-pink absolute bottom-0 right-1/4 w-96 h-96 rounded-full animate-blob" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10"
        >
          {/* Company Info */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <Link to="/" onClick={scrollToTop}>
              <motion.img
                src="/logo_full_white.png"
                alt="Logic Nodes"
                whileHover={{ transform: "translate3d(0,0,0) " }}
                className="h-24 md:h-32 mb-4 cursor-pointer inline-block"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with innovative IT solutions that drive
              growth and digital transformation. We're your trusted partner in
              navigating the digital landscape.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-transform duration-200 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ transform: "translate3d(5px,0,0)" }}
                    className="text-gray-400 hover:text-[#25B8F2] transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection("services")}
                    whileHover={{ transform: "translate3d(5px,0,0)" }}
                    className="text-gray-400 hover:text-[#EF5BB7] transition-colors duration-300 text-left"
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.path ? (
                    <Link to={resource.path}>
                      <motion.button
                        whileHover={{ transform: "translate3d(5px,0,0)" }}
                        className="text-gray-400 hover:text-[#A672C2] transition-colors duration-300 text-left"
                      >
                        {resource.name}
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      onClick={() => scrollToSection(resource.id)}
                      whileHover={{ transform: "translate3d(5px,0,0)" }}
                      className="text-gray-400 hover:text-[#A672C2] transition-colors duration-300 text-left"
                    >
                      {resource.name}
                    </motion.button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="pt-8 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} Logic Nodes. Made with{" "}
              <Heart className="w-4 h-4 text-[#EF5BB7] fill-current" /> by Logic
              Nodes Team
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-transform duration-200 transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
