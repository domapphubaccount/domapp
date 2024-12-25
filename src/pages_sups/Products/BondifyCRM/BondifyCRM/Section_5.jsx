import React from "react";
import { Col, Container, Row } from "reactstrap";
import Pay from "@/assets/images/BondifyCRM/Features/pay.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";
import { useSelector } from "react-redux";

export default function Section_5() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);

  return (
    <section className="erp_section_7 mb-5" id="Invo">
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
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="500"
              dir={dir}
            >
              <div>
                <h3>{bondifycrm(lang).sections.Card_4.title}</h3>
                <p>{bondifycrm(lang).sections.Card_4.slogan}</p>
              </div>
              <div>
                <Row className="">
                  {bondifycrm(lang).sections.Card_4.slice.map((item, index) => (
                    <Col key={index}>
                      <ul
                        className="list"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                      >
                        <li>
                          <div>
                            <h5>{item.title}</h5>
                          </div>
                        </li>
                        {item.slice.map((item, index) => (
                          <li key={index}>
                            <div className="align-items-start gap-1">
                              <span>
                                <img
                                  src={yesI.src}
                                  className="yes_icon"
                                  alt="true"
                                />
                              </span>
                              <span className="m-0 mb-2 text-sm md:text-base">
                                <p className="p-0 m-0">{item}</p>
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
}
