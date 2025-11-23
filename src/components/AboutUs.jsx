import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, transform: "translate3d(0,20px,0)" },
  show: {
    opacity: 1,
    transform: "translate3d(0,0,0)",
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, transform: "translate3d(0,20px,0)" },
  show: {
    opacity: 1,
    transform: "translate3d(0,0,0)",
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-[#282B4C]">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-extrabold text-white mb-6"
        >
          About us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 leading-relaxed"
        >
          We are an IT consulting and services company dedicated to driving
          digital transformation. At LogicNodes, we build scalable, secure, and
          intelligent solutions—from web and mobile development to cloud, ERP,
          and SaaS platforms. Our approach combines innovation and logic to help
          businesses streamline operations, enhance customer experiences, and
          achieve sustainable growth.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
