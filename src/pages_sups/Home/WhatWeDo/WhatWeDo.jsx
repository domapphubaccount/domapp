import React from "react";
import { Container } from "reactstrap";
import Section_head from "@/components/Reuse/Section_Head/Section_head";
import Cards from "./Section_sups/Cards";
import ResponsiveCarousel from "./Section_sups/Carousal";
import { useSelector } from "react-redux";
import { whatWeDo } from "@/Store/Main/IDs";
import { Col, Row } from "react-bootstrap";
import { why_us_section } from "@/Store/Main/links/links";

function WhatWeDo() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);
  const icons = [
    <svg
      key={1}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
      className="size-8"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="13" height="13" x=".5" y=".5" rx="1" />
        <path d="M.5 3.5h13M4 9l2 1.5l3.5-4" />
      </g>
    </svg>,
    <svg
      key={2}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
      className="size-8"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="13" height="13" x=".5" y=".5" rx="1" />
        <path d="M.5 4h13M4 7l1.5 1.5L4 10m4.5-1.5h2" />
      </g>
    </svg>,
    <svg
      key={3}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
      className="size-8"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="7" r="6.5" />
        <path d="M.5 7h13m-4 0A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7Z" />
      </g>
    </svg>,
    <svg
      key={4}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      className="size-8"
    >
      <path
        fill="currentColor"
        d="M5 22V2h12v4.923h-1V5.5H6v13h10v-1.423h1V22H5Zm1-2.5V21h10v-1.5H6Zm0-15h10V3H6v1.5Zm0 0V3v1.5Zm0 15V21v-1.5Zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.688-5.688l.708.708l-6.396 6.396Z"
      />
    </svg>,
    <svg
      key={5}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 56 56"
      className="size-8"
    >
      <path
        fill="currentColor"
        d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265M4.129 13.88c0-2.438 1.312-3.68 3.656-3.68h40.43c2.32 0 3.656 1.242 3.656 3.68v6.516H4.129ZM48.215 45.8H29.769V23.746h22.102v18.375c0 2.438-1.336 3.68-3.656 3.68m-40.43 0c-2.344 0-3.656-1.242-3.656-3.68V23.746H26.23v22.055Z"
      />
    </svg>,
    <svg
    key={6}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
      className="size-8"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m.94 2l12-1.38a.49.49 0 0 1 .56.49v11.82a.5.5 0 0 1-.58.49l-12-1.84a.51.51 0 0 1-.42-.5V2.46A.5.5 0 0 1 .94 2M6 1.38v10.98m7.5-5.6H.5"
      />
    </svg>,
  ];

  return (
    <section id={why_us_section}>
      <Container>
        <Section_head
          head={1}
          title_1={home(lang).sections.what_we_do.head.title}
          des_1={home(lang).sections.what_we_do.head.slogan}
          sectionId={whatWeDo}
        />

        <Row>
          {home(lang).sections.services.map((item, index) => (
            <Col sm={12} md={4} lg={4} className="mb-4" key={index}>
              <div className="bg-body-secondary card-sec p-4 h-100 rounded" dir={dir}>
                <div className="d-flex">
                  <div className="rounded-circle bg-secondary text-white p-3 icon">
                    {icons[index]}
                  </div>
                </div>
                <div className="my-3">
                  <h5>{item.title}</h5>
                </div>
                <div className="my-3">
                  <p>{item.slogan}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhatWeDo;
