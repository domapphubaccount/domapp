import React from "react"
import ServicesDetails1 from "@/assets/images/Products_Page/services-details1.png"
import ServicesDetails2 from "@/assets/images/Products_Page/services-details2.png"
import Image from "next/image"

export default function Section_3 ({sections}) {
  

    return(
    <section className="services-details-area-3 ptb-80 py-5">
      <div className="container">
      {!sections.first.none &&
        <div className="row align-items-center mb-5 card-shadow p-3 row-card" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc caption_products">
              <h3>{
              sections.first.caption.header
              }</h3>
              <p>
                {sections.first.caption.body}
              </p>
            </div>
          </div>

          <div className="col-lg-6 services-details-image  row-card">
                  <Image src={sections.first.src} alt="clad" className="product_image-card card_shadow "/>
          </div>
        </div>
}

        <div className="separate"></div>

      {!sections.seconed.none &&
        <div className="row align-items-center mb-5 card_shadow p-3" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-lg-6 services-details-image d-flex justify-content-center align-items-center">
                <Image src={sections.seconed.src} alt="clad" className="product_image-card card_shadow "/>
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
            <h3>{
                sections.seconed.caption.header
              }</h3>
              <p>
                {sections.seconed.caption.body}
              </p>
            </div>
          </div>
        </div>
      }
      </div>
    </section>
)
}

