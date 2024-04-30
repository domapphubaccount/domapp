"use client"

import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { items } from "../../Page_data"
import { usePathname } from 'next/navigation'
import Bannar from "@/pages_sups/Products/RD/Bannar"
import Products_carousal from "@/components/Reuse/Section_Head/Products_carousal/Products_carousal"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
import Section_2 from "@/pages_sups/Products/RD/RD/Section_2"
import Section_3 from "@/pages_sups/Products/RD/RD/Section_3"
import Section_4 from "@/pages_sups/Products/RD/RD/Section_4"
import ScrollToTop from 'react-scroll-to-top'
import Section_1 from "@/pages_sups/Products/RD/RD/Section_1"
import Section_5 from "@/pages_sups/Products/RD/RD/Section_5"
import Section_6 from "@/pages_sups/Products/RD/RD/Section_6"
import Section_7 from "@/pages_sups/Products/RD/RD/Section_7"
import RD_heading from "@/pages_sups/Products/RD/RD/RD_heading"
import RD_cards from "@/pages_sups/Products/RD/RD/RD_cards"
import RD_sup_section from "@/pages_sups/Products/RD/RD/RD_sup_section"
import RD_features_cards from "@/pages_sups/Products/RD/RD/RD_features_cards"
import RD_Content_section from "@/pages_sups/Products/RD/RD/RD_Content_section"
import Heading from "@/components/Reuse/Section_Head/Heading"


export default function Page() {
  const router = usePathname();
  

  return (
    <div className="rd_page page_hid">
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                    <Bannar bannar={item.src} title={item.title} caption={item.caption}/>
                    <RD_cards />
                    <RD_heading title="" body="RD App stacked with the best features."/>
                    <Section_1 />
                    <Section_2/>
                    <Section_3 />
                    <Section_4 />
                    {/* <Section_head heads={1} title_1={'Our Features'} sectionId={'chat'}/> */}
                    {/* <Section_5 />
                    <Section_6 /> */}
                    <Section_5 />
                    <RD_heading title="AND MORE" body="RD App Provides Best Features 'And more'"/>
                    <RD_features_cards />
                    {/* <RD_sup_section /> */}
                    <RD_Content_section />
                    {/* <Section_6 /> */}
                    <RD_heading title="" body="RD App Provides Best Communication And Cost Monitoring"/>
                    <Section_7 />
                    {/* <div className="py-5">
                        <Section_head heads={1} title_1={'Our Products'} sectionId={'chat'}/>
                    </div> */}
                    <Heading head="Our Products" body="You Can Find More Products" back="RD APP" />
                    <Products_carousal />
              </>
              }
              <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
            </>    
        ))
        }
    </div>
  )
}
