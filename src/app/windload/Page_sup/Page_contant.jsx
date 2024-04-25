"use client"

import Product from "@/pages_sups/Products/Product"
import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import Section_3 from "@/pages_sups/Products/Products_sups/Section_3"
import Section_4 from "@/pages_sups/Products/Products_sups/Section_4"
import Section_5 from "@/pages_sups/Products/Products_sups/Section_5"
import { items } from "../../Page_data"
import { usePathname } from 'next/navigation'
import Products_carousal from "@/components/Reuse/Section_Head/Products_carousal/Products_carousal"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
import ScrollToTop from 'react-scroll-to-top'

export default function Page() {
  const router = usePathname();
  

  return (
    <div className='wind_page'>
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                    <Product bannar={item.src} title={item.title} caption={item.caption} linkPage={item.page}/>
                    <Products_sups sections={item.Section_2}/>
                    <Section_3 sections={item.Section_3} />
                    <Section_4 sections={item.Section_4} />
                    <Section_5 sections={item.Section_5} />
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
    </div>
  )
}
