import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import React from "react";

function Result() {
  return (
    <div>
      <Hero withSearchResultForm />
      <Cards />
      <Footer />
      <SideBar />
    </div>
  );
}

export default Result;
