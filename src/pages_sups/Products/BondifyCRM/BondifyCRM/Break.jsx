import React from "react";
import { Container } from "reactstrap";

export default function Break({body}) {
  return (
    <section className="section3-CRM-bg">
      <Container>
        <div className="text-center fw-bold">
          {body} 
        </div>
      </Container>
    </section>
  );
}
