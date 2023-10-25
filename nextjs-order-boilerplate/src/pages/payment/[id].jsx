import React from "react";
import Payment from "./Payment";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Auth>
        <Payment id={id} />
      </Auth>
    </>
  );
}

export default index;
