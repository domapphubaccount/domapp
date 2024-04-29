"use client"

import Product from "@/pages_sups/Products/Product"
import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { items } from "../../Page_data"
import { usePathname } from 'next/navigation'
import Screens_Section from "@/pages_sups/Products/Products_sups/Screens_Section"
import Products_carousal from "@/components/Reuse/Section_Head/Products_carousal/Products_carousal"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
import ScrollToTop from 'react-scroll-to-top'
import Head_CWF from "@/pages_sups/Products/Head_CWF"
import bannar from "@/assets/images/Products_Page/Clad/bannar.jpg"
import Bannar from "@/pages_sups/Products/Clad/Bannar"
import Head from "@/pages_sups/Products/Clad/Clad/Head"
import Section_1 from "@/pages_sups/Products/Clad/Clad/Section_1"
import Section_2 from "@/pages_sups/Products/Clad/Clad/Section_2"
import Section_3 from "@/pages_sups/Products/Clad/Clad/Section_3"
import Section_4 from "../../../pages_sups/Products/Clad/Clad/Section_4"
import Head_2 from "@/pages_sups/Products/Clad/Clad/Head_2"


export default function Page() {
  const router = usePathname();
  

  return (
    <div className="facade_page">
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                    <Bannar bannar={bannar.src} title={item.title} caption={item.caption} linkPage={item.page}/>
                    <Head head={"Our Advantages"} body={""}/>
                    <Section_1 />
                    {/* <Section_2 /> */}
                    <Head_2 />
                    <Section_4 />
                    <Section_3 />

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
