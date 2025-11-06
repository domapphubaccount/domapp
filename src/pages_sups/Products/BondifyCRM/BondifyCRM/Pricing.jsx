"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Loading_page from "@/components/Loading_page/Loading_page";
import Link from "next/link";
import { useSelector } from "react-redux";
import useInitCountry from "@/stores/useInitCountry";

export default function Pricing() {
  const [priceIcon, setPriceIcon] = useState(false);
  useInitCountry();
  const { currency, country } = useSelector((state) => state.countryRed);

  return (
    <>
      <Header />
      <section className={league.className + " pricing-section mb-5"}>
        <div className="mb-2">
          <Section__head />
        </div>
        <Monthly priceIcon={priceIcon} currency={currency} />
      </section>
      <Footer />
    </>
  );
}

function PricingCards({ isMonthly, currency }) {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);

  const pricing = isMonthly
    ? bondifycrm(lang).sections.BONDIFY_PRICING.monthly
    : bondifycrm(lang).sections.BONDIFY_PRICING.annualy;

  const { free = {}, standard = {}, enterprise = {} } = pricing;

  const getPrice = (plan) => {
    if (!plan) return "0";
    return currency === "EGP"
      ? plan.price_EGY ?? 0
      : currency === "SAR"
      ? plan.price_SAR ?? 0
      : plan.price_USD ?? 0;
  };

  const plans = [
    {
      ...free,
      type: "free",
      price: "0",
      period: isMonthly ? "month" : "year",
    },
    {
      ...standard,
      type: "standard",
      price: getPrice(standard),
      period: isMonthly ? "month" : "year",
    },
    {
      ...enterprise,
      type: "enterprise",
      price: "Custom",
      period: "",
    },
  ];

  

  return (
    <div dir={dir}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 transition-all duration-300 border border-gray-200 ${
              plan.type === "standard"
                ? "bg-[#5c65c7] text-white  z-10"
                : "bg-white text-gray-900 "
            }`}
          >
            <h3
              className={`${
                plan.type === "standard" ? "text-white" : "text-[#5c5678]"
              } text-[18px]`}
            >
              {plan.title}
            </h3>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-[32px] font-medium">
                  {plan.type === "enterprise"
                    ? "Custom"
                    : `${currency} ${plan.price}`}
                </span >
                {plan.type !== "enterprise" && plan.price !== "0" && (
  <span className="text-[18px] ml-2 mr-2">
  /{" "}
  {plan.period === "month"
    ? (lang === "en" ? "month" : "شهر")
    : (lang === "en" ? "year" : "سنة")}
</span>


                )}
              </div>
            </div>

            <ul className="m-0 p-0 mb-5">
              {Array.isArray(plan.include) ? (
                plan.include.map((item, i) => (
                  <li key={i} className="flex items-center mb-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${lang === "en" ? "mr-3" :"ml-3"} flex-shrink-0 ${
                        plan.type === "standard" ? "bg-white/20" : "bg-gray-200"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 ${
                          plan.type === "standard"
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span
                      className={
                        plan.type === "standard"
                          ? "text-white"
                          : "text-gray-700"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))
              ) : (
                <li className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      plan.type === "standard" ? "bg-white/20" : "bg-gray-200"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        plan.type === "standard"
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={
                      plan.type === "standard" ? "text-white" : "text-gray-700"
                    }
                  >
                    {plan.include}
                  </span>
                </li>
              )}
            </ul>

            <Link
              href={plan.link || "#"}
              className={`
    w-full flex justify-center items-center pt-2 pb-2 rounded-[12px] 
    text-base font-semibold transition-all duration-300
    ${
      plan.type === "standard"
        ? "bg-[#ebedfd] text-[#5c65c7] hover:bg-[#d8dbf7]"
        : "bg-[#6772e5] text-white hover:bg-[#5a63d8]"
    }
    focus:outline-none text-decoration-none
  `}
            >
              {plan.btn}
              {/* Get Started */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function Monthly({ priceIcon, currency }) {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <div className="py-3">
        <Container>
          <div className="text-center mb-16 px-4">
            <h2 className="text-[27px] font-bold text-[#5c5678] mb-1">
              {bondifycrm(lang).sections.BONDIFY_PRICING.title}
            </h2>
            <p className="text-[16px] text-[#5c5678] mb-8">
               {bondifycrm(lang).sections.BONDIFY_PRICING.sub_title}
            </p>

            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm font-semibold ${
                  isMonthly ? "text-indigo-600" : "text-gray-600"
                }`}
              >
                {bondifycrm(lang).sections.BONDIFY_PRICING.month}
              </span>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={!isMonthly}
                  onChange={() => setIsMonthly(!isMonthly)}
                />
                <div
                  className="w-16 h-5 bg-[#94a3b8] rounded-full 
                    peer-checked:bg-[#4f46e5]
                    after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                    after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
                    peer-checked:after:translate-x-11"
                ></div>
              </label>

              <div className="flex items-center gap-2">
                <span
                  className={`text-sm font-semibold ${
                    !isMonthly ? "text-indigo-600" : "text-gray-600"
                  }`}
                >
                  {bondifycrm(lang).sections.BONDIFY_PRICING.year}
                </span>
                {/* {!isMonthly && (
            <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">
              Save 20%
            </span>
          )} */}
              </div>
            </div>
          </div>

          <PricingCards isMonthly={isMonthly} currency={currency} />
        </Container>
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
