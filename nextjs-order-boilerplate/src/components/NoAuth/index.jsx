import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function NoAuth(props) {
  const { children } = props;
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
    setMounted(true);
  }, [router, user]);

  return mounted ? children : <span />;
}

export default NoAuth;
