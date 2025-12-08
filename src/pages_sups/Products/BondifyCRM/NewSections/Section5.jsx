import React from "react";
import { Container } from "reactstrap";
import Image from "next/image";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";
import { useSelector } from "react-redux";
import "./section.css";

export default function Section5() {
  const { lang, dir } = useSelector((state) => state.languageSlice);

  const translations = { en, ar };

  const section = translations[lang].SECTION_5;

  const images = [
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/image11.png",
    "/images/image12.png",
    "/images/image13.png",
  ];

  return (
    <Container>
      <div className="text-center mt-5 section-title-meta">
        <span>{section.subtitle}</span>
        <h2>{section.title}</h2>
      </div>
      <div
        dir={dir}
        className="features-wrapper-cards d-flex flex-wrap justify-content-center gap-4 mt-4"
      >
        {section.cards.map((card, index) => (
          <div
            key={index}
            className="feature-card card-section5 text-center p-3"
          >
            <div className="feature-img-wrapper">
              <Image
                src={images[index]}
                alt={card.title}
                width={140}
                height={140}
              />
            </div>
            <h4 className="mt-3">{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
