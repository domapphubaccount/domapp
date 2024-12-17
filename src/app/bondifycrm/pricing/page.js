"use client"
import Contact from "@/components/Contact/Contact";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Pricing = dynamic(() => import("@/pages_sups/Products/BondifyCRM/BondifyCRM/Pricing"), {
  ssr: false,
});

export default function Page() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Pricing />
      <Contact
        handleToggle={handleToggle}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}
