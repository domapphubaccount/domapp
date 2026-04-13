"use client";
import React from "react";
import CladBannar from "@/assets/images/Clad/Logo_Bannar.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { cladcut_site } from "@/stores/Main/links/links";

export default function Bannar() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  return (
    <section className="cladCut-bannar">
      <div className="products2">
        <div className="load-speed-section py-5 pt-160 pb-160 lg-pt-100 lg-pb-80 mil-top-space clad-background">
          <div className="container relative" style={{ zIndex: "3" }} dir={dir}>
            <div className="row align-items-center justify-between">
              <div
                className=""
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <div className="ln-title-one my-5">
                  <h2 className="title fw-500 tx-dark">
                    <Image
                      width={300}
                      height={100}
                      src={CladBannar.src}
                      sizes="(max-width: 768px) 100vw, 
                             (max-width: 1200px) 50vw, 
                             300px"
                      loading="lazy"
                      alt="cladcut bannar title"
                    />
                  </h2>
                </div>
                <div className="slogan my-5 fw-bold">
                  <h1>{cladcut(lang).sections.bannar.slogan.first}</h1>
                  <p>{cladcut(lang).sections.bannar.slogan.end}</p>
                </div>

                <div className="flex">
                  <a style={{ textDecoration: "none" }} href={cladcut_site}>
                    <button className="try-button">
                      {cladcut(lang).sections.bannar.try_btn}
                      <div className="arrow-wrapper">
                        <div className="arrow"></div>
                      </div>
                    </button>
                  </a>
                  {/* <a
                    style={{ textDecoration: "none" }}
                    href={`${cladcut_site}pricing/`}
                  >
                    <button className="try-button mx-3">
                      {cladcut(lang).sections.bannar.pricing_btn}
                    </button>
                  </a> */}
                </div>
              </div>

              <div className="col-lg-12" style={{ marginTop: "40px" }}>
                <div className="block-container position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-40">
                  <div className="row gx-xxl-5 align-items-center">

                    <div className=" d-flex gap-4 align-items-center justify-content-between mb-40 xs-mb-20">
                      <div className="rating font-recoleta">
                        <h2 className="mil-accent mil-mb-10">
                          <span
                            className="mil-counter clad-text-color fw-bold"
                            data-number="99"
                          >
                            100+
                          </span>
                        </h2>
                        <p className="">{cladcut(lang).sections.bannar.slice.users}</p>
                      </div>

                      <div className="rating font-recoleta">
                        <h2 className="mil-accent mil-mb-10">
                          <span
                            className="mil-counter clad-text-color fw-bold"
                            data-number="346"
                          >
                            190K+
                          </span>
                        </h2>
                        <p>{cladcut(lang).sections.bannar.slice.produced}</p>
                      </div>
                      <div className="">
                        <h2 className="mil-accent mil-mb-10">
                          <span
                            className="mil-counter clad-text-color fw-bold"
                            data-number="9"
                          >
                            18K+
                          </span>
                        </h2>
                        <p>{cladcut(lang).sections.bannar.slice.houres}</p>
                      </div>
                    </div>
                  </div>


                  {/* <Shape1 className="shapes shape-one" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
