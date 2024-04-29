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
import Each_product from "@/components/Reuse/Section_Head/Products_carousal/Each_product"

import s1 from "@/assets/images/Products_Page/facade/step1.png"
import s2 from "@/assets/images/Products_Page/facade/step2.png"
import s3 from "@/assets/images/Products_Page/facade/step3.png"
import s4 from "@/assets/images/Products_Page/facade/step4.png"
import s5 from "@/assets/images/Products_Page/facade/step5.png"
import s6 from "@/assets/images/Products_Page/facade/step6.png"


const product_carousal = [
  s1,s2,s3,s4,s5,s6
]


export default function Page() {
  const router = usePathname();
  

  return (
    <div className="facade_page">
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                    <Product bannar={item.src} title={item.title} caption={item.caption} linkPage={item.page}/>
                    <Each_product product_carousal={product_carousal}/>
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
                    <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
            </>    
        ))
        }
    </div>
  )
}
