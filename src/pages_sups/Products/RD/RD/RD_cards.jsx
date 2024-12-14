import React from "react";
import { Col, Container, Row } from "reactstrap";
import quotes from "@/assets/images/Products_Page/Rd/quotes-left.svg";
import { useSelector } from "react-redux";

export default function RD_cards() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  return (
    <section className="">
      <Container>
        <Row>
          <Col>
            <div className="py-4 qute">
              <div
                className="text-start"
                style={{ width: "80px" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={quotes.src} className="me-auto" alt="qute" />
              </div>
              <div
                className="py-5 text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Container>
                  <p>{rdapp(lang).sections.Note_1}</p>
                </Container>
              </div>
              <div
                className="text-end"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={quotes.src}
                  style={{ width: "80px" }}
                  className="ms-auto"
                  alt="qute"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
