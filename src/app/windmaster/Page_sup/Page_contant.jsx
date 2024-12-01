"use client";

// WINDLOAD
import Wind_1 from "@/assets/images/Products_Page/Wind/W1.png";
import Wind_2 from "@/assets/images/Products_Page/Wind/W2.png";
import Wind_3 from "@/assets/images/Products_Page/Wind/W3.png";
import Wind_4 from "@/assets/images/Products_Page/Wind/W4.png";
import clad_5 from "@/assets/images/Clad/Picture5.png";

import Product from "@/pages_sups/Products/Product";
import Section_2 from "@/pages_sups/Products/Wind/Wind/Section_2";
import React from "react";
import Screens_Section from "@/pages_sups/Products/Wind/Wind/Screens_Section";
import product_1 from "@/assets/images/Home_Page/products/pr1.jpg";
import Bannar from "@/pages_sups/Products/Wind/Bannar";
import Section_3 from "@/pages_sups/Products/Wind/Wind/Section_3";
import Section_4 from "@/pages_sups/Products/Wind/Wind/Section_4";
import Section_5 from "@/pages_sups/Products/Wind/Wind/Section_5";

export default function Page() {

  return (
    <div >
      <>
      <Bannar />
        <Section_2/>
        <Section_5 />
        <Section_3 />
        <Section_4 />

      </>
    </div>
  );
}
