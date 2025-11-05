import React from "react";
import { Container } from "reactstrap";
import "./Section.css";
import Image from "next/image";

export default function Section2() {
  return (
    // <Container >
      <div className="p-5 d-flex align-items-cente justify-content-between section2-boundify-crm gap-3">
      <div className="image-div-section2 me-4 ">
        <Image
          src="/images/section2.png"
          alt="feature1"
        width={872}
  height={540}
        />
      </div>

      <div className="text-div section-title-meta ml-5">
        <span>INCREASE YOUR PRODUCTIVITY</span>
        <h3>Intuitive, powerful, and built for teams who get things done</h3>

        <p>Our bondify CRM comes with a host of features that are designed to help increase your entire team's productivity.</p>
        <ul className="p-0 m-0">
          <li>Project templates to kick-start a new project</li>
          <li>Clone task to speed your time to action</li>
          <li>Communicate and collaborate with your team and clients</li>
          <li>Time tracking for the whole team</li>
        </ul>

       
      </div>
      </div>
    // </Container>
  );
}
