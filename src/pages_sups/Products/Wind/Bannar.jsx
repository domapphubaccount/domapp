import React from "react";
import Image from "next/image";
import backdrop from "@/assets/images/windmaster/bg.png";
import windmaster from "@/assets/images/windmaster/windmaster_slogan.png";
import Link from "next/link";

export default function Bannar() {
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
              <div class="title-heading leading-6 mb-3">
                <div className="flex justify-center">
                  <img src={windmaster.src} alt="windmaster" width={400} />
                </div>
                <div class="mt-4 pt-2">
                  <Link
                    class="btn btn-light d-inline-flex align-items-center mx-2 font-bold"
                    href="https://windmaster.domapphub.com"
                  >
                    Get Started
                  </Link>
                  <Link
                    class="btn btn-light d-inline-flex align-items-center mx-2"
                    href="/windmaster/pricing"
                  >
                    {/* <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="align-middle me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg> */}
                    Pricing
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
