import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value:
        "Logic Nodes Private Limited, Under Safari Sutra Holidays No 2, 1 Mohan Gokhale Rd, Aarey Milk Colony, Mumbai, Maharashtra 400063.",
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
      icon: Instagram,
      link: "https://www.instagram.com/logicnodestech/",
      color: "#EF5BB7",
    },
    {
      icon: Github,
      link: "https://github.com/Logicnodes-Tech",
      color: "#A672C2",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/logicnodes-tech/",
      color: "#25B8F2",
    },
    {
      icon: Twitter,
      link: "https://x.com/logicnodestech",
      color: "#25B8F2",
    },
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

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Full name is required";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(data.email)) e.email = "Enter a valid email";
    if (!data.service) e.service = "Please select a service";
    if (!data.message.trim()) e.message = "Message is required";
    // optional: basic phone validation if provided
    if (
      data.phone &&
      data.phone.trim() &&
      !/^[\d+\-\s()]{6,}$/.test(data.phone)
    )
      e.phone = "Enter a valid phone number";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);

    // validate field on change (lightweight)
    setErrors((prev) => {
      const nextErrors = { ...prev };
      const fieldErrs = validate(next);
      if (fieldErrs[name]) nextErrors[name] = fieldErrs[name];
      else delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleMailTo = () => {
    // double-check validation before proceeding
    const validation = validate(formData);
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    if (sending) return;
    setSending(true);

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
      setErrors({});
      setSending(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(formData);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      handleMailTo();
    }
  };

  const isValid = Object.keys(validate(formData)).length === 0;

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-linear-to-b from-[#282B4C] to-[#1a1d35]"
    >
      {/* Background (keep lightweight) */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-[#25B8F2]/10 border border-[#25B8F2]/30 text-[#25B8F2] text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Let's Start a
            </span>
            <br />
            <span className="text-white">Conversation</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8 animate-fade-up">
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
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                        boxShadow: `0 0 12px ${info.color}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                      <p className="text-white font-semibold group-hover:text-[#25B8F2] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-transform duration-200 transform hover:-translate-y-1"
                      style={{ boxShadow: `0 0 0 ${social.color}00` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 16px ${social.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 ${social.color}00`;
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: social.color }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-up">
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 shadow-2xl"
              noValidate
            >
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#282B4C]/95 rounded-2xl z-10">
                  <div className="text-center">
                    <CheckCircle className="w-20 h-20 text-[#25B8F2] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-300">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.name ? "border-red-400" : "border-white/10"
                    } text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-400 mt-2">{errors.name}</p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.email ? "border-red-400" : "border-white/10"
                    } text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400 mt-2">{errors.email}</p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.phone ? "border-red-400" : "border-white/10"
                    } text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-400 mt-2">{errors.phone}</p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.service ? "border-red-400" : "border-white/10"
                    } text-white focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300`}
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
                  {errors.service && (
                    <p className="text-sm text-red-400 mt-2">
                      {errors.service}
                    </p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.message ? "border-red-400" : "border-white/10"
                    } text-white placeholder-gray-500 focus:outline-none focus:border-[#25B8F2] focus:ring-2 focus:ring-[#25B8F2]/20 transition-all duration-300 resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-400 mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={!isValid || sending}
                className={`mt-6 w-full px-8 py-4 rounded-lg font-bold text-white text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  isValid && !sending
                    ? "bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] hover:shadow-[#25B8F2]/50 cursor-pointer"
                    : "bg-gray-600 cursor-not-allowed opacity-60"
                }`}
              >
                {sending ? "Opening mail client..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
