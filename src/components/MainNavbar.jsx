import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { animateScroll as scroll, scroller } from "react-scroll";
import "./css/nav.modules.css";
import {
  OverlayTrigger,
  Tooltip,
  Offcanvas,
  Navbar,
  Nav,
  Popover,
  Spinner,
} from "react-bootstrap";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import enImg from "../assets/country-flags/02.jpg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
  Divider,
  Button,
  styled,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Chip,
  Avatar,
} from "@mui/material";
import Spin from "react-reveal/Spin";
import Jump from "react-reveal/Jump";
import RubberBand from "react-reveal/RubberBand";
import egImg from "../assets/country-flags/egypt-flag.png";
import uaeImg from "../assets/country-flags/uae-flag.png";
import omanImg from "../assets/country-flags/oman-flag.png";
import jordanImg from "../assets/country-flags/jordan-flag.png";
import logoImg from "./assets/images/logo.png";
// import TravcoLogo from "../assets/TravcoLogo1.png";
import spainImg from "../assets/country-flags/flag-spain.jpg";
import logoImg1 from "./assets/TravcoLogo1.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "./assets/58-call-phone-outline.gif";

const UpdatingPopover = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      console.log("updating!");
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <Popover ref={ref} body {...props}>
        {children}
      </Popover>
    );
  }
);

//dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const MainNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState("");
  const [scrolled, setScrolled] = useState(false);
  // const [show, setShow] = useState(false);
  const location = useLocation();
  const [navBackground, setNavBackground] = useState(false);
  const navigate = useNavigate();
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
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  });
  // console.log(location.pathname);
  // console.log(navBackground);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  // left-side-bar
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  //hashLink
  const scrollTarget = (target) =>
    scroller.scrollTo(target, {
      smooth: true,
      duration: 300,
      spy: true,
      offset: -70,
    });
  const scrollToPage = async (target) => {
    location.hash = `${target}`;
    console.log(location);
    if (location.pathname !== "/") {
      await navigate("/");
    }
    scrollTarget(target);
  };
  //dialog
  const [opened, setOpened] = React.useState(false);

  const handleClickOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          position: "fixed",
          width: "100%",
          paddingTop: scrolled ? "10px" : "40px",
          zIndex: 1000,
          backgroundColor: scrolled ? "rgb(0,0,0,0.6)" : "transparent",
        }}
      >
        <div className=" d-flex justify-content-start col-12">
          <div className="col-2 col-lg-3 d-flex justify-content-start ms-0  ms-lg-4 ">
            <RubberBand>
              <HashLink className="logo " to="/#home" smooth>
                {scrolled ? (
                  <img src={logoImg1} alt="logo" id="logoAndNav" />
                ) : (
                  <img src={logoImg} alt="logo" />
                )}
              </HashLink>
            </RubberBand>
          </div>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
            <i className="fas fa-align-left"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            className="offcanvas"
            style={{
              backgroundColor: "rgb(0,0,0,0.5)",
              height: "52%",
              width: "auto",
              margin: "inherit",
            }}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-lg`}
                onClick={() => navigate("/")}
              >
                <img
                  src={logoImg1}
                  alt="logo"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "35px",
                    width: "140px",
                    height: "60px",
                  }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column flex-lg-row overflow-visible">
              <Nav className="d-flex mt-5 mt-lg-0 align-items-center pt-3 pt-xl-3 col-lg-7 col-xl-8 justify-content-center   me-lg-5 me-xl-3">
                <div className="dropdown me-4">
                  <Button
                    variant="text"
                    sx={{ color: activeLink === "pages" ? " #ed1b24" : "#fff" }}
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    className="topbar__menu-link "
                    disabled={navBackground ? false : true}
                  >
                    <NavLink to="" className="d-flex align-items-center">
                      <Jump>TRAVCO</Jump>
                      <Spin>
                        <KeyboardArrowDownIcon />
                      </Spin>
                    </NavLink>
                  </Button>
                  <div
                    className="dropdown-content dropdown-content-1 m-auto  py-1 pe-5 text-left ms-auto "
                    style={{ zIndex: "11001100" }}
                  >
                    <NavLink to="About-Us">About Travco Travel</NavLink>
                    <NavLink to="/">Reviews</NavLink>
                    <NavLink to="/">Why Book with Us</NavLink>
                    <NavLink to="/">Travco News</NavLink>
                    <NavLink to="/offices">International Offices</NavLink>
                    <NavLink to="/">Affiliated Companies</NavLink>
                    <NavLink to="/">Website Terms</NavLink>
                  </div>
                </div>
                <div className="dropdown me-4">
                  <Button
                    variant="text"
                    sx={{
                      color: activeLink === "services" ? " #ed1b24" : "#fff",
                      cursor: "default",
                    }}
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    className="topbar__menu-link "
                    disabled={navBackground ? false : true}
                  >
                    <NavLink to="/" className="d-flex align-items-center">
                      <Jump>SERVICES</Jump>
                      <Spin>
                        <KeyboardArrowDownIcon />
                      </Spin>
                    </NavLink>
                  </Button>
                  <div
                    className="dropdown-content dropdown-content-1 m-auto  py-1 pe-5 text-left ms-auto"
                    style={{ zIndex: "11001100" }}
                  >
                    <NavLink to="/">Deals/ Offers</NavLink>
                    <NavLink to="/">Experiences</NavLink>
                    <NavLink to="/hotels">Hotels</NavLink>
                    <NavLink to="/">MICE</NavLink>
                    <NavLink to="/">Package</NavLink>
                    <NavLink to="/">Transfer</NavLink>
                    <NavLink to="/">Travel Insurance</NavLink>
                    <NavLink to="/">Entry visa</NavLink>
                    <NavLink to="/">Weddings</NavLink>
                  </div>
                </div>
                <div className="dropdown-3 me-3">
                  <Button
                    variant="text"
                    sx={{
                      color: activeLink === "destination" ? " #ed1b24" : "#fff",
                    }}
                    onClick={handleClickOpen}
                    className="topbar__menu-link "
                    // disabled={navBackground ? false : true}
                  >
                    <NavLink
                      to={location.pathname}
                      className="d-flex align-items-center"
                    >
                      <Jump>
                        DESTINATIONS
                        <Spin>
                          <KeyboardArrowDownIcon />
                        </Spin>
                      </Jump>
                    </NavLink>
                  </Button>
                  <Dialog
                    open={opened}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    sx={{
                      overflow: "hidden",
                      height: "95vh",
                      padding: "0",
                      width: "100%",
                      marginTop: "60px",
                    }}
                  >
                    <div className="dialog-2" onClick={() => setOpened(false)}>
                      <span>x</span>
                    </div>
                    <DialogTitle
                      sx={{ fontFamily: '"Prata", serif', fontWeight: "900" }}
                    >
                      Our Destinations
                    </DialogTitle>
                    <DialogContent sx={{ overflow: "hidden" }}>
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        sx={{ overflow: "hidden" }}
                      >
                        <List sx={{ overflow: "hidden", width: "100%" }}>
                          <ListItem sx={{ overflow: "visible" }}>
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src={egImg}
                                  alt=""
                                  style={{ width: "30px" }}
                                />
                              </ListItemIcon>
                              <Typography
                                component="ul"
                                className="egypt"
                                sx={{
                                  fontWeight: "600",
                                  color:
                                    expanded === "panel1" ? "#e60000" : "#000",
                                  backgroundColor: "transparent",
                                  marin: "0",
                                  padding: "0",
                                  listStyle: "none",
                                }}
                              >
                                <li>
                                  <NavLink
                                    style={{
                                      color: "#000",
                                    }}
                                    to="/"
                                  >
                                    Egypt
                                  </NavLink>
                                </li>
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                          <ul
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              flexWrap: "wrap",
                              listStyle: "none",

                              backgroundColor: "transparent",
                            }}
                          >
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Abu Simbel"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Abu Soma"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Ain El Sokhna"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label=" Al Dakhla Oasis"
                              />
                            </li>

                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label=" Alexandria"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Aswan"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Bahariya Oasis"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Cairo"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Farafra Oasis"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Fayoum"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Hurghada"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Luxor"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Madinat Makadi"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Marsa Alam"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Mersa Matruh"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip avatar={<Avatar>EG</Avatar>} label="Siwa" />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>EG</Avatar>}
                                label="Sharm El Sheikh"
                              />
                            </li>
                          </ul>
                        </List>
                        <Divider
                          color="#ccc"
                          sx={{
                            boxShadow: "0 0.2px 1px #000",
                            width: "70%",
                          }}
                          className="mx-auto"
                        />
                        <List>
                          <ListItem>
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src={uaeImg}
                                  alt=""
                                  style={{ width: "30px" }}
                                />
                              </ListItemIcon>
                              <Typography
                                component="ul"
                                className="egypt"
                                sx={{
                                  fontWeight: "600",
                                  color:
                                    expanded === "panel1" ? "#e60000" : "#000",
                                  backgroundColor: "transparent",
                                  marin: "0",
                                  padding: "0",
                                  listStyle: "none",
                                }}
                              >
                                <li>
                                  <NavLink
                                    style={{
                                      color: "#000",
                                    }}
                                    to="/"
                                  >
                                    UAE
                                  </NavLink>
                                </li>
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                          <ul
                            style={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              flexWrap: "wrap",
                              listStyle: "none",

                              backgroundColor: "transparent",
                            }}
                          >
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>AE</Avatar>}
                                label="Abu Dhabi"
                              />
                            </li>
                            <li
                              style={{
                                color: "#000",
                                padding: "5px 0",
                              }}
                            >
                              <Chip
                                avatar={<Avatar>AE</Avatar>}
                                label="Dubai"
                              />
                            </li>
                          </ul>
                        </List>
                        <Divider
                          color="#ccc"
                          sx={{
                            boxShadow: "0 0.2px 1px #000",
                            width: "70%",
                          }}
                          className="mx-auto"
                        />
                        <List>
                          <ListItem>
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src={omanImg}
                                  alt=""
                                  style={{ width: "30px" }}
                                />
                              </ListItemIcon>
                              <Typography
                                component="ul"
                                className="egypt"
                                sx={{
                                  fontWeight: "600",
                                  color:
                                    expanded === "panel1" ? "#e60000" : "#000",
                                  backgroundColor: "transparent",
                                  marin: "0",
                                  padding: "0",
                                  listStyle: "none",
                                }}
                              >
                                <li>
                                  <NavLink
                                    style={{
                                      color: "#000",
                                    }}
                                    to="/"
                                  >
                                    Oman
                                  </NavLink>
                                </li>
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                        </List>
                        <Divider
                          color="#ccc"
                          sx={{
                            boxShadow: "0 0.2px 1px #000",
                            width: "70%",
                          }}
                          className="mx-auto"
                        />
                        <List>
                          <ListItem>
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src={jordanImg}
                                  alt=""
                                  style={{ width: "30px" }}
                                />
                              </ListItemIcon>
                              <Typography
                                component="ul"
                                className="egypt"
                                sx={{
                                  fontWeight: "600",
                                  color:
                                    expanded === "panel1" ? "#e60000" : "#000",
                                  backgroundColor: "transparent",
                                  marin: "0",
                                  padding: "0",
                                  listStyle: "none",
                                }}
                              >
                                <li>
                                  <NavLink
                                    style={{
                                      color: "#000",
                                    }}
                                    to="/"
                                  >
                                    Jordan
                                  </NavLink>
                                </li>
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                  <SwipeableDrawer
                    anchor="bottom"
                    open={state["bottom"]}
                    onClose={toggleDrawer("bottom", false)}
                    onOpen={toggleDrawer("bottom", true)}
                    sx={{ width: "100%", borderRadius: "30px" }}
                  >
                    <Box
                      sx={{
                        width: "600px",

                        position: "relative",
                        borderRadius: "30px",
                        zIndex: "200",
                      }}
                      role="presentation"
                      onClick={toggleDrawer("bottom", true)}
                      onKeyDown={toggleDrawer("bottom", true)}
                    >
                      <List>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon>
                              <img
                                src={egImg}
                                alt=""
                                style={{ width: "30px" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Accordion
                                  expanded={expanded === "panel1"}
                                  onChange={handleChange("panel1")}
                                  sx={{
                                    border: "none",
                                  }}
                                >
                                  <AccordionSummary
                                    aria-controls="panel1d-content"
                                    id="panel1d-header"
                                    sx={{
                                      position: "relative",
                                      zIndex: "10000000",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontWeight: "600",
                                        color:
                                          expanded === "panel1"
                                            ? "#e60000"
                                            : "#000",
                                        backgroundColor: "transparent",
                                      }}
                                    >
                                      Egypt
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <ul
                                      className="egypt"
                                      style={{
                                        listStyle: "revert",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "start",
                                        justifyContent: "center",
                                        backgroundColor: "transparent",
                                      }}
                                    >
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Abu Simbel
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Abu Soma
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Ain El Sokhna
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Al Dakhla Oasis
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Al Dakhla Oasis
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Alexandria
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Aswan
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Bahariya Oasis
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Cairo
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Farafra Oasis
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Fayoum
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Hurghada
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Luxor
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Madinat Makadi
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Marsa Alam
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Mersa Matruh
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Siwa
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Sharm El Sheikh
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </AccordionDetails>
                                </Accordion>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Divider
                        color="#e60000"
                        sx={{ boxShadow: "0 0.2px 1px #e60000", width: "70%" }}
                        className="mx-auto"
                      />
                      <List>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon>
                              <img
                                src={uaeImg}
                                alt=""
                                style={{ width: "30px" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Accordion
                                  expanded={expanded === "panel2"}
                                  onChange={handleChange("panel2")}
                                  sx={{
                                    border: "none",
                                  }}
                                >
                                  <AccordionSummary
                                    aria-controls="panel3d-content"
                                    id="panel2d-header"
                                    sx={{
                                      position: "relative",
                                      zIndex: "10000000",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontWeight: "600",
                                        color:
                                          expanded === "panel2"
                                            ? "#e60000"
                                            : "#000",
                                      }}
                                    >
                                      UAE
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <ul
                                      className="egypt"
                                      style={{
                                        listStyle: "revert",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "start",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Abu Dhabi
                                        </NavLink>
                                      </li>
                                      <li
                                        style={{
                                          color: "#000",
                                          padding: "5px 0",
                                        }}
                                      >
                                        <NavLink
                                          style={{
                                            color: "#000",
                                          }}
                                          to="/"
                                        >
                                          Dubai
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </AccordionDetails>
                                </Accordion>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Divider
                        color="#e60000"
                        sx={{ boxShadow: "0 0.2px 1px #e60000", width: "70%" }}
                        className="mx-auto"
                      />
                      <List>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon>
                              <img
                                src={omanImg}
                                alt=""
                                style={{ width: "30px" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{
                                    fontWeight: "600",
                                    marginLeft: "40px",
                                    color:
                                      expanded === "panel4"
                                        ? "#e60000"
                                        : "#000",
                                  }}
                                >
                                  Oman
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Divider
                        color="#e60000"
                        sx={{ boxShadow: "0 0.2px 1px #e60000", width: "70%" }}
                        className="mx-auto"
                      />
                      <List>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon>
                              <img
                                src={jordanImg}
                                alt=""
                                style={{ width: "30px" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{
                                    fontWeight: "600",
                                    marginLeft: "40px",
                                    color:
                                      expanded === "panel4"
                                        ? "#e60000"
                                        : "#000",
                                  }}
                                >
                                  Jordan
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  </SwipeableDrawer>
                </div>
                {/*
              
                <div className="dropdown me-4">
                  <Button
                    variant="text"
                    sx={{
                      color: activeLink === "contact-us" ? " #ed1b24" : "#fff",
                    }}
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    className="topbar__menu-link "
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id="button-tooltip">
                          <Spinner animation="grow" size="sm" /> Contact Us
                        </Tooltip>
                      }
                    >
                      <NavLink
                        to="/contact-us"
                        className="d-flex align-items-center"
                      >
                        <Jump>
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGf0lEQVR4nO2bd4wVVRTGB6SsBaKiIDYQEIWIUZoFBBUpGgtWUAnYEBsKEUmMwViCJegfKyqgsUYlUQIi2MDERtEAaixRiWIvq6jAKoKAP3N4366T2Zn3Zu6beftI3pfchL3vzpl7vzn3nnbxvAoqqKCCDAE0B4YBVY3w7j2AQcUKaV3k80PJ4cKiJuL27tv07o6uAm4ENgP7Bfo7AROB54C3gTeBp4HLgX0CY6ts8UCrItfjMv/2wHnFCOgDVJsa+wQ+AWwFPgWmi6QpwEPAN8DfwL2NseBMAfQFfgCWA/3zjDsD+Bz4yDSlwP4sZWtSzOJ7A7XAU3XaUGB8K2Ah8CXQJuT3cZQeY10X3x74Tl//q7gHivb+u8ALIb9N1qR+A07QmZJFGwz8oXdNdiVgIbAM2A14KSEJhwBbgAEhBKwEXk4iL+G8uwLfA/OBFU4EAP21gC76u6UDCc/Y1gkhYIm0xOR97ZcnrRsrqxKnjfFvTaA78CMwR37IElcC5pl5C/QlIsHMELDWfwjVEeCT96JIOEh9g6UhcdtSoJ2e7QHUALOBZupLTgC5r/OnTSbkt9gkAN20B/cMI8Anb6HMaKTliDHnI4FfgSeBnXz9TgQMlBO0S8TvsUgwx0gEdIoiwCdvQZAEoANwbkg7G9g14LP8DjwCNA3IdiLgAuCLAmMKkiCVxO9ShxGg/hZmNYBvgc7qu0LmNNhWAz015hhgHTAzzN67EnAtsCrCIeoelwTgYjOjgb5QAnwkzBcJXWLM8zhgA3BflLPjSsAY4LOQ/imyrb3jkKADbmZcAnwkzJP/EUmCfAg7p+7J5+m5EjAE2Biyn5pI1QqSINW0uOGwJAQESDBbfnDI72Yp/gLujLEWI+CGuGvfDvnP5gMc7QUQk4Se2quzQp6PQ0A7OTAbRUJX32+nKOjaBtxcyM93IsAAvAFM80IQg4RtWkCDREiMLdBV5C2RFZkjV9z6Twc2ATcp0bJeoXhVFgSM0AHT1pGEqIMx3yF4rBwnW/TO6muu3EONTHP9Ymx76T3mDO2dNgFNgfeBx/KMSUxCHjN4plS+OuTsaQY8YGYxYrtYmL7Gb6GKJsCgvWyHzTVeSiREOELjdeZc7zlAnuts+QNDUiPAAIzU5EZ6EUhoHfyxgD03Tft6hFcEJOtW4B/gytQIMCg6MxJGefkncL++Qt8QD2+7m+uLBlvoADMXdqCXEhSA2Vaapa1TPAEG4KqUNMH28ofA6yKlwb4tFkA/4BcFWR+kQoDBVCsFEupgcm5JEPcnbXfJHJMaASmTsDYi0Em7WeB0qpcmSPFM8MoN5A6O3kFbnJEm2JnQwSsnkMsFELSnGZOQRWLUrR4JtAGus0xwzPGZkqBnj1DRZTRwcrBcFxjfQXHMNiVH3ctjcZEFCYpI79AikFlboxyA4T3VHYNusy1+sZI3kxQ/1EeTOwQJwCBZCSuzXRYMyJRqm6pgbWldUVYusX35Pr6xH5tZzG7l6ZPwk9zZqXWp7Tyy2qk6bSm0A9RnGjNJ/+6ost5Qr1QgHRJqEhRfLFxepBpBS7nCm/Xla5VZci+OuqDU1sHqDvryE3xluXFKmpR28Y1IwtXaPvVFkVRB7oCpKlcSgN11dvTz0gS5YqOZln91wr4F9CpTEiwPOTHu3ArCUtKyu1blPV5ttvq6lBsJwPPA3XHnVRAqbMyNeNGCwhKcSLAA6lHHWuQrdjssybzyQl96eEQCszbpPb04JOSRF8dtXu18HSYMUscGkwXOtysuoQ/9P+Z2uawdS0GCbUm9r3Nqdx3J7f1lfo9Mjsfy4M2PJPf0siBBqbZ3AmMH6OBuoMWxAByo0tRKTdraKlVq9o8nJVJ2aiQAR8kEnhQY11bEuOccyHlZD/pSTHZS7+ssMBsS7INM93ZEkLsEscXlIpNUfKu+fmyzXHYgV/TcoGsy3WKMb62Msi18RpaZpZIBOFR+xxYlTS9V8bO17ilapme47iivU3LkrLLPMToWNWZoXwexXuSMCuYKRMKrCoNL/v8TMoECHNOCw83qFIr0gL2US6ivDZYNyEWTF9m1FlVtgm1YSu952JIgaciKujOwOOmJLfVcIbWeCzwb0i5JIjPPuyyR+loasqIIWORAgNUafjaV9jKGQvdqr5wATDANKMF7Rssv6OGVoYnbpAsM5rb2SrmdAzwuv3+8V44ATgM+8ZWs00SttuaJjb3OCiqowNth8B/0Yg1Q9MkoYQAAAABJRU5ErkJggg=="
                            alt=""
                            style={{
                              width: "35px",
                              height: "35px",
                            }}
                          />
                        </Jump>
                      </NavLink>
                    </OverlayTrigger>
                  </Button>
                </div>
              */}
              </Nav>
              <div className="d-flex justify-content-center justify-content-lg-start mx-auto  col-8 pe-lg-5 me-lg-5 pt-2  align-items-center ">
                <div className="dropdown ">
                  <Button
                    variant="text"
                    sx={{
                      color: activeLink === "tour" ? " #ed1b24" : "#fff",
                    }}
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    className="topbar__menu-link "
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip id="button-tooltip">Brochures</Tooltip>}
                    >
                      <NavLink to="#tour" className="d-flex align-items-center">
                        <Jump>
                          <img
                            className="brochures"
                            style={{
                              width: "40px",
                              height: "40px",
                            }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQElEQVR4nO2YTW4UMRBGTSKFSEFcgxPwswXBIlyBFRdAbDhFGLION2DBji0rltwgm0ggJWdg9VATR0Qdu+1ql2u6R/Uka9Se6qrPn215xiE4juM4jgnAa+A3aYb+47DLkB/8Db/CLkNE+t3iAQ6BU+CqMMNFAyq4BD4NNcNS4HrwEg5G7x8gZxOWAv9n/nEh7nuMezHqfxn7f1bUenqzEjS0d1/ao3xvY+hFHPQD4FV8HnhXyhHz2GwVhEu7It894Gvm9W/AnqIB7VuF+qVdZUCM3RtmGjgH/sTP98C+QFexnspWoX5mqw3QwEwXboCR00LMdNFQCPgM/FBqZ1q6RJAeWPZoHMV90WwpXaUjr5cBpwkBuTi1VjAgeeT1MuBqfDRm4j5otilduSOvlwG1fW80m5YuSwOea7Y1GvBIs63RgCPgoVI7Wp0BPXEDInNMWabTKzPgMnY/qSmuxZQu4Jnl74CNRGRPAxKcWP0X2NxaCUmRPUkMfNDyEbhf0j+rUFCK08JMFw2Fxn00oqVLBG6AkdNCzHSRSMAEswvN1FXSsFUDGPXRyGIMSLEtA5JiZsRlMSskxA2IaBklSsAEU+/SiIYGMbgB18wxqidmunADjJwWYqaLRAIm0KhRepZocAMaJkaUoKXQ+N3Ss5Wuf7gBkaAUp4WZLtwA7lyBTxlVitPg1hX45MzmrsqlxTasn5MWAw5zV+AZauNakGi5c1XeBSq3ilKt9qWtDdvZKvOXtjbIt0oLdkvbcRzHCbvNXxbJyZFGayimAAAAAElFTkSuQmCC"
                            alt=""
                          />
                        </Jump>
                      </NavLink>
                    </OverlayTrigger>
                  </Button>
                </div>
                <div className="dropdown ">
                  <Button
                    sx={{
                      color: activeLink === "icon-one" ? " #ed1b24" : "#fff",
                    }}
                    variant="text"
                    id="demo-customized-button"
                    onClick={() => onUpdateActiveLink("icon-one")}
                    className=""
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      style={{ marginBottom: "-10px" }}
                      overlay={
                        <Tooltip
                          id="button-tooltip"
                          style={{ marginBottom: "-7px" }}
                        >
                          <Spinner
                            animation="grow"
                            size="sm"
                            style={{ width: "15px", height: "15px" }}
                          />
                          Contact Us
                        </Tooltip>
                      }
                    >
                      <NavLink to="contact-us" className="topbar__menu-icon">
                        <Spin>
                          <img
                            className="calling-us"
                            src={CallIcon}
                            alt=""
                            style={{
                              width: "40px",
                              height: "38px",
                            }}
                          />
                        </Spin>
                      </NavLink>
                    </OverlayTrigger>
                  </Button>
                </div>

                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  key="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <UpdatingPopover
                      style={{
                        zIndex: "1",
                        border: "none",
                        color: "#fff !important",
                        background: "#2E2E2E",
                        borderBottomLeftRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "20px",
                        width: "150px",
                        padding: "20px ",
                        paddingLeft: "5px ",
                      }}
                    >
                      <div className="d-flex flex-column text-left align-items-start en">
                        <NavLink
                          style={{ color: "#fff", fontSize: "16px" }}
                          to="/"
                          className="  py-2 w-100 "
                        >
                          <img
                            className="me-2 language"
                            style={{ width: "20px" }}
                            src={enImg}
                            alt=""
                          />
                          English
                        </NavLink>
                        <hr style={{ color: "#ccc", width: "100%" }} />
                        <NavLink
                          style={{ color: "#fff", fontSize: "16px" }}
                          to="/"
                          className="  py-2 w-100 "
                        >
                          <img
                            className="me-2"
                            style={{
                              width: "20px",
                            }}
                            src={egImg}
                            alt=""
                          />
                          Arabic
                        </NavLink>
                        <hr style={{ color: "#ccc", width: "100%" }} />
                        <NavLink
                          style={{ color: "#fff", fontSize: "16px" }}
                          to="/"
                          className="py-2 w-100 "
                        >
                          <img
                            className="me-2"
                            style={{
                              width: "20px",
                            }}
                            src={spainImg}
                            alt=""
                          />
                          Spain
                        </NavLink>
                      </div>
                    </UpdatingPopover>
                  }
                >
                  <div
                    className="d-flex align-items-center justify-content-center ms-3 me-4 lang"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#D03000",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    <span> EN</span>
                  </div>
                </OverlayTrigger>

                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  key="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <UpdatingPopover
                      style={{
                        zIndex: "1",
                        border: "none",
                        color: "#fff",
                        background: "#2E2E2E",
                        borderBottomLeftRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "20px",
                        width: "190px",
                      }}
                    >
                      <div className="d-flex flex-column text-left align-items-start ">
                        <NavLink
                          style={{ color: "#919193", fontSize: "16px" }}
                          to="/"
                        >
                          Login
                        </NavLink>
                        <NavLink
                          style={{ color: "#919193", fontSize: "16px" }}
                          to="/"
                        >
                          register
                        </NavLink>
                        <NavLink
                          style={{ color: "#919193", fontSize: "16px" }}
                          to="/"
                        >
                          edit
                        </NavLink>
                      </div>
                    </UpdatingPopover>
                  }
                >
                  <div
                    className="d-flex align-items-center justify-content-center login"
                    style={{
                      transition: "all 0.2s linear",
                      cursor: "pointer",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.33)",
                      color: "#fff",
                    }}
                  >
                    <span className="login-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.217"
                        height="17.537"
                        viewBox="0 0 20.217 17.537"
                      >
                        <path
                          id="rating"
                          d="M74.494,17.848a1.117,1.117,0,0,0,1.549-.307,9.715,9.715,0,0,1,16.128-.02,1.117,1.117,0,0,0,1.854-1.247A11.921,11.921,0,0,0,88.148,11.7a6.311,6.311,0,1,0-8-.025A11.918,11.918,0,0,0,74.186,16.3,1.117,1.117,0,0,0,74.494,17.848ZM84.162,2.734a4.077,4.077,0,1,1-4.077,4.077A4.082,4.082,0,0,1,84.162,2.734Z"
                          transform="translate(-73.998 -0.5)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </div>
                </OverlayTrigger>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </>
  );
};
export default MainNavbar;
