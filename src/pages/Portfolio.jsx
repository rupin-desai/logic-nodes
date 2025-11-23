import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ProMeat",
      category: "FMCG / Food Tech",
      image: "/images/promeat.png",
      description:
        "Website redesign and custom admin panel for an IIT Bombay-incubated plant-based meat startup.",
      link: "https://promeat.in/",
    },
    {
      id: 2,
      title: "GaavBazaar",
      category: "E-Commerce",
      image: "/images/gaavbazaar.png",
      description:
        "A culturally rooted e-commerce platform empowering rural artisans, featuring a simplified admin for non-tech teams.",
      link: "https://gaavbazaar.com/",
    },
    {
      id: 3,
      title: "Sajeev Krushi",
      category: "Sustainability",
      image: "/images/sajeev.png",
      description:
        "A 'Garbage to Green' platform managing vermiculture projects with production tracking and organic farming resources.",
      link: "https://sajeevkrushi.com/",
    },
    {
      id: 4,
      title: "Cherries & Peaches",
      category: "Lifestyle Brand",
      image: "/images/cherries.png",
      description:
        "A feminine, visual-first lifestyle website for an influencer brand, featuring blog, merch, and collaboration modules.",
      link: "https://cherriesandpeaches-dev.netlify.app/",
    },
    {
      id: 5,
      title: "IILOS",
      category: "EdTech",
      image: "/images/iilos.png",
      description:
        "Educational platform for the International Institute of Logistics Studies, featuring a blended learning model and industry partnerships.",
      link: "https://iilos.org/",
    },
    {
      id: 6,
      title: "RealEstate Picture",
      category: "Real Estate",
      image: "/images/realestate.png",
      description:
        "Visual-first property listing platform with gallery layouts, filtering, and a simple backend for agents.",
      link: "https://realestatepicture.netlify.app/",
    },
    {
      id: 7,
      title: "Outline Media",
      category: "Agency Portfolio",
      image: "/images/outline.png",
      description:
        "A storytelling-driven agency website focusing on creative strategy, case studies, and conversion optimization.",
      link: "https://outline-next-dev.netlify.app/",
    },
    {
      id: 8,
      title: "PPTPro",
      category: "SaaS",
      image: "/images/pptpro.png",
      description:
        "Presentation design SaaS platform featuring template showcases, slide previews, and a conversion-focused UI.",
      link: "https://pptpro-react.netlify.app/",
    },
    {
      id: 9,
      title: "Bharat Vishwa Saarti",
      category: "Training Institute",
      image: "/images/bharat.png",
      description:
        "Professional driver training platform with course structures, batch management, and student certification tracking.",
      link: "https://bharatvishwasaarti.netlify.app/",
    },
    {
      id: 10,
      title: "Expo India",
      category: "Events",
      image: "/images/expo.png",
      description:
        "Complete website built from scratch without wireframes, creating a structure for exhibitors and visitors.",
      link: "https://www.expoindia.in/",
    },
    {
      id: 11,
      title: "EcoBird Recycling",
      category: "Waste Management",
      image: "/images/ecobird.png",
      description:
        "A purpose-driven recycling website using icon-based storytelling to build trust and transparency.",
      link: "https://ecobirddrecycling.com/",
    },
    {
      id: 12,
      title: "Suman Steels",
      category: "Industrial",
      image: "/images/suman.png",
      description:
        "Modern industrial redesign for a steel supplier, focusing on product categorization and corporate credibility.",
      link: "https://suman-steel-dev.netlify.app/",
    },
    {
      id: 13,
      title: "Pronology",
      category: "Corporate",
      image: "/images/pronology.png",
      description:
        "Corporate website built from minimal inputs, establishing a professional digital identity and service structure.",
      link: "https://pronology-dev.netlify.app/",
    },
    {
      id: 14,
      title: "Shubhaam Logistics",
      category: "Logistics",
      image: "/images/shubhaam.png",
      description:
        "Trust-centric logistics website highlighting fleet capabilities, warehousing, and operational transparency.",
      link: "https://shubhaamlogistics.com/",
    },
    {
      id: 15,
      title: "The Silver Lining",
      category: "Healthcare",
      image: "/images/silverlining.png",
      description:
        "Mental health wellness center website designed with empathy, soft visuals, and accessible service categorization.",
      link: "https://digitalteamwork.co.in/thesilverlining/",
    },
    {
      id: 16,
      title: "Automotive CRM",
      category: "Web App / CRM",
      image: "/images/autocrm.png",
      description:
        "Full CRM transformation for a car decor business, digitizing inventory, sales, and employee management.",
      link: "https://crm.maulicardecor.com/",
    },
    {
      id: 17,
      title: "Alkem Events Portal",
      category: "Enterprise Internal",
      image: "/images/alkem.png",
      description:
        "Internal employee events portal for a pharma giant, delivered in 3 weeks with API integration.",
      link: "https://demo-eventsmanager.netlify.app/home",
    },
    {
      id: 18,
      title: "Safari Sutra",
      category: "Luxury Travel",
      image: "/images/safarisutra.png",
      description:
        "Immersive wildlife travel website with earthy tones, showcasing curated itineraries and luxury safaris.",
      link: "https://thesafarisutra.com/",
    },
    {
      id: 19,
      title: "ChaloGoa",
      category: "Travel Marketplace",
      image: "/images/chalogoa.png",
      description:
        "Goa-specialist travel platform featuring local experiences, tours, and an integrated booking flow.",
      link: "https://chalogoa.com/",
    },
    {
      id: 20,
      title: "Pass Maldives",
      category: "Luxury Travel",
      image: "/images/passmaldives.png",
      description:
        "Premium destination platform for Maldives resorts and activities, featuring a modular content structure.",
      link: "https://passmaldives-next-dev.netlify.app/",
    },
    {
      id: 21,
      title: "Let's Ladakh",
      category: "Niche Travel",
      image: "/images/ladakh.png",
      description:
        "Specialist high-altitude travel website with custom journey planning and destination-specific branding.",
      link: "https://letsladakh.com/",
    },
    {
      id: 22,
      title: "SellItFast",
      category: "Marketplace",
      image: "/images/sellitfast.png",
      description:
        "Electronics resale marketplace with a multi-vendor system, role-based admin, and payment integration.",
      link: "https://sellitfast-dev.netlify.app/",
    },
    {
      id: 23,
      title: "MKH Sancheti School",
      category: "Education",
      image: "/images/school.png",
      description:
        "Modern K-12 school website with document repositories, curriculum showcases, and admission portals.",
      link: "https://mkhsancheti.com/",
    },
    {
      id: 24,
      title: "Cheforeca",
      category: "Hospitality",
      image: "/images/cheforeca.png",
      description:
        "Premium fine-dining website with dynamic menus, gallery showcases, and reservation integration.",
      link: "https://cheforeca.piexxi.in/",
    },
    {
      id: 25,
      title: "Smile Creative",
      category: "Agency",
      image: "/images/smile.png",
      description:
        "Full-service digital agency portfolio highlighting design, marketing, and video production capabilities.",
      link: "https://smilecreative.agency/",
    },
    {
      id: 26,
      title: "ABO Eye Institute",
      category: "Medical",
      image: "/images/abo.png",
      description:
        "Ophthalmology hospital website featuring doctor profiles, equipment showcases, and appointment booking.",
      link: "https://aboeye.com/",
    },
    {
      id: 27,
      title: "Ignition Capital",
      category: "Finance / VC",
      image: "/images/ignition.png",
      description:
        "Venture capital advisory site reflecting strategic authority, thought leadership, and startup ecosystems.",
      link: "https://ignitioncapitaladvisors.in/",
    },
    {
      id: 28,
      title: "SpectroKAVS",
      category: "Industrial Engineering",
      image: "/images/spectro.png",
      description:
        "B2B website for cleanroom infrastructure, highlighting technical competence and industrial precision.",
      link: "https://spectrokavs.com/",
    },
    {
      id: 29,
      title: "StrongBong",
      category: "E-Commerce",
      image: "/images/strongbong.png",
      description:
        "Premium smoke accessory store with age-gated e-commerce flows and product variant management.",
      link: "https://strongbong.co.in/",
    },
    {
      id: 30,
      title: "Campus Network App",
      category: "Mobile App",
      image: "/images/campus.png",
      description:
        "Student networking app with verified onboarding, matching algorithms, and safe chat modules.",
      
    },
    {
      id: 31,
      title: "Onboarding System",
      category: "SaaS / Automation",
      image: "/images/onboarding.png",
      description:
        "Automated customer onboarding tool with dynamic pricing, digital signatures, and invoice generation.",
        link: "https://yanisa-admin.netlify.app/services",
    },
  ];

  const uniqueCategories = [...new Set(projects.map((p) => p.category))];
  const colors = ["#25B8F2", "#EF5BB7", "#A672C2"];
  const getColorForCategory = (category) => {
    const index = uniqueCategories.indexOf(category) % colors.length;
    return colors[index];
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-[#282B4C] via-[#1a1d35] to-[#0f1020] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
            animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{
                opacity: 0,
                transform: "translate3d(0,20px,0) scale(0.98)",
              }}
              animate={{ opacity: 1, transform: "translate3d(0,0,0) scale(1)" }}
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

          {/* Projects Grid - 2 columns */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
                  animate={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  exit={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={
                    project.link
                      ? { transform: "translate3d(0,-8px,0)" }
                      : undefined
                  }
                  className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-xl transition-all duration-300 ${
                    project.link ? "cursor-pointer" : ""
                  }`}
                >
                  {/* Image - larger, contain, no-repeat; non-link cards zoom via group-hover */}
                  <div
                    className="relative h-96 overflow-hidden bg-black/5 transform transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
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

                    {/* Hover Overlay - shows icon + clickable when link present; otherwise decorative */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"
                        aria-label={`Open ${project.title}`}
                      >
                        <motion.div
                          initial={{
                            transform: "translate3d(0,8px,0)",
                            opacity: 0,
                          }}
                          animate={{
                            transform: "translate3d(0,0,0)",
                            opacity: 1,
                          }}
                          whileHover={{ transform: "translate3d(0,-6px,0)" }}
                          transition={{ duration: 0.18 }}
                          className="bg-white/10 p-4 rounded-full"
                        >
                          <ExternalLink className="w-8 h-8 text-white" />
                        </motion.div>
                      </a>
                    ) : (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                        <div className="bg-white/6 p-6 rounded-full" />
                      </div>
                    )}

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
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${getColorForCategory(
                        project.category
                      )}, transparent)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
