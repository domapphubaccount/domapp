import React from "react";
import Bannar from "@/pages_sups/Products/Software/Bannar";
import Section_1 from "@/pages_sups/Products/Software/Software/Section_1";
import Section_2 from "@/pages_sups/Products/Software/Software/Section_2";

export default function Page() {
  return (
    <div className="page_hid">
      <Bannar />
      <Section_1 />
      <Section_2 />
    </div>
  );
}
