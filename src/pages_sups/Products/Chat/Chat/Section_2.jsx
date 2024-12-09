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
    <section class="chat agency agency-content about-bg">
      <div className="row">
        <div className="col-lg-4">
          <img alt="" class="img-fluid blue-img" src={Phone_S.src} />
        </div>
        <div className="col-lg-8 my-3 flex items-center">
          <h3 class="text-as-shadow">
          </h3>
          <div class="container">
            <div class="row">
              <div class=" col-md-9 col-xl-9">
                <div class="agency-header-center-container">
                  <div class="borders"></div>
                  <div class="agency-head">
                    <h3 class="agency-head-text" dir={dir}>
                      <span class="block-span">{chatplus(lang).sections.GROW.title}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="side-img set-abs left-0 top-0 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="4500"
          >
            <div class="plus-container plus-container9">
              <div class="plus white"></div>
            </div>
            <div class="plus-container plus-container10">
              <div class="plus plus-medium white"></div>
            </div>
            <div class="plus-container plus-container11">
              <div class="plus plus plus-small white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
