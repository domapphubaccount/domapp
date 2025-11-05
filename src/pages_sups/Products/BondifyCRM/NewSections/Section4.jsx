import React from "react";
import { Container } from "reactstrap";
import "./Section.css";
import Image from "next/image";

export default function Section4() {
  return (
    // <Container >
      <div className="p-5 d-flex align-items-cente justify-content-between section2-boundify-crm gap-3">


      <div className="text-div section-title-meta ml-5">
        <span>Advanced Project Management
</span>
        <h3>Beat your project deadlines</h3>

        <p>Our CRM gives you the right tools to manage, collaborate and complete your projects on time. Your clients will be happy and your team will be happy.</p>
        <ul className="p-0 m-0">
          <li>Easily see the progress of your project</li>
          <li>Collaborate with team members</li>
          <li>Break down your project into milestones and tasks</li>
        </ul>

       
      </div>
            <div className="image-div-section2 ml-5 ">
        <Image
          src="/images/section4.png"
          alt="feature1"
        width={872}
  height={540}
        />
      </div>
      </div>
    // </Container>
  );
}
