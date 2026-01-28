import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  Calendar,
  UserCircle,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageSquare,
  Star,
} from "lucide-react";
import Footer from "../components/Footer";

const CRM = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "Dashboard & Analytics",
      description:
        "Get a bird's eye view of your travel business with comprehensive analytics. Track booking trends, monitor monthly revenue, analyze lead conversion rates, and identify top lead sources—all in one intuitive dashboard.",
      image: "/images/travel_crm_1.png",
      icon: LayoutDashboard,
      color: "#25B8F2",
      stats: ["1,234+ Customers", "156 Active Bookings", "$48.2k Revenue"],
    },
    {
      id: 2,
      title: "B2C Inquiry Management",
      description:
        "Never miss a customer inquiry again. Our intelligent system tracks all B2C inquiries with response times, conversion rates, and source attribution. Filter, search, and manage inquiries efficiently.",
      image: "/images/travel_crm_2.png",
      icon: Users,
      color: "#EF5BB7",
      stats: ["32% Conversion", "2.4h Avg Response", "Multi-source Tracking"],
    },
    {
      id: 3,
      title: "B2B Partner Directory",
      description:
        "Build and manage your network of travel partners. Track commissions, monitor bookings, and maintain relationships with hotels, airlines, and tour operators through our comprehensive partner management system.",
      image: "/images/travel_crm_3.png",
      icon: Building2,
      color: "#A672C2",
      stats: ["680 Partner Bookings", "$1.05M Revenue", "$125k Commissions"],
    },
    {
      id: 4,
      title: "Quotation Builder",
      description:
        "Create professional travel quotations in minutes. Our smart quotation builder helps you generate, track, and convert proposals with version control and automated follow-ups.",
      image: "/images/travel_crm_4.png",
      icon: FileText,
      color: "#25B8F2",
      stats: ["Quick PDF Export", "Version Tracking", "$18k+ Total Value"],
    },
    {
      id: 5,
      title: "Booking Management",
      description:
        "Streamline your entire booking workflow from confirmation to completion. Track booking statuses, manage guest details, and handle payments—all from a centralized booking hub.",
      image: "/images/travel_crm_5.png",
      icon: Calendar,
      color: "#EF5BB7",
      stats: ["Real-time Status", "Guest Management", "$16.4k Revenue"],
    },
    {
      id: 6,
      title: "Customer Database",
      description:
        "Build lasting relationships with a 360° customer view. Access booking history, preferences, and communication logs to deliver personalized travel experiences that keep customers coming back.",
      image: "/images/travel_crm_6.png",
      icon: UserCircle,
      color: "#A672C2",
      stats: ["B2B & B2C Segments", "Smart Filters", "Export Options"],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Revenue",
      description:
        "Increase bookings by 40% with intelligent lead tracking and automated follow-ups.",
      color: "#25B8F2",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Reduce administrative tasks by 60% with streamlined workflows and automation.",
      color: "#EF5BB7",
    },
    {
      icon: Globe,
      title: "Go Global",
      description:
        "Manage multi-destination bookings with currency support and timezone handling.",
      color: "#A672C2",
    },
    {
      icon: Shield,
      title: "Stay Secure",
      description:
        "Enterprise-grade security with role-based access and data encryption.",
      color: "#25B8F2",
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      description:
        "Instant updates across all devices with cloud-based infrastructure.",
      color: "#EF5BB7",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Multi-user access with activity logs and team performance tracking.",
      color: "#A672C2",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("cta-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#0f1020] pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-72 h-72 bg-[#25B8F2]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#EF5BB7]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: [0, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A672C2]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
                animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <Sparkles className="w-4 h-4 text-[#25B8F2]" />
                  <span className="text-sm text-white/80">
                    Built for Travel Agencies
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
                animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-white">Supercharge Your</span>
                <br />
                <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
                  Travel Business
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
                animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                The complete CRM solution designed exclusively for travel
                agencies. Manage inquiries, bookings, partners, and customers—all
                in one powerful platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
                animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ transform: "translate3d(0,-3px,0)" }}
                  className="group px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  href="#features"
                  whileHover={{ transform: "translate3d(0,-3px,0)" }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  Explore Features
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
                animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
              >
                {[
                  { value: "50+", label: "Agencies" },
                  { value: "10k+", label: "Bookings" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, transform: "translate3d(30px,0,0)" }}
              animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#25B8F2]/20 border border-white/10">
                <img
                  src="/images/travel_crm_1.png"
                  alt="Travel CRM Dashboard"
                  className="w-full h-auto"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#282B4C]/50 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-white">
                      +12.5%
                    </div>
                    <div className="text-xs text-gray-400">Growth Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{
              transform: [
                "translate3d(0,0px,0)",
                "translate3d(0,10px,0)",
                "translate3d(0,0px,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-16 md:py-24 bg-[#1a1d35] overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 90, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#25B8F2]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [0, -90, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF5BB7]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-[#25B8F2] font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Powerful Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Everything You Need to{" "}
              <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
                Succeed
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive suite of tools designed specifically for travel
              agencies to manage their entire operation efficiently.
            </motion.p>
          </motion.div>

          {/* Features Showcase */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Feature Image */}
            <motion.div
              initial={{ opacity: 0, transform: "translate3d(-30px,0,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#282B4C]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFeature}
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-auto"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4">
                <motion.button
                  onClick={prevFeature}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
                <motion.button
                  onClick={nextFeature}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeFeature
                      ? "bg-[#25B8F2] w-6 md:w-8"
                      : "bg-white/30 hover:bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Feature Details */}
            <motion.div
              initial={{ opacity: 0, transform: "translate3d(30px,0,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, transform: "translate3d(20px,0,0)" }}
                  animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  exit={{ opacity: 0, transform: "translate3d(-20px,0,0)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${features[activeFeature].color}40, ${features[activeFeature].color}20)`,
                      border: `1px solid ${features[activeFeature].color}30`,
                    }}
                  >
                    {React.createElement(features[activeFeature].icon, {
                      className: "w-7 h-7 md:w-8 md:h-8",
                      style: { color: features[activeFeature].color },
                    })}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {features[activeFeature].title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    {features[activeFeature].description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                    {features[activeFeature].stats.map((stat, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border"
                        style={{
                          backgroundColor: `${features[activeFeature].color}15`,
                          borderColor: `${features[activeFeature].color}30`,
                          color: features[activeFeature].color,
                        }}
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Feature Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {features.map((feature, index) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ transform: "translate3d(0,-2px,0)" }}
                    className={`p-3 md:p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left ${index === activeFeature
                      ? "bg-white/10 border-white/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                  >
                    <feature.icon
                      className="w-5 h-5 md:w-6 md:h-6 mb-2"
                      style={{
                        color:
                          index === activeFeature
                            ? feature.color
                            : "rgba(255,255,255,0.5)",
                      }}
                    />
                    <span
                      className={`text-xs md:text-sm font-medium ${index === activeFeature
                        ? "text-white"
                        : "text-gray-400"
                        }`}
                    >
                      {feature.title.split(" ")[0]}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 md:py-24 bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#0f1020] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 180, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A672C2]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-[#EF5BB7] font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Built for{" "}
              <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
                Travel Success
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Purpose-built solutions that address the unique challenges of
              travel agencies.
            </motion.p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
                whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ transform: "translate3d(0,-10px,0)" }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Animated Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${benefit.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.color}40, ${benefit.color}20)`,
                      border: `1px solid ${benefit.color}30`,
                    }}
                  >
                    <benefit.icon
                      className="w-6 h-6 md:w-7 md:h-7"
                      style={{ color: benefit.color }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Card Number */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-4xl md:text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Ecosystem Section - NEW DESIGN */}
      <section className="relative py-16 md:py-24 bg-[#1a1d35] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-[#A672C2] font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Extensible Platform
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              A Complete{" "}
              <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
                Travel Ecosystem
              </span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Beyond core management, our platform offers specialized modules to
              handle every aspect of your travel agency operations.
            </p>
          </motion.div>

          {/* Ecosystem Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Task Manager", icon: Check, desc: "Internal team coordination and deadlines." },
              { title: "Communication Hub", icon: MessageSquare, desc: "Integrated WhatsApp, email & SMS chat." },
              { title: "Itineraries", icon: Globe, desc: "Beautifully crafted travel plans." },
              { title: "Lead Engine", icon: Zap, desc: "Capture leads from web & social media." },
              { title: "Review Manager", icon: Star, desc: "Collect & showcase customer testimonials." },
              { title: "Notifications", icon: Zap, desc: "Real-time alerts for staff & guests." },
              { title: "Multi-Currency", icon: TrendingUp, desc: "Global transaction support built-in." },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#25B8F2]/20 transition-colors">
                  <module.icon className="w-6 h-6 text-gray-400 group-hover:text-[#25B8F2] transition-colors" />
                </div>
                <h3 className="text-white font-bold mb-2">{module.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{module.desc}</p>
              </motion.div>
            ))}

            {/* "And More" Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-[#25B8F2]/10 to-[#EF5BB7]/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-[#25B8F2]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-[#25B8F2]" />
              </div>
              <h3 className="text-white font-bold mb-1 italic">And Much More...</h3>
              <p className="text-[#25B8F2] text-xs font-semibold">Continuous Updates</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-section"
        className="relative py-16 md:py-24 bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#0f1020] overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-[#25B8F2]/20 via-[#A672C2]/20 to-[#EF5BB7]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#EF5BB7]" />
              <span className="text-sm text-white/80">
                Ready to Transform?
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Take Your Travel Agency to the{" "}
              <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
                Next Level
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 50+ travel agencies already using our CRM to streamline
              operations, boost revenue, and deliver exceptional customer
              experiences.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
              {["Free Demo", "No Credit Card", "24/7 Support"].map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
                    whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#25B8F2]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#25B8F2]" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="/#contact"
                whileHover={{ transform: "translate3d(0,-3px,0)" }}
                whileTap={{ transform: "translate3d(0,2px,0)" }}
                className="group px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/#contact"
                whileHover={{ transform: "translate3d(0,-3px,0)" }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Demo
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CRM;