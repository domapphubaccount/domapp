"use client";
import Carousal from "@/components/Carousal/Carousal";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Section_1 from "@/pages_sups/Home/Section_1/Section_1";
import Section_2 from "@/pages_sups/Home/Section_2/Section_2";
import Section_3 from "@/pages_sups/Home/Section_3/Section_3";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header handleToggle={handleToggle} />
      <Section_1 />
      <Section_2 />
      {/* <Section_4 /> */}
      <Carousal />
      <Section_3 />
      <Footer />
      <Contact
        handleToggle={handleToggle}
        toggle={toggle}
        setToggle={setToggle}
      />
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#525A63",
          padding: "5px",
          borderRadius: "50%",
          left: "20px",
        }}
      />
    </div>
  );
}
