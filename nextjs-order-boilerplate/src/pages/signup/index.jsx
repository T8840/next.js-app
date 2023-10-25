import React from "react";
import Signup from "./Signup";
import NoAuth from "@/components/NoAuth";

function index() {
  return (
    <div>
      <NoAuth>
        <Signup />
      </NoAuth>
    </div>
  );
}

export default index;
