import React from "react";
import Hero from "../components/Hero";
import LogosMarquee from "../components/LogosMarquee";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#282B4C]">
      <Hero />
      <LogosMarquee />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
