'use client'
import React from "react";
import Image from "next/image";
import Shape1 from "@/assets/images/Clad/shape.svg";
import Shape2 from "@/assets/images/Clad/shape_2.svg";

export default function Bannar() {
  return (
    <section className="cladCut-bannar">
      <div className="products2">
        <div className="load-speed-section py-5 pt-160 pb-160 lg-pt-100 lg-pb-80 mil-top-space clad-background">
          <div className="container relative" style={{ zIndex: "3" }}>
            <div className="row align-items-center justify-between">
              <div className="col-xxl-5 col-lg-6 wow fadeInLeft">
                <div className="ln-title-one my-5">
                  <h2 className="title fw-500 tx-dark">
                    <Image
                      width={300}
                      height={100}
                      src="/path/to/CladBannar.webp"
                      alt="cladcut banner title"
                      sizes="(max-width: 768px) 100vw, 
                             (max-width: 1200px) 50vw, 
                             300px"
                      loading="lazy"
                    />
                  </h2>
                </div>
                <div className="slogan my-5 fw-bold">
                  Produce detailed fabrication drawings with exceptional speed and efficiency.
                </div>
                <div className="flex">
                  <a href="https://cladcut.domapphub.com/" style={{ textDecoration: "none" }}>
                    <button className="try-button">
                      TRY FOR FREE
                      <div className="arrow-wrapper">
                        <div className="arrow"></div>
                      </div>
                    </button>
                  </a>
                  <a href="https://cladcut.domapphub.com/pricing/" style={{ textDecoration: "none" }}>
                    <button className="try-button mx-3">PRICING</button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6" style={{ marginTop: "40px" }}>
                <div className="block-container position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-40">
                  <div className="row gx-xxl-5 align-items-center">
                    <div className="col-sm-6 wow fadeInRight cladcard">
                      <div className="block-wrapper d-flex flex-column align-items-center justify-content-center mb-40 xs-mb-20">
                        <div className="rating font-recoleta">
                          <h4 className="mil-accent mil-mb-10">
                            <span className="mil-counter clad-text-color fw-bold">
                              100+
                            </span>
                          </h4>
                          <p className="fw-bold">
                            Users
                          </p>
                        </div>
                        <ul className="style-none p-0 d-flex align-items-center justify-content-center rating-star mt-15">
                          {/* Stars rendering */}
                        </ul>
                      </div>
                    </div>
                    {/* More content */}
                  </div>
                  <Shape1 className="shapes shape-one" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
