import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Section_1() {
  return (
    <section className="rd_section_1">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <div
              className="h-100 text-center card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <i className="bi bi-database-up"></i>
              </div>
              <div>
                <h4>Increased Productivity</h4>
                <p>
                  Efficient platform for managing risks, It streamlines the
                  entire risk management process, eliminating manual and
                  time-consuming tasks allowing teams to manage risks more
                  effectively and efficiently.{" "}
                </p>
              </div>
              {/* <div className='back_image'/> */}
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div
              className="h-100 text-center card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <i className="bi bi-file-lock"></i>{" "}
              </div>
              <div>
                <h4>Secure Data</h4>
                <p>
                  Advanced encryption protocols to safeguard data, ensuring
                  secure transmission and storage.
                </p>
              </div>
              {/* <div className='back_image'/> */}
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div
              className="h-100 text-center card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <i className="bi bi-code-slash"></i>
              </div>
              <div>
                <h4>Saudi Code Compliance</h4>
                <p>
                  Every risk management strategy and precautionary measure
                  implemented is aligned with the regulations outlined in the
                  Saudi Building Code, prioritizing safety and regulatory
                  adherence throughout.{" "}
                </p>
              </div>
              {/* <div className='back_image'/> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
