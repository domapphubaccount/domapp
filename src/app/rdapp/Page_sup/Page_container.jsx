"use client";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Page_sup from "./Page_contant";
import { useState } from "react";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header handleToggle={handleToggle} />
      <Page_sup />
      <Footer />
      <Contact
        handleToggle={handleToggle}
        toggle={toggle}
        setToggle={setToggle}
      />
    </>
  );
}
