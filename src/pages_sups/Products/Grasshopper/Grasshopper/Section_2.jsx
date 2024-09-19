import React from "react";

function Section_2() {
  return (
    <div className="service-area ptb--80  bg_image bg_image--3">
      <div className="container">
        <div className="row">
          <div className=" col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10 text-center">
              <h2 className="title text-center">Our Services</h2>
              <p>Delivering premium services for an outstanding experience</p>
              {/* <div className="service-btn">
                            <span className="text text-white fw-bold">Request Custom Service</span>
                        </div> */}
            </div>
          </div>
          <div className="col-lg-12 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service service__style--2 d-flex align-items-start gap-3">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      style={{ width: "30px", height: "30px" }}
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title">Fabrication-Ready Data</h3>
                    <p>
                      We provide accurate and detailed fabrication-ready data
                      for CNC machining, laser cutting, and other digital
                      fabrication methods, ensuring a smooth transition from
                      digital model to physical component.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service service__style--2 d-flex align-items-start gap-3">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      className="size-6"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title">Quality Assurance</h3>
                    <p>
                      Our precise digital models minimize errors and reduce
                      waste, ensuring that every component is fabricated to the
                      highest standards of quality.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service service__style--2 d-flex align-items-start gap-3">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      className="size-6"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title">Precision &amp; Control</h3>
                    <p>
                      The ability to define precise relationships and
                      dependencies between design elements ensures greater
                      control over the final output, improving accuracy and
                      quality.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service service__style--2 d-flex align-items-start gap-3">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      className="size-6"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>

                  <div className="content">
                    <h3 className="title">Expert Consultation & Support</h3>
                    <p>
                      Our team of engineers offers expert consultation
                      throughout the project, from initials to final
                      installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
