import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import Footer from "../components/Footer";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "ProMeat",
      category: "FMCG / Food Tech",
      image: "/images/promeat.jpg",
      description:
        "Website redesign and custom admin panel for an IIT Bombay-incubated plant-based meat startup.",
    },
    {
      id: 2,
      title: "GaavBazaar",
      category: "E-Commerce",
      image: "/images/gaavbazaar.jpg",
      description:
        "A culturally rooted e-commerce platform empowering rural artisans, featuring a simplified admin for non-tech teams.",
    },
    {
      id: 3,
      title: "Sajeev Krushi",
      category: "Sustainability",
      image: "/images/sajeev.jpg",
      description:
        "A 'Garbage to Green' platform managing vermiculture projects with production tracking and organic farming resources.",
    },
    {
      id: 4,
      title: "Cherries & Peaches",
      category: "Lifestyle Brand",
      image: "/images/cherries.jpg",
      description:
        "A feminine, visual-first lifestyle website for an influencer brand, featuring blog, merch, and collaboration modules.",
    },
    {
      id: 5,
      title: "IILOS",
      category: "EdTech",
      image: "/images/iilos.jpg",
      description:
        "Educational platform for the International Institute of Logistics Studies, featuring a blended learning model and industry partnerships.",
    },
    {
      id: 6,
      title: "RealEstate Picture",
      category: "Real Estate",
      image: "/images/realestate.jpg",
      description:
        "Visual-first property listing platform with gallery layouts, filtering, and a simple backend for agents.",
    },
    {
      id: 7,
      title: "Outline Media",
      category: "Agency Portfolio",
      image: "/images/outline.jpg",
      description:
        "A storytelling-driven agency website focusing on creative strategy, case studies, and conversion optimization.",
    },
    {
      id: 8,
      title: "PPTPro",
      category: "SaaS",
      image: "/images/pptpro.jpg",
      description:
        "Presentation design SaaS platform featuring template showcases, slide previews, and a conversion-focused UI.",
    },
    {
      id: 9,
      title: "Bharat Vishwa Saarti",
      category: "Training Institute",
      image: "/images/bharat.jpg",
      description:
        "Professional driver training platform with course structures, batch management, and student certification tracking.",
    },
    {
      id: 10,
      title: "Expo India",
      category: "Events",
      image: "/images/expo.jpg",
      description:
        "Complete website built from scratch without wireframes, creating a structure for exhibitors and visitors.",
    },
    {
      id: 11,
      title: "EcoBird Recycling",
      category: "Waste Management",
      image: "/images/ecobird.jpg",
      description:
        "A purpose-driven recycling website using icon-based storytelling to build trust and transparency.",
    },
    {
      id: 12,
      title: "Suman Steels",
      category: "Industrial",
      image: "/images/suman.jpg",
      description:
        "Modern industrial redesign for a steel supplier, focusing on product categorization and corporate credibility.",
    },
    {
      id: 13,
      title: "Pronology",
      category: "Corporate",
      image: "/images/pronology.jpg",
      description:
        "Corporate website built from minimal inputs, establishing a professional digital identity and service structure.",
    },
    {
      id: 14,
      title: "Shubhaam Logistics",
      category: "Logistics",
      image: "/images/shubhaam.jpg",
      description:
        "Trust-centric logistics website highlighting fleet capabilities, warehousing, and operational transparency.",
    },
    {
      id: 15,
      title: "The Silver Lining",
      category: "Healthcare",
      image: "/images/silverlining.jpg",
      description:
        "Mental health wellness center website designed with empathy, soft visuals, and accessible service categorization.",
    },
    {
      id: 16,
      title: "Automotive CRM",
      category: "Web App / CRM",
      image: "/images/autocrm.jpg",
      description:
        "Full CRM transformation for a car decor business, digitizing inventory, sales, and employee management.",
    },
    {
      id: 17,
      title: "Alkem Events Portal",
      category: "Enterprise Internal",
      image: "/images/alkem.jpg",
      description:
        "Internal employee events portal for a pharma giant, delivered in 3 weeks with API integration.",
    },
    {
      id: 18,
      title: "Safari Sutra",
      category: "Luxury Travel",
      image: "/images/safarisutra.jpg",
      description:
        "Immersive wildlife travel website with earthy tones, showcasing curated itineraries and luxury safaris.",
    },
    {
      id: 19,
      title: "ChaloGoa",
      category: "Travel Marketplace",
      image: "/images/chalogoa.jpg",
      description:
        "Goa-specialist travel platform featuring local experiences, tours, and an integrated booking flow.",
    },
    {
      id: 20,
      title: "Pass Maldives",
      category: "Luxury Travel",
      image: "/images/passmaldives.jpg",
      description:
        "Premium destination platform for Maldives resorts and activities, featuring a modular content structure.",
    },
    {
      id: 21,
      title: "Let's Ladakh",
      category: "Niche Travel",
      image: "/images/ladakh.jpg",
      description:
        "Specialist high-altitude travel website with custom journey planning and destination-specific branding.",
    },
    {
      id: 22,
      title: "SellItFast",
      category: "Marketplace",
      image: "/images/sellitfast.jpg",
      description:
        "Electronics resale marketplace with a multi-vendor system, role-based admin, and payment integration.",
    },
    {
      id: 23,
      title: "MKH Sancheti School",
      category: "Education",
      image: "/images/school.jpg",
      description:
        "Modern K-12 school website with document repositories, curriculum showcases, and admission portals.",
    },
    {
      id: 24,
      title: "Cheforeca",
      category: "Hospitality",
      image: "/images/cheforeca.jpg",
      description:
        "Premium fine-dining website with dynamic menus, gallery showcases, and reservation integration.",
    },
    {
      id: 25,
      title: "Smile Creative",
      category: "Agency",
      image: "/images/smile.jpg",
      description:
        "Full-service digital agency portfolio highlighting design, marketing, and video production capabilities.",
    },
    {
      id: 26,
      title: "ABO Eye Institute",
      category: "Medical",
      image: "/images/abo.jpg",
      description:
        "Ophthalmology hospital website featuring doctor profiles, equipment showcases, and appointment booking.",
    },
    {
      id: 27,
      title: "Ignition Capital",
      category: "Finance / VC",
      image: "/images/ignition.jpg",
      description:
        "Venture capital advisory site reflecting strategic authority, thought leadership, and startup ecosystems.",
    },
    {
      id: 28,
      title: "SpectroKAVS",
      category: "Industrial Engineering",
      image: "/images/spectro.jpg",
      description:
        "B2B website for cleanroom infrastructure, highlighting technical competence and industrial precision.",
    },
    {
      id: 29,
      title: "StrongBong",
      category: "E-Commerce",
      image: "/images/strongbong.jpg",
      description:
        "Premium smoke accessory store with age-gated e-commerce flows and product variant management.",
    },
    {
      id: 30,
      title: "Campus Network App",
      category: "Mobile App",
      image: "/images/campus.jpg",
      description:
        "Student networking app with verified onboarding, matching algorithms, and safe chat modules.",
    },
    {
      id: 31,
      title: "Onboarding System",
      category: "SaaS / Automation",
      image: "/images/onboarding.jpg",
      description:
        "Automated customer onboarding tool with dynamic pricing, digital signatures, and invoice generation.",
    },
  ];

  // Extract unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Color palette for category badges
  const colors = ["#25B8F2", "#EF5BB7", "#A672C2"];
  const getColorForCategory = (category) => {
    const index = categories.indexOf(category) % colors.length;
    return colors[index];
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#0f1020] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-[#25B8F2]/10 border border-[#25B8F2]/30 text-[#25B8F2] text-sm font-semibold mb-4"
            >
              OUR WORK
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our successful projects and case studies across diverse
              industries
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-12 flex-wrap"
          >
            <div className="flex items-center gap-2 text-gray-400 mb-2 sm:mb-0">
              <Filter size={18} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-[#25B8F2] to-[#EF5BB7] text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <p className="text-gray-400">
              Showing{" "}
              <span className="text-[#25B8F2] font-semibold">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </motion.div>

          {/* Projects Grid - Masonry Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative h-56 bg-linear-to-br from-[#25B8F2]/20 via-[#A672C2]/20 to-[#EF5BB7]/20 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border"
                      style={{
                        backgroundColor: `${getColorForCategory(
                          project.category
                        )}20`,
                        borderColor: `${getColorForCategory(
                          project.category
                        )}40`,
                        color: getColorForCategory(project.category),
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#282B4C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-full"
                    >
                      <ExternalLink className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-4 right-4 text-white/30 font-bold text-4xl">
                    {String(project.id).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#25B8F2] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${getColorForCategory(
                      project.category
                    )}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "31+", label: "Projects Completed" },
              { value: "20+", label: "Industries Served" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#25B8F2] via-[#A672C2] to-[#EF5BB7] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
