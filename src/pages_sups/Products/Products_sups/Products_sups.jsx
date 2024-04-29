import React from "react"
import ServicesDetails1 from "@/assets/images/Products_Page/services-details1.png"
import ServicesDetails2 from "@/assets/images/Products_Page/services-details2.png"
import Image from "next/image"

export default function ServiceDetailsPage ({sections}) {
  

    return(
    <section className="services-details-area pt-0 pb-5">
      <div className="container py-5">
        <div className="row align-items-center mb-5" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc caption_products">
              <h3>
                {
                  sections.first.caption.header
                }
              </h3>
              <p>
                {sections.first.caption.body}
              </p>
            </div>
          </div>

          <div className="col-lg-6 services-details-image ">
                  <video className="rounded h-100 w-100 card_shadow product_image-card" preload="none" loop muted autoPlay >
                    <source src={sections.first.src} type="video/mp4" />
                            Your browser does not support the video tag.
                  </video>
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-lg-6 services-details-image">
                  <video className="rounded h-100 w-100 card_shadow product_image-card" preload="none" loop muted autoPlay>
                    <source src={sections.seconed.src} type="video/mp4" />
                            Your browser does not support the video tag.
                  </video>
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
      </div>
    </section>
)
}

