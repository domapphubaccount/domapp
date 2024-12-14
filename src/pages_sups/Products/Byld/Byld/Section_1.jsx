import React from "react";
import blob from "@/assets/images/Byld/blob-tear.svg";
import sectionImg from "@/assets/images/Byld/img-1.png";
import { useSelector } from "react-redux";

function Section_1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { byld } = useSelector((state) => state.byldRed);

  return (
    <section
      className="py-12 md:py-16 lg:py-32 overflow-x-hidden"
      id="key-features"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <div
              data-aos="fade-up"
              className="lg:py-6 lg:pr-32 wow animate__ animate__fadeIn animated"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
              dir={dir}
            >
              <div className="mb-4">
                <span
                  className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__ animate__fadeInDown"
                  data-wow-delay=".9s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.9s",
                    animationName: "fadeInDown",
                  }}
                >
                  {byld(lang).sections.FEATURES.why_us}
                </span>
                <h2
                  className="text-4xl mt-5 font-bold font-heading wow animate__ animate__fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  {byld(lang).sections.FEATURES.title}
                </h2>
              </div>

              {byld(lang).sections.FEATURES.slice.map((item, index) => (
                <div
                key={index}
                  className="flex items-start py-4 wow animate__ animate__fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="w-8 mx-2 text-blue-500">
                    {byld(lang).sections.FEATURES.icons[index]}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold font-heading">
                      {item.title}
                    </h3>
                    <p className="text-blueGray-400 leading-loose">
                      {item.slogan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="relative w-full lg:w-1/2 my-12 lg:my-0"
          >
            <div
              className="wow animate__ animate__fadeInRight animated"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInRight",
              }}
            >
              <img
                className="jump relative mx-auto rounded-xl w-full z-10"
                src={sectionImg.src}
                alt=""
              />
              <img
                className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                src={blob.src}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                src={blob.src}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_1;
