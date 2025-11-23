import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#0f1020]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="bg-blob bg-blob-blue absolute top-20 left-10 w-72 h-72 rounded-full animate-blob"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="bg-blob bg-blob-pink absolute bottom-20 right-10 w-96 h-96 rounded-full animate-blob"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        <div
          className="bg-blob bg-blob-purple absolute top-1/2 left-1/2 w-96 h-96 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-blob"
          style={{ animationDuration: "25s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5  border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-[#25B8F2]" />
            <span className="text-sm text-white/80">
              Innovative IT Solutions
            </span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">Transform Your Business</span>
          <br />
          <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
            With Logic Nodes
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We deliver cutting-edge IT consulting services that drive innovation,
          streamline operations, and accelerate your digital transformation
          journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => {
              const element = document.getElementById("services");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white/5  border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            Explore Services
          </motion.button>
        </motion.div>
        \
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
  );
};

export default Hero;
