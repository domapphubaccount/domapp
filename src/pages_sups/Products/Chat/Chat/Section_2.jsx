import Image from "next/image";
import React from "react";
import { Container } from "reactstrap";
import Icon_1 from "@/assets/images/Products_Page/Chat/start_icons/icon_1.svg";
import Icon_2 from "@/assets/images/Products_Page/Chat/start_icons/icon_2.svg";
import Icon_3 from "@/assets/images/Products_Page/Chat/start_icons/icon_3.svg";
import Icon_4 from "@/assets/images/Products_Page/Chat/start_icons/icon_4.svg";

import Shap from "@/assets/images/chatPlus/shap.png";
import Phone_S from "@/assets/images/chatPlus/phone-s.png"

export default function Section_2() {
  return (
    // <section className="chat_why_us">
    //   <Container>
    //     <div className="d-flex justify-content-center flex-wrap chat_cards_container mb-5">
    //       <div className="my-5">
    //         <div className="chat_amaizing_card" data-aos="fade-up">
    //           <div className="card_content">
    //             <div className="card_data_container card_shadow">
    //               <div className="icon_card_data">
    //                 <div className="content_icon">
    //                   <Image
    //                     src={Icon_1}
    //                     alt="icon_chat"
    //                     style={{ width: "50px", height: "50px" }}
    //                   />
    //                 </div>
    //               </div>

    //               <div className="text-center fw-bold">
    //                 <h4>Support</h4>
    //                 <p>
    //                   Enhance customer interaction, lead quality, and
    //                   communication
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="my-5">
    //         <div className="chat_amaizing_card_2">
    //           <div className="card_content">
    //             <div className="card_data_container card_shadow">
    //               <div className="icon_card_data">
    //                 <div className="content_icon">
    //                   <Image
    //                     src={Icon_2}
    //                     alt="icon_chat"
    //                     style={{ width: "50px", height: "50px" }}
    //                   />
    //                 </div>
    //               </div>

    //               <div className="text-center fw-bold text-data">
    //                 <h4>Archive</h4>
    //                 <p>Store and retrieve chat transcripts seamlessly</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="my-5">
    //         <div className="chat_amaizing_card_3" data-aos="fade-up">
    //           <div className="card_content">
    //             <div className="card_data_container card_shadow">
    //               <div className="icon_card_data">
    //                 <div className="content_icon">
    //                   <Image
    //                     src={Icon_3}
    //                     alt="icon_chat"
    //                     style={{ width: "50px", height: "50px" }}
    //                   />
    //                 </div>
    //               </div>

    //               <div className="text-center fw-bold">
    //                 <h4>Auto-reply</h4>
    //                 <p>Customized automated reply</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="my-5">
    //         <div className="chat_amaizing_card_4">
    //           <div className="card_content">
    //             <div className="card_data_container card_shadow">
    //               <div className="icon_card_data">
    //                 <div className="content_icon">
    //                   <Image
    //                     src={Icon_4}
    //                     alt="icon_chat"
    //                     style={{ width: "50px", height: "50px" }}
    //                   />
    //                 </div>
    //               </div>

    //               <div className="text-center text-data fw-bold">
    //                 <h4>Secure Communication</h4>
    //                 <p>
    //                   Guarantee end-to-end encryption for every communication
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // </section>
    <Section_1 />
  );
}

function Section_1() {
  return (
    <section class="chat agency agency-content about-bg">
      <div className="row">
        <div className="col-lg-4">
          <img alt="" class="img-fluid blue-img" src={Phone_S.src} />
        </div>
        <div className="col-lg-8 my-3 flex items-center">
          <h3 class="text-as-shadow">
            {/* About <br /> us */}
          </h3>
          <div class="container">
            <div class="row">
              <div class=" col-md-9 col-xl-9">
                <div class="agency-header-center-container">
                  <div class="borders"></div>
                  <div class="agency-head">
                    <h3 class="agency-head-text">
                     
                      <span class="block-span">Grow your business and engage with your customers via messaging</span>
                    </h3>
                  </div>
                </div>
                {/* <p class="agency-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm od tempor incididunt ut labore et dolore magna aliqua
                  ut enim adminim veni am for humanity for savings anything for
                  your future.
                </p>
                <a class=" btn btn-default btn-gradient" href="#">
                  view more
                </a> */}
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
            {/* <img
              alt=""
              class="img-fluid about-img"
              src={Phone_S.src}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
