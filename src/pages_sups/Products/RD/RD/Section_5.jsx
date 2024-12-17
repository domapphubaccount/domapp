import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardSection_1 from "@/assets/images/Products_Page/Rd/cont.jpg";
import CardSection_2 from "@/assets/images/Products_Page/Rd/produc.jpg";
import Shape1 from "@/assets/images/shap/shap1.png";
import { useSelector } from "react-redux";

export default function Section_5() {
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
              <h2 dir={dir}> {rdapp(lang).sections.Info_3[0].title}</h2>
              <p dir={dir}>{rdapp(lang).sections.Info_3[0].slogan}</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img src={CardSection_1.src} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img src={CardSection_2.src} alt="" />
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
              <h2 dir={dir}> {rdapp(lang).sections.Info_3[1].title}</h2>
              <p dir={dir}>{rdapp(lang).sections.Info_3[1].slogan}</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="shape1">
          <img src={Shape1.src} alt="shape" />
        </div> */}
    </section>
  );
}
