import { Col, Row } from "reactstrap";
import ResponsiveCarousel from "./Carousal";
import { useSelector } from "react-redux";

export default function Cards() {
  const { what_we_do } = useSelector(
    (state) => state.MainData.content.pages.product_page.home.sections
  );

  return (
    <div className="py-5">
      <Row>
        {what_we_do.main.slices.map((item, index) => (
          <Col
            key={index}
            sm={12}
            md={6}
            lg={4}
            className="card_column overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              className="home_section_2_card rounded"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* <ResponsiveCarousel /> */}
    </div>
  );
}
