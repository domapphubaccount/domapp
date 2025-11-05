import React from "react";
import { Container } from "reactstrap";
import "./Section.css";
import Image from "next/image";

export default function Section5() {
  return (
    <Container>
      <div className="text-center mt-5 section-title-meta">
        <span>Amazing Set Of Features</span>
        <h2>All the important modules that you need</h2>
      </div>
      <div className="features-wrapper-cards">
        <div className="feature-card card-section5">
          <Image
            src="/images/image5.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Tasks</h4>
          <p>Work through your task efficiently and intuitively.</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image6.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Invoicing</h4>
          <p>Invoice your clients and accept payments easily</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image7.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Estimates</h4>
          <p>Quickly send your clients estimates and proposals</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image8.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>User Roles</h4>
          <p>Control the resources your team members can access</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image9.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Work From Anywhere</h4>
          <p>Your team can now easily connect and work from anywhere.</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image10.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Time Tracking</h4>
          <p>Advanced time tracking so you never miss a minute of time spent</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image11.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Help Desk</h4>
          <p>Use the helpdesk to provide support for your clients</p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image12.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Knowledgebase</h4>
          <p>
            Create engaging articles easily share information with all your
            stakeholders
          </p>
        </div>
        <div className="feature-card card-section5">
          <Image
            src="/images/image13.png"
            alt="feature1"
            width={140}
            height={140}
          />
          <h4>Subscriptions</h4>
          <p>
            Accept recurring payments via Stripe, using the subscription
            feature.
          </p>
        </div>
      </div>
    </Container>
  );
}
