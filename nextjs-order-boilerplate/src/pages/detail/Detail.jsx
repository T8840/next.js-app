import CardDetail from "@/components/CardDetail";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import React from "react";

function Detail(props) {
  return (
    <>
      <Hero withRentButton={false} withSearchFormDetail disabledForm />
      <CardDetail id={props.id} />
      <Footer />
      <SideBar />
    </>
  );
}

export default Detail;
