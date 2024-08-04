import React from "react";
import { Col, Container } from "reactstrap";
import Time from "@/assets/images/BondifyCRM/Features/time.png";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";

export default function Section_4() {
  return (
    <section className="erp_section_9" id="Tim">
      <Container>
        <div className="row g-0 section_container" id="Time">
          <Col sm={12} md={6} lg={6}>
            <div
              className="content h-100"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div>
                <h3>Time Tracking</h3>
                <p>
                  Effortlessly monitor the time invested in your projects using
                  the CRM BONDIFY's comprehensive time-tracking solution. Begin
                  or end your timer or input time manually for tasks. Then,
                  seamlessly bill your clients based on the recorded time.
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
                      <span>Measuring productivity and project progress.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>{" "}
                      <span>
                        Track time spent on specific tasks or projects.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>
                      <span>
                        Track time manually by entering start and end times.
                      </span>{" "}
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <img src={yesI.src} alt="true" />
                      </span>
                      <span>
                        Built-in timer feature to track time automatically
                      </span>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img
              src={Time.src}
              className="image_manage"
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
