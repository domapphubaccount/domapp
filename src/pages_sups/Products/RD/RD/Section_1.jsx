import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";

export default function Section_1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);

  return (
    <section className="rd_section_1" dir={dir}>
      <Container>
        <Row>
          {rdapp(lang).sections.Cards_1.map((item, index) => (
            <Col lg={4} md={4} sm={12} key={index}>
              <div
                className="h-100 text-center card"
                data-aos="fade-up"
                data-aos-duration="1000"                
              >
                <div>
                {rdapp(lang).sections.Cards_1_icon[index]}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>
                    {item.slogan}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
