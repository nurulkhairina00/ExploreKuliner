/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const layout = (props) => {
  const { data: session } = useSession();
  const router = useRouter();

  const isNavbar =
    router.pathname === "/" ||
    router.pathname === "/login-reviewer" ||
    router.pathname === "/register-reviewer" ||
    router.pathname === "/reset-password";

  const isFooter =
    router.pathname === "/login-reviewer" ||
    router.pathname === "/register-reviewer" ||
    router.pathname === "/reset-password";

  let isLoggedIn = !!session;

  return (
    <div>
      {!isNavbar && <Navbar {...{ isLoggedIn }} />}
      <div className="bg-primary">{props.children}</div>
      {!isFooter && <Footer />}
    </div>
  );
};

export default layout;
