import React from 'react'
import Section_3 from "@/pages_sups/Products/ERP/ERP/Section_3"
import Section_4 from "@/pages_sups/Products/ERP/ERP/Section_4"
import ScrollToTop from 'react-scroll-to-top'
import Section_7 from "@/pages_sups/Products/ERP/ERP/Section_7"
import Section_8 from "@/pages_sups/Products/ERP/ERP/Section_8"
import Section_9 from "@/pages_sups/Products/ERP/ERP/Section_9"
import Section_10 from "@/pages_sups/Products/ERP/ERP/Section_10"
import Section_13 from "@/pages_sups/Products/ERP/ERP/Section_13"
import Section_14 from "@/pages_sups/Products/ERP/ERP/Section_14"
import Section_15 from "@/pages_sups/Products/ERP/ERP/Section_15"
import Section_16 from "@/pages_sups/Products/ERP/ERP/Section_16"
import Section_17 from "@/pages_sups/Products/ERP/ERP/Section_17"
import Section_18 from "@/pages_sups/Products/ERP/ERP/Section_18"
import Cards_section from "@/pages_sups/Products/ERP/ERP/Cards_section"
import Cards_section2 from "@/pages_sups/Products/ERP/ERP/Cards_section2"
import Cards_section3 from "@/pages_sups/Products/ERP/ERP/Cards_section3"
import Heading from "@/components/Reuse/Section_Head/Heading"
import Bannar2 from "@/pages_sups/Products/ERP/Bannar2"
import Section_5_sup from "@/pages_sups/Products/ERP/ERP/Section_5_sup"


export default function Page() {
  return (
    <div className="erp_page">
              <>
              <Bannar2 />
                    <Heading head="BONDIFY CRM" body="First Choice For Your Business" back="BONDIFY CRM" />
                    <Cards_section />
                    <Section_3 />
                    <Section_7 />
                    <Section_8 />
                    <Section_9 />
                    <Section_10 />
                    <Cards_section2 />
                    <Section_5_sup />
                    <Section_4 />
                    <Section_13 />
                    <Section_14 />
                    <Cards_section3 />
                    <Section_15 />
                    <Section_16 />
                    <Section_17 />
                    <Section_18 />
              </>
              <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
    </div>
  )
}
