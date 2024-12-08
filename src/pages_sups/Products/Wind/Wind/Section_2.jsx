import React from "react";
import { useSelector } from "react-redux";

export default function ServiceDetailsPage() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);

  return (
    <section className="mb-52">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-down">
            <div className="features-absolute">
              <div className="row" dir={dir}>
                {windmaster(lang).sections.CARDS.map((item, index) => (
                  <div className="col-md-6 mt-4 pt-2" key={index}>
                    <div className="d-flex features feature-primary feature-clean p-4 shadow rounded">
                      <div className="icons rounded d-block text-center rounded">
                        {item.icon}
                      </div>
                      <div className="flex-1 content ms-4">
                        <h5 className="mb-1">{item.title}</h5>
                        <p className="text-muted mb-0">
                          {item.slogan}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
