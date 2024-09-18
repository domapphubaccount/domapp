import React from "react";
import { Col, Container } from "reactstrap";
import Pay from "@/assets/images/BondifyCRM/Features/leads.jpg";
import yesI from "@/assets/images/BondifyCRM/Features/yes.svg";

export default function Section_12() {
  return (
    <section className="erp_section_15" id="Lea">
      <Container>
        <div className="row g-0 section_container bondify-section">
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
                <h3>Leads & Opportunities</h3>
                <p>
                  Effectively manage your opportunities and guide leads into
                  paying customers seamlessly Utilize our advanced form builder
                  to effortlessly capture new leads, which can then be embedded
                  on any website.
                </p>
              </div>
              <div>
                <div
                  className="list"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-2 items-start mx-2 ">
                    <span className="w-5 h-5">
                      <img
                        src={yesI.src}
                        alt="true"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>Create contacts, companies form leads.</span>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-2 items-start mx-2 ">
                    <span className="w-5 h-5">
                      <img
                        src={yesI.src}
                        alt="true"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>
                      Convert emails, messages and anything into a lead.
                    </span>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-2 items-start mx-2 ">
                    <span className="w-5 h-5">
                      <img
                        src={yesI.src}
                        alt="true"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>Assign users, supervisors and managers.</span>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-2 items-start mx-2 ">
                    <span className="w-5 h-5">
                      <img
                        src={yesI.src}
                        alt="true"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>Add a lead reminder.</span>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-2 items-start mx-2 ">
                    <span className="w-5 h-5">
                      <img
                        src={yesI.src}
                        alt="true"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>Manage and control leads.</span>
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
