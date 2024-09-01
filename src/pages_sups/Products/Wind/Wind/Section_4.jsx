import React from "react";

export default function Section_4({ sections }) {
  return (
    <section className="container my-12 mt-60">
      <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
        <div className="row align-items-end">
          <div className="col-md-8">
            <div className=" text-md-start text-center">
              <h4 className="title mb-3 text-white title-dark">
                Start your free 2 week trial today
              </h4>
              <p className="text-white-50 mb-0">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-sm-0">
            <div className="text-md-end text-center">
              <a className="btn btn-light" href="#">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
