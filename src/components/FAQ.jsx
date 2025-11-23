import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Logic Nodes specialize in?",
      answer:
        "Logic Nodes specializes in comprehensive IT consulting services including Cloud Solutions (AWS, Azure, Google Cloud), Custom Software Development, Cybersecurity, Data Analytics & AI/ML, Mobile App Development, and DevOps & Automation. We tailor our services to meet your specific business needs and drive digital transformation.",
      color: "#25B8F2",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A simple mobile app or website might take 8-12 weeks, while enterprise cloud migrations or custom platforms can take 4-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process.",
      color: "#EF5BB7",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes! We offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 technical support. We believe in building long-term partnerships with our clients to ensure continued success.",
      color: "#A672C2",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across diverse industries including Finance & Banking, Healthcare, Retail & E-commerce, Logistics & Supply Chain, Manufacturing, Education, and Technology Startups. Our team has the expertise to understand industry-specific challenges and deliver compliant, efficient solutions.",
      color: "#25B8F2",
    },
    {
      question: "How do you ensure project security and data privacy?",
      answer:
        "Security is our top priority. We follow industry best practices including secure coding standards, regular security audits, penetration testing, and compliance with regulations like GDPR, HIPAA, and SOC 2. All our team members sign NDAs, and we implement strict access controls and encryption protocols.",
      color: "#EF5BB7",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models to suit different needs: Fixed Price for well-defined projects, Time & Material for evolving requirements, and Dedicated Team for long-term engagements. We provide transparent cost estimates with no hidden fees and work within your budget to deliver maximum value.",
      color: "#A672C2",
    },
    {
      question: "Can you help migrate our existing systems to the cloud?",
      answer:
        "Absolutely! Cloud migration is one of our core specialties. We conduct thorough assessments of your current infrastructure, develop a comprehensive migration strategy, handle the entire migration process with minimal downtime, and provide post-migration optimization. We've successfully migrated 200+ enterprise systems to AWS, Azure, and Google Cloud.",
      color: "#25B8F2",
    },
    {
      question: "Do you work with startups or only enterprise clients?",
      answer:
        "We work with organizations of all sizes! From early-stage startups looking to build their MVP to Fortune 500 companies requiring enterprise-grade solutions. We have specialized packages for startups including flexible payment terms, scalable architectures, and advisory services to help you grow.",
      color: "#EF5BB7",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#282B4C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#25B8F2]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#EF5BB7]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,0,0) scale(0.8)" }}
            whileInView={{
              opacity: 1,
              transform: "translate3d(0,0,0) scale(1)",
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25B8F2]/10 border border-[#25B8F2]/20 rounded-full mb-4"
          >
            <HelpCircle className="w-5 h-5 text-[#25B8F2]" />
            <span className="text-sm text-[#25B8F2] font-semibold">
              Got Questions?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Frequently Asked</span>{" "}
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and
            how we can help transform your business.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group-hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    {openIndex === index ? (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${faq.color}20` }}
                      >
                        <Minus
                          className="w-5 h-5"
                          style={{ color: faq.color }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${faq.color}20` }}
                      >
                        <Plus
                          className="w-5 h-5"
                          style={{ color: faq.color }}
                        />
                      </div>
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-white/10"
                        style={{
                          paddingTop: "1.25rem",
                          borderLeftWidth: "3px",
                          borderLeftColor: faq.color,
                          marginLeft: "1.5rem",
                          marginRight: "1.5rem",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA at Bottom */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#25B8F2]/50 transition-all duration-300"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
