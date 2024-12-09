import Image from "next/image";
import React from "react";
import Mob from "@/assets/images/chatPlus/chatPhone.png";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

export default function Section_3() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { chatplus } = useSelector((state) => state.chatplusRed);

  return (
    <section className="chat_section_2 mb-5">
      <Container>
        <div className="py-4">
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-between flex-column h-100 text-end m-3"
                data-aos="fade-up"
              >
                {chatplus(lang).sections.FEATUERS_CARDS_L.map((item, index) => (
                  <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.slogan}</p>
                  </div>
                ))}
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} className="flex items-center">
              <Image src={Mob} alt="mobile" data-aos="fade-right" />
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div
                className="d-flex justify-content-between flex-column h-100 text-start m-3"
                data-aos="fade-up"
              >
                {chatplus(lang).sections.FEATUERS_CARDS_R.map((item, index) => (
                  <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.slogan}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
