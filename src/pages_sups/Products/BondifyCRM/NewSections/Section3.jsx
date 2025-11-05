import React from "react";
import { Container } from "reactstrap";

export default function Section3() {
  return (
    <div className="section3-CRM-bg">
      <Container className="pt-5 pb-5">
        <h3 className="text-center mb-5">One CRM to replace them all</h3>
        <div className="d-flex justify-content-center gap-3">
          <button className="create-account">Create Account</button>
          <button className="see-pricing">See Pricing</button>
        </div>
      </Container>
    </div>
  );
}
