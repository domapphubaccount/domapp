"use client";
import Footer from "@/components/Layout/Footer/Footer";
import Section__head from "./Page_sup/Section__head";
import React from "react";
import dynamic from "next/dynamic";
const Section_1 = dynamic(() => import("./Page_sup/Section_1"), {
  ssr: false,
});
const Header = dynamic(() => import("@/components/Layout/Header/Header"), {
  ssr: false,
});

export default function Home() {

  return (
    <div className="page_hid">
      <Header />
      <Section__head /> 
      <Section_1 />
      <Footer />
    </div>
  );
}
