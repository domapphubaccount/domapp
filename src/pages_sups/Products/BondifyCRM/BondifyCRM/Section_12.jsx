import React from "react";
import { Col, Container } from "reactstrap";
import Pay from "@/assets/images/BondifyCRM/Features/leads.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";
import { useSelector } from "react-redux";

export default function Section_12() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  return (
    <section className="erp_section_15" id="Lea">
      <Container>
        <div className="row g-0 section_container bondify-section">
          <Col sm={12} md={5} lg={4}>
            {/* <img
              src={Pay.src}
              className="image_manage  "
              alt="manage"
              data-aos="fade-up"
              data-aos-duration="2500"
            /> */}
          </Col>
          <Col sm={12} md={7} lg={8}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div>
                <h3>{bondifycrm(lang).sections.Card_9.title}</h3>
                <p>{bondifycrm(lang).sections.Card_9.slogan}</p>
              </div>
              <div>
                <div
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  {bondifycrm(lang).sections.Card_9.slice.map((item, index) => (
                    <div
                      className="grid grid-cols-[auto_1fr] gap-2 items-start mx-2 mb-2 "
                      key={index}
                    >
                      <span className="w-5 h-5">
                        <img
                          src={yesI.src}
                          alt="true"
                          className="w-full h-full object-contain"
                        />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
}
