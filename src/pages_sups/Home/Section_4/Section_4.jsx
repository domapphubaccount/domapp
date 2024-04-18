import { Container } from "reactstrap"
import Carousel from "./Section_sups/Carousal_pc"
import MobileSlider from "./Section_sups/Carousel_mobile"
import Section_head from "@/components/Reuse/Section_Head/Section_head"
export default function Section_4() {
  return (
    <section className="home_section_4" id="products">
        <Section_head head={1}  title_1={'Our Products'}des_1={'to enhance our customer’s success through unique solutions.'}/>
        <Container style={{overflow: 'hidden'}}>
          <div className="pc-slider">
            {/* <Carousel /> */}
            <Carousel />
          </div>
          <div className="mobile-slider">
            <MobileSlider />
          </div>
        </Container>
    </section>
  )
}
