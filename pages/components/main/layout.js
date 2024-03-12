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
    router.pathname.includes("/login") ||
    router.pathname.includes("/register") ||
    router.pathname.includes("/reset-password");

  const isFooter =
    router.pathname.includes("/login") ||
    router.pathname.includes("/register") ||
    router.pathname.includes("/reset-password");

  let isLoggedIn = !!session;

  return (
    <div className="min-h-screen flex flex-col">
      {!isNavbar && <Navbar {...{ isLoggedIn }} />}
      <div className="flex-1 bg-primary">{props.children}</div>
      {!isFooter && <Footer />}
    </div>
  );
};

export default layout;
