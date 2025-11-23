import React from "react";
import { motion } from "framer-motion";
import { Cloud, Code, Shield, Database, Smartphone, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Migrate, optimize, and manage your cloud infrastructure with our expert guidance. We specialize in AWS, Azure, and Google Cloud platforms.",
      color: "#25B8F2",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Cost Optimization",
      ],
    },
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Build scalable, robust applications tailored to your business needs. From web to mobile, we deliver cutting-edge solutions.",
      color: "#EF5BB7",
      features: ["Web Applications", "API Development", "Microservices"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with comprehensive security solutions. We ensure your systems are secure from emerging threats.",
      color: "#A672C2",
      features: ["Security Audits", "Penetration Testing", "Compliance"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions for business growth.",
      color: "#25B8F2",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "AI/ML Solutions",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Create exceptional mobile experiences for iOS and Android. We build native and cross-platform apps that users love.",
      color: "#EF5BB7",
      features: ["Native Apps", "Cross-Platform", "UI/UX Design"],
    },
    {
      icon: Cog,
      title: "DevOps & Automation",
      description:
        "Streamline your development lifecycle with modern DevOps practices. Automate deployments and improve collaboration.",
      color: "#A672C2",
      features: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring"],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-[#1a1d35] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#25B8F2]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF5BB7]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-[#25B8F2] font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Comprehensive{" "}
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              IT Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From strategy to execution, we provide end-to-end IT consulting
            services to accelerate your digital transformation journey.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color}15, transparent 70%)`,
                }}
              />

              {/* Icon Glow Effect */}
              <div
                className="absolute top-8 left-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <service.icon
                    className="w-8 h-8"
                    style={{ color: service.color }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#25B8F2] group-hover:to-[#EF5BB7] group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-3"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-flex items-center text-sm font-semibold group-hover:text-[#25B8F2] transition-colors duration-300"
                  style={{ color: service.color }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Card Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
