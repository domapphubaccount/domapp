import React from "react";

function Pricing() {
  return (
    <section
      className="py-20 xl:bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('assets/imgs/backgrounds/intersect.svg')`,
      }}
    >
      <div className="container px-4 mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2
            className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated"
            data-wow-delay=".2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <span>Start saving time today and </span>
            <span className="text-blue-500"> choose </span>
            <span> your best plan</span>
          </h2>
          <p
            className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__ animate__fadeInDown animated"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInDown",
            }}
          >
            Best for those who need to save their time
          </p>
        </div>
        <div data-aos="fade-down" className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div
              className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__ animate__fadeInUp animated"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <img
                className="h-20 mb-6 mx-auto"
                src="assets/imgs/icons/startup.svg"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>
              <span className="text-4xl text-blue-500 font-bold font-heading">
                $45.99
              </span>
              <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-blueGray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>3 Emails</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>1 Datebases</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>10 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="btn-primary mr-3 wow animate__ animate__fadeInUp hover-up-2 animated"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="btn-white wow animate__ animate__fadeInUp hover-up-2 animated"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div
              className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__ animate__fadeInUp animated"
              data-wow-delay=".4s"
              style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp"}}
            >
              <img
                className="h-20 mb-6 mx-auto"
                src="assets/imgs/icons/agency.svg"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">Agency</h3>
              <span className="text-4xl font-bold font-heading">$65.99</span>
              <p className="mt-2 mb-8">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>6 Emails</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>4 Datebases</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>35 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="btn-primary mr-3 wow animate__ animate__fadeInUp hover-up-2 animated"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="btn-white wow animate__ animate__fadeInUp hover-up-2 animated"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6">
            <div
              className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__ animate__fadeInUp animated"
              data-wow-delay=".6s"
              style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInUp"}}
            >
              <img
                className="h-20 mb-6 mx-auto"
                src="assets/imgs/icons/enterprise.svg"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
              <span className="text-4xl text-blue-500 font-bold font-heading">
                $85.99
              </span>
              <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-blueGray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>12 Emails</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>8 Datebases</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>50 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="btn-primary mr-3 wow animate__ animate__fadeInUp hover-up-2 animated"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="btn-white wow animate__ animate__fadeInUp hover-up-2 animated"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
