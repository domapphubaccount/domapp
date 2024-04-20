"use client"
import { Container } from "reactstrap"
import Carousel from "./Section_sups/Carousal_pc"
import MobileSlider from "./Section_sups/Carousel_mobile"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
import { useState } from "react"
export default function Section_4() {
  const [handleContainer , setConatiner] = useState(false)
  return (
    <section className="home_section_4" id="products">
        <Section_head head={1}  title_1={'Our Products'}des_1={'to enhance our customer’s success through unique solutions.'}/>
        <div className={`container-trans ${ handleContainer && 'container'} `}>
          <div className="pc-slider">
            <Carousel setConatiner={setConatiner}/>
          </div>
        </div>
        <div className="container">
          <div className="mobile-slider">
            <MobileSlider />
          </div>
        </div>
    </section>
  )
}
