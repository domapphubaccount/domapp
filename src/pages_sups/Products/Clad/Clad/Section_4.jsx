import React from "react";
import { Container, Row } from "reactstrap";
import icon1 from "@/assets/images/Clad/capacity.png";
import icon2 from "@/assets/images/Clad/website.png";
import icon3 from "@/assets/images/Clad/effciency.png";
import icon4 from "@/assets/images/Clad/targeting.png";
import icon5 from "@/assets/images/Clad/reject.png";

export default function Section_4() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <div className="col-lg-4">
            <span
              className="mil-service-card mil-up mil-mb-30 d-inline-block w-full"
              href="/services/service-2"
              style={{
                height: "90%",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-card-number">01.</div>
              <div className="mil-center">
                <div className="mil-icon-lg mil-mb-30 image_card_clad">
                  <img src={icon1.src} alt="Interior Decor" />
                </div>
                <h4 className="mil-upper mil-mb-20">Reduced Time</h4>
                <div className="mil-divider-sm mil-mb-20"></div>
                <p className="mil-service-text">
                  Go from days to minutes for fabrication orders.
                </p>
                <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                  {/* <img src={i1.src} alt="icon"/> */}
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-4 ">
            <span
              className="mil-service-card mil-up mil-mb-30 d-inline-block w-full"
              href="/services/service-2"
              style={{
                
                height: "90%",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-card-number">02.</div>
              <div className="mil-center">
                <div className="mil-icon-lg mil-mb-30 image_card_clad">
                  <img src={icon2.src} alt="Interior Decor" />
                </div>
                <h4 className="mil-upper mil-mb-20">Effortless Workflow</h4>
                <div className="mil-divider-sm mil-mb-20"></div>
                <p className="mil-service-text">
                  An intuitive interface simplifies the process.
                </p>
                <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                  {/* <img src={i1.src} alt="icon"/> */}
                </div>
              </div>
            </span>
          </div>

     

          <div className="col-lg-4">
            <span
              className="mil-service-card mil-up mil-mb-30 d-inline-block w-full"
              href="/services/service-2"
              style={{
                height: "90%",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-card-number">03.</div>
              <div className="mil-center">
                <div className="mil-icon-lg mil-mb-30 image_card_clad">
                  <img src={icon3.src} alt="Interior Decor" />
                </div>
                <h4 className="mil-upper mil-mb-20">Improved Efficiency</h4>
                <div className="mil-divider-sm mil-mb-20"></div>
                <p className="mil-service-text">
                  Optimized cutting layouts and clash detection save time and
                  material.
                </p>
                <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                  {/* <img src={i1.src} alt="icon"/> */}
                </div>
              </div>
            </span>
          </div>
          <div className="col-lg-4">
            <span
              className="mil-service-card mil-up mil-mb-30 d-inline-block w-full"
              href="/services/service-2"
              style={{
                height: "90%",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-card-number">04.</div>
              <div className="mil-center">
                <div className="mil-icon-lg mil-mb-30 image_card_clad">
                  <img src={icon4.src} alt="Interior Decor" />
                </div>
                <h4 className="mil-upper mil-mb-20">Enhanced Accuracy</h4>
                <div className="mil-divider-sm mil-mb-20"></div>
                <p className="mil-service-text">
                  Precise unfold views and automatic dimensioning minimize
                  errors.
                </p>
                <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                  {/* <img src={i1.src} alt="icon"/> */}
                </div>
              </div>
            </span>
          </div>
          <div className="col-lg-4">
            <span
              className="mil-service-card mil-up mil-mb-30 d-inline-block w-full"
              href="/services/service-2"
              style={{
                height: "90%",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-card-number">05.</div>
              <div className="mil-center">
                <div className="mil-icon-lg mil-mb-30 image_card_clad">
                  <img src={icon5.src} alt="Interior Decor" />
                </div>
                <h4 className="mil-upper mil-mb-20">
                  Streamlined Installation
                </h4>
                <div className="mil-divider-sm mil-mb-20"></div>
                <p className="mil-service-text">
                  Installation drawings ensure a smooth on-site process.
                </p>
                <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                  {/* <img src={i1.src} alt="icon"/> */}
                </div>
              </div>
            </span>
          </div>
        </Row>
      </Container>
    </section>
  );
}
