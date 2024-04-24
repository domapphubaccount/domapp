"use client"

import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { items } from "../../Page_data"
import { usePathname } from 'next/navigation'
import Bannar from "@/pages_sups/Products/RD/Bannar"
import Section_5 from "@/pages_sups/Products/ERP/ERP/Section_5"
import Section_6 from "@/pages_sups/Products/ERP/ERP/Section_6"
import Products_carousal from "@/components/Reuse/Section_Head/Products_carousal/Products_carousal"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
import Section_2 from "@/pages_sups/Products/RD/RD/Section_2"
import Section_3 from "@/pages_sups/Products/RD/RD/Section_3"
import Section_4 from "@/pages_sups/Products/Rd/RD/Section_4"
import ScrollToTop from 'react-scroll-to-top'


export default function Page() {
  const router = usePathname();
  

  return (
    <>
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                    <Bannar bannar={item.src} title={item.title} caption={item.caption}/>
                    <Section_2/>
                    <Section_3 />
                    <Section_4 />
                    {/* <Section_head heads={1} title_1={'Our Features'} sectionId={'chat'}/> */}
                    {/* <Section_5 />
                    <Section_6 /> */}
                    <div className="py-5">
                        <Section_head heads={1} title_1={'Our Products'} sectionId={'chat'}/>
                    </div>
                    <Products_carousal />
              </>
              }
              <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%'}} />
            </>    
        ))
        }
    </>
  )
}
