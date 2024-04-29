import React from 'react'
import { Container } from 'reactstrap'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import { items } from '@/app/Page_data'

export default function Cards_section3() {
  return (
    <section className='erp_cards_section py-5 my-5'>
        <Container>
            <div className='row'>
            {items.filter((item) => item.link === '/erp' ).map((item,index) => 
              item.Section_6.features_1.list.map((item,index)=>(
            <div key={index} className="col-xxl-3 col-lg-4 col-sm-6 slideInUp wow" style={{visibility: "visible", animationName: "slideInUp"}}> 
              <div className="feature-box text-center">
                <div className={`feature-icon ${league.className} `}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
                <h5 className={`${league.className}`}>{item.head}</h5>
                {item.caption.length > 50 ? (
                    <>
                      <p className={`mb-0 f-lightCSS ${league.className}`}>
                        {item.caption.substring(0, 50)}... 
                      </p>
                      <a href={`#${item.head.slice(0,3)}`} className='link'>Explore more</a>
                      </>
                    ) : (
                      <p className={`mb-0 f-lightCSS ${league.className}`}>{item.caption}</p>
                    )}              </div>
            </div>))
            )}
        </div>
        </Container>
    </section>
  )
}
