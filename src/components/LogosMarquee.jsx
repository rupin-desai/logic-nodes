import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const LogosMarquee = () => {
  // Technology logos with CDN links
  const logos = [
    {
      name: "AWS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Azure",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      name: "Google Cloud",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
    {
      name: "Docker",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Jenkins",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
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
            Technologies We Work With
          </h3>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#1a1d35] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#1a1d35] to-transparent z-10" />

          {/* Scrolling Logos */}
          <div className="flex gap-16 items-center">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-16"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-12 w-auto object-contain opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosMarquee;
