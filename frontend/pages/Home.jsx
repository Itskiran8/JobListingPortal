import React, { useState } from "react";
import Hero from "../components/Hero";
import JobSection from "../components/JobSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {

  const [filters, setFilters] = useState({});
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = (data) => {
    setFilters(data);
    setIsSearch(true);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <JobSection filters={filters} isSearch={isSearch} />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;