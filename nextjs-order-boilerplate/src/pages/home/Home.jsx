import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import Testimonial from "@/components/Testimonial";
import Whyus from "@/components/Whyus";
import React from "react";

function Home() {
  return (
    <div className="pb-5">
      <Hero />
      <Features />
      <Whyus />
      <Testimonial />
      <Cta />
      <Faq />
      <Footer />
      <SideBar />
    </div>
  );
}

export default Home;
