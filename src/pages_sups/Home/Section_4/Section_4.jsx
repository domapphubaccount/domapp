import Carousel from "./Section_sups/Carousal_pc"
import MobileSlider from "./Section_sups/Carousel_mobile"
import Section_head from "@/components/Reuse/Section_Head/Section_head"

export default function Section_4() {
  return (
    <section className="home_section_4" id="products">
        <Section_head head={1}  title_1={'Our Products'}des_1={'to enhance our customer’s success through unique solutions.'}/>
        <div className={`container-trans container section_2_mobile_carousal`}>
          <div className="pc-slider">
            <Carousel/>
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
