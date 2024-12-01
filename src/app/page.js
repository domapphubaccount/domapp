"use client";
import Carousal from "@/components/Carousal/Carousal";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Section_1 from "@/pages_sups/Home/Section_1/Section_1";
import Section_2 from "@/pages_sups/Home/Section_2/Section_2";
import Section_3 from "@/pages_sups/Home/Section_3/Section_3";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header/>
      <Section_1 />
      <Section_2 />
      <Carousal />
      <Section_3 />
      <Footer />
    </div>
  );
}
