import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/task-dep.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";

export default function Section_15() {
  return (
    <section className="erp_section_15" id="Tas">
      <Container>
        <div className="row g-0 section_container bondify-section">
          <Col sm={12} md={7} lg={8}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div>
                <h3>Task Dependency Management</h3>
                <p>
                  Create task dependencies, establishing relationships between
                  tasks where one task must be completed before another can
                  begin. This sequential dependency management ensures that
                  tasks are executed in the correct order, preventing
                  bottlenecks and ensuring smooth project progression..
                  Dependency management facilitates effective synchronization
                  among your diverse team members.
                </p>
              </div>
              <div>
                <ul
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>{" "}
                      <span>Create relationship between tasks.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>{" "}
                      <span>Control dependent task.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>
                      <span>
                        Notifications and alerts to keep team members informed
                        about changes to task dependencies.
                      </span>{" "}
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>
                      <span>
                        Dynamic task adjustment schedules when dependent tasks
                        are delayed or completed ahead of schedule.
                      </span>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} lg={4}>
            {/* <img src={Time.src} className="image_manage  " alt="manage" /> */}
          </Col>
        </div>
      </Container>
    </section>
  );
}
