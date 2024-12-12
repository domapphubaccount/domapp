"use client";

import Bannar from "@/pages_sups/Products/Byld/Bannar";
import ByldVideo from "@/pages_sups/Products/Byld/Byld/ByldVideo";
import Section_1 from "@/pages_sups/Products/Byld/Byld/Section_1";
import Section_2 from "@/pages_sups/Products/Byld/Byld/Section_2";

export default function Page() {
  return (
    <div>
      <>
        <Bannar />
        <ByldVideo />
        <Section_1 />
        <Section_2 />
        {/* <Pricing /> */}
      </>
    </div>
  );
}
