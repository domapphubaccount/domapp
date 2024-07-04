"use client"
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Section_1 from "./Page_sup/Section_1";
import Section__head from "./Page_sup/Section__head";
import React , { useState } from "react";
import Contact from "@/components/Contact/Contact";


export default function Home() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
}

  return (
    <div className='page_hid'>
        <Header handleToggle={handleToggle}/>
        <Section__head />
        <Section_1 />
        <Footer />
      <Contact handleToggle={handleToggle} toggle={toggle} setToggle={setToggle}/>

    </div>
  );
}
