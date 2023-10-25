import React from "react";
import Result from "./Result";
import Auth from "@/components/Auth";

function index() {
  return (
    <div>
      <Auth>
        <Result />
      </Auth>
    </div>
  );
}

export default index;
