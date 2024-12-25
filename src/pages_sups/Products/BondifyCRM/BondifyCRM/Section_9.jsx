import React from "react";
import { Col, Container } from "reactstrap";
import Pay from "@/assets/images/BondifyCRM/Features/porp.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";
import { useSelector } from "react-redux";

export default function Section_9() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  return (
    <section className="erp_section_11" id="Pro">
      <Container>
        <div className="row g-0 section_container">
          <Col sm={12} md={6} lg={6}>
            <img
              src={Pay.src}
              className="image_manage"
              alt="manage"
              data-aos="fade-up"
              data-aos-duration="2500"
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div
              dir={dir}
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div>
                <h3>{bondifycrm(lang).sections.Card_7.title}</h3>
                <p>{bondifycrm(lang).sections.Card_7.slogan}</p>
              </div>
              <div>
                <ul
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  {bondifycrm(lang).sections.Card_7.slice.map((item, index) => (
                    <li key={index}>
                      <div className="grid grid-cols-[auto_1fr] gap-2 items-start  ">
                        <span className="w-5 h-5">
                          <img
                            src={yesI.src}
                            alt="true"
                            className="w-full h-full object-contain"
                          />
                        </span>
                        <span><p className="p-0 m-0">{item}</p></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
}
