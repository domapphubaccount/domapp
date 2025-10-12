import React from "react";
import Erp_Dash from "@/assets/images/BondifyCRM/ERP_dash.png";
import Link from "next/link";
import Bondify from "@/assets/images/BondifyCRM/bannar.png";
import bondi from "@/assets/images/BondifyCRM/bondi.png";
import { useSelector } from "react-redux";

export default function Bannar2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);

  return (
    <section>
      <div className="home-bg relative">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-6" dir={dir}>
            <div className="home-text">
              <div className="mb-5">
                <img alt="banner" loading="lazy" src={bondi.src} />
              </div>
              <div className="docutment-button text-center">
                <a
                  className="btn text-white me-3 mb-3"
                  href="http://bondifycrm.domapphub.com/"
                  target="_blank"
                >
                  {bondifycrm(lang).sections.bannar.try_btn}
                </a>
                <Link
                  className="btn text-white me-3 mb-3"
                  target="_blank"
                  href="/bondifycrm/pricing"
                >
                  {bondifycrm(lang).sections.bannar.pricing_btn}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="home-screen">
              <div className="screen-1">
                <img loading="lazy"
                  className="img-fluid"
                  style={{ borderRadius: "15px" }}
                  src={Erp_Dash.src}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <img loading="lazy"
          src={Bondify.src}
          className="absolute w-100 h-100"
          style={{ zIndex: -1, top: 0, left: 0 }}
          alt="bondify bannar"
        />
      </div>
    </section>
  );
}
