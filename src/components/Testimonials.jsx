import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ravi Kapoor",
      role: "Founder of FinEdge Solutions",
      company: "FinEdge Solutions",
      image: "RK",
      rating: 5,
      text: "Partnering with LogicNodes completely transformed our digital presence. The website is sleek, scalable, and built to perform seamlessly. We've seen a huge boost in client inquiries and overall trust in our brand.",
      color: "#25B8F2",
    },
    {
      name: "Anjali Nair",
      role: "Marketing Head at EduVerse",
      company: "EduVerse",
      image: "AN",
      rating: 5,
      text: "LogicNodes delivered exactly what we needed—a modern, intuitive platform that's easy to manage and scale. Their consultative approach and attention to detail made the entire process smooth and highly effective.",
      color: "#25B8F2",
    },
    {
      name: "Vikram Shah",
      role: "CEO of HealthSync",
      company: "HealthSync",
      image: "VS",
      rating: 5,
      text: "From UI/UX design to full-stack development, LogicNodes handled everything seamlessly. Their technical expertise and commitment to quality truly set them apart. Highly recommended for growth-focused businesses.",
      color: "#25B8F2",
    },
    {
      name: "Priya Singh",
      role: "Operations Manager at GreenGrid Tech",
      company: "GreenGrid Tech",
      image: "PS",
      rating: 5,
      text: "LogicNodes delivered exactly what we needed—a modern, intuitive platform that's easy to manage and scale. Their consultative approach and attention to detail made the entire process smooth and highly effective.",
      color: "#25B8F2",
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
        <div className="bg-blob bg-blob-blue absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-blob" />
        <div className="bg-blob bg-blob-pink absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
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
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
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
              whileHover={{ transform: "translate3d(0,-3px,0)" }}
              whileTap={{ transform: "translate3d(0,2px,0)" }}
              onClick={prevTestimonial}
              className="pointer-events-auto -ml-4 md:-ml-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ transform: "translate3d(0,-3px,0)" }}
              whileTap={{ transform: "translate3d(0,2px,0)" }}
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
              initial={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
              animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              exit={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
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
                      initial={{
                        opacity: 0,
                        transform: "translate3d(0,10px,0) scale(0)",
                      }}
                      animate={{
                        opacity: 1,
                        transform: "translate3d(0,0,0) scale(1)",
                      }}
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
                  whileHover={{ transform: "translate3d(0,-3px,0)" }}
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
      </div>
    </section>
  );
};

export default Testimonials;
