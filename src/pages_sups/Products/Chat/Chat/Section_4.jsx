import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";

export default function Section_4() {
    const { lang, dir } = useSelector((state) => state.languageSlice);
    const { chatplus } = useSelector((state) => state.chatplusRed);


  return (
    <section className="chat_section_4_cards">
      <Container>
        <Row>
        {chatplus(lang).sections.CARDS.map((item,index)=>(
          <Col sm={12} md={4} lg={4} className="g-0 p-3" key={index}>
            <div className="h-100" data-aos="fade-up" dir={dir} data-aos-duration="3000">
              <div className="h-100 chat_card_icon_container">
                <div className="card_icon flex items-center justify-center mb-3">
                    <i className={item.icon}></i>
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>
                   {item.slogan}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
