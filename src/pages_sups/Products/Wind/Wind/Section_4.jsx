import Link from "next/link";
import React from "react";

export default function Section_4({ sections }) {
  return (
    <section className="container my-12 mt-60">
      <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
        <div className="row align-items-end">
          <div className="col-md-8">
            <div className=" text-md-start text-center">
              <h4 className="title mb-3 text-white title-dark">
                Start your free trial today
              </h4>
              <p className="text-white-50 mb-0">
                Discover how our WIND MASTER can enhance your wind analysis.
                Start your free trial today for a detailed analysis!
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-sm-0">
            <div className="text-md-end text-center">
              <Link className="btn btn-light" href="/contact">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
