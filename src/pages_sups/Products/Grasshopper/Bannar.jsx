import React from "react";
import Image from "next/image";
import Drop from "@/assets/images/back_drops/drop9.png";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import iconCard from "@/assets/images/Products_Page/Customization/icon.png";
import iconCard2 from "@/assets/images/Grasshopper/icon-2.png";
import iconCard3 from "@/assets/images/Grasshopper/icon-3.png";
import Link from "next/link";

export default function Bannar() {
  return (
    <section className={`customization_bannar ${league} position-relative`}>
      <div className="slider-activation">
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
          data-black-overlay="6"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner mb-5" data-aos="fade-right">
                  <h1 className="title theme-gradient grass_title">
                    Grasshopper Modules
                    <br />
                  </h1>
                  <p className="text-white">
                    Precision engineering for exquisite facade fabrication.
                  </p>
                </div>
              </div>
            </div>



            <div className="service-wrapper mb-5 service-white">
              <div className="row ">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div
                    className="service service__style--1 flex align-items-start gap-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="icon ">
                      {/* <img src={iconCard.src} alt="Digital Agency" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        style={{ width: "30px", height: "30px" }}
                        stroke="green"
                        // className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        The Ultimate Tool for Creativity and Efficiency
                      </h4>
                      <p className="text-xs leading-relaxed">
                        Grasshopper is the ultimate tool for architects,
                        engineers, and designers seeking to push the boundaries
                        of creativity and efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div
                    className="service service__style--1 flex align-items-start gap-3"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="icon">
                      {/* <img src={iconCard2.src} alt="Digital Agency" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        // className="size-6"
                        style={{ width: "30px", height: "30px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        Empowering Designers and Engineers
                      </h4>
                      <p className="text-xs leading-relaxed">
                        Grasshopper empowers designers and engineers to push the
                        boundaries of traditional modelling through a flexible,
                        intuitive, and powerful dynamic design environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div
                    className="service service__style--1 flex align-items-start gap-3"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="icon">
                      {/* <img src={iconCard3.src} alt="Digital Agency" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="size-6"
                        style={{ width: "30px", height: "30px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="title">Significant Time Savings</h4>
                      <p className="text-xs leading-relaxed">
                        Grasshopper can save approximately 40-80% of the time
                        typically required for complex design and modelling
                        tasks by automating repetitive processes, enabling rapid
                        iterations, and integrating analysis tools, this
                        estimate assumes that users have a moderate to high
                        level of proficiency with Grasshopper, as familiarity
                        with the tool greatly enhances its efficiency benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
