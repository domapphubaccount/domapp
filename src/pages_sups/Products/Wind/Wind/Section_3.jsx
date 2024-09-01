import React from "react";
import windmasterImage from "@/assets/images/windmaster/windmaster.png"

export default function Section_3() {
  return (
    <div className="container mt-100 mt-60 relative">
      <div className="row align-items-center social-feature-left social-feature-right">
        <div className="col-lg-5 col-md-6 order-1 order-md-2">
          <img
            alt=""
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="img-fluid rounded-md shadow-lg p-5"
            style={{color:"transparent",width:"100%",height:"auto"}}
            sizes="100vw"
            src={windmasterImage.src}
          />
        </div>
        <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div className="section-title text-md-start text-center">
            <h4 className="mb-4">
              Collaborate with your <br /> team anytime and anywhare.
            </h4>
            <p className="text-muted mb-0 para-desc">
              Start working with{" "}
              <span className="text-primary fw-bold">Landrick</span> that can
              provide everything you need to generate awareness, drive traffic,
              connect.
            </p>
            <div className="d-flex align-items-center text-start mt-4 pt-2">
              <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                  <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                  <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                </svg>
              </div>
              <div className="flex-1">
                
              Manage and modify project and client information
                
              </div>
            </div>
            <div className="d-flex align-items-center text-start mt-4">
              <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div className="flex-1">
              Following Saudi Building Code 301, identifying the site data in terms of risk category, project address, and exposure category is made simple
              </div>
            </div>
            <div className="d-flex align-items-center text-start mt-4">
              <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <div className="flex-1">
              Export detailed design data sheet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
