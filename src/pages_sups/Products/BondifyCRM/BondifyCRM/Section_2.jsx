import React from "react";
import { Col, Container } from "reactstrap";
import Manage from "@/assets/images/BondifyCRM/Features/manage.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";
import { useSelector } from "react-redux";

export default function Section_2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  return (
    <section className="erp_section_7 pt-5 mt-5" id="Proj">
      <Container>
        <div className='row g-0 section_container data-aos="fade-up"'>
          <Col sm={12} md={6} lg={6}>
            <div className="content h-100" dir={dir}>
              <div>
                <h3>{bondifycrm(lang).sections.Card_1.title}</h3>
                <p>
                {bondifycrm(lang).sections.Card_1.slogan}
                </p>
              </div>
              <div>
                <ul
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  {bondifycrm(lang).sections.Card_1.slice.map((item,index)=>(
                  <li key={index}>
                    <div className="align-items-start gap-2">
                      <span>
                        <img src={yesI.src} className="yes_icon" alt="true" />
                      </span>
                      <span className="m-0 mb-2">
                        <p className="p-0 m-0">{item}</p>
                      </span>
                    </div>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img
              src={Manage.src}
              className="image_manage"
              alt="manage"
              data-aos="fade-up"
            />
          </Col>
        </div>
      </Container>
    </section>
  );
}
