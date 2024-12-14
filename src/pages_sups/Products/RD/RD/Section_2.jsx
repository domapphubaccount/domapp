import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardSection_1 from "@/assets/images/Products_Page/Rd/s1.svg";
import CardSection_2 from "@/assets/images/Products_Page/Rd/s2.svg";
import porp from "@/assets/images/Products_Page/Rd/rd.jpg";
import { useSelector } from "react-redux";

export default function Section_3() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  return (
    <section className="rd_section_3">
      <Container>
        <Row className="justify-content-between">
          <Col sm={12} md={5} lg={5}>
            <div
              className="about-content py-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <i className="bi bi-check custom_icon"></i>
              </div>
              <h2> {rdapp(lang).sections.Info_1.title}</h2>
              <p>
              {rdapp(lang).sections.Info_1.slogan}
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img src={porp.src} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
