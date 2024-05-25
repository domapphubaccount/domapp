"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Bannar from "@/pages_sups/Products/Grasshopper/Bannar"
import ScrollToTop from "react-scroll-to-top"



export default function Page() {
  const router = usePathname();
  

  return (
    <div className="rd_page page_hid">
      <Bannar />

      <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
    </div>
  )
}
