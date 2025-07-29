import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardSection_1 from "@/assets/images/Products_Page/Rd/com.jpg";
import CardSection_2 from "@/assets/images/Products_Page/Rd/cost.jpg";
import { useSelector } from "react-redux";

export default function Section_7() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  return (
    <section className="rd_section_3">
      <Container>
        <Row>
          <Col sm={12} md={5} lg={5}>
            <div
              className="about-content py-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <i className="bi bi-check custom_icon"></i>
              </div>
              <h2 dir={dir}>{rdapp(lang).sections.Info_4[0].title}</h2>
              <p dir={dir}>{rdapp(lang).sections.Info_4[0].slogan}</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img loading="lazy" src={CardSection_1.src} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img loading="lazy" src={CardSection_2.src} alt="" />
            </div>
          </Col>
          <Col sm={12} md={5} lg={5}>
            <div
              className="about-content py-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <i className="bi bi-check custom_icon"></i>
              </div>
              <h2 dir={dir}>{rdapp(lang).sections.Info_4[1].title}</h2>
              <p dir={dir}>{rdapp(lang).sections.Info_4[1].slogan}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
