import React from "react";
import { Col, Container, Row } from "reactstrap";
import labtop from "@/assets/images/Products_Page/Rd/bannar_lab.png";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import Shap_1 from "@/assets/images/Products_Page/Rd/mask-shape.png";
import Shap_2 from "@/assets/images/Products_Page/Rd/line-shape.png";
import Link from "next/link";
import Logo from "@/assets/images/RDApp/logo_noslogan.png";
import { useSelector } from "react-redux";

export default function Product() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  return (
    <section className={`rd_bannar position-relative`}>
      <div className="vh-100">
        <Container className="h-100  z-10 relative">
          <Row className="h-100 align-items-center">
            <Col sm={12} md={5}>
              <div className="head-section text-center">
                <div
                  className="banner_caption_text"
                  style={{ marginTop: "100px" }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="mr-3">
                      <img src={Logo.src} alt="logo" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className={" mb-4"}>
                      {rdapp(lang).sections.bannar.slogan.title}
                      <br />
                      <span className="fw-bold">
                        {rdapp(lang).sections.bannar.slogan.slogan}
                      </span>
                    </p>
                    <Link
                      type="button"
                      href="/contact"
                      className="rd_get_started text-white"
                      shallow
                    >
                      {rdapp(lang).sections.bannar.try_btn}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={7}>
              <div
                className=" position-relative py-5"
                style={{ zIndex: 10, borderRadius: "15px" }}
              >
                <img
                  src={labtop.src}
                  style={{ borderRadius: "15px" }}
                  alt="lab"
                  className="mt-5"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="back_wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1922.547 325.915"
          >
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
        <div className="back_wave right_shap">
          <img src={Shap_1.src} alt="shap" />
        </div>
        <div className="back_wave top_left_shap">
          <img src={Shap_2.src} alt="shap" />
        </div>
      </div>
      {/* <div className="shape1">
          <img src={Shape1.src} alt="shape" />
        </div> */}
    </section>
  );
}
