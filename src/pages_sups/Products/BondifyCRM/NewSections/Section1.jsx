import React from "react";
import { Container } from "reactstrap";
import "./Section.css";
import Image from "next/image";

export default function Section1() {
  return (
    <Container>
      <div className="text-center mt-5 section-title-meta">
        <span>Amazing Set Of Features</span>
        <h2>All the important modules that you need</h2>
      </div>

      <div className="features-wrapper-cards d-flex ">
        <div className="feature-card ">
          <Image
            src="/images/image1.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Clients</h4>
          <p>Manage all aspects of your clients in one place.</p>
        </div>
        <div className="feature-card">
              <Image
            src="/images/image1.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Projects</h4>
          <p>Deliver your projects on time and on budget.</p>
        </div>
        <div className="feature-card">
                  <Image
            src="/images/image1.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Prospects</h4>
          <p>Capture all your leads and opportunities easily.</p>
        </div>
        <div className="feature-card">
                  <Image
            src="/images/image1.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Team Work</h4>
          <p>Collaboration between your team members easily.</p>
        </div>
      </div>
    </Container>
  );
}
