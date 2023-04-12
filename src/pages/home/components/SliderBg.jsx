import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
// import { PageHeader } from "react-bootstrap";
import FirstBg from "../assets/slider1.jpg";
import FirstBgIn from "../assets/banner-internal.jpg";
import SecBg from "../assets/slide2.jpg";
import SecBgIn from "../assets/banner-internal2.jpg";
import "../css/sliderBg.css";
import "../css/home.css";
import Zoom from "react-reveal/Zoom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const SliderBg = () => {
  const [navBackground, setNavBackground] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  });

  const module_overlay = {
    backgroundColor: "rgb(0,0,0,0.4)",
    height: "100vh",
    width: "100%",
    position: "absolute",
    zIndex: "5",
    top: "0",
    left: "0",
  };
  return (
    <>
      <Carousel
        className="bg h-100 carsuals "
        fade
        id="home"
        style={{
          paddingBottom: !navBackground && "50px",
          transition: "all 0.3 ease-in",
        }}
      >
        <Carousel.Item
          interval={7000}
          style={{ height: navBackground ? "100vh" : "60vh" }}
        >
          <div style={module_overlay}></div>
          <img
            className="d-block slide-img"
            src={navBackground ? FirstBg : FirstBgIn}
            alt="First slide"
          />

          <Carousel.Caption
            style={{
              zIndex: "11",
              width: "50%",
              wordWrap: "auto",
              textAlign: "left",
            }}
            className="ms-0 "
          >
            <Zoom bottom cascade>
              {navBackground && <h1>Aswan</h1>}
            </Zoom>
            <Zoom cascade>
              {navBackground ? (
                <p className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              ) : (
                <h1>
                  {location.pathname !== "/stories"
                    ? location.pathname.slice(1)
                    : ""}
                </h1>
              )}
            </Zoom>

            {navBackground && (
              <div className="d-flex justify-content-between align-items-center ">
                {" "}
                <Zoom left>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#e60000",
                      padding: "10px 30px",
                      visibility: "visible",
                      animationDuration: "1.5s",
                      animatioDelay: "1s",
                      "&:hover": {
                        bgcolor: "#FF3B00 ",
                        boxShadow: "0px 3px 15px 0px rgb(255 59 0 / 78%)",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Zoom>
              </div>
            )}
            <div className="next_title">{navBackground ? "Egypt" : ""} </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={7000}
          style={{ height: navBackground ? "100vh" : "60vh" }}
        >
          <div style={module_overlay}></div>
          <img
            className="d-block slide-img"
            src={navBackground ? SecBg : SecBgIn}
            alt="First slide"
          />
          <Carousel.Caption
            style={{ zIndex: "11", width: "50%", wordWrap: "auto" }}
            className="ms-0 "
          >
            <Zoom bottom cascade>
              {navBackground && <h1>Hurghada Tours</h1>}
            </Zoom>
            <Zoom cascade>
              {navBackground ? (
                <p className="text">
                  ndustry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s
                </p>
              ) : (
                <h1>
                  {location.pathname !== "/stories"
                    ? location.pathname.slice(1)
                    : ""}
                </h1>
              )}
            </Zoom>
            {navBackground && (
              <div className="d-flex justify-content-between align-items-center ">
                {" "}
                <Zoom left>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#e60000",
                      padding: "10px 30px",
                      visibility: "visible",
                      animationDuration: "1.5s",
                      animatioDelay: "1s",
                      "&:hover": {
                        bgcolor: "#FF3B00 ",
                        boxShadow: "0px 3px 15px 0px rgb(255 59 0 / 78%)",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Zoom>
              </div>
            )}
            <div className="next_title">{navBackground ? "Egypt" : ""} </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/*<Carousel.Item interval={5000}>
          <div style={module_overlay}></div>
          <Zoom cascade>
            <div
              style={{
                height: "100vh",

                overflow: "hidden",
              }}
            >
              <video
                className="w-100"
                src={video1}
                autoPlay
                muted
                loop
                controls
              />
            </div>
          </Zoom>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default SliderBg;
