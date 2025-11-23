import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Industries",
      company: "TechCorp Industries",
      image: "SJ",
      rating: 5,
      text: "Logic Nodes transformed our entire IT infrastructure. Their cloud migration service was seamless, and we've seen a 40% reduction in operational costs. The team's expertise and professionalism are unmatched.",
      color: "#25B8F2",
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow Systems",
      company: "DataFlow Systems",
      image: "MC",
      rating: 5,
      text: "Working with Logic Nodes was a game-changer for our business. They delivered a custom analytics platform that exceeded our expectations. Their attention to detail and commitment to quality is exceptional.",
      color: "#EF5BB7",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering, SecureBank",
      company: "SecureBank",
      image: "ER",
      rating: 5,
      text: "The cybersecurity solutions provided by Logic Nodes have given us peace of mind. Their thorough security audits identified vulnerabilities we didn't know existed. Highly recommended!",
      color: "#A672C2",
    },
    {
      name: "David Thompson",
      role: "Founder, StartupHub",
      company: "StartupHub",
      image: "DT",
      rating: 5,
      text: "Logic Nodes helped us scale from a startup to a thriving business. Their DevOps expertise streamlined our deployment process, cutting our release time by 60%. Outstanding work!",
      color: "#25B8F2",
    },
    {
      name: "Lisa Park",
      role: "Director of IT, Global Logistics",
      company: "Global Logistics",
      image: "LP",
      rating: 5,
      text: "Their IoT solutions revolutionized our fleet management system. Real-time tracking and predictive maintenance have saved us millions. The Logic Nodes team is truly innovative.",
      color: "#EF5BB7",
    },
    {
      name: "James Wilson",
      role: "CMO, RetailPlus",
      company: "RetailPlus",
      image: "JW",
      rating: 5,
      text: "The mobile app developed by Logic Nodes has been a huge success with our customers. 4.9-star rating and growing! Their UI/UX design is world-class.",
      color: "#A672C2",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#1a1d35] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#25B8F2] rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EF5BB7] rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What Our{" "}
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear from businesses we've helped
            transform
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="pointer-events-auto -ml-4 md:-ml-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="pointer-events-auto -mr-4 md:-mr-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                style={{
                  boxShadow: `0 0 60px ${testimonials[currentIndex].color}20`,
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={80} className="text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star
                        size={24}
                        fill={testimonials[currentIndex].color}
                        stroke={testimonials[currentIndex].color}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[currentIndex].color}, ${testimonials[currentIndex].color}80)`,
                    }}
                  >
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: testimonials[currentIndex].color }}
                    >
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7]"
                      : "bg-white/30 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Team Members" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
