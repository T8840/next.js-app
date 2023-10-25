import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import React from "react";

function Search() {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm />
      <Footer />
      <SideBar />
    </>
  );
}

export default Search;
