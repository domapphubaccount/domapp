"use client"

// WINDLOAD
import Wind_1 from "@/assets/images/Products_Page/Wind/W1.png"
import Wind_2 from "@/assets/images/Products_Page/Wind/W2.png"
import Wind_3 from "@/assets/images/Products_Page/Wind/W3.png"
import Wind_4 from "@/assets/images/Products_Page/Wind/W4.png"
import clad_5 from "@/assets/images/Products_Page/Clad/Picture5.png"

import Product from "@/pages_sups/Products/Product"
import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import Section_3 from "@/pages_sups/Products/Products_sups/Section_3"
import Section_4 from "@/pages_sups/Products/Products_sups/Section_4"
import Section_5 from "@/pages_sups/Products/Products_sups/Section_5"
import { usePathname } from 'next/navigation'
import ScrollToTop from 'react-scroll-to-top'
import Screens_Section from "@/pages_sups/Products/Products_sups/Screens_Section"
import product_1 from "@/assets/images/Home_Page/products/pr1.jpg"
import product_2 from "@/assets/images/Home_Page/products/pr2.jpg"
import product_3 from "@/assets/images/Home_Page/products/pr3.jpg"


export default function Page() {

  const items = {
    index: 2,
    src: product_1,
    title: 'WINDMASTER',
    link:'/windmaster',
    page:' https://platform.domapphub.com/windmaster/',
    caption: 'Calculate wind loads on structures.',
    Section_2:{
      first:{
        caption:{
          header:'Project info',
          body:'Manage and modify project and client information'
        },
        src:'/Wind/First.mp4'
      },
      seconed:{
        caption:{
          header:'Site Data',
          body:'Following Saudi Building Code 301, identifying the site data in terms of risk category, project address, and exposure category is made simple'
        },
        src:'/Wind/Map.mp4'
      }
    },
    Section_3:{
      first:{
        none: true,
        caption:{
          header:'Project info',
          body:'Manage and modify project and client information'
        },
        src: Wind_1
      },
      seconed:{
        none: true,
        caption:{
          header:'Site Data',
          body:'Following Saudi Building Code 301, identifying the site data in terms of risk category, project address, and exposure category is made simple            '
        },
        src: Wind_2
      }
    },
    Section_4:{
      first:{
        caption:{
          header:'Structure data',
          body:'Input structure type, its geometric dimensions, curtain wall details in term of location, spacing and dimensions '
        },
        src: Wind_3
      },
      seconed:{
        caption:{
          header:'Export & Print',
          body:'Export detailed design data sheet'
        },
        src: Wind_4
      }
    },
    Section_5:{
      first:{
        none: true,
        caption:{
          header:'Export & Print',
          body:'Export detailed design data sheet'
        },
        src: clad_5
      },
      seconed:{
        none: true ,
        caption:{
          header:'',
          body:''
        },
        src:''
      }
    }
  }
  

  return (
    <div className='wind_page'>
            <>
                    <Product bannar={items.src} title={items.title} caption={items.caption} linkPage={items.page}/>
                    <Products_sups sections={items.Section_2}/>
                    <Screens_Section sections={items.Section_4} />
                    <Section_5 sections={items.Section_5} />
                <ScrollToTop smooth color="#fff" style={{backgroundColor:'#525A63', padding:'5px', borderRadius: '50%',left:'20px'}} />
            </>    
    </div>
  )
}
