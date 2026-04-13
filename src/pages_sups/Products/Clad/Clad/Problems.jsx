import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

export default function Problems() {
  const { lang } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  const problemsData = [
    cladcut(lang).sections.PROBLEMS.slice1,
    cladcut(lang).sections.PROBLEMS.slice2,
    cladcut(lang).sections.PROBLEMS.slice3,
  ];

  const renderItem = (text, type) => {
    const isProblem = type === "problem";

    return (
      <div className="col-md-6 relative z-10">
        <div className="d-flex align-items-center border rounded px-3 py-3 bg-white h-100 relative z-10">
          
          {/* ICON */}
          <span
            className="me-3 rounded-circle d-flex justify-content-center align-items-center flex-shrink-0 text-white w-[40px] h-[40px] min-w-[40px] min-h-[40px] font-bold text-[1.2rem]"
            style={{
              background: isProblem ? "#dc3545" : "#28a745",
            }}
          >
            {isProblem ? "✖" : "✔"}
          </span>

          {/* TEXT */}
          <span
            className={`flex-grow-1 ${
              isProblem ? "text-secondary" : ""
            }`}
            style={{ fontSize: "1rem" }}
          >
            {text}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section>
      <Container className="cladcut-problems-section py-5">
        
        {/* TITLE */}
        <h2 className="text-center mb-5" style={{ fontWeight: 700 }}>
          {cladcut(lang).sections.PROBLEMS.title}
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            
            <div className="row g-5">
              {problemsData.map((item, index) => (
                
                <div
                  key={index}
                  className="relative row g-4 align-items-center isolate"
                >
                  
                  {/* LINE */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[50px] h-[2px] bg-gray-300 z-0"></div>

                  {/* PROBLEM */}
                  {renderItem(item.Problem, "problem")}

                  {/* SOLUTION */}
                  {renderItem(item.Solution, "solution")}

                </div>

              ))}
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}