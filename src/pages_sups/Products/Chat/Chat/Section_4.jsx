import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Section_4() {
  return (
    <section className="chat_section_4_cards">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} className="g-0 p-3">
            <div className="h-100" data-aos="fade-up" data-aos-duration="3000">
              <div className="h-100 chat_card_icon_container">
                <div className="d-flex gap-3 ">
                  <div className="card_icon ">
                    <i className="bi bi-telephone-x m-0 p-2"></i>
                  </div>
                  <div>
                    <h5 className="m-0 mb-2 fw-bold">Support Interaction</h5>
                    <p className="mb-0">
                      Empower agents to provide dynamic and personalized support
                      interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="g-0 p-3">
            <div className="h-100" data-aos="fade-up" data-aos-duration="1000">
              <div className="h-100 chat_card_icon_container">
                <div className="d-flex gap-3 ">
                  <div className="card_icon ">
                    <i className="bi bi-postage-fill"></i>
                  </div>
                  <div>
                    <h5 className="m-0 mb-2 fw-bold">
                      Error-Free Communication
                    </h5>
                    <p>
                      Implement advanced algorithms to ensure error-free
                      communication, reducing the risk of misunderstandings and
                      inaccuracies.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="g-0 p-3">
            <div className="h-100" data-aos="fade-up" data-aos-duration="500">
              <div className="h-100 chat_card_icon_container">
                <div className="d-flex gap-3 ">
                  <div className="card_icon ">
                    <i className="bi bi-lock"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold m-0 mb-2">
                      Fortified Communication Channels
                    </h5>
                    <p>
                      Establish secure communication channels with end-to-end
                      encryption to safeguard sensitive information and protect
                      against cyber threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="g-0 p-3">
            <div className="h-100" data-aos="fade-up" data-aos-duration="3000">
              <div className="h-100 chat_card_icon_container">
                <div className="d-flex gap-2 ">
                  <div className="card_icon ">
                    <i className="bi bi-broadcast-pin"></i>
                  </div>
                  <div>
                    <h5 className="m-0 mb-2 fw-bold">
                      Streamlined Communication Workflows
                    </h5>
                    <p>
                      Optimize communication workflows to minimize redundancy
                      and maximize efficiency, enabling seamless collaboration
                      and information sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="g-0 p-3">
            <div className="h-100" data-aos="fade-up" data-aos-duration="2000">
              <div className="h-100 chat_card_icon_container">
                <div className="d-flex gap-3 ">
                  <div className="card_icon ">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div>
                    <h5 className="m-0 mb-2 fw-bold">Mobile Responsiveness</h5>
                    <p>
                      Enhance mobile responsiveness by providing automated
                      replies tailored to the specific needs and preferences of
                      mobile users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className="g-0 p-3">
            <div className="h-100" data-aos="fade-up" data-aos-duration="500">
              <div className="h-100 chat_card_icon_container">
                <div className="d-flex gap-3 ">
                  <div className="card_icon ">
                    <i className="bi bi-archive"></i>
                  </div>
                  <div>
                    <h5 className="m-0 mb-2 fw-bold">
                      Efficient Communication Archive
                    </h5>
                    <p>
                      Implement a robust archiving system to store and retrieve
                      past conversations effortlessly, enabling quick access to
                      historical data for analysis and reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
