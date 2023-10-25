import React from "react";
import Signin from "./Signin";
import NoAuth from "@/components/NoAuth";

function index() {
  return (
    <>
      <NoAuth>
        <Signin />
      </NoAuth>
    </>
  );
}

export default index;
