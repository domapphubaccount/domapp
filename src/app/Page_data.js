import product_1 from "@/assets/images/Home_Page/products/pr1.jpg"
import product_2 from "@/assets/images/Home_Page/products/pr2.jpg"
import product_3 from "@/assets/images/Home_Page/products/pr3.jpg"


// CLADCUT
import clad_1 from "@/assets/images/Products_Page/Clad/Picture1.png"
import clad_2 from "@/assets/images/Products_Page/Clad/Picture2.png"
import clad_3 from "@/assets/images/Products_Page/Clad/Picture3.png"
import clad_4 from "@/assets/images/Products_Page/Clad/Picture4.png"
import clad_5 from "@/assets/images/Products_Page/Clad/Picture5.png"
// import clad_5 from "@/assets/images/Products_Page/Clad/Picture6.png"

// WINDLOAD
import Wind_1 from "@/assets/images/Products_Page/Wind/W1.png"
import Wind_2 from "@/assets/images/Products_Page/Wind/W2.png"
import Wind_3 from "@/assets/images/Products_Page/Wind/W3.png"
import Wind_4 from "@/assets/images/Products_Page/Wind/W4.png"

// CHATPLUS
import Card_1 from "@/assets/images/Products_Page/Chat/Card_1.png"
import Chat_card_1 from "@/assets/images/Products_Page/Chat/chat_card_1.png"
import Card_2 from "@/assets/images/Products_Page/Chat/Card_2.png"
import Chat_card_2 from "@/assets/images/Products_Page/Chat/chat_card_2.png"
import Card_3 from "@/assets/images/Products_Page/Chat/Card_3.png"
import Chat_card_3 from "@/assets/images/Products_Page/Chat/chat_card_3.png"
import Card_4 from "@/assets/images/Products_Page/Chat/Card_4.png"
import Chat_card_4 from "@/assets/images/Products_Page/Chat/chat_card_4.png"

// ERP
// import 

