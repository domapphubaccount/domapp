import React from "react";
import { Col, Container } from "reactstrap";
import Pay from "@/assets/images/BondifyCRM/Features/work.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";

export default function Section_14() {
  return (
    <section className="erp_section_15">
      <Container>
        <div className="row g-0 section_container bondify-section" id="Wor">
          <Col sm={12} md={5} lg={4}>
            {/* <img
              src={Pay.src}
              className="image_manage  "
              alt="manage"
              data-aos="fade-up"
              data-aos-duration="2500"
            /> */}
          </Col>
          <Col sm={12} md={7} lg={8}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div>
                <h3>Workflow Automation</h3>
                <p>
                  Workflow automation for projects and estimates enables the
                  automation of repetitive tasks. You can specify actions
                  triggered when an estimate is accepted by your client or when
                  a project is marked as completed. These automations enhance
                  your team's efficiency and ensure no steps are overlooked in
                  your workflow.
                </p>
              </div>
              <div>
                <div
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="d-flex">
                    <span>
                      <img src={yesI.src} className="mx-2" alt="true" />
                    </span>{" "}
                    <span>
                      Create, customize, and automate business processes.
                    </span>
                  </div>
                  <div className="d-flex">
                    <span>
                      <img src={yesI.src} className="mx-2" alt="true" />
                    </span>{" "}
                    <span>Automate routine tasks.</span>
                  </div>
                  <div className="d-flex">
                    <span>
                      <img src={yesI.src} className="mx-2" alt="true" />
                    </span>{" "}
                    <span>Confirm invoice payments.</span>
                  </div>
                  <div className="d-flex">
                    <span>
                      <img src={yesI.src} className="mx-2" alt="true" />
                    </span>{" "}
                    <span>Automate recurring tasks, projects.</span>
                  </div>
                  <div className="d-flex">
                    <span>
                      <img src={yesI.src} className="mx-2" alt="true" />
                    </span>{" "}
                    <span>Automate task, project creation.</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
}
