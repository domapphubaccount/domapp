"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Pricing() {
  const [priceToggle, setPriceToggle] = useState(true);
  const [priceIcon, setPriceIcon] = useState(false);

  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        country =
          response.data.country_name == "Saudi Arabia" && setCurrency("SAR");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <>
      <Header />
      <section className={league.className + " pricing-section mb-5"}>
        <div className="mb-2">
          <Section__head />
        </div>
        {priceToggle ? (
          <Monthly priceIcon={priceIcon} currency={currency} />
        ) : (
          <Annual priceIcon={priceIcon} />
        )}
      </section>
      <Footer />
    </>
  );
}

function Monthly({ priceIcon, currency }) {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { chatplus } = useSelector((state) => state.chatplusRed);
  let pricing = chatplus(lang).sections.CHATPLUS_PRICING;
  return (
    <>
      <div className="py-5">
        <Container>
          <div style={{ maxWidth: "1000px" }} className="m-auto">
            <Row className="justify-center" >
              <Col sm={12} md={4}>
                <div className="text-center pricing-container pricing-card">
                  <div className="mb-2">
                    {/* <i className="bi bi-building"></i> */}
                    <h3>{pricing.title}</h3>
                  </div>
                  <div className="mb-1">
                    <h2 className="price">
                      {/* <small><del>200 {priceIcon ? '$' : <small>SAR</small>}</del></small> */}
                      <br />
                      {currency == "SAR" ? 60 : pricing.price}{" "}
                      {priceIcon ? "$" : <small>{currency}</small>}
                    </h2>

                    <p dir={dir}>
                      <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                        {" "}
                      </span>{" "}
                      {pricing.sub}
                    </p>
                    {/* <small className='dis fw-bold text-dark' style={{fontSize: '1rem'}}>( 5% Discount )</small> */}
                    <br />
                  </div>
                  {pricing.include.map((item, index) => (
                    <div className="flex me-[5px] " dir={dir} key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 me-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <small className="dis">
                        {item}
                      </small>
                    </div>
                  ))}

                  <div className="mt-3">
                    <a href="https://wa.me/201501060885">
                      <button>{pricing.btn}</button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
function Annual({ priceIcon }) {
  return (
    <>
      <div className="py-5">
        <Container>
          <div style={{ maxWidth: "1000px" }} className="m-auto">
            <Row>
              <Col sm={12} md={4}>
                <div className="text-center pricing-container pricing-card-3">
                  <div className="mb-3">
                    <i className="bi bi-person"></i>
                    <h3>Standard</h3>
                    <p>
                      <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                        5
                      </span>{" "}
                      Users
                    </p>
                  </div>
                  <div className="mb-2">
                    <h2 className="price">
                      1200 {priceIcon ? "$" : <small>SAR</small>}
                      <br />
                      <small>
                        <del></del>
                      </small>
                    </h2>
                    <small></small>
                    <br />
                    <small className="dis">
                      The price does not include tax
                    </small>
                  </div>
                  <div className="mb-3">
                    <small className="dis">
                      Meta Message fee not included <br />
                      <Link href="#">...learn more</Link>
                    </small>
                  </div>
                  <div>
                    <button>CONTACT SALES</button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="text-center pricing-container pricing-card">
                  <div className="mb-3">
                    <i className="bi bi-building"></i>
                    <h3>Professional</h3>
                    <p>
                      <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                        10
                      </span>{" "}
                      Users
                    </p>
                  </div>
                  <div className="mb-2">
                    <h2 className="price">
                      <small>
                        <del>2400 {priceIcon ? "$" : <small>SAR</small>}</del>
                      </small>
                      <br />
                      2208 {priceIcon ? "$" : <small>SAR</small>}
                    </h2>
                    <small
                      className="dis fw-bold text-dark"
                      style={{ fontSize: "1rem" }}
                    >
                      ( 8% Discount )
                    </small>
                    <br />
                    <small className="dis">
                      The price does not include tax
                    </small>
                  </div>
                  <div className="mb-3">
                    <small className="dis">
                      Meta Message fee not included <br />
                      <Link href="#">...learn more</Link>
                    </small>
                  </div>
                  <div>
                    <button>CONTACT SALES</button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="text-center pricing-container pricing-card-2">
                  <div className="mb-3">
                    <i className="bi bi-buildings"></i>
                    <h3>Premium</h3>
                    <p>
                      <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                        15
                      </span>{" "}
                      Users
                    </p>
                  </div>
                  <div className="mb-2">
                    <h2 className="price">
                      <small>
                        <del>4500 {priceIcon ? "$" : <small>SAR</small>}</del>
                      </small>
                      <br />
                      4050 {priceIcon ? "$" : <small>SAR</small>}
                    </h2>
                    <small
                      className="dis fw-bold text-dark"
                      style={{ fontSize: "1rem" }}
                    >
                      ( 10% Discount )
                    </small>
                    <br />
                    <small className="dis">
                      The price does not include tax
                    </small>
                  </div>
                  <div className="mb-3">
                    <small className="dis">
                      Meta Message fee not included <br />
                      <Link href="#">...learn more</Link>
                    </small>
                  </div>
                  <div>
                    <button>CONTACT SALES</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

function Section__head() {
  return (
    <section className="pricing_chat_head">
      <div>
        <div className="head_container">
          <h1 style={{ zIndex: 4 }} className="position-relative">
            ChatPlus Pricing
          </h1>
        </div>
      </div>
      <div className="dark_bannar"></div>
      <div className="back_wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.547 325.915">
          <defs></defs>
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(2.547 -753.617)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              className="cls-1"
              d="M1920,669.331V993.246H-2.547Z"
              transform="translate(0 84.287)"
            ></path>
            <path
              id="Path_2"
              data-name="Path 2"
              className="cls-2"
              d="M1920,669.331V902.469H-2.547Z"
              transform="translate(0 177.064)"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
}
