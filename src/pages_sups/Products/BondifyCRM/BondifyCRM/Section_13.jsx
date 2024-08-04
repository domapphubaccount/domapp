import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/know.jpg";

export default function Section_13() {
  return (
    <section className="erp_section_15" id="Kno">
      <Container>
        <div className="row g-0 section_container">
          <Col sm={12} md={7} lg={8}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div>
                <h3>Knowledgebase</h3>
                <p>
                  Reduce your customer support response time by providing
                  customers access to self-service resources and a help
                  repository. Utilize the knowledge base to create a
                  comprehensive user knowledge base.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} lg={4}>
            <img
              src={Time.src}
              className="image_manage  "
              alt="manage"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </Col>
        </div>
      </Container>
    </section>
  );
}
