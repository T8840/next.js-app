import React from "react";
import Detail from "./Detail";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Auth>
        <Detail id={id} />
      </Auth>
    </>
  );
}

export default DetailPage;
