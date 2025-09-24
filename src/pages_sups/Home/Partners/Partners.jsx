"use client";
import Section_head from "@/components/Reuse/Section_Head/Section_head";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

function Partners() {
  const { lang } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  return (
    <Container>
      <Section_head
        head={1}
        title_1={home(lang).sections.partners_title.title}
        des_1={home(lang).sections.partners_title.slogan}
      />
      <div className="partners-logos-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center my-6">
        <div className="partner-logo partner-logo-1"></div>
        <div className="partner-logo partner-logo-2"></div>
        <div className="partner-logo partner-logo-3"></div>
        <div className="partner-logo partner-logo-4"></div>
        <div className="partner-logo partner-logo-5"></div>
        <div className="partner-logo partner-logo-6"></div>
        <div className="partner-logo partner-logo-7"></div>
        <div className="partner-logo partner-logo-8"></div>

        {/* Last row in its own flex container */}
        <div className="partner-logo partner-logo-9"></div>
        <div className="partner-logo partner-logo-10"></div>
        <div className="partner-logo partner-logo-11"></div>
        <div className="partner-logo partner-logo-12"></div>

        <div className="md:col-span-4 flex justify-center gap-6">
          {/* <div className="partner-logo partner-logo-14"></div> */}
          <div className="partner-logo partner-logo-13"></div>
          <div className="partner-logo partner-logo-15"></div>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
