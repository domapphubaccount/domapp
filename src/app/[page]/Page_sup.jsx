"use client"

import Product from "@/pages_sups/Products/Product"
import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { usePathname } from 'next/navigation'
import product_1 from "@/assets/images/Home_Page/products/pr1.jpg"
import product_2 from "@/assets/images/Home_Page/products/pr2.jpg"
import product_3 from "@/assets/images/Home_Page/products/pr3.jpg"

export default function Page() {
  const router = usePathname();

  const items = [
    {
      index: 1,
      src: product_3,
      title: 'CladCut',
      link:'/cladCut',
      caption: 'Precision cutting made effortless with CladCut',
      Section_2:{
        first:{
          caption:'Upload the project sitting out as dxf file and get detailed fabrication drawing for each panel as ( dxf, dxf for CNC and PDF).     ',
          src:'/Products/Clad_1.mp4'
        },
        seconed:{
          caption:'',
          src:'/Products/Clad_1.mp4'
        }
      }
    },
    {
      index: 2,
      src: product_1,
      title: 'Windload',
      link:'/windload',
      caption: 'Powerful structural analysis and design .Instant access, directly from your browser',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 3,
      src: product_2,
      title: 'Facade Static',
      link: '/facade',
      caption: 'Section 2',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 4,
      src: product_3,
      title: 'ERP System',
      link: '/erp',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 5,
      src: product_3,
      title: 'ChatPlus',
      link: '/chat',
      caption: 'Enable seamless communication with numerous clients simultaneously',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 6,
      src: product_3,
      title: 'RD App',
      link: '/rd',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    }
  ];

  return (
    <>
        {items.map((item , index) => (
          
            <>
              {item.link === router &&
              <>
                <Product bannar={item.src} title={item.title} caption={item.caption}/>
                <Products_sups videos={item.Section_2}/>
              </>
              }
            </>    
        ))
        }
    </>
  )
}
