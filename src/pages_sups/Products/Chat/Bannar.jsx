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
    <section className="agency header chat-head" id="header">
      <div className="agency bg mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="center-text">
                <div>
                  <div className="header-text">
                    <img loading="lazy" src={Logo.src} width={400} alt="chatplus" />
                  </div>
                  <div className="header-sub-text mb-5 text-lg" dir={dir}>
                    <p>{chatplus(lang).sections.bannar.slogan}</p>
                  </div>
                  <div className="link-horizontal" dir={dir}>
                    <Link
                      href={contact_page}
                      className="btn btn-default btn-gradient text-white active mx-2"
                    >
                      {chatplus(lang).sections.bannar.try_btn}
                    </Link>
                    <Link
                      href="/chatplus/pricing"
                      className="btn btn-default btn-gradient text-white active mx-2"
                    >
                      {chatplus(lang).sections.bannar.pricing_btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 flex items-center">
              <div
                className=""
                style={{
                  transform:
                    "perspective(20000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <img loading="lazy" alt="" className="img-fluid" src={BannarIMG.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[250px]">
        <VideoSection />
      </div>

      <div className="set-abs abs-horizon-center girl-boy image_bannar">
        <div className="plus-container plus-container6">
          <div className="plus white"></div>
        </div>
        <div className="plus-container plus-container7">
          <div className="plus white"></div>
        </div>
        <div className="plus-container plus-container8">
          <div className="plus white"></div>
        </div>
        <div className="circle-container">
          <div className="gradient-circle-big"></div>
        </div>
      </div>

      <div className="plus-container">
        <div className="plus"></div>
      </div>

      {/* <div className="plus-container plus-container2">
        <div className="plus plus-medium"></div>
      </div> */}
      <div className="plus-container plus-container3">
        <div className="plus plus-small"></div>
      </div>
      <div className="plus-container plus-container4">
        <div className="plus plus-small"></div>
      </div>
      <div className="plus-container plus-container5">
        <div className="plus plus-medium"></div>
      </div>
    </section>
  );
}
