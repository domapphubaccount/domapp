import { Col, Container, Row } from "reactstrap"
import Accordion from "./Section_5_sups/Accordion"

export default function Section_5() {
  return (
    <section className="home_section_5 shadow_inside">
        <Container>
            <div className="accordion_container card_shadow">
                        <Accordion />
            </div>
        </Container>
    </section>
  )
}
