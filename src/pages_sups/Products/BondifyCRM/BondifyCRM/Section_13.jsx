import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/know.jpg";
import { useSelector } from "react-redux";

export default function Section_13() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  return (
    <section className="erp_section_15" id="Kno">
      <Container>
        <div className="row g-0 section_container bondify-section">
          <Col sm={12} md={7} lg={8}>
            <div
              dir={dir}
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div>
                <h3>{bondifycrm(lang).sections.Card_10.title}</h3>
                <p>{bondifycrm(lang).sections.Card_10.slogan}</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} lg={4}>
            {/* <img loading="lazy" 
              src={Time.src}
              className="image_manage  "
              alt="manage"
              data-aos="fade-up"
              data-aos-duration="3000"
            /> */}
          </Col>
        </div>
      </Container>
    </section>
  );
}
