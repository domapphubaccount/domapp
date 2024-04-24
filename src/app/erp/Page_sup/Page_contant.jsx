"use client"

import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { items } from "../../Page_data"
import { usePathname } from 'next/navigation'
import Bannar from "@/pages_sups/Products/ERP/Bannar"
import Section_2 from "@/pages_sups/Products/ERP/ERP/Section_2"
import Section_3 from "@/pages_sups/Products/ERP/ERP/Section_3"
import Section_4 from "@/pages_sups/Products/ERP/ERP/Section_4"
import Section_5 from "@/pages_sups/Products/ERP/ERP/Section_5"
import Section_6 from "@/pages_sups/Products/ERP/ERP/Section_6"
import Products_carousal from "@/components/Reuse/Section_Head/Products_carousal/Products_carousal"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
import ScrollToTop from 'react-scroll-to-top'
import Section_7 from "@/pages_sups/Products/ERP/ERP/Section_7"
import Section_8 from "@/pages_sups/Products/ERP/ERP/Section_8"
import Section_9 from "@/pages_sups/Products/ERP/ERP/Section_9"
import Section_10 from "@/pages_sups/Products/ERP/ERP/Section_10"
import Section_11 from "@/pages_sups/Products/ERP/ERP/Section_11"
import Section_12 from "@/pages_sups/Products/ERP/ERP/Section_12"
import Section_13 from "@/pages_sups/Products/ERP/ERP/Section_13"
import Section_14 from "@/pages_sups/Products/ERP/ERP/Section_14"


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
                    <Section_head heads={1} title_1={'Our Features'} sectionId={'chat'}/>
                    <Section_3 />
                    <Section_7 />
                    <Section_8 />
                    <Section_9 />
                    <Section_10 />
                    <Section_4 />
                    <Section_11 />
                    <Section_12 />
                    <Section_13 />
                    <Section_14 />
                    {/* <Section_5 /> */}
                    <Section_6 />
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