export const items = [
    {
      index: 1,
      src: product_3,
      title: 'CladCut',
      link:'/cladCut',
      page:'https://auspicious-request.surge.sh/project-landing/',
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
      page:'https://auspicious-request.surge.sh/tools/',
      caption: 'Powerful structural analysis and design .Instant access, directly from your browser',
      Section_2:{
        first:{
          caption:{
            header:'Manage and Modify project data',
            body:'Efficiently input and manage project information including job specifics, client details, project data, type of cladding employed and specifications            '
          },
          src:'/Wind/First.mp4'
        },
        seconed:{
          caption:{
            header:'Entering and editing manufacturing components.',
            body:'Input and editing of engineering components essential for manufacturing, including fixations, stiffeners, and bend details            '
          },
          src:'/Wind/Map.mp4'
        }
      },
      Section_3:{
        first:{
          caption:{
            header:'Project info',
            body:'Manage and modify project and client information'
          },
          src: Wind_1
        },
        seconed:{
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
      },
    },
    {
      index: 3,
      src: product_2,
      title: 'Facade Static',
      link: '/facade',
      page:'https://auspicious-request.surge.sh/f-static-home/',
      caption: '',
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
      caption: 'Comprehensive client relationship management application',
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
        features_1:{
          list:[
          {
            head:'Project Management',
            caption:'This application offers highly advanced features designed to streamline project management. Enhance your efficiency further by utilizing the project templates and project cloning capabilities, making your workflow even smoother.            '
          },
          {
            head:'Task Management',
            caption:"Ensure task completion on schedule to accomplish your goals. Utilize the application's advanced functionalities like task cloning, timers, reminders, and more to enhance productivity and efficiency. Assign tasks to both team members and clients to streamline collaboration."
          },
          {
            head:'Time Tracking',
            caption:"Effortlessly monitor the time invested in your projects using the ERP's comprehensive time-tracking solution. Begin or end your timer or input time manually for tasks. Then, seamlessly bill your clients based on the recorded time.            "
          },
          {
            head:'Invoices & Payments',
            caption:"We’ve developed an incredibly user-friendly invoicing system, removing the necessity for third-party invoicing tools. Within the CRM, you can easily create invoices with diverse options such as time billing, product billing, task billing, and others. Invoices are automatically sent to clients via email, enabling them to conveniently make payments via credit card or PayPal.            "
          },
        ],
          src: clad_1
        }
      },
      Section_4:{
        features_1:{
          list:[
          {
            head:'Subscriptions',
            caption:"This functionality allows you to automatically bill your clients for your products and services. You have the flexibility to set the billing cycle to weekly, monthly, yearly, and more. The system will then automatically generate a new invoice and charge your client's credit card accordingly.            "
          },
          {
            head:'Estimates/Quotations',
            caption:"Clients are more inclined to engage in a project when they have an estimate of the total cost involved. The application offers a user-friendly tool for effortlessly creating and emailing estimates to your clients. This enables your clients to conveniently review and accept the estimates provided.       "
          },
          {
            head:'Proposals',
            caption:"Initial impressions are paramount. Showcase professionalism to potential clients through impeccably crafted project proposals. Our intuitive interface ensures ease of use without the need for design expertise.            "
          },
          {
            head:'Recurring Billing',
            caption:"You have the flexibility to generate recurring invoices on a daily, weekly, monthly, or yearly basis. The system will autonomously generate new invoices and send them to your clients via email. "
          },
        ],
          src: clad_1
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
      
      Section_6:{
        features_1:{
          list:[
          {
            head:'Leads & Opportunities',
            icon:'bi bi-motherboard',
            caption:"Effectively manage your opportunities and guide leads into paying customers seamlessly Utilize our advanced form builder to effortlessly capture new leads, which can then be embedded on any website. "
          },
          {
            head:'Knowledgebase',
            icon:'.bi bi-calendar4-week',
            caption:"Reduce your customer support response time by providing customers access to self-service resources and a help repository. Utilize the video gallery feature within the knowledge base to create a comprehensive video knowledge base.            "
          },
          {
            head:'Workflow Automation',
            icon:'bi bi-check-square',
            caption:"Workflow automation for projects and estimates enables the automation of repetitive tasks. You can specify actions triggered when an estimate is accepted by your client or when a project is marked as completed. These automations enhance your team's efficiency and ensure no steps are overlooked in your workflow.            "
          },
          {
            head:'Task Dependency Management',
            icon:'bi bi-cloud-haze2',
            caption:"Establishing task relationships ensures sequential completion of work. You can prevent a task from starting or finishing until its dependent task is complete. Dependency management facilitates effective synchronization among your diverse team members.            "
          },
        ],
          src: clad_1
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
          image_container: Card_1,
          image_icon: Chat_card_1,
          title:'Maximize support interaction',
          body:'Enhance customer interaction, lead quality, and communication effectiveness and provide real-time customer support to answering queries, resolving issues, handling complaints, etc.          '
        },
        {
          image_container: Card_2,
          image_icon: Chat_card_2,
          title:'Improve Precision',
          body: 'Enhance communication accuracy by eliminating human error.'
        },
        {
          image_container: Card_3,
          image_icon: Chat_card_3,
          title:'Secure Communication',
          body:'Guarantee end-to-end encryption for every communication. '
        },
        {
          image_container: Card_4,
          image_icon: Chat_card_4,
          title:'Communication efficiency',
          body:'Minimize time and effort for specific communication tasks. '
        },
        // {
        //   title:'Diverse Communication',
        //   body:'Allows Manual, Hybrid communication.'
        // },
        // {
        //   title:'Auto-reply',
        //   body:'Customized automated reply.'
        // },
        // {
        //   title:'Archive',
        //   body:'Archive and access past conversations effortlessly, Store and retrieve chat transcripts seamlessly, ensuring easy reference and review. Organize your communication history efficiently for enhanced productivity and knowledge retention.          '
        // },
        // {
        //   title:'Automated Business',
        //   body:'Chat Plus offers versatile Automated business processes enhancing efficiency across multiple industries.          '
        // },
        // {
        //   title:'API Integration          ',
        //   body:'Offers integration with your internal systems.          '
        // }
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