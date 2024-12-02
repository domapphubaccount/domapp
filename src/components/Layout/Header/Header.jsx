"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import MobileNav from "./Mobile_nav/Mobile_nav";
import { Container } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PositionedSnackbar from "@/components/Reuse/Section_Head/SnackBar";
import { useDispatch } from "react-redux";
import { contact_Toggle } from "@/Store/reducers/Header";
import { header } from "@/Store/Main/App/header/header";

export default function Header() {
  const headerScrol = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const dispatch = useDispatch();

  const handleClick = () => () => {
    setOpen(true);
  };

  return (
    <header>
      <Container className="nav-container">
        <div
          className={`navbar_container nav_active`}
          id="main_nav"
          ref={headerScrol}
        >
          <div className="d-flex items-center">
            <Image
              onClick={() => router.push("/")}
              src={header.logo}
              alt="main logo"
              className="main_logo cursor-pointer"
            />
          </div>
          <div className="nav">
            <nav>
              <ul className="nav-list-container">
                {header &&
                  header.nav.map((item, i) => (
                    <li
                      key={i}
                      className="custom-dropdown"
                      onMouseEnter={item.name === "PRODUCTS" ? toggleDropdown : ()=>''}
                      onMouseLeave={item.name === "PRODUCTS" ? toggleDropdown : ()=>''}
                    >
                      <Link href={item.link} className="nav-link-item">
                        {item.name}
                      </Link>
                      {item.list && dropdownOpen && (
                        <div
                          className="dropdown-menu-cust shadow_inside"
                          data-aos="fade-up"
                          data-aos-duration="300"
                        >
                          <ul className="products-category first-col">
                            {item.list.map((listItem, index) => (
                              <li key={index}>
                                <div>
                                  {listItem.title}
                                  {listItem.sub_title && (
                                    <div className="text-secondary">
                                      {listItem.sub_title}
                                    </div>
                                  )}
                                </div>

                                <ul>
                                  {listItem.products.map((product, index) => (
                                    <li key={index} onClick={handleClick}>
                                      <Link
                                        className="d-block w-100 h-100 d-flex items-center"
                                        href={product.link}
                                        shallow
                                      >
                                        <Image
                                          width={15}
                                          height={15}
                                          src={product.img.src}
                                          className="me-3"
                                          alt={product.name}
                                        />
                                        <div className="mt-1">
                                          {product.name}
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                <li>
                  <a
                    onClick={() => dispatch(contact_Toggle(true))}
                    className="pointer nav-link-item"
                  >
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
