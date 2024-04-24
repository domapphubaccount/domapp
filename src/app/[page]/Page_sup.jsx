"use client"

import Product from "@/pages_sups/Products/Product"
import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { usePathname } from 'next/navigation'
import Section_3 from "@/pages_sups/Products/Products_sups/Section_3"
import Section_4 from "@/pages_sups/Products/Products_sups/Section_4"
import Section_5 from "@/pages_sups/Products/Products_sups/Section_5"
import Products_Des from "@/pages_sups/Products/Products_sups/Products_Des"
import { items } from "./Page_data"
import Section_1 from "@/pages_sups/Products/Chat/Chat/Section_1"
import Section_2 from "@/pages_sups/Products/Chat/Chat/Section_2"

// Chat
import Section_3_Chat from "@/pages_sups/Products/Chat/Chat/Section_3"

export default function Page() {
  const router = usePathname();

  return (
    <>
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                <Product bannar={item.src} title={item.title} caption={item.caption}/>
                {
                  item.title === 'ChatPlus' ?
                  <>
                  {/* <Products_Des section={item.Section_1}/> */}
                  <Section_2 />
                  <Section_3_Chat />
                  {/* <Section_1 section={item.Section_1}/> */}
                  </>
                  :
                  <>
                    <Products_sups sections={item.Section_2}/>
                    <Section_3 sections={item.Section_3} />
                    <Section_4 sections={item.Section_4} />
                    <Section_5 sections={item.Section_5} />
                  </>
                }
              </>
              }
            </>    
        ))
        }
    </>
  )
}
