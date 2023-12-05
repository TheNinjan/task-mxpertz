import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OurStorySection from "../components/OurStorySection";
import OnlyTheBestSection from "../components/OnlyTheBestSection";
import ProductsSection from "../components/ProductsSection";
import Testimonials from "../components/Testimonials";
import EventSection from "../components/EventSection";
import TimeSection from "../components/TimeSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <OnlyTheBestSection />
      <ProductsSection />
      <Testimonials />
      <EventSection />
      <TimeSection />
      <FooterSection />
    </>
  );
};

export default Home;
