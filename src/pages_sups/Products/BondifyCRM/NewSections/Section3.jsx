import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";
import de from "@/stores/Language/de.json";
import es from "@/stores/Language/es.json";
import nl from "@/stores/Language/nl.json";

export default function Section3() {
  const { lang , dir } = useSelector((state) => state.languageSlice);
  const translations = { en, ar , de , es , nl };
  const section = translations[lang].SECTION_3;

  return (
    <div className="section3-CRM-bg">
      <Container className="pt-5 pb-5">
        <h3 dir={dir} className="text-center mb-5">{section.title}</h3>
        <div dir={dir} className="d-flex justify-content-center gap-3">
          <a href="/bondifycrm/CreateAccount" className="create-account">{section.buttons.createAccount}</a>
          <a href="/bondifycrm/pricing" className="see-pricing">{section.buttons.seePricing}</a>
        </div>
      </Container>
    </div>
  );
}
