"use client";
import Carousal from "@/components/Carousal/Carousal";
// import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Bannar from "@/pages_sups/Home/Bannar/Bannar";
import About from "@/pages_sups/Home/About/About";
import CounterData from "@/pages_sups/Home/CounterData/CounterData";
import WhatWeDo from "@/pages_sups/Home/WhatWeDo/WhatWeDo";

import dynamic from "next/dynamic";
import Reviews from "@/pages_sups/Home/Reviews/Reviews";
import WhyUs from "@/pages_sups/Home/WhyUS/WhyUs";
const Footer = dynamic(() => import("@/components/Layout/Footer/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Bannar />
      <About /> 
      <WhatWeDo />
      <WhyUs />
      <Carousal />
      <CounterData />
      <Reviews />
      <Footer />
    </main>
  );
}
