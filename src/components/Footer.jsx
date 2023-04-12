import React from "react";
import "./css/footer.css";
import { NavLink } from "react-router-dom";
// import logo from "./assets/TravcoLogo1.png";
const Footer = () => {
  // const lang = "en";
  // const lang = useSelector((state) => state.lang.value.lang);
  // const content = useSelector((state) => state.lang.value.content.Footer);

  return (
    <section
      className="footer "
      style={{
        backgroundColor: "#000",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/*<img alt="" src={logo} className="d-none footer-logo mx-1" />*/}
      <div className="mx-0 ">
        <div className="footer_top d-flex justify-content-between pt-5 row  px-0">
          <div className="d-flex flex-row flex-wrap  mx-2 mx-md-4 mx-lg-5 col-12  justify-content-between">
            <div class="col-6 col-md-5 col-lg-2  d-flex flex-column justify-content-start text-left mb-5">
              <div class="_title m_title">Travel Ideas </div>
              <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
                <li>
                  <a href="#.">Adventure Tours</a>
                </li>
                <li>
                  <a href="#.">History and Culture</a>
                </li>
                <li>
                  <a href="#.">Beach or Water</a>
                </li>
                <li>
                  <a href="#.">Cities</a>
                </li>
                <li>
                  <a href="#.">Just Relax</a>
                </li>
                <li>
                  <a href="#.">Search Nothing Found </a>
                </li>
                <li>
                  <a class="" href="/cruises">
                    Cruise Tours
                  </a>
                </li>
                <li>
                  <a href="#.">Sports and Activities</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2  align-items-lg-start text-left ">
              <div className="_title m_title">Destinations </div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#.">Luxor</a>
                </li>
                <li>
                  <a href="#.">Aswan</a>
                </li>
                <li>
                  <a href="#.">Cairo</a>
                </li>
                <li>
                  <a href="#.">Alexandria</a>
                </li>
                <li>
                  <a href="#.">Hurghada</a>
                </li>
                <li>
                  <a href="#.">Marsa Alam</a>
                </li>
                <li>
                  <NavLink to="error">Sharm El Sheikh</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6  col-md-3 col-lg-2 mb-5 align-items-lg-start text-left  ">
              <div className="_title m_title">About Us </div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <NavLink to="/About-Us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>

                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <a href="#.">Item 004</a>
                </li>
                <li>
                  <a href="#.">Item 005</a>
                </li>
                <li>
                  <a href="#.">Item 006</a>
                </li>
              </ul>
            </div>
            <div className="right col-6 col-md-12 col-lg-6  align-items-lg-start text-start text-md-center text-lg-start">
              <div className="_title">Contacts </div>
              <div className="contacts_info d-flex flex-wrap">
                <div className="tel w-100 col-lg-6  col-md-12  ">
                  <a href="tel:(+202) 3854 1010" className="float-md-none">
                    <i
                      className="fa-solid fa-phone me-2 fs-4"
                      style={{ marginLeft: "-40px" }}
                    ></i>{" "}
                    (+202) 3854 1010
                  </a>
                  <p>Round the clock support </p>
                </div>
                <div className="email w-100 col-lg-6">
                  <a href="mailto:info@hellodigi.ru" className="float-md-none">
                    <i
                      className="fa-solid fa-envelope me-2 fs-4"
                      style={{ marginLeft: "-35px" }}
                    ></i>{" "}
                    info@travco.com
                  </a>
                  <p>For any questions </p>
                </div>
                <div
                  className="address col-12 text-left text-md-center text-lg-start"
                  style={{ fontSize: "18px" }}
                >
                  {" "}
                  <h6 className="text-light ">
                    <i
                      className="fa-solid fa-location-dot me-3 fs-4"
                      style={{ marginLeft: "-44px" }}
                    ></i>
                    Travco Center, 26th Of July Corridor.
                    <br />
                    6th Of October, Egypt.
                  </h6>
                </div>
              </div>
              <div className="socials social-links ">
                <a
                  href="https://www.facebook.com/Travcotravelco"
                  target="_blank"
                  className="link facebook"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
                <a
                  href="https://www.instagram.com/travcotravel/"
                  target="_blank"
                  className="link instagram"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
                <a href="#." className="link pinterest">
                  <span></span>
                </a>
                <a
                  href="https://twitter.com/TravelTravco"
                  target="_blank"
                  className="link twitter"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
                <a href="#." className="link youtube">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socials social-links my-5 social-mob d-none">
        <a
          href="https://www.facebook.com/Travcotravelco"
          target="_blank"
          className="link facebook"
          rel="noopener noreferrer"
        >
          <span></span>
        </a>
        <a
          href="https://www.instagram.com/travcotravel/"
          target="_blank"
          className="link instagram"
          rel="noopener noreferrer"
        >
          <span></span>
        </a>
        <a href="#." className="link pinterest">
          <span></span>
        </a>
        <a
          href="https://twitter.com/TravelTravco"
          target="_blank"
          className="link twitter"
          rel="noopener noreferrer"
        >
          <span></span>
        </a>
        <a href="#." className="link youtube">
          <span></span>
        </a>
      </div>
      <div className="mx-5">
        {" "}
        <div className="footer_bottom d-flex flex-column flex-lg-row align-items-center  justify-content-between mx-4 text-secondary">
          <div className="privacy text-secondary mb-3 mb-lg-0">
            <div style={{ cursor: "pointer" }}>
              {" "}
              <NavLink to="terms-conditions" className="link text-secondary">
                Terms & Condition
              </NavLink>
            </div>
          </div>
          <div className="right me-0 me-lg-5   ">
            <a href="#." className="link text-secondary">
              © 2023 Travco Travel All Rights Reserved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
