import React from "react";
import { Container } from "reactstrap";
import "./section.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";
import de from "@/stores/Language/de.json";
import es from "@/stores/Language/es.json";
import nl from "@/stores/Language/nl.json";


export default function Section1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const translations = { en, ar , de , es , nl };
  const section = translations[lang].SECTION_1;

  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
  ];

  return (
    <Container dir={dir}>
      <div
        className={` text-center mt-5 pt-5 section-title-meta ${
          lang === "ar" ? "bondifycrm-page-ar text-right" : "bondifycrm-page"
        }`}
      >
        <span>{section.subtitle}</span>
        <h2>{section.title}</h2>
      </div>

      <div className="features-wrapper-cards d-flex flex-wrap justify-content-center gap-4 mt-4">
        {section.cards.map((card, idx) => (
          <div className="feature-card text-center" key={idx}>
            <Image
              src={images[idx]}
              alt={card.title}
              width={140}
              height={140}
            />
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
