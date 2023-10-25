import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Auth(props) {
  const { children } = props;
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
    setMounted(true);
  }, [router, user]);

  return mounted ? children : <span />;
}

export default Auth;
