import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { cladcut_site } from '@/stores/Main/links/links';
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
          <div className="d-flex justify-content-center">
            <a
              style={{ textDecoration: "none" }}
              className="no-underline hover:no-underline"
              href={cladcut_site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-default">{cladcut(lang).sections.CTA.btn}</button>
            </a>
       
          </div>
     
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  )
}
