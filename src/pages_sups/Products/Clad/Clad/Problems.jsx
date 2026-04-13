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
            <div className="col-md-6">
                <div className="d-flex align-items-center border rounded px-3 py-3 bg-white h-100">
                    <span
                        className="me-3 rounded-circle d-flex justify-content-center align-items-center flex-shrink-0 text-white w-[40px] h-[40px] min-w-[40px] min-h-[40px] font-bold text-[1.2rem]"
                        style={{
                            background: isProblem ? "#dc3545" : "#28a745",
                        }}
                    >
                        {isProblem ? "✖" : "✔"}
                    </span>

                    <span
                        className={`flex-grow-1 ${isProblem ? "text-secondary" : ""
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
                <h2 className="text-center mb-5" style={{ fontWeight: 700 }}>
                    {cladcut(lang).sections.PROBLEMS.title}
                </h2>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="row g-5">
                            {problemsData.map((item, index) => (
                                <React.Fragment key={index}>
                                    {renderItem(item.Problem, "problem")}
                                    {renderItem(item.Solution, "solution")}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}