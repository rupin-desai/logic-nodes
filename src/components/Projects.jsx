import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      client: "Global Finance Corp",
      category: "Cloud Infrastructure",
      description:
        "Successfully migrated legacy systems to AWS, reducing infrastructure costs by 40% and improving performance by 60%.",
      image: "linear-gradient(135deg, #25B8F2, #1a9bd6)",
      stats: [
        { label: "Cost Reduction", value: "40%" },
        { label: "Performance Boost", value: "60%" },
      ],
      tags: ["AWS", "DevOps", "Migration"],
    },
    {
      title: "AI-Powered Analytics Platform",
      client: "RetailTech Solutions",
      category: "Data Analytics",
      description:
        "Built a comprehensive analytics platform using machine learning to predict customer behavior and optimize inventory.",
      image: "linear-gradient(135deg, #EF5BB7, #d63f99)",
      stats: [
        { label: "Revenue Increase", value: "35%" },
        { label: "Efficiency Gain", value: "50%" },
      ],
      tags: ["AI/ML", "Python", "React"],
    },
    {
      title: "Mobile Banking Application",
      client: "NextGen Bank",
      category: "Mobile Development",
      description:
        "Developed a secure, user-friendly mobile banking app for iOS and Android with 4.8-star rating and 500K+ downloads.",
      image: "linear-gradient(135deg, #A672C2, #8851a8)",
      stats: [
        { label: "App Rating", value: "4.8★" },
        { label: "Downloads", value: "500K+" },
      ],
      tags: ["React Native", "Node.js", "Security"],
    },
    {
      title: "E-Commerce Marketplace",
      client: "ShopHub International",
      category: "Web Development",
      description:
        "Created a scalable multi-vendor marketplace handling 10K+ daily transactions with real-time inventory management.",
      image: "linear-gradient(135deg, #25B8F2, #EF5BB7)",
      stats: [
        { label: "Daily Transactions", value: "10K+" },
        { label: "Uptime", value: "99.9%" },
      ],
      tags: ["Next.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Cybersecurity Audit Platform",
      client: "SecureNet Industries",
      category: "Cybersecurity",
      description:
        "Developed an automated security audit platform that identifies vulnerabilities and provides real-time threat monitoring.",
      image: "linear-gradient(135deg, #A672C2, #25B8F2)",
      stats: [
        { label: "Threats Detected", value: "1200+" },
        { label: "Response Time", value: "<1min" },
      ],
      tags: ["Security", "Python", "AWS"],
    },
    {
      title: "IoT Fleet Management",
      client: "LogisticsPro Inc",
      category: "IoT Solutions",
      description:
        "Built an IoT-based fleet management system tracking 1000+ vehicles with real-time GPS and predictive maintenance.",
      image: "linear-gradient(135deg, #EF5BB7, #A672C2)",
      stats: [
        { label: "Vehicles Tracked", value: "1000+" },
        { label: "Downtime Reduced", value: "45%" },
      ],
      tags: ["IoT", "React", "Azure"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#1a1d35] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -left-20 w-96 h-96 bg-[#25B8F2]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#EF5BB7]/20 rounded-full blur-3xl"
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
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects that have transformed
            businesses across industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image/Gradient */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#25B8F2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#25B8F2] mb-3">{project.client}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/10">
                  {project.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-[#EF5BB7] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div
                  className="absolute inset-0 blur-xl"
                  style={{ background: project.image, opacity: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/portfolio")}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
