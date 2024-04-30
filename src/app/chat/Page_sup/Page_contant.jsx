import React from 'react';
import { items } from "../../Page_data";
import { usePathname } from 'next/navigation';

import Section_2 from "@/pages_sups/Products/Chat/Chat/Section_2";
import Section_3_Chat from "@/pages_sups/Products/Chat/Chat/Section_3";
import Bannar from "@/pages_sups/Products/Chat/Bannar";
import Products_carousal from '@/components/Reuse/Section_Head/Products_carousal/Products_carousal';
import Section_head from '@/components/Reuse/Section_Head/Section_head';
import ScrollToTop from 'react-scroll-to-top';
import Section_4 from '@/pages_sups/Products/Chat/Chat/Section_4';
import Each_product from '@/components/Reuse/Section_Head/Products_carousal/Each_product';

import s1 from "@/assets/images/Products_Page/Chat/carousal/dash.png";
import s2 from "@/assets/images/Products_Page/Chat/carousal/chat.png";
import s3 from "@/assets/images/Products_Page/Chat/carousal/performance.png";
import s4 from "@/assets/images/Products_Page/Chat/carousal/user.png";
import s5 from "@/assets/images/Products_Page/Chat/carousal/teams.png";
import s6 from "@/assets/images/Products_Page/Chat/carousal/chat_inside.png";
import s7 from "@/assets/images/Products_Page/Chat/carousal/conversation.png";
import s8 from "@/assets/images/Products_Page/Chat/carousal/service.png";
import s9 from "@/assets/images/Products_Page/Chat/carousal/answer.png";

const product_carousal = [
  s1, s2, s3, s4, s5, s6, s7, s8, s9
];

export default function Page() {
  const router = usePathname();

  return (
    <div className='chat_page'>
      {items.map((item, index) => (
        <>
          {item.link === router &&
            <>
              <Bannar bannar={item.src} title={item.title} caption={item.caption} />
              <Section_2 />
              <Section_head heads={1} title_1={'Why Us'} sectionId={'chat1'} />
              <Section_4 />
              <div className='py-5'>
                <Section_head heads={1} title_1={'Features'} sectionId={'chat2'} />
              </div>
              <Section_3_Chat />
              {/* <div className='px-5'><Each_product product_carousal={product_carousal}/></div> */}
              <div className="py-5">
                <Section_head heads={1} title_1={'Our Products'} sectionId={'chat3'} />
                <Products_carousal />
              </div>
            </>
          }
          <ScrollToTop smooth color="#fff" style={{ backgroundColor: '#525A63', padding: '5px', borderRadius: '50%', left: '20px' }} />
        </>
      ))}
    </div>
  );
}
