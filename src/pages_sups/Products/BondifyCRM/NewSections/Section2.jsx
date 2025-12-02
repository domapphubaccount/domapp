import React from "react";
import { Container } from "reactstrap";
import "./Section.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";

export default function Section2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const translations = { en, ar };
  const section = translations[lang].SECTION_2;

  return (
    <div className="p-5 d-flex align-items-center justify-content-between section2-boundify-crm gap-3" dir={dir}>
      <div className="image-div-section2 me-4">
        <Image
          src="/images/section2.png"
          alt="feature1"
          width={872}
          height={540}
        />
      </div>

      <div className="text-div section-title-meta ms-4">
        <span>{section.subtitle}</span>
        <h3>{section.title}</h3>
        <p>{section.desc}</p>
        <ul className="p-0 m-0" dir={dir}>
          {section.list.map((item, index) => (
            
            // <li key={index}>{item}</li>
         <li key={index} className="flex items-center gap-2 mb-2">
      <span className="list-icon p-0 m-0">✔</span>
      <span className = "li-span">{item}.</span>
    </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
