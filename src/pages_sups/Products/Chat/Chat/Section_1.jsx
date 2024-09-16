import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Icon_1 from "@/assets/images/chatPlus/icon-1.png"
import Icon_2 from "@/assets/images/chatPlus/icon-2.png"
import Icon_3 from "@/assets/images/chatPlus/icon-3.png"
import Icon_4 from "@/assets/images/chatPlus/icon-4.png"
import Icon_5 from "@/assets/images/chatPlus/icon-5.png"
import Icon_6 from "@/assets/images/chatPlus/icon-6.png"

export default function Section_1() {
  return (
    <section class="chat agency format service-bg " id="features">
      <div class="container">
        <div class="row">
          <div class="offset-lg-1 col-md-4 my-3">
            <div class="center-text">
              <div class="format-container">
                {/* <h6 class="borders-before text-uppercase">
                  <span>Our services</span>
                </h6> */}
                <div class="format-head-text">
                  <h2 class="about-font-header my-3 fw-bold">
                  Flexible Configuration Options
                  </h2>
                </div>
                <div class="format-sub-text my-3">
                  <p class="about-para">
                  Provide quick and personalized responses, improving customer satisfaction.
                  </p>
                </div>
                {/* <a class=" btn btn-default btn-gradient" href="#">
                  view more
                </a> */}
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
                      <h5>Customer Support</h5>
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
                      <h5>Archive</h5>
                    </div>
                  </li>
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_3.src} />
                      <h5>Auto-reply
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
                      <h5>Broadcast Messaging</h5>
                    </div>
                  </li>
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_5.src} />
                      <h5>ChatBot</h5>
                    </div>
                  </li>
                  <li class="about-icon">
                    <div class="center-content" href="#">
                      <img alt="" src={Icon_6.src} />
                      <h5>Message Templates</h5>
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
