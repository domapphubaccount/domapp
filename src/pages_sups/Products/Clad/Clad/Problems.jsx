import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

export default function Problems() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = cladcut(lang).sections.PROBLEMS;

    const problemsData = [
        data.slice1,
        data.slice2,
        data.slice3,
    ];

    const isAr = lang === "ar";

    const Item = ({ title, text, type }) => {
        const isProblem = type === "problem";

        return (
            <div
                className="d-flex align-items-start gap-3 border rounded px-3 py-3 bg-white"
                style={{
                    direction: isAr ? "rtl" : "ltr",
                    textAlign: isAr ? "right" : "left",
                }}
            >
                <span
                    className="rounded-circle d-flex justify-content-center align-items-center flex-shrink-0 text-white"
                    style={{
                        width: 40,
                        height: 40,
                        background: isProblem ? "#dc3545" : "#28a745",
                    }}
                >
                    {isProblem ? "✖" : "✔"}
                </span>

                <div>
                    <div
                        className="fw-bold mb-1"
                        style={{
                            color: isProblem ? "#dc3545" : "#28a745",
                        }}
                    >
                        {title}
                    </div>

                    <div className={isProblem ? "text-secondary" : ""}>
                        {text}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section dir={isAr ? "rtl" : "ltr"}>
            <Container className="py-5">

                {/* GRID */}
                <div className="row g-5">

                    {/* PROBLEMS COLUMN */}
                    <div className="col-md-6">

                        <h2 className="text-center mb-4 fw-bold capitalize ">
                            {data.problems_title}
                        </h2>

                        <div className="d-flex flex-column gap-3">
                            {problemsData.map((item, index) => (
                                <Item
                                    key={index}
                                    title={item.ProblemTitle}
                                    text={item.Problem}
                                    type="problem"
                                />
                            ))}
                        </div>
                    </div>

                    {/* SOLUTIONS COLUMN */}
                    <div className="col-md-6">

                        <h2 className="text-center mb-4 fw-bold capitalize ">
                            {data.solutions_title}
                        </h2>

                        <div className="d-flex flex-column gap-3">
                            {problemsData.map((item, index) => (
                                <Item
                                    key={index}
                                    title={item.SolutionTitle}
                                    text={item.Solution}
                                    type="solution"
                                />
                            ))}
                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}