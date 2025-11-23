import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "ProMeat",
      client: "IIT Bombay-incubated Startup",
      category: "FMCG / Food Tech",
      image: "url('/images/promeat.png')",
      description:
        "Website redesign and custom admin panel for an IIT Bombay-incubated plant-based meat startup.",
    },
    {
      id: 2,
      title: "Safari Sutra",
      client: "Luxury Travel Brand",
      category: "Luxury Travel",
      image: "url('/images/safarisutra.png')",
      description:
        "Immersive wildlife travel website with curated itineraries and luxury safari experiences.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#1a1d35] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-blob bg-blob-blue absolute top-1/3 -left-20 w-96 h-96 rounded-full animate-blob" />
        <div className="bg-blob bg-blob-pink absolute bottom-1/3 -right-20 w-96 h-96 rounded-full animate-blob" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-[#25B8F2] font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
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
            initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects that have transformed
            businesses across industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid - two columns to cover page horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
              whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ transform: "translate3d(0,-10px,0)" }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image/Gradient */}
              <div
                className="h-80 md:h-96 relative overflow-hidden"
                style={{
                  backgroundImage: project.image,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ transform: "translate3d(0,0,0) scale(0)" }}
                    whileHover={{ transform: "translate3d(0,0,0) scale(1)" }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-full"
                  >
                    <ExternalLink className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <div className="absolute bottom-4 right-4 text-white/30 font-bold text-4xl">
                  {String(project.id).padStart(2, "0")}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#25B8F2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#25B8F2] mb-3">{project.client}</p>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div
                  className="absolute inset-0 blur-xl"
                  style={{
                    backgroundImage: project.image,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ transform: "translate3d(0,-5px,0) scale(1.05)" }}
            whileTap={{ transform: "translate3d(0,2px,0) scale(0.95)" }}
            onClick={() => navigate("/portfolio")}
            className="group inline-flex cursor-pointer items-center gap-2 px-8 py-4 bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#25B8F2]/50 transition-all duration-300"
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
