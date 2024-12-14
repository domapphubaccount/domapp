import React from "react";
import Pay from "@/assets/images/BondifyCRM/Features/invoice.jpg";
import Time from "@/assets/images/BondifyCRM/Features/estimates.jpg";
import { useSelector } from "react-redux";

export default function Section_7() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);

  return (
    <section className="content-inner-2 overflow-hidden" id="Sub">
      <div className="container">
        <div className="row align-items-center about-bx3">
          <div className="col-lg-6 m-b30">
            <div className="section-head" style={{ transform: "none" }}>
              <h5 className="text-secondary sub-title mb-4">
                {bondifycrm(lang).sections.Card_5.sub}
              </h5>
              <h2 className="title m-b15 mb-4">
                {bondifycrm(lang).sections.Card_5.title}
              </h2>
              <p className="m-b0" data-wow-delay="1s">
                {bondifycrm(lang).sections.Card_5.slogan}
              </p>
            </div>
            <div
              className="row"
              data-wow-delay="1.5s"
              style={{ opacity: "1", transform: "none" }}
            >
              {bondifycrm(lang).sections.Card_5.slice.map((item, index) => (
                <div className="col-sm-6" key={index}>
                  <ul className="list-check-1 light">
                    {item.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dz-media">
              <img
                src={Pay.src}
                className="main-img"
                data-aos-duration="2500"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row align-items-center about-bx3" id="Est">
          <div className="col-lg-6">
            <div className="dz-media">
              <img
                src={Time.src}
                className="main-img"
                data-aos-duration="2500"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 m-b30">
            <div className="section-head" style={{ transform: "none" }}>
              <h5 className="text-secondary sub-title mb-4">
                {bondifycrm(lang).sections.Card_6.sub}
              </h5>
              <h2 className="title m-b15 mb-4">
                {bondifycrm(lang).sections.Card_6.title}
              </h2>
              <p className="m-b0" data-wow-delay="1s">
                {bondifycrm(lang).sections.Card_6.slogan}
              </p>
            </div>
            <div
              className="row"
              data-wow-delay="1.5s"
              style={{ opacity: "1", transform: "none" }}
            >
              {bondifycrm(lang).sections.Card_6.slice.map((item, index) =>
                item.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <ul className="list-check-1 light">
                      <li>{item}</li>
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
