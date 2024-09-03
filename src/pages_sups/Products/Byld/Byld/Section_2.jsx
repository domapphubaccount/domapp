import React from "react";
import eating from "@/assets/images/Byld/data.jpg";
import space from "@/assets/images/Byld/share.jpg";
import tasks from "@/assets/images/Byld/tasks.svg";

function Section_2() {
  return (
    <section className="py-20 bg-blueGray-50" id="how-we-work">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2
              className="text-2xl md:text-3xl font-bold font-heading wow animate__ animate__fadeInDown animated"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              <span>Clear answers to </span>
              <span className="text-blue-500">complex questions</span>,
              <br />
              <span>referencing the Saudi Building Code</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <p
              className="text-blueGray-400 leading-loose wow animate__ animate__fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Using BYLD can enhance informed decision-making and ensure that
              your projects comply with all requirements of the Saudi Building
              Code.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          <div
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
                1
              </div>
              <img className="h-48 mx-auto my-4" src={eating.src} alt="" />
              <h3 className="mb-2 font-bold font-heading">
                Accurate Information
              </h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                {" "}
                A precise source of information with the ability to specify the
                source from a particular code.
              </p>
            </div>
          </div>

          <div
            className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__ animate__fadeInUp animated"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
          >
            <div className="p-12 h-100 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                2
              </div>
              <img className="h-48 mx-auto my-4" src={space.src} alt="" />
              <h3 className="mb-2 font-bold font-heading">
                Sharing Information With Others
              </h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                You can share the results of your conversations to unify
                discussion points and facilitate communication among team
                members.
              </p>
            </div>
          </div>

          <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
            <div
              className="p-12 h-100 bg-white shadow rounded wow animate__ animate__fadeInUp animated"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                3
              </div>
              <img className="h-48 mx-auto my-4" src={tasks.src} alt="" />
              <h3 className="mb-2 font-bold font-heading">
                Archive All Conversations
              </h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                All conversation results are archived in your account to
                continue the remaining parts of your project.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section_2;
