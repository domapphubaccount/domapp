import React from "react";
import Image from "next/image";
import backdrop from "@/assets/images/windmaster/bg.png";
import windmasterImg from "@/assets/images/windmaster/windmaster_slogan.png";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Bannar() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);

  return (
    <>
      <section
        class="bg-half-260 bg-primary h-screen w-100"
        style={{
          backgroundImage: `url(${backdrop.src})`,
          backgroundPosition: "center",
        }}
      >
        <div class="container h-100">
          <div class="row justify-center items-center h-100">
            <div class="col-lg-12 text-center">
              <div class="title-heading leading-6 mb-3" data-aos="fade-up">
                <div className="flex justify-center">
                  <img src={windmasterImg.src} alt="windmaster" width={400} />
                </div>
                <div class="mt-4 pt-2">
                  <Link
                    class="btn btn-light d-inline-flex align-items-center mx-2 font-bold"
                    href="https://windmaster.domapphub.com"
                  >
                    {windmaster(lang).sections.bannar.try_btn}
                  </Link>
                  <Link
                    class="btn btn-light d-inline-flex align-items-center mx-2"
                    href="/windmaster/pricing"
                  >
                    {windmaster(lang).sections.bannar.pricing_btn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="position-relative">
        <div class="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
