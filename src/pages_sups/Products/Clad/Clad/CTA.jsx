import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
export default function CTA() {
  const { lang } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-center py-5">
          {/* <Col lg={6}> */}
          <h2 className="text-center mb-3 fw-bold">{cladcut(lang).sections.CTA.title}</h2>
          <p className="text-center mb-3">{cladcut(lang).sections.CTA.slogan}</p>
          <button className="btn btn-default d-flex justify-content-center">{cladcut(lang).sections.CTA.btn}</button>
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  )
}
