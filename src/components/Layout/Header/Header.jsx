"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/images/Header/dark-logo.png";
import MobileNav from "./Mobile_nav/Mobile_nav";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import PositionedSnackbar from "@/components/Reuse/Section_Head/SnackBar";
import cladIcon from "@/assets/images/Clad/ICON.png";
import CladCutLogo from "@/assets/images/Header/products_logos/cladcut.png";
import grassIcon from "@/assets/images/Grasshopper/insect.png";
import byldIcon from "@/assets/images/Byld/iconlogo.png";
import RDAppIcon from "@/assets/images/RDApp/logo.png";
import ChatPlusIcon from "@/assets/images/chatPlus/logo.png";
import Windmaster from "@/assets/images/windmaster/windmaster.png";
import customizationIcon from "@/assets/images/customization/customization.png"
import bondify from "@/assets/images/BondifyCRM/bondify.png"

export default function Header({ handleToggle }) {
  const headerScrol = useRef();
  const [getWidowY, setWindowY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const pathname = usePathname();

  // console.log()

  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (newState) => () => {
    setOpen(true);
  };
  return (
    <header>
      <Container className="nav-container">
        <div
          className={`navbar_container  nav_active`}
          id="main_nav"
          ref={headerScrol}
        >
          <div className="d-flex items-center">
            <Image
              onClick={() => router.push("/")}
              src={Logo}
              alt="main logo"
              className="main_logo"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="nav">
            <nav>
              <ul className="nav-list-container">
                <li>
                  <Link href="/#home" className="nav-link-item" shallow>
                    HOME
                  </Link>
                </li>
                <li
                  className="custom-dropdown"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <Link href="/#products" className="nav-link-item">
                    PRODUCTS
                  </Link>
                  {dropdownOpen && (
                    <div
                      className="dropdown-menu-cust shadow_inside"
                      data-aos="fade-up"
                      data-aos-duration="300"
                    >
                      <Row>
                        <Col sm={12} md={12} lg={12}>
                          <ul className="products-category first-col">
                            <li>
                              <div>Design Software</div>
                              <ul>
                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/cladcut"}
                                    shallow
                                  >
                                    <img
                                      style={{ width: "15px", height: "15px" }}
                                      src={cladIcon.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    <div>CladCut</div>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/windmaster"}
                                    shallow
                                  >
                                    {/* <i className="bi bi-wind me-3 float-none"></i>{" "} */}
                                    <img
                                      style={{ width: "15px", height: "15px" }}
                                      src={Windmaster.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    <div>Wind Master</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div>Business Adminstration</div>
                              <ul>
                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/bondifycrm"}
                                    shallow
                                  >
                                        <img
                                      style={{ width: "10px", height: "15px" }}
                                      src={bondify.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    {/* <i className="bi bi-kanban me-3 float-none"></i> */}
                                    <div>bondify CRM</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div>
                                Risk Assessment{" "}
                                <div className="text-secondary">
                                  comply with SBC
                                </div>
                              </div>
                              <ul>
                                <li onClick={handleClick}>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/rdapp"}
                                    shallow
                                  >
                                    <img
                                      style={{ width: "15px", height: "18px" }}
                                      src={RDAppIcon.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    <div className="mt-1">RDAPP</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div>Communication</div>
                              <ul>
                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/chatplus"}
                                    shallow
                                  >
                                    {/* <i className="bi bi-chat-square-text me-3 float-none"></i> */}
                                    <img
                                      style={{ width: "15px", height: "18px" }}
                                      src={ChatPlusIcon.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    <div>ChatPlus</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div>Developement Services</div>
                              <ul>
                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/customization"}
                                    shallow
                                  >
                                    <img
                                      style={{ width: "20px", height: "20px" }}
                                      src={customizationIcon.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    {/* <i className="bi bi-code-slash me-3 float-none"></i> */}
                                    <div>Custom Software</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div>Facade Fabrication</div>
                              <ul>
                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/grasshopper"}
                                    shallow
                                  >
                                    <img
                                      style={{ width: "20px", height: "20px" }}
                                      src={grassIcon.src}
                                      className="me-3"
                                      alt=""
                                    />{" "}
                                    <div>Grasshopper Modules</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div>Generative AI</div>
                              <ul>
                                <li>
                                  <Link
                                    className="d-block w-100 h-100 d-flex"
                                    href={"/byld"}
                                    shallow
                                  >
                                    <img
                                      style={{ width: "15px", height: "20px" }}
                                      src={byldIcon.src}
                                      className="me-3"
                                      alt=""
                                    />
                                    <div>BYLD</div>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  )}
                </li>
                <li>
                  <Link href="/#whatwedo" className="nav-link-item" shallow>
                    WHAT WE DO
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="nav-link-item" shallow>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <a onClick={handleToggle} className="pointer nav-link-item">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile_nav">
            <MobileNav />
          </div>
        </div>
      </Container>
      <PositionedSnackbar
        handleClick={handleClick}
        setOpen={setOpen}
        open={open}
      />
    </header>
  );
}
