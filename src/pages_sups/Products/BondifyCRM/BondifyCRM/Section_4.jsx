import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/time.png";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";
import { useSelector } from "react-redux";

export default function Section_4() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  return (
    <section className="erp_section_9" id="Tim">
      <Container>
        <div className="row g-0 section_container" id="Time">
          <Col sm={12} md={6} lg={6}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="500"
              dir={dir}
            >
              <div>
                <h3>{bondifycrm(lang).sections.Card_3.title}</h3>
                <p>{bondifycrm(lang).sections.Card_3.slogan}</p>
              </div>
              <div>
                <ul
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  {bondifycrm(lang).sections.Card_3.slice.map((item, index) => (
                    <li key={index}>
                      <div className="align-items-start gap-2">
                        <span>
                          <img src={yesI.src} className="yes_icon" alt="true" />
                        </span>
                        <span className="m-0 mb-2">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img
              src={Time.src}
              className="image_manage"
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
