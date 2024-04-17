import React from "react"
import ServicesDetails1 from "@/assets/images/Products_Page/services-details1.png"
import ServicesDetails2 from "@/assets/images/Products_Page/services-details2.png"
import Image from "next/image"

export default function ServiceDetailsPage () {

    return(
    <div className="services-details-area ptb-80 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>Incredible Infrastructure</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>

              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <Image
              src={ServicesDetails1}
              className="animate__animated animate__fadeInUp"
              alt="Services"
            />
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <Image
              src={ServicesDetails2}
              className="animate__animated animate__fadeInUp"
              alt="Services"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

