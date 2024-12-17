import { contact_page } from "@/Store/Main/links/links";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Section_4({ sections }) {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);

  return (
    <section className="container my-12 mt-60" dir={dir}>
      <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
        <div className="flex align-items-end justify-between">
          <div className="">
            <div className="">
              <h4 className="title mb-3 text-white title-dark">
                {windmaster(lang).sections.get_started.title}
              </h4>
              <p className="text-white-50 mb-0">
                {windmaster(lang).sections.get_started.slogan}
              </p>
            </div>
          </div>

          <div className=" mt-4 mt-sm-0">
            <div className="text-md-end text-center">
              <Link className="btn btn-light" href={contact_page}>
              {windmaster(lang).sections.get_started.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
