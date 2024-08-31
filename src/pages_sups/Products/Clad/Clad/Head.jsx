"use client"
import React from 'react'
import { Container } from 'reactstrap'
import quotes from "@/assets/images/Products_Page/Rd/quotes-left.svg"
import Image from 'next/image'
import dynamic from "next/dynamic";

function Head({ head, body }) {
  return (
    <section className='py-5 mt-5'>
      <Container>
        <div>
          <div className='text-start' style={{ width: '80px' }} data-aos="fade-up" data-aos-duration="500">
            <Image src={quotes.src} width={80} height={80} className='me-auto' alt="quote" />
          </div>
          <div className='text-center' data-aos="fade-up" data-aos-duration="2000">
            <Container>
              <div className={"mil-center text-center mil-clad"}>
                <span className="mil-suptitle mil-upper" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                  {head}
                </span>
                <h2 className="mil-up mil-mb-30" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                  Unleash the Speed of Aluminum Cladding Fabrication with CladCut
                </h2>
                <p className={"mil-up"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1 }}>
                  Generate fabrication drawings and CNC files in minutes, not days.
                </p>
              </div>
            </Container>
          </div>
          <div className='text-end' data-aos="fade-up" data-aos-duration="500">
            <Image src={quotes.src} width={80} height={80} className="ms-auto" alt="quote" />
          </div>
        </div>
      </Container>
    </section>
  )
}
export default dynamic (() => Promise.resolve(Head), {ssr: false})
