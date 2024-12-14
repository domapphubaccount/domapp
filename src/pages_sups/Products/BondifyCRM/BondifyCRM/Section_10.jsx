import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/repay.jpg";
import { useSelector } from "react-redux";

export default function Section_10() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);

  return (
    <section className="erp_section_11 mb-5" id="Rec">
      <Container>
        <div className="row g-0 section_container">
          <Col sm={12} md={6} lg={6}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div>
                <h3>{bondifycrm(lang).sections.Card_8.title}</h3>
                <p>{bondifycrm(lang).sections.Card_8.slogan}</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className=" ">
            <img
              src={Time.src}
              className="image_manage "
              style={{ maxHeight: "400px" }}
              alt="manage"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </Col>
        </div>
      </Container>
    </section>
  );
}
