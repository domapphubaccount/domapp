"use client"

import Product from "@/pages_sups/Products/Product"
import Products_sups from "@/pages_sups/Products/Products_sups/Products_sups"
import React from 'react'
import { usePathname } from 'next/navigation'
import product_1 from "@/assets/images/Home_Page/products/pr1.jpg"
import product_2 from "@/assets/images/Home_Page/products/pr2.jpg"
import product_3 from "@/assets/images/Home_Page/products/pr3.jpg"
import Section_3 from "@/pages_sups/Products/Products_sups/Section_3"
import Section_4 from "@/pages_sups/Products/Products_sups/Section_4"
import Section_5 from "@/pages_sups/Products/Products_sups/Section_5"

// CLADCUT
import clad_1 from "@/assets/images/Products_Page/Clad/Picture1.png"
import clad_2 from "@/assets/images/Products_Page/Clad/Picture2.png"
import clad_3 from "@/assets/images/Products_Page/Clad/Picture3.png"
import clad_4 from "@/assets/images/Products_Page/Clad/Picture4.png"
import clad_5 from "@/assets/images/Products_Page/Clad/Picture5.png"
import Products_Des from "@/pages_sups/Products/Products_sups/Products_Des"
// import clad_5 from "@/assets/images/Products_Page/Clad/Picture6.png"

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
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Products/Clad/s1.MP4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Products/Clad/s2.MP4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Detailed assist system',
            body:'Just by clicking the assist icon, explaining unclear points is effortless            '
          },
          src: clad_1
        },
        seconed:{
          caption:{
            header:'Importing dxf files',
            body:'Import and upload the project sitting out as dxf file.'
          },
          src:clad_2
        }
      },
      Section_4:{
        first:{
          caption:{
            header:'Controlling cladding Gaps',
            body:'Easily control the gaps between the cladding panels'
          },
          src: clad_3
        },
        seconed:{
          caption:{
            header:'Sheet size modification',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.      '
          },
          src:clad_4
        }
      },
      Section_5:{
        first:{
          caption:{
            header:'Detailed fabrication drawings.',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.'
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
      },

    },
    {
      index: 2,
      src: product_1,
      title: 'Windload',
      link:'/windload',
      caption: 'Powerful structural analysis and design .Instant access, directly from your browser',
      Section_2:{
        first:{
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Products/Clad/s1.MP4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Products/Clad/s2.MP4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Detailed assist system',
            body:'Just by clicking the assist icon, explaining unclear points is effortless            '
          },
          src: clad_1
        },
        seconed:{
          caption:{
            header:'Importing dxf files',
            body:'Import and upload the project sitting out as dxf file.'
          },
          src:clad_2
        }
      },
      Section_4:{
        first:{
          caption:{
            header:'Controlling cladding Gaps',
            body:'Easily control the gaps between the cladding panels'
          },
          src: clad_3
        },
        seconed:{
          caption:{
            header:'Sheet size modification',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.      '
          },
          src:clad_4
        }
      },
      Section_5:{
        first:{
          caption:{
            header:'Detailed fabrication drawings.',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.'
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
      },
    },
    {
      index: 3,
      src: product_2,
      title: 'Facade Static',
      link: '/facade',
      caption: 'Section 2',
      Section_2:{
        first:{
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Products/Clad/s1.MP4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Products/Clad/s2.MP4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Detailed assist system',
            body:'Just by clicking the assist icon, explaining unclear points is effortless            '
          },
          src: clad_1
        },
        seconed:{
          caption:{
            header:'Importing dxf files',
            body:'Import and upload the project sitting out as dxf file.'
          },
          src:clad_2
        }
      },
      Section_4:{
        first:{
          caption:{
            header:'Controlling cladding Gaps',
            body:'Easily control the gaps between the cladding panels'
          },
          src: clad_3
        },
        seconed:{
          caption:{
            header:'Sheet size modification',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.      '
          },
          src:clad_4
        }
      },
      Section_5:{
        first:{
          caption:{
            header:'Detailed fabrication drawings.',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.'
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
      },
    },
    {
      index: 4,
      src: product_3,
      title: 'ERP System',
      link: '/erp',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Products/Clad/s1.MP4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Products/Clad/s2.MP4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Detailed assist system',
            body:'Just by clicking the assist icon, explaining unclear points is effortless            '
          },
          src: clad_1
        },
        seconed:{
          caption:{
            header:'Importing dxf files',
            body:'Import and upload the project sitting out as dxf file.'
          },
          src:clad_2
        }
      },
      Section_4:{
        first:{
          caption:{
            header:'Controlling cladding Gaps',
            body:'Easily control the gaps between the cladding panels'
          },
          src: clad_3
        },
        seconed:{
          caption:{
            header:'Sheet size modification',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.      '
          },
          src:clad_4
        }
      },
      Section_5:{
        first:{
          caption:{
            header:'Detailed fabrication drawings.',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.'
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
      },
    },
    {
      index: 5,
      src: product_3,
      title: 'ChatPlus',
      link: '/chat',
      caption: 'Enable seamless communication with numerous clients simultaneously',
      Section_1:{
        title: 'ChatPlus',
        caption:'',
        cards:
        [
        {
          title:'Maximize support interaction',
          body:'Enhance customer interaction, lead quality, and communication effectiveness and provide real-time customer support to answering queries, resolving issues, handling complaints, etc.          '
        },
        {
          title:'Improve Precision',
          body: 'Enhance communication accuracy by eliminating human error.'
        },
        {
         title:'Secure Communication',
         body:'Guarantee end-to-end encryption for every communication. '
        },
        {
          title:'Communication efficiency',
          body:'Minimize time and effort for specific communication tasks. '
        },
        {
          title:'Diverse Communication',
          body:'Allows Manual, Hybrid communication.'
        },
        {
          title:'Auto-reply',
          body:'Customized automated reply.'
        },
        {
          title:'Archive',
          body:'Archive and access past conversations effortlessly, Store and retrieve chat transcripts seamlessly, ensuring easy reference and review. Organize your communication history efficiently for enhanced productivity and knowledge retention.          '
        },
        {
          title:'Automated Business',
          body:'Chat Plus offers versatile Automated business processes enhancing efficiency across multiple industries.          '
        },
        {
          title:'API Integration          ',
          body:'Offers integration with your internal systems.          '
        }
      ]},
      Section_2:{
        first:{
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Products/Clad/s1.MP4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Products/Clad/s2.MP4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Detailed assist system',
            body:'Just by clicking the assist icon, explaining unclear points is effortless            '
          },
          src: clad_1
        },
        seconed:{
          caption:{
            header:'Importing dxf files',
            body:'Import and upload the project sitting out as dxf file.'
          },
          src:clad_2
        }
      },
      Section_4:{
        first:{
          caption:{
            header:'Controlling cladding Gaps',
            body:'Easily control the gaps between the cladding panels'
          },
          src: clad_3
        },
        seconed:{
          caption:{
            header:'Sheet size modification',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.      '
          },
          src:clad_4
        }
      },
      Section_5:{
        first:{
          caption:{
            header:'Detailed fabrication drawings.',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.'
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
      },
    },
    {
      index: 6,
      src: product_3,
      title: 'RD App',
      link: '/rd',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Products/Clad/s1.MP4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Products/Clad/s2.MP4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Detailed assist system',
            body:'Just by clicking the assist icon, explaining unclear points is effortless            '
          },
          src: clad_1
        },
        seconed:{
          caption:{
            header:'Importing dxf files',
            body:'Import and upload the project sitting out as dxf file.'
          },
          src:clad_2
        }
      },
      Section_4:{
        first:{
          caption:{
            header:'Controlling cladding Gaps',
            body:'Easily control the gaps between the cladding panels'
          },
          src: clad_3
        },
        seconed:{
          caption:{
            header:'Sheet size modification',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.      '
          },
          src:clad_4
        }
      },
      Section_5:{
        first:{
          caption:{
            header:'Detailed fabrication drawings.',
            body:'Producing detailed fabrication drawing for each panel as dxf, dxf for CNC and PDF.'
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
      },
    }
  ];

  return (
    <>
        {items.map((item , index) => (
            <>
              {item.link === router &&
              <>
                <Product bannar={item.src} title={item.title} caption={item.caption}/>
                {
                  item.title === 'ChatPlus' ?
                  <Products_Des section={item.Section_1}/>
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
