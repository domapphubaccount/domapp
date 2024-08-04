"use client";

import Bannar from "@/pages_sups/Products/Byld/Bannar";
import Section_1 from "@/pages_sups/Products/Byld/Byld/Section_1";
import Section_2 from "@/pages_sups/Products/Byld/Byld/Section_2";
import Pricing from "@/pages_sups/Products/Byld/Byld/pricing";

export default function Page() {
  return (
    <div>
      <>
        <Bannar />
        <Section_1 />
        <Section_2 />
        <Pricing />
      </>
    </div>
  );
}
