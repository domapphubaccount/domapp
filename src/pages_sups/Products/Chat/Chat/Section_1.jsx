import Image from "next/image";
import React from "react";
import Icon_1 from "@/assets/images/chatPlus/icon-1.png";
import Icon_2 from "@/assets/images/chatPlus/icon-2.png";
import Icon_3 from "@/assets/images/chatPlus/icon-3.png";
import Icon_4 from "@/assets/images/chatPlus/icon-4.png";
import Icon_5 from "@/assets/images/chatPlus/icon-5.png";
import Icon_6 from "@/assets/images/chatPlus/icon-6.png";
import { useSelector } from "react-redux";

export default function Section_1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { chatplus } = useSelector((state) => state.chatplusRed);

  return (
    <section class="chat agency format service-bg " id="features">
      <div class="container">
        <div class="row">
          <div class="offset-lg-1 col-md-4 my-3">
            <div class="center-text">
              <div class="format-container" dir={dir}>
                <div class="format-head-text">
                  <h2 class="about-font-header my-3 fw-bold">
                    {chatplus(lang).sections.Collaborate.head}
                  </h2>
                </div>
                <div class="format-sub-text my-3">
                  <p class="about-para">
                    {chatplus(lang).sections.Collaborate.slogan}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-7">
            <div class="row">
              <div class="center-content unset-height col-sm-4">
                <ul
                  class="icon-collection aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_1.src} />
                      <h5>
                        {chatplus(lang).sections.Collaborate.slice.support}
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="center-content unset-height col-sm-4">
                <ul
                  class="icon-collection aos-init aos-animate w-100"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_2.src} />
                      <h5>
                        {chatplus(lang).sections.Collaborate.slice.archive}
                      </h5>
                    </div>
                  </li>
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_3.src} />
                      <h5>
                        {chatplus(lang).sections.Collaborate.slice.auto_reply}
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="center-content unset-height col-sm-4">
                <ul
                  class="icon-collection aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_4.src} />
                      <h5>
                        {chatplus(lang).sections.Collaborate.slice.broadcast}
                      </h5>
                    </div>
                  </li>
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_5.src} />
                      <h5>
                        {chatplus(lang).sections.Collaborate.slice.chatboat}
                      </h5>
                    </div>
                  </li>
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_6.src} />
                      <h5>
                        {chatplus(lang).sections.Collaborate.slice.msgtemplate}
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
