import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMailTo = () => {
    const subject = `Inquiry from ${formData.name || "Website Visitor"}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Message:
${formData.message}`;
    const mailto = `mailto:contact@logicnodes.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // open mail client
    window.location.href = mailto;

    // show temporary submitted state
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value:
        "Logic Nodes Private Limited, Under Safari Sutra Holidays No 2, 1 Mohan Gokhale Rd, 1st & 20th Floor, Colony, 20th floor, Aarey Milk Colony, Mumbai, Maharashtra 400063.",
      link: "https://maps.google.com?q=Logic+Nodes+Private+Limited+Mumbai+400063",
      color: "#25B8F2",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@logicnodes.in",
      link: "mailto:info@logicnodes.in",
      color: "#EF5BB7",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 93260 65063\n+91 98604 15774",
      link: "tel:+919326065063",
      color: "#A672C2",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      link: "https://linkedin.com/company/logicnodes",
      color: "#25B8F2",
    },
    { icon: Twitter, link: "https://twitter.com/logicnodes", color: "#EF5BB7" },
    { icon: Github, link: "https://github.com/logicnodes", color: "#A672C2" },
  ];

  // hardcoded services from Services section (do not import)
  const services = [
    "Website & App Development",
    "IT Consulting",
    "Software Development",
    "ERP & CRM Solutions",
    "Cloud Solutions",
    "UI/UX Design",
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-linear-to-b from-[#282B4C] to-[#1a1d35]"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            transform: [
              "translate3d(0,0,0)",
              "translate3d(20px,-20px,0)",
              "translate3d(0,0,0)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#25B8F2]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            transform: [
              "translate3d(0,0,0)",
              "translate3d(-20px,20px,0)",
              "translate3d(0,0,0)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF5BB7]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#25B8F2]/10 border border-[#25B8F2]/30 text-[#25B8F2] text-sm font-semibold mb-4"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Let's Start a
            </span>
            <br />
            <span className="text-white">Conversation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(-30px,0,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    transform: "translate3d(-20px,0,0)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    transform: "translate3d(10px,0,0)",
                    scale: 1.02,
                  }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                      boxShadow: `0 0 20px ${info.color}20`,
                    }}
                  >
                    <info.icon
                      className="w-6 h-6"
                      style={{ color: info.color }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                    <p className="text-white font-semibold group-hover:text-[#25B8F2] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      transform: "translate3d(0,-5px,0)",
                      scale: 1.1,
                    }}
                    whileTap={{
                      transform: "translate3d(0,2px,0)",
                      scale: 0.95,
                    }}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                    style={{
                      boxShadow: `0 0 0 ${social.color}00`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 ${social.color}00`;
                    }}
                  >
                    <social.icon
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(30px,0,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              {isSubmitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    transform: "translate3d(0,20px,0) scale(0.8)",
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translate3d(0,0,0) scale(1)",
                  }}
                  exit={{
                    opacity: 0,
                    transform: "translate3d(0,20px,0) scale(0.8)",
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-[#282B4C]/95 backdrop-blur-sm rounded-2xl z-10"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ transform: "translate3d(0,0,0) scale(0)" }}
                      animate={{ transform: "translate3d(0,0,0) scale(1)" }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="w-20 h-20 text-[#25B8F2] mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-300">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300"
                  >
                    <option value="" className="bg-[#282B4C]">
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option
                        key={index}
                        value={service}
                        className="bg-[#282B4C]"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="button"
                onClick={handleMailTo}
                whileHover={{ transform: "translate3d(0,-3px,0)" }}
                whileTap={{ transform: "translate3d(0,2px,0)" }}
                className="mt-6 w-full px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] rounded-lg font-bold text-white text-lg shadow-lg hover:shadow-[#25B8F2]/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
