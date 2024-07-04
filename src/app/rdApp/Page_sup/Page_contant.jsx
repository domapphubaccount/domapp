import React from 'react'
import Bannar from "@/pages_sups/Products/RD/Bannar"
import Section_2 from "@/pages_sups/Products/RD/RD/Section_2"
import Section_3 from "@/pages_sups/Products/RD/RD/Section_3"
import Section_4 from "@/pages_sups/Products/RD/RD/Section_4"
import ScrollToTop from 'react-scroll-to-top'
import Section_1 from "@/pages_sups/Products/RD/RD/Section_1"
import Section_5 from "@/pages_sups/Products/RD/RD/Section_5"
import Section_7 from "@/pages_sups/Products/RD/RD/Section_7"
import RD_heading from "@/pages_sups/Products/RD/RD/RD_heading"
import RD_cards from "@/pages_sups/Products/RD/RD/RD_cards"
import RD_features_cards from "@/pages_sups/Products/RD/RD/RD_features_cards"
import RD_Content_section from "@/pages_sups/Products/RD/RD/RD_Content_section"

export default function Page() {  

  return (
    <div className="rd_page page_hid">
                    <Bannar/>
                    <RD_cards />
                    <RD_heading title="" body="RDAPP stacked with the best features."/>
                    <Section_1 />
                    <Section_2/>
                    <Section_3 />
                    <Section_4 />
                    <Section_5 />
                    <RD_heading title="AND MORE" body="RDAPP Provides Best Features 'And more'"/>
                    <RD_features_cards />
                    <RD_Content_section />
                    <RD_heading title="" body="RDAPP Provides Best Communication And Cost Monitoring"/>
                    <Section_7 />
              <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
    </div>
  )
}
