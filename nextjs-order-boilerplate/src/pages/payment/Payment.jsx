import CardPayment from "@/components/CardPayment";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import React from "react";

function Payment(props) {
  return (
    <>
      <Hero withRentButton={false} withSearchFormOrder id={props.id} />
      <CardPayment idOrder={props.id}/>
      <Footer />
      <SideBar />
    </>
  );
}

export default Payment;
