"use client";
import React from "react";
import Bannar from "@/pages_sups/Products/Clad/Bannar";
import Head from "@/pages_sups/Products/Clad/Clad/Head";
import Section_1 from "@/pages_sups/Products/Clad/Clad/Section_1";
import Section_3 from "@/pages_sups/Products/Clad/Clad/Section_3";
import Section_4 from "../../../pages_sups/Products/Clad/Clad/Section_4";
import Head_2 from "@/pages_sups/Products/Clad/Clad/Head_2";
import Section_2 from "@/pages_sups/Products/Clad/Clad/Section_2";
import Problems from "@/pages_sups/Products/Clad/Clad/Problems";
import SimplifiedWorkflow from "@/pages_sups/Products/Clad/Clad/SimplifiedWorkflow";
import Testimonials from "@/pages_sups/Products/Clad/Clad/Testimonials";
import FAQs from "@/pages_sups/Products/Clad/Clad/FAQs";
import CTA from "@/pages_sups/Products/Clad/Clad/CTA";
import FloatingWhatsApp from "@/pages_sups/Products/Clad/Clad/FloatingWhatsApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Page() {
  return (
    <div className="facade_page cladcut">
      <Bannar />
      <Problems />
      <SimplifiedWorkflow />
      <Section_2 />
      <Testimonials />
      {/* <Head head={""} body={""} /> */}
      {/* <Section_1 /> */}
      {/* <Head_2 /> */}
      {/* <Section_4 /> */}
      <FAQs />
      <Section_3 />
      <CTA />
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}
