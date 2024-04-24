"use client"

import React from 'react'
import { items } from "../../Page_data"
import { usePathname } from 'next/navigation'

import Section_2 from "@/pages_sups/Products/Chat/Chat/Section_2"
import Section_3_Chat from "@/pages_sups/Products/Chat/Chat/Section_3"
import Bannar from "@/pages_sups/Products/Chat/Bannar"
import Products_carousal from '@/components/Reuse/Section_Head/Products_carousal/Products_carousal'
import Section_head from '@/components/Reuse/Section_Head/Section_head'
import ScrollToTop from 'react-scroll-to-top'
import Section_4 from '@/pages_sups/Products/Chat/Chat/Section_4'


export default function Page() {
  const router = usePathname();
  

  return (
    <>
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                    <Bannar bannar={item.src} title={item.title} caption={item.caption}/>
                    <Section_2 />
                    <Section_head heads={1} title_1={'Why Us'} sectionId={'chat1'}/>
                    <Section_4 />
                    <div className='py-5'>
                    <Section_head heads={1} title_1={'Features'} sectionId={'chat2'}/>
                    </div>
                    <Section_3_Chat />
                    <div className="py-5">
                    <Section_head heads={1} title_1={'Our Products'} sectionId={'chat3'}/>
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
