/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const layout = (props) => {
  const { data: session } = useSession();

  const router = useRouter();
  const isHomePage = router.pathname === "/";

  let isLoggedIn = false;

  if (session) isLoggedIn = true;

  return (
    <div>
      {!isHomePage && <Navbar {...{ isLoggedIn }} />}
      <div className="bg-primary">{props.children}</div>
      <Footer />
    </div>
  );
};

export default layout;
