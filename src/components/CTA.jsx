import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    { icon: Sparkles, text: "24/7 Support", color: "#25B8F2" },
    { icon: Zap, text: "Fast Delivery", color: "#EF5BB7" },
    { icon: Target, text: "Proven Results", color: "#A672C2" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#282B4C]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="bg-blob bg-blob-blue absolute top-1/4 left-1/4 w-64 h-64 rounded-full animate-blob"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="bg-blob bg-blob-pink absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full animate-blob"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              transform: "translate3d(0,20px,0) scale(0.8)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translate3d(0,0,0) scale(1)",
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#25B8F2]/20 to-[#EF5BB7]/20 border border-[#25B8F2]/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#25B8F2]" />
            <span className="text-sm font-semibold text-white">
              Limited Time Offer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="text-white">Your Business?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Let's discuss how our IT solutions can drive growth and innovation
            for your organization. Get a free consultation today.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  transform: "translate3d(0,-5px,0) scale(1.05)",
                }}
                whileTap={{ transform: "translate3d(0,2px,0) scale(0.95)" }}
                className="flex items-center gap-3"
              >
                <div
                  className="p-3 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    boxShadow: `0 0 20px ${feature.color}30`,
                  }}
                >
                  <feature.icon
                    className="w-5 h-5"
                    style={{ color: feature.color }}
                  />
                </div>
                <span className="text-white font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{
                transform: "translate3d(0,-3px,0) scale(1.05)",
              }}
              whileTap={{ transform: "translate3d(0,2px,0) scale(0.95)" }}
              className="group relative px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] rounded-full font-bold text-white text-lg shadow-lg hover:shadow-[#25B8F2]/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#EF5BB7] to-[#25B8F2]"
                initial={{ transform: "translate3d(100%,0,0)" }}
                whileHover={{ transform: "translate3d(0,0,0)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{
                transform: "translate3d(0,-3px,0) scale(1.05)",
              }}
              whileTap={{ transform: "translate3d(0,2px,0) scale(0.95)" }}
              className="px-8 py-4 border-2 border-[#25B8F2] rounded-full font-bold text-white text-lg hover:bg-[#25B8F2]/10 transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0, transform: "translate3d(0,0,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-400"
          >
            Join 500+ companies that trust Logic Nodes for their IT needs
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
