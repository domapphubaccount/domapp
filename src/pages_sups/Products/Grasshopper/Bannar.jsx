import React from "react";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import { useSelector } from "react-redux";

export default function Bannar() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { grasshopper } = useSelector((state) => state.grasshopperRed);

  return (
    <section className={`customization_bannar ${league} position-relative`}>
      <div className="slider-activation">
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
          data-black-overlay="6"
          dir={dir}
        >
          <div className="container position-relative">
            <div className="row mb-5">
              <div className="col-lg-12">
                <div className="inner mb-5" data-aos="fade-right">
                  <h1 className="title theme-gradient grass_title">
                    Grasshopper Modules
                    <br />
                  </h1>
                  <p className="text-white">
                    {grasshopper(lang).sections.bannar.slogan}
                  </p>
                </div>
              </div>
            </div>

            <div className="service-wrapper mb-5 service-white">
              <div className="row ">
                {grasshopper(lang).sections.bannar.slice.map((item, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    key={index}
                  >
                    <div
                      className="service service__style--1 flex align-items-start gap-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="icon ">
                        {grasshopper(lang).sections.bannar.icon[index]}
                      </div>
                      <div className="content">
                        <h4 className="title">{item.title}</h4>
                        <p className="text-xs leading-relaxed">{item.slogan}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
