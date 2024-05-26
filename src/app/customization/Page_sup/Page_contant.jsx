"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Bannar from "@/pages_sups/Products/Customization/Bannar"
import ScrollToTop from "react-scroll-to-top"
import Section_1 from '@/pages_sups/Products/Customization/Customization/Section_1'
import Section_2 from '@/pages_sups/Products/Customization/Customization/Section_2'


export default function Page() {
  const router = usePathname();
  

  return (
    <div className="rd_page page_hid ">
      <Bannar />
      <Section_1 />
      <Section_2 />
      <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
    </div>
  )
}
