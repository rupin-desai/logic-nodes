import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const LogosMarquee = () => {
  // Sample company logos (you can replace these with actual logos)
  const logos = [
    { name: "Microsoft", color: "#25B8F2" },
    { name: "Amazon", color: "#EF5BB7" },
    { name: "Google", color: "#A672C2" },
    { name: "IBM", color: "#25B8F2" },
    { name: "Oracle", color: "#EF5BB7" },
    { name: "SAP", color: "#A672C2" },
    { name: "Salesforce", color: "#25B8F2" },
    { name: "Adobe", color: "#EF5BB7" },
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-[#1a1d35] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Trusted By Industry Leaders
          </h3>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#1a1d35] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#1a1d35] to-transparent z-10" />

          {/* Scrolling Logos */}
          <motion.div
            animate={{
              transform: [
                "translate3d(0,0,0)",
                `translate3d(-${50 * logos.length}px,0,0)`,
              ],
            }}
            transition={{
              transform: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-16"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px]"
              >
                <motion.div
                  whileHover={{ transform: "translate3d(0,-3px,0)" }}
                  className="text-2xl font-bold text-white/40 hover:text-white/80 transition-colors duration-300"
                  style={{
                    textShadow: `0 0 20px ${logo.color}40`,
                  }}
                >
                  {logo.name}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogosMarquee;
