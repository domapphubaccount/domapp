import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { useSelector } from "react-redux";

export default function CounterData() {
  const lang = useSelector((state) => state.languageSlice.lang);
  const home = useSelector((state) => state.homeRed.home);

  return (
    <section className="home_section_3 py-5 counter_home">
      <Container>
        {/* <Row>
          {home(lang).sections.counterdata.map((item, index) => (
            <Col key={index} sm="4" className="my-4">
              <InView>
                {({ ref, inView }) => (
                  <div ref={ref} className="h-100">
                    <h2 className="fw-bold">
                      {inView ? (
                        <>
                          + <CountUp end={item.number} duration={3} />
                        </>
                      ) : (
                        "+"
                      )}
                      {item.title === "Support Availability" ? "/7" : ""}
                    </h2>
                    <div className="fw-bold">{item.title}</div>
                  </div>
                )}
              </InView>
            </Col>
          ))}
        </Row> */}
        <div
          className="text-center rounded"
          style={{ backgroundColor: "#232323", padding: "45px",borderRadius: "10px" }}
        >
          <Row>
            {home(lang).sections.counterdata.map((item, index) => (
              <Col key={index}>
                <InView>
                  {({ ref, inView }) => (
                    <div ref={ref}>
                      <div className={`${index !== 2 && "item"}`}>
                        <div className="counter-box">
                          <div
                            className="number"
                            style={{
                              color: "#fff",
                              fontSize: "50px",
                              fontWeight: "200",
                              margin: "0px 10px 10px 0px",
                            }}
                          >
                            <span
                              className="number_counter animated"
                              data-number="2000"
                              data-separator=""
                              data-unit=""
                            >
                              {inView && (
                                <>
                                  + <CountUp end={item.number} duration={3} />
                                </>
                              )}

                              {item.title === "Support Availability"
                                ? "/7"
                                : ""}
                            </span>
                          </div>

                          <h3
                            className="title"
                            style={{
                              color: "#fff",
                              fontSize: "16px",
                              fontWeight: "200",
                            }}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                </InView>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
