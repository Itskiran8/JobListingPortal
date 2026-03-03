import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobSection from "../components/JobSection";
import Testimonials from "../components/Testimonials";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <JobSection />
       <Testimonials />
       
      <Footer />
    </>
  );
};

export default Home;