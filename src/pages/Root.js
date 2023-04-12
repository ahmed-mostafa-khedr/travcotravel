import React, { useEffect, useState } from "react";
import MainNavbar from "./../components/MainNavbar";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";
import SliderBg from "./home/components/SliderBg";
import topArrowImg from "../assets/utilites/11-arrow-up-outline.gif";
const Root = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <MainNavbar />
      <SliderBg />
      <Outlet />
      <Footer />
      <a
        href="/#"
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          textAlign: "center",

          position: "fixed",
          display: scrolled ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          bottom: "20px",
          right: "30px",
          zIndex: 999999,
        }}
      >
        <img
          src={topArrowImg}
          alt="to-top-arrow"
          style={{
            cursor: "pointer",
            width: "40px",
            height: "40px",
          }}
        />
      </a>
    </>
  );
};

export default Root;
