import React from "react";
import { Container } from "reactstrap";

export default function Break({body}) {
  return (
    <section className="erp_section_3 mt-5">
      <Container>
        <div className="text-center fw-bold">
          {body}
        </div>
      </Container>
    </section>
  );
}
