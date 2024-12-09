"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Link from "next/link";
import axios from "axios";

export default function Pricing() {
  // const [priceToggle , setPriceToggle] = useState(true)
  const [priceIcon, setPriceIcon] = useState(false);

  const [currency, setCurrency] = useState("USD")

 
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        country =
          response.data.country_name == "Saudi Arabia"
            && setCurrency("SAR")

            

      
     
      })
      .catch(error => {
        console.log("error", error)
      })
  }, [])
  return (
    <>
      <Header />
      <section className={league.className + " pricing-section mb-5"}>
        <div className="mb-2">
          <Section__head />
        </div>
        <Monthly priceIcon={priceIcon} currency={currency}/>
      </section>
      <Footer />
    </>
  );
}

function Monthly({ priceIcon,currency }) {
  const [showFree, setShowFree] = useState(false);
  const [priceToggle, setPriceToggle] = useState(true);
  const [priceIcontog, setPriceIcon] = useState(false);

  const handleDemoClick = () => {
    window.location.href = "https://erp.domapphub.com/signup";
  };

  console.log(priceToggle);
  return (
    <>
      <div className="py-3">
        <Container>
          <div style={{ maxWidth: "1000px" }} className="m-auto"></div>

          <div>
            <div className="d-flex justify-content-center">
              <div
                className=""
                style={{
                  // overflow: "hidden",
                  borderRadius: "20px",
                  border: "1px solid #23834B",
                  boxShadow: "0px 4px 20px 2px #ccc",
                }}
              >
                <button
                  className={`pricing_toggle  ${
                    priceToggle ? "toggle-2" : "toggle-1"
                  }`}
                  style={{borderRadius: "20px",}}
                  onClick={() => setPriceToggle(true)}
                >
                  Monthly
                </button>
                <button
                  className={`pricing_toggle annual_button ${
                    priceToggle ? "toggle-1" : "toggle-2"
                  }`}
                  style={{
                    borderRadius: "20px",
                  }}
                  onClick={() => setPriceToggle(false)}
                >
                  Annual
                </button>
              </div>
            </div>

            {priceToggle ? (
              <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                  <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                    <img
                      src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                      alt=""
                      class="rounded-3xl w-20 h-20"
                    />
                    <div class="ml-5">
                      <span class="block text-2xl font-semibold">FREE</span>
                    </div>
                  </div>
                  <ul class="mb-7 font-medium text-gray-500">
                    <li class="flex text-lg mb-2">
                      <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                      <span class="ml-3">
                        Get started <span class="text-black">For Free</span>
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="http://bondifycrm.domapphub.com/login"
                    class="flex no-underline justify-center items-center bg-indigo-600 rounded-xl p-3 text-center text-white text-xl"
                  >
                    Start Demo
                    <img
                      src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                      class="ml-2"
                    />
                  </Link>
                </div>

                <div class="w-full flex-1 p-8 order-3 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                  <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
                    <img
                      src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                      alt=""
                      class="rounded-3xl w-20 h-20"
                    />
                    <div class="ml-5">
                      <span class="block text-3xl font-semibold text-white">
                        Enterprise
                      </span>
                    </div>
                  </div>
                  <ul class="mb-10 font-medium text-xl">
                    <li class="flex mb-6">
                      <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                      <span class="ml-3">
                        Get customized features for your organization
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="https://wa.me/201501060885"
                    class="flex no-underline justify-center items-center bg-indigo-600 rounded-xl p-3 text-center text-white text-2xl"
                  >
                    Contact Sales
                    <img
                      src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                      class="ml-2"
                    />
                  </Link>
                </div>

                <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                  <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                    <img
                      src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                      alt=""
                      class="rounded-3xl w-20 h-20"
                    />
                    <div class="ml-5">
                      <span class="block text-2xl font-semibold">Standard</span>
                      <span>
                        <span class="font-medium text-gray-500 text-xl align-top">
                          {currency}&thinsp;
                        </span>
                        <span class="text-3xl font-bold">9 </span>
                      </span>
                      <span class="text-gray-500 font-medium">/ user</span>
                    </div>
                  </div>
                  <ul class="mb-7 font-medium text-gray-500">
                    <li class="flex text-lg mb-2">
                      <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                      <span class="ml-3">
                        All features in <span class="text-black">Startup</span>
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="https://wa.me/201501060885"
                    class="flex no-underline justify-center items-center bg-indigo-600 rounded-xl p-3 text-center text-white text-xl"
                  >
                    Contact Sales
                    <img
                      src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                      class="ml-2"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <Annual currency={currency} />
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
function Annual({ priceIcon,currency }) {
  return (
    <>
      <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              alt=""
              class="rounded-3xl w-20 h-20"
            />
            <div class="ml-5">
              <span class="block text-2xl font-semibold">FREE</span>
            </div>
          </div>
          <ul class="mb-7 font-medium text-gray-500">
            <li class="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                Get started <span class="text-black">For Free</span>
              </span>
            </li>
          </ul>
          <Link
            href="http://bondifycrm.domapphub.com/login"
            class="flex no-underline justify-center items-center bg-indigo-600 rounded-xl p-3 text-center text-white text-xl"
          >
            Start Demo
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              class="ml-2"
            />
          </Link>
        </div>

        <div class="w-full flex-1 p-8 order-3 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              alt=""
              class="rounded-3xl w-20 h-20"
            />
            <div class="ml-5">
              <span class="block text-3xl font-semibold text-white">
                Enterprise
              </span>
            </div>
          </div>
          <ul class="mb-10 font-medium text-xl">
            <li class="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span class="ml-3">
                Get customized features for your organization
              </span>
            </li>
          </ul>
          <Link
            href="https://wa.me/201501060885"
            class="flex no-underline justify-center items-center bg-indigo-600 rounded-xl p-3 text-center text-white text-2xl"
          >
            Contact Sales
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              class="ml-2"
            />
          </Link>
        </div>

        <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              alt=""
              class="rounded-3xl w-20 h-20"
            />
            <div class="ml-5">
              <span class="block text-2xl font-semibold">Standard</span>
              <span>
                <span class="font-medium text-gray-500 text-xl align-top">
                {currency}&thinsp;
                </span>
                <span class="text-3xl font-bold">{currency=="SAR"?27:7} </span>
              </span>
              <span class="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul class="mb-7 font-medium text-gray-500">
            <li class="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span class="ml-3">
                All features in <span class="text-black">Startup</span>
              </span>
            </li>
          </ul>
          <Link
            href="https://wa.me/201501060885"
            class="flex no-underline justify-center items-center bg-indigo-600 rounded-xl p-3 text-center text-white text-xl"
          >
            Contact Sales
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              class="ml-2"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

function Section__head() {
  return (
    <section className="pricing_erp_head">
      <div>
        <div className="head_container">
          <h1 style={{ zIndex: 4 }} className="position-relative">
            bondify CRM Pricing
          </h1>
        </div>
      </div>
      <div className="dark_bannar"></div>
      <div className="back_wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.547 325.915">
          <defs></defs>
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(2.547 -753.617)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              className="cls-1"
              d="M1920,669.331V993.246H-2.547Z"
              transform="translate(0 84.287)"
            ></path>
            <path
              id="Path_2"
              data-name="Path 2"
              className="cls-2"
              d="M1920,669.331V902.469H-2.547Z"
              transform="translate(0 177.064)"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
}
