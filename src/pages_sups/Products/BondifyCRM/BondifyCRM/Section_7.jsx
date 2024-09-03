import React from "react";
import Pay from "@/assets/images/BondifyCRM/Features/invoice.jpg";
import Time from "@/assets/images/BondifyCRM/Features/estimates.jpg";

export default function Section_7() {
  return (
    <section className="content-inner-2 overflow-hidden" id="Sub">
      <div className="container">
        <div className="row align-items-center about-bx3">
          <div className="col-lg-6 m-b30">
            <div className="section-head" style={{ transform: "none" }}>
              <h5 className="text-secondary sub-title mb-4">Flexible</h5>
              <h2 className="title m-b15 mb-4">Subscriptions</h2>
              <p className="m-b0" data-wow-delay="1s">
                This functionality allows you to automatically bill your clients
                for your products and services. You have the flexibility to set
                the billing cycle to weekly, monthly, yearly, and more. The
                system will then automatically generate a new invoice and charge
                your client's accordingly.
              </p>
            </div>
            <div
              className="row"
              data-wow-delay="1.5s"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="col-sm-6">
                <ul className="list-check-1 light">
                  <li>Billing invoices</li>
                  <li>Billing interval</li>
                  <li>Create invoices</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-check-1 light">
                  <li>Transaction document</li>
                  <li>Process payment</li>
                  <li>Process runs </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dz-media">
              <img
                src={Pay.src}
                className="main-img"
                data-aos-duration="2500"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center about-bx3" id="Est">
          <div className="col-lg-6">
            <div className="dz-media">
              <img
                src={Time.src}
                className="main-img"
                data-aos-duration="2500"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 m-b30">
            <div className="section-head" style={{ transform: "none" }}>
              <h5 className="text-secondary sub-title mb-4">Simple</h5>
              <h2 className="title m-b15 mb-4">Estimates/Quotations</h2>
              <p className="m-b0" data-wow-delay="1s">
                Clients are more inclined to engage in a project when they have
                an estimate of the total cost involved. The application offers a
                user-friendly tool for effortlessly creating and emailing
                estimates to your clients. This enables your clients to
                conveniently review and accept the estimates provided.
              </p>
            </div>
            <div
              className="row"
              data-wow-delay="1.5s"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="col-sm-6">
                <ul className="list-check-1 light">
                  <li>Create, modify estimates.</li>
                  <li>Customized templates.</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-check-1 light">
                  <li>Manage deal amount and products.</li>
                  <li>Send estimates automation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
