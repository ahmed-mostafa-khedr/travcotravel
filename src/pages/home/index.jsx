import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Tours from "./components/Tours";
import TopDes from "./components/TopDes";
import Offer from "./components/Offer";
import Stories from "./components/Stories";
import "./css/home.css";
import topArrowImg from "../../assets/utilites/11-arrow-up-outline.gif";
import Blog from "./components/Blog";
import { Helmet } from "react-helmet";
const HomePage = () => {
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
    <section className="banner-02 overflow-hidden w-100">
      <Helmet>
        <title>Travco | Home Page</title>
        <meta name="theme-color" content="#e60000" />
      </Helmet>
      <SearchBar />
      <Tours />
      <TopDes viewAllDes={"View All Destination"} />
      <Offer />
      <Stories />
      <Blog />{" "}
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
    </section>
  );
};

export default HomePage;
