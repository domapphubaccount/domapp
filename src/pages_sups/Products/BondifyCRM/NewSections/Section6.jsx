import React, { useState } from "react";
import "./Section.css";
import { useSelector } from "react-redux";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";
import Image from "next/image";

export default function Section6() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const translations = { en, ar };
  const section = translations[lang].SECTION_6;

  const [activeTab, setActiveTab] = useState(0);

  const images = [
    "/images/tab1.png",
    "/images/tab2.png",
    "/images/tab3.png",
    "/images/tab4.png",
    "/images/tab5.png",
    "/images/tab6.png"
  ];

  return (
    <div className="section6-CRM-bg">
      <div className="pt-5 pb-5" dir={dir}>
        
        <div className="Text-center">
          <h3 className="text-center mb-3">{section.title}</h3>
          <p className="text-center mb-5">{section.subtitle}</p>
        </div>

        <div className="d-flex justify-content-center gap-3 tabs-wrapper">
          {section.tabs.map((tab, index) => (
            <button
              key={index}
              className={`crm-tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Image
            src={images[activeTab]}
            alt="tab-preview"
            width={1100}
            height={500}
            className="tab-image"
          />
        </div>

      </div>
    </div>
  );
}
