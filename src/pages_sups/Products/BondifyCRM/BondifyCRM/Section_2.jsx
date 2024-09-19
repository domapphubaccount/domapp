import React from "react";
import { Col, Container } from "reactstrap";
import Manage from "@/assets/images/BondifyCRM/Features/manage.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";

export default function Section_2() {
  return (
    <section className="erp_section_7 pt-5 mt-5" id="Proj">
      <Container>
        <div className='row g-0 section_container data-aos="fade-up"'>
          <Col sm={12} md={6} lg={6}>
            <div className="content h-100">
              <div>
                <h3>Project Management</h3>
                <p>
                  This application offers highly advanced features designed to
                  streamline project management. Enhance your efficiency further
                  by utilizing the project templates and project cloning
                  capabilities, making your workflow even smoother.
                </p>
              </div>
              <div>
                <ul
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <li>
                    <div className="align-items-start gap-2">
                      <span>
                        <img src={yesI.src} className="yes_icon" alt="true" />
                      </span>{" "}
                      <span className="m-0 mb-2">
                        Project Overview: Assign team members, supervisors, and
                        project leads.
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="align-items-start gap-2">
                      <span>
                        <img src={yesI.src} className="yes_icon" alt="true" />
                      </span>{" "}
                      <span className="m-0 mb-2">
                        Project Tracking: Manage and track project progress,
                        including status updates, milestones, and completion
                        targets.
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="align-items-start gap-2">
                      <span>
                        <img src={yesI.src} className="yes_icon" alt="true" />
                      </span>
                      <span className="m-0 mb-2">
                        Project Duplication: Easily clone existing projects for
                        efficiency, with full visibility into team activities
                        and time allocation.
                      </span>{" "}
                    </div>
                  </li>
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
