import React from "react";
import CladBannar from "@/assets/images/Clad/Logo_Bannar.png";
import Image from "next/image";
import Shape_1 from "@/assets/images/Clad/shape.svg";

export default function Bannar() {
  return (
    <section className="cladCut-bannar">
      <div className="products2">
        <div className="load-speed-section py-5 pt-160 pb-160 lg-pt-100 lg-pb-80 mil-top-space clad-background">
          <div className="container relative" style={{ zIndex: "3" }}>
            <div className="row align-items-center justify-between">
              <div
                className="col-xxl-5 col-lg-6 wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <div className="ln-title-one my-5">
                  <h2 className="title fw-500 tx-dark">
                    <Image
                      width={300}
                      height={100}
                      src={CladBannar.src}
                      alt="cladcut bannar title"
                    />
                  </h2>
                </div>
                <div className="slogan my-5 fw-bold">
                  Produce detailed fabrication drawings with <span className="position-relative d-inline-block"> exceptional speed
                    {/* <img src={Shape_2.src} className="absolute" alt="" /> */}
                  </span>{" "}
                  and efficiency.
                </div>

                <div className="flex">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://cladcut.domapphub.com/"
                  >
                    <button className="try-button">
                      TRY FOR FREE
                      <div className="arrow-wrapper">
                        <div className="arrow"></div>
                      </div>
                    </button>
                  </a>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://cladcut.domapphub.com/pricing/"
                  >
                    <button className="try-button mx-3">PRICING</button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6" style={{marginTop: '40px'}}>
                <div className="block-container position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-40">
                  <div className="row gx-xxl-5 align-items-center">
                    <div
                      className="col-sm-6 wow fadeInRight cladcard"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInRight",
                      }}
                    >
                      <div className="block-wrapper d-flex flex-column align-items-center justify-content-center mb-40 xs-mb-20">
                        <div className="rating font-recoleta">
                          <h4 className="mil-accent mil-mb-10">
                            <span
                              className="mil-counter clad-text-color fw-bold"
                              data-number="99"
                            >
                              100+
                            </span>
                          </h4>
                          <p className="fw-bold">
                            Users <br /> <div className="pt-2 pb-3"></div>
                          </p>
                        </div>
                        <ul className="style-none p-0 d-flex align-items-center justify-content-center rating-star mt-15">
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 wow fadeInLeft cladcard "
                      style={{
                        visibility: "visible",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="block-wrapper d-flex flex-column align-items-center justify-content-center xs-mb-20">
                        <div className="rating font-recoleta">
                          <h4 className="mil-accent mil-mb-10">
                            <span
                              className="mil-counter clad-text-color fw-bold"
                              data-number="346"
                            >
                              190K+
                            </span>
                          </h4>
                          <p className="fw-bold">
                            Square Meter
                            <br /> Of Cladding Produced
                          </p>
                        </div>
                      </div>

                      <div className="block-wrapper mt-4 d-flex flex-column align-items-center justify-content-center mb-40 xs-mb-20">
                        <div className="rating font-recoleta">
                          <h4 className="mil-accent mil-mb-10">
                            <span
                              className="mil-counter clad-text-color fw-bold"
                              data-number="9"
                            >
                              18K+
                            </span>
                          </h4>
                          <p className="fw-bold">
                            Reduced <br />
                            Working Hours
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <img src={Shape_1.src} alt="" className="shapes shape-one" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}