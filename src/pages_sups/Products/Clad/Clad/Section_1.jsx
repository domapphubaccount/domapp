import React from "react";
import { Container } from "reactstrap";
import cl1 from "@/assets/images/Clad/2.jpg";
import arrow from "@/assets/images/Clad/arrow.svg";
import checked from "@/assets/images/Clad/checkmark.png";

export default function Section_1() {
  return (
    <section>
      <Container>
        <div
          className="row justify-content-between align-items-center flex-sm-row-reverse"
          style={{ overflow: "hidden" }}
        >
          <div className="col-lg-5">
            <div className="mil-mb-90">
              <h2
                className="mil-upper mil-up mil-mb-30"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                Effortless Workflow
              </h2>
              <p
                className="mil-up mil-mb-40"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <div className="d-flex mb-3">
                  <img
                    src={checked.src}
                    alt=""
                    className="mx-3"
                    style={{ width: "30px", height: "30px" }}
                  />
                  An intuitive interface guides you through the process.
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={checked.src}
                    alt=""
                    className="mx-3"
                    style={{ width: "30px", height: "30px" }}
                  />
                  Select your sheet size.
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={checked.src}
                    alt=""
                    className="mx-3"
                    style={{ width: "30px", height: "30px" }}
                  />
                  Upload your cladding layout as a DXF.
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={checked.src}
                    alt=""
                    className="mx-3"
                    style={{ width: "30px", height: "30px" }}
                  />
                  Sit back and let CladCut handle the rest.
                </div>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="mil-illustration mil-up mil-mb-90"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-image-frame">
                <img
                  src={cl1.src}
                  alt="img"
                  className="mil-scale"
                  data-value-1="1"
                  data-value-2="1.3"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform:
                      "translate3d(0px, 0px, 0px) scale(1.2185, 1.2185)",
                  }}
                />
              </div>
              <div className="mil-about-counter">
                <h1
                  className="mil-counter mil-right mil-mb-10"
                  data-number="17"
                >
                  Many
                </h1>
                <h5 className="mil-upper mil-right">
                  <span className="mil-marker">Years</span> of <br />
                  successful <br />
                  work
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
