import React from "react";
import { useSelector } from "react-redux";

export default function Section_5() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);

  return (
    <section className="relative my-5">
      <div className="container">
        <div className="row social-feature-left">
          {windmaster(lang).sections.INFO_CARDS.map((item, index) => (
            <div className="col-md-4 mt-4 pt-2 " key={index}>
              <div className={`card features feature-primary feature-clean work-process bg-transparent ${index < 2 && 'process-arrow'} border-0 text-center`}>
                <div className="icons rounded text-center mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h3 mb-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path>
                  </svg>
                </div>
                <div className="card-body" dir={dir}>
                  <h5 className="text-dark">{item.title}</h5>
                  <p className="text-muted mb-0">
                    {item.slogan}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
