import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

export default function Cards() {
  const lang = useSelector((state) => state.languageSlice.lang);
  const home = useSelector(state => state.homeRed.home);

  return (
    <div className="py-5">
      <Row>
        {home(lang).sections.what_we_do.main.slices.map((item, index) => (
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
    </div>
  );
}
