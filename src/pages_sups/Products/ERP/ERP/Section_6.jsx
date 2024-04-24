import Section_head from "@/components/Reuse/Section_Head/Section_head"
import Link from "next/link"
import React from "react"
import * as Icon from "react-feather"
import { items } from "@/app/Page_data"

const ServicesPage = () => (
  <section className="home_section_6">
    <div className="services-area-two pt-80 pb-50 bg-f9f6f6 py-5">
      <div className="container">
        <div className="section-title">
        <Section_head head={1}  title_1={'Our mission'}des_1={'Our mission is to enhance our customer’s success through unique solutions.'}/>
        </div>

        <div className="row justify-content-center">
        {items.filter((item) => item.link === '/erp' ).map((item) => 
        item.Section_6.features_1.list.map((item,index)=>(
          <div key={index} className="col-lg-6 col-sm-6 p-4" data-aos-duration="3000" data-aos="fade-up">
            <div className="single-services-box h-100 card_shadow">
              <div className="icon d-flex justify-content-center align-items-center">
                <i className={`${item.icon}`}></i>
              </div>
              <h3>
                {item.head}
              </h3>
              <p>
                {item.caption}
              </p>
            </div>
          </div> 
        )))}
        </div>
      </div>
    </div>
    </section>
)

export default ServicesPage
