import React from "react";
import bannarImg from "@/assets/images/Byld/intersect.svg";
import subBannar from "@/assets/images/Byld/dashboard.png";
import byldicon from "@/assets/images/Byld/logobyld.png";
import blob from "@/assets/images/Byld/blob-tear.svg";

function Bannar() {
  return (
    <section
      className="xl:bg-contain byld-bg bg-no-repeat -mt-24 pt-40"
      style={{ backgroundImage: `url(${bannarImg.src})` }}
    >
      <div className="container px-4 mx-auto">
        <div className="pt-12 text-center">
          <div className="max-w-2xl mx-auto mb-8 text-center">
            <div className="flex justify-center">
              <img src={byldicon.src} width={300} />
            </div>
            <p
              className="mt-8 text-blueGray-400 leading-relaxed wow animate__ animate__fadeIn animated"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              Smart Engineering
              <strong className="text-blue-500"> Solutions</strong>, just ask{" "}
              <strong className="text-blue-500"> AI</strong>
            </p>
          </div>
          <div>
            <a
              className="btn-primary mr-3 wow animate__ animate__fadeInUp hover-up-2 animated no-underline	"
              href="#how-features"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Try For Free
            </a>
            <a
              className="btn-white wow animate__ animate__fadeInUp hover-up-2 animated no-underline	"
              data-wow-delay=".3s"
              href="#how-we-work"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              Pricing
            </a>
          </div>
        </div>
      </div>
      <div
        className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto"
        data-aos="fade-up"
      >
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
              className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
              src={blob.src}
              alt=""
            />
          </div>
        </div>

        <img
          src="assets/imgs/elements/pattern.png"
          alt=""
          style={{ minHeight: "600px" }}
        />
        <div
          className="absolute"
          style={{ top: "9%", left: "14%", width: "80%", height: "70%" }}
        >
          <img
            className="jump rounded wow animate__animated animate__fadeInUp animated"
            src={subBannar.src}
            alt=""
            style={{
              visibility: "visible",
              animationName: "jump",
              boxShadow: "-1px 5px 20px 0px #111b4a26",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Bannar;
