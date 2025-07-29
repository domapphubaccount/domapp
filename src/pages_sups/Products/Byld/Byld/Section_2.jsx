import React from "react";
import eating from "@/assets/images/Byld/data.jpg";
import space from "@/assets/images/Byld/share.jpg";
import tasks from "@/assets/images/Byld/tasks.svg";
import { useSelector } from "react-redux";

function Section_2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { byld } = useSelector((state) => state.byldRed);

  return (
    <section className="py-20 bg-blueGray-50" id="how-we-work">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2
              className="text-2xl md:text-3xl font-bold font-heading wow animate__ animate__fadeInDown animated"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
              dir={dir}
            >
              <span>{byld(lang).sections.Head_NOTE_1.title.first} </span>
              <span className="text-blue-500">{byld(lang).sections.Head_NOTE_1.title.seconed}</span>,
              <br />
              <span>{byld(lang).sections.Head_NOTE_1.title.third}</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <p
              className="text-blueGray-400 leading-loose wow animate__ animate__fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
              dir={dir}
            >
              {byld(lang).sections.Head_NOTE_1.slogan}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center" dir={dir}>
          {byld(lang).sections.CARDS.map((item, index) => (
            <div
              key={index}
              className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__ animate__fadeInUp animated"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="p-12 h-100 bg-white shadow rounded">
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  {index + 1}
                </div>
                <img loading="lazy" className="h-48 mx-auto my-4" src={byld(lang).sections.CARDS_IMAGES[index].src} alt="" />
                <h5 className="mb-2 font-bold font-heading">
                  {item.title}
                </h5>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  {item.slogan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section_2;
