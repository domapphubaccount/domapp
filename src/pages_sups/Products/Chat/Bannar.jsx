import React from "react";
import { league } from "@/pages_sups/Home/Section_1/Section_1";
import Link from "next/link";
import Logo from "@/assets/images/chatPlus/logo-slogan.png";
import BannarIMG from "@/assets/images/chatPlus/img.png"

export default function Bannar() {
  return (
    // <section className="chat_bannar">
    //   <div className={`products ${league.className}`}>
    //     <div className="dark_bannar"></div>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="chat_wave"
    //       viewBox="0 0 1440 320"
    //     >
    //       <path
    //         fill="#ffffff"
    //         fill-opacity="1"
    //         d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,101.3C672,107,768,181,864,202.7C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    //       ></path>
    //     </svg>
    //     <div className="head-section" data-aos="fade-right">
    //       <div className="mb-4">
    //         <h1>CHATPLUS</h1>
    //       </div>
    //       <div className="mb-4">
    //         <p>One platform with all your connection needs.</p>
    //       </div>
    //       <div className="d-flex justify-content-center">
    //         <Link href="/contact" className="mx-2 chatplus_btn" shallow>
    //           Get Started
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Bannar2 />
  );
}

function Bannar2() {
  return (
    <section class="agency header chat-head" id="header">
      <div class="agency bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="center-text">
                <div>
                  <div class="header-text">
                    <img src={Logo.src} width={400} alt="chatplus" />
                    {/* <h1 class="text-uppercase">
                      <span class="bold-text">CHATPLUS</span>
                    </h1> */}
                  </div>
                  <div class="header-sub-text mb-5 text-lg">
                    <p>One platform with all your communication needs.</p>
                  </div>
                  <div class="link-horizontal">
                    <Link
                      href="/contact"
                      class="btn btn-default btn-gradient text-white active"
                    >
                      start now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="set-abs abs-horizon-center girl-boy image_bannar">
        {/* <div style={{willChange: "transform; transition: 3000ms cubic-bezier(0.03, 0.98, 0.52, 0.99); transform: perspective(20000px) rotateX(3.68412deg) rotateY(-5.86818deg) scale3d(1, 1, 1);"}}></div> */}
        <div style={{transform: "perspective(20000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}}>
          <img
            alt=""
            class="img-fluid"
            src={BannarIMG.src}
          />
        </div>
        <div class="plus-container plus-container6">
          <div class="plus white"></div>
        </div>
        <div class="plus-container plus-container7">
          <div class="plus white"></div>
        </div>
        <div class="plus-container plus-container8">
          <div class="plus white"></div>
        </div>
        <div class="circle-container">
          <div class="gradient-circle-big"></div>
        </div>
      </div>
      <div class="plus-container">
        <div class="plus"></div>
      </div>
      <div class="plus-container plus-container2">
        <div class="plus plus-medium"></div>
      </div>
      <div class="plus-container plus-container3">
        <div class="plus plus-small"></div>
      </div>
      <div class="plus-container plus-container4">
        <div class="plus plus-small"></div>
      </div>
      <div class="plus-container plus-container5">
        <div class="plus plus-medium"></div>
      </div>
    </section>
  );
}
