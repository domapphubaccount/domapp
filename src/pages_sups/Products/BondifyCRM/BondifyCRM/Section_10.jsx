import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/repay.jpg";

export default function Section_10() {
  return (
    <section className="erp_section_11 mb-5" id="Rec">
      <Container>
        <div className="row g-0 section_container">
          <Col sm={12} md={6} lg={6}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div>
                <h3>Recurring Billing</h3>
                <p>
                  You have the flexibility to generate recurring invoices on a
                  daily, weekly, monthly, or yearly basis. The system will
                  autonomously generate new invoices and send them to your
                  clients via email.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className=" ">
            <img
              src={Time.src}
              className="image_manage "
              style={{ maxHeight: "400px" }}
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
