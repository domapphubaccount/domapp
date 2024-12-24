"use client"
import React from "react";
import Phone_S from "@/assets/images/chatPlus/phone-s.png"
import { useSelector } from "react-redux";

export default function Section_2() {
  return (
    <Section_1 />
  );
}

function Section_1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { chatplus } = useSelector((state) => state.chatplusRed);

  return (
    <section className="chat agency agency-content about-bg">
      <div className="row">
        <div className="col-lg-4">
          <img alt="" className="img-fluid blue-img" src={Phone_S.src} />
        </div>
        <div className="col-lg-8 my-3 flex items-center">
          <h3 className="text-as-shadow">
          </h3>
          <div className="container">
            <div className="row">
              <div className=" col-md-9 col-xl-9">
                <div className="agency-header-center-container">
                  <div className="borders"></div>
                  <div className="agency-head">
                    <h3 className="agency-head-text" dir={dir}>
                      <span className="block-span">{chatplus(lang).sections.GROW.title}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="side-img set-abs left-0 top-0 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="4500"
          >
            <div className="plus-container plus-container9">
              <div className="plus white"></div>
            </div>
            <div className="plus-container plus-container10">
              <div className="plus plus-medium white"></div>
            </div>
            <div className="plus-container plus-container11">
              <div className="plus plus plus-small white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
