"use client";
import Section_head from "@/components/Reuse/Section_Head/Section_head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

function Partners() {
  const { lang } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);
  const logos = [
    "partner-logo-1",
    "partner-logo-2",
    // "partner-logo-3",
    "partner-logo-4",
    "partner-logo-5",
    "partner-logo-6",
    "partner-logo-7",
    "partner-logo-8",
    "partner-logo-9",
    "partner-logo-10",
    "partner-logo-11",
    "partner-logo-12",
    "partner-logo-13",
    // "partner-logo-14",
    "partner-logo-15",
  ];

  const [page, setPage] = useState(0);
  const logosPerPage = 8;
  const totalPages = Math.ceil(logos.length / logosPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentLogos = logos.slice(
    page * logosPerPage,
    page * logosPerPage + logosPerPage
  );
  // const safeLogos = [...currentLogos];



  return (
    <Container>
      <Section_head
        head={1}
        title_1={home(lang).sections.partners_title.title}
        des_1={home(lang).sections.partners_title.slogan}
      />
      <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto mb-[100px]">
        <div className="logos-wrapper animate-slideGroup">
          <div className=" mx-auto overflow-hidden py-12 bg-gray-50/50">
           <div className="flex animate-slideLeftInfinite mb-12">
  {[...currentLogos.slice(0, 4), ...currentLogos.slice(0, 4)].map((logo, idx) => (
    <div key={`upper-${logo}-${idx}`} className={`partner-logo ${logo} flex-shrink-0 w-36 h-36 mx-20`} />
  ))}
</div>

<div className="flex animate-slideRightInfinite">
  {[...currentLogos.slice(4, 8), ...currentLogos.slice(4, 8)].map((logo, idx) => (
    <div key={`lower-${logo}-${idx}`} className={`partner-logo ${logo} flex-shrink-0 w-36 h-36 mx-20`} />
  ))}
</div>

          </div>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
