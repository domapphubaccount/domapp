import React from "react";
import { useSelector } from "react-redux";
import "./Section.css";
import Image from "next/image";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";

export default function Section4() {
  const { lang , dir } = useSelector((state) => state.languageSlice);

  const translations = { en, ar };
  const section = translations[lang].SECTION_4;

  return (
    <div dir={dir} className="p-5 d-flex align-items-center justify-content-between section2-boundify-crm gap-3">
      <div className="text-div section-title-meta ml-5">
        <span>{section.subtitle}</span>
        <h3>{section.title}</h3>
        <p>{section.desc}</p>
        <ul className="p-0 m-0">
          {section.list.map((item, index) => (
            // <li key={index}>{item}</li>
                          <li key={index} className="flex items-center gap-2 mb-2">
                  <span className="list-icon">✔</span>
                  <span className = "li-span ">{item}.</span>
                </li>
                      ))}
         
        </ul>
      </div>
      <div className="image-div-section2 ml-5">
        <Image
          src="/images/section4.png"
          alt="feature1"
          width={872}
          height={540}
        />
      </div>
    </div>
  );
}
