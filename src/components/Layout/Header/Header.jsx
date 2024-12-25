"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { contact_Toggle } from "@/Store/reducers/Header";
import dynamic from "next/dynamic";
import LanguageDropdown from "../Footer/Lang";

const Sidebar = dynamic(() => import("../Sidebar/Sidebar"), { ssr: false });

export default function Header() {
  const headerScrol = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.headerRed);
  const { lang } = useSelector((state) => state.languageSlice);

  return (
    <header>
      <link
        rel="preload"
        href="/_next/static/media/dark-logo.e6650319.WebP"
        as="image"
      ></link>
      <Container className="nav-container">
        <div
          className={`navbar_container nav_active`}
          id="main_nav"
          ref={headerScrol}
        >
          <div className="d-flex items-center">
            <Image
              onClick={() => router.push("/")}
              src={header(lang).logo}
              alt="main logo"
              className="main_logo cursor-pointer"
            />
          </div>
          <div className="nav">
            <nav>
              <ul className="nav-list-container">
                {header(lang) &&
                  header(lang).nav.map((item, i) => (
                    <li
                      key={i}
                      className="custom-dropdown"
                      onMouseEnter={item.list ? toggleDropdown : () => ""}
                      onMouseLeave={item.list ? toggleDropdown : () => ""}
                    >
                      <Link
                        href={item.link}
                        className="nav-link-item"
                        onClick={
                          item.contact
                            ? () => dispatch(contact_Toggle(true))
                            : ""
                        }
                      >
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
                                    <li key={index}>
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
                                          <p className="m-0 p-0">{product.name}</p>
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
                  <LanguageDropdown text_color={"text-black"}/>
              </ul>
            </nav>
          </div>
          <div className="mobile_nav">
            <Sidebar />
          </div>
        </div>
      </Container>
    </header>
  );
}
