import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative IT solutions that drive growth and digital transformation.",
      color: "#25B8F2",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "A dedicated team of 50+ certified professionals with expertise across multiple domains.",
      color: "#EF5BB7",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies to deliver solutions that keep you ahead of the curve.",
      color: "#A672C2",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "15+ years of delivering measurable results with 98% client satisfaction rate.",
      color: "#25B8F2",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#282B4C] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-[#25B8F2]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#EF5BB7]/20 rounded-full blur-3xl"
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
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Why Choose{" "}
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Logic Nodes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We are a leading IT consulting firm dedicated to transforming
            businesses through technology, innovation, and strategic thinking.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Glow Effect on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}40, ${feature.color}20)`,
                  }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-[#25B8F2]/10 via-[#A672C2]/10 to-[#EF5BB7]/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2010, Logic Nodes has been at the forefront of IT
                consulting, helping businesses navigate the complex landscape of
                digital transformation. What started as a small team of
                passionate technologists has grown into a global consulting
                powerhouse.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we serve clients across industries, from startups to
                Fortune 500 companies, delivering solutions that not only meet
                current needs but anticipate future challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "50+", label: "Team Members" },
                { value: "20+", label: "Countries Served" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #25B8F2, #EF5BB7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
