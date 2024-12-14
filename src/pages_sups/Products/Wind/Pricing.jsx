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
  // const [priceToggle , setPriceToggle] = useState(true)
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
        <Monthly priceIcon={priceIcon} currency={currency} />
      </section>
      <Footer />
    </>
  );
}

function Monthly({ currency }) {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);
  return (
    <>
      <div className="py-5 wind">
        <Container>
          <div style={{ maxWidth: "1000px" }} className="m-auto">
            <Row>
              {windmaster(lang).sections.Pricing.map((item, index) => (
                <Col sm={12} md={4} lg={4} className="my-3">
                  <div
                    key={index}
                    className="pricing-container wind pricing-card p-4 py-4 erp border-0 m-3 h-100 d-flex align-items-around flex-column justify-content-between"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="mb-1 text-center">
                      <div className="fw-bold text-secondary fs-4 mb-3">
                        {item.title}
                      </div>
                      <h2>{item.price}</h2>
                      <p className="text-start m-0">{item.include}</p>
                    </div>
                    <div className="mb-4">
                      <ul className="pricing-wind-data">
                        {item.slice.map((item, index) => (
                          <li key={index}>
                            <i className="bi bi-check-circle-fill"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <small>{item.footer}</small>
                    </div>
                    <div className="contact-wind-card">
                      <a href={item.link}>
                        <button className="pricing-btn-wind">{item.btn}</button>
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

function Section__head() {
  return (
    <section className="pricing_wind_head">
      <div>
        <div className="head_container">
          <h1 style={{ zIndex: 4 }} className="position-relative">
            WIND MASTER Pricing
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
