import React from "react";
import shap1 from "@/assets/images/Products_Page/Customization/circle-2.png";
import shap2 from "@/assets/images/Products_Page/Customization/bubble-2.png";
import shap3 from "@/assets/images/Products_Page/Customization/bubble-1.png";
import iconSoft from "@/assets/images/Products_Page/Customization/seo.webp";
import iconSoft2 from "@/assets/images/Products_Page/Customization/wp.webp";
import iconSoft3 from "@/assets/images/Products_Page/Customization/WP2.webp";
import iconSoft4 from "@/assets/images/Products_Page/Customization/wp3.webp";
import sectioncard from "@/assets/images/Products_Page/Customization/img5.png";
import sectioncardabout from "@/assets/images/Products_Page/Customization/img4.png";
import { useSelector } from "react-redux";

export default function Section_1() {
  return (
    <section className="cust_section_1 ">
      <div className="section section-padding">
        <div className="container">
          <AboutUs />
          <SectionContent />
        </div>
      </div>
    </section>
  );
}

function SectionContent() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { custom_software } = useSelector((state) => state.customSoftwareRed);

  return (
    <>
      <div className="row align-items-center">
        <div
          className="col-xl-6 col-lg-7 wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="section-head style-1" dir={dir}>
            <h6
              className="sub-title bgl-primary m-b20 text-primary"
              style={{ color: "#896eff !important;" }}
            >
              {custom_software(lang).sections.Services.Services}
            </h6>
            <h2 className="title">
              {custom_software(lang).sections.Services.title}
            </h2>
          </div>
          <div className="section-wraper-one" dir={dir}>
            <div className="icon-bx-wraper style-2 left m-b30">
              <div className="icon-bx-md radius bg-white text-red">
                <a href="#" className="icon-cell">
                  <i className="bi bi-code-slash"></i>
                </a>
              </div>
              <div className="icon-content px-4">
                <h4 className="dlab-title">
                  {custom_software(lang).sections.Services.slice[0].title}
                </h4>
                <p>{custom_software(lang).sections.Services.slice[0].slogan}</p>
              </div>
            </div>
            <div className="icon-bx-wraper style-2 left m-b30">
              <div className="icon-bx-md radius bg-white text-yellow">
                <a href="#" className="icon-cell">
                  <i className="bi bi-cast"></i>
                </a>
              </div>
              <div className="icon-content px-4">
                <h4 className="dlab-title">
                  {custom_software(lang).sections.Services.slice[1].title}
                </h4>
                <p>{custom_software(lang).sections.Services.slice[1].slogan}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 col-lg-5 wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-media">
            <img src={sectioncard.src} className="move-2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function AboutUs() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { custom_software } = useSelector((state) => state.customSoftwareRed);
  return (
    <>
      <div className="row align-items-center cust_about">
        <div
          className="col-lg-6 m-b30 wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dz-media">
            <img src={sectioncardabout.src} className="move-2" alt="" />
          </div>
        </div>
        <div
          className="col-lg-6 m-b30 wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
          dir={dir}
        >
          <div className="section-head style-1 mb-4">
            <h6
              className="sub-title bgl-primary m-b20 text-primary"
              style={{ color: "#896eff !important" }}
            >
              {custom_software(lang).sections.About_us.about_us}
            </h6>
            <h2 className="title">
              {custom_software(lang).sections.About_us.title}
            </h2>
          </div>
          <p>{custom_software(lang).sections.About_us.slogan.first}</p>
          <p className="m-b30">
            {custom_software(lang).sections.About_us.slogan.seconed}
          </p>
        </div>
      </div>
    </>
  );
}
