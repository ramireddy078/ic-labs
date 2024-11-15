"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  };
  const hideNavHandler = () => {
    setShowNav(false);
  };
  return (
    <>
      <Navbar openNav={showNavHandler} />
      <MobileNav shownav={showNav} closeNav={hideNavHandler} />
    </>
  );
}

export default ResponsiveNav;
