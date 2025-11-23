import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
  ];

  const services = [
    "Cloud Solutions",
    "Custom Development",
    "Cybersecurity",
    "Data Analytics",
    "Mobile Solutions",
    "DevOps & Automation",
  ];

  const resources = [
    { name: "Case Studies", path: "/portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "contact@logicnodes.com",
      link: "mailto:contact@logicnodes.com",
      color: "#25B8F2",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "#EF5BB7",
    },
    {
      icon: MapPin,
      text: "123 Tech Street, Silicon Valley, CA 94025",
      link: "https://maps.google.com",
      color: "#A672C2",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      link: "https://linkedin.com/company/logicnodes",
      name: "LinkedIn",
      color: "#25B8F2",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/logicnodes",
      name: "Twitter",
      color: "#EF5BB7",
    },
    {
      icon: Github,
      link: "https://github.com/logicnodes",
      name: "GitHub",
      color: "#A672C2",
    },
    {
      icon: Facebook,
      link: "https://facebook.com/logicnodes",
      name: "Facebook",
      color: "#25B8F2",
    },
    {
      icon: Instagram,
      link: "https://instagram.com/logicnodes",
      name: "Instagram",
      color: "#EF5BB7",
    },
  ];

  return (
    <footer className="relative bg-linear-to-b from-[#1a1d35] to-[#0f1020] pt-20 pb-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#25B8F2]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EF5BB7]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" onClick={scrollToTop}>
                <motion.img
                  src="/logo_full_white.png"
                  alt="Logic Nodes"
                  whileHover={{ transform: "translate3d(0,0,0) scale(1.05)" }}
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
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      transform: "translate3d(0,-3px,0) scale(1.1)",
                    }}
                    whileTap={{ transform: "translate3d(0,0,0) scale(0.95)" }}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
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
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
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
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-b border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ transform: "translate3d(0,-2px,0) scale(1.02)" }}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                  }}
                >
                  <info.icon
                    className="w-5 h-5"
                    style={{ color: info.color }}
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  {info.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} Logic Nodes. Made with{" "}
              <Heart className="w-4 h-4 text-[#EF5BB7] fill-current" /> by Logic
              Nodes Team
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <motion.button
              whileHover={{ transform: "translate3d(0,0,0) scale(1.05)" }}
              className="hover:text-[#25B8F2] transition-colors"
            >
              Privacy Policy
            </motion.button>
            <span>•</span>
            <motion.button
              whileHover={{ transform: "translate3d(0,0,0) scale(1.05)" }}
              className="hover:text-[#25B8F2] transition-colors"
            >
              Terms of Service
            </motion.button>
            <span>•</span>
            <motion.button
              whileHover={{ transform: "translate3d(0,0,0) scale(1.05)" }}
              className="hover:text-[#25B8F2] transition-colors"
            >
              Cookie Policy
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, transform: "translate3d(0,0,0) scale(0)" }}
        whileInView={{ opacity: 1, transform: "translate3d(0,0,0) scale(1)" }}
        whileHover={{ transform: "translate3d(0,-5px,0) scale(1.1)" }}
        whileTap={{ transform: "translate3d(0,0,0) scale(0.9)" }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
