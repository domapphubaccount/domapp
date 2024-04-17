import { Container } from "reactstrap"
import Carousel from "./Section_sups/Carousal_pc"
import MobileSlider from "./Section_sups/Carousel_mobile"
export default function Section_4() {
  return (
    <section className="home_section_4" id="products">
        <Container>
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
