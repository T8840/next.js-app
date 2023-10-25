import React from "react";
import Search from "./Search";
import Auth from "@/components/Auth";

function index() {
  return (
    <>
      <Auth>
        <Search />
      </Auth>
    </>
  );
}

export default index;
