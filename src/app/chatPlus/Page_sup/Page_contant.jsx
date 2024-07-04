import React from 'react';
import Section_2 from "@/pages_sups/Products/Chat/Chat/Section_2";
import Section_3_Chat from "@/pages_sups/Products/Chat/Chat/Section_3";
import Bannar from "@/pages_sups/Products/Chat/Bannar";
import Section_head from '@/components/Reuse/Section_Head/Section_head';
import ScrollToTop from 'react-scroll-to-top';
import Section_4 from '@/pages_sups/Products/Chat/Chat/Section_4';

export default function Page() {

  return (
    <div className='chat_page'>
      <Bannar />
        <Section_2 />
        <Section_head heads={1} title_1={'Why Us'} sectionId={'chat1'} />
        <Section_4 />
        <div className='py-5'>
          <Section_head heads={1} title_1={'Features'} sectionId={'chat2'} />
        </div>
        <Section_3_Chat />          
      <ScrollToTop smooth color="#fff" style={{ backgroundColor: '#525A63', padding: '5px', borderRadius: '50%', left: '20px' }} />
    </div>
  );
}
