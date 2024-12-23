import React from "react";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import Link from "next/link";
import Logo from "@/assets/images/chatPlus/logo-slogan.png";
import VideoSection from "./Chat/VideoSection";
import BannarIMG from "@/assets/images/chatPlus/img.png";
import { contact_page } from "@/Store/Main/links/links";
import { useSelector } from "react-redux";

export default function Bannar() {
  return <Bannar2 />;
}

function Bannar2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { chatplus } = useSelector((state) => state.chatplusRed);

  return (
    <section class="agency header chat-head" id="header">
      <div class="agency bg mb-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="center-text">
                <div>
                  <div class="header-text">
                    <img src={Logo.src} width={400} alt="chatplus" />
                  </div>
                  <div class="header-sub-text mb-5 text-lg" dir={dir}>
                    <p>{chatplus(lang).sections.bannar.slogan}</p>
                  </div>
                  <div class="link-horizontal" dir={dir}>
                    <Link
                      href={contact_page}
                      class="btn btn-default btn-gradient text-white active mx-2"
                    >
                      {chatplus(lang).sections.bannar.try_btn}
                    </Link>
                    <Link
                      href="/chatplus/pricing"
                      class="btn btn-default btn-gradient text-white active mx-2"
                    >
                      {chatplus(lang).sections.bannar.pricing_btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8 flex items-center">
              <div
              className=""
                style={{
                  transform:
                    "perspective(20000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <img alt="" class="img-fluid" src={BannarIMG.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[250px]">
        <VideoSection />
      </div>

      <div class="set-abs abs-horizon-center girl-boy image_bannar">
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

      {/* <div class="plus-container plus-container2">
        <div class="plus plus-medium"></div>
      </div> */}
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
