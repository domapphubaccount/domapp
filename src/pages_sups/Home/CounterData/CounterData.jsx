import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import { useSelector } from "react-redux";

export default function CounterData() {
    const { counterdata } = useSelector(
        (state) => state.MainData.content.pages.product_page.home.sections
      );

    return (
        <section className="home_section_3 shadow_inside">
            <Container>
                <Row>
                    {counterdata.map((item, index) => (
                        <Col key={index} sm="4" className="my-4">
                            <InView>
                                {({ ref, inView }) => (
                                    
                                    <div ref={ref} className="h-100">
                                        <h2 className="fw-bold">
                                            {inView ? (
                                                <>+ <CountUp end={item.number} duration={3} /></>
                                            ) : (
                                                '+'
                                            )}
                                            {item.title === "Support Availability" ? '/7' : ''}
                                        </h2>
                                        <div className="fw-bold">{item.title}</div>
                                    </div>
                                )}
                            </InView>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
