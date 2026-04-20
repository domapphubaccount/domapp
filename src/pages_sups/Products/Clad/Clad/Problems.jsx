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
                className="d-flex align-items-start gap-3 border rounded px-3 py-3 bg-white h-100"
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

                <div className="row g-4 mb-4 align-items-center">
                    <div className="col-md-6">
                        <h2 style={{ lineHeight: "1.7" }} className="text-center fw-bold capitalize mb-0 ">
                            {data.problems_title}
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center fw-bold capitalize mb-0">
                            {data.solutions_title}
                        </h2>
                    </div>

                </div>

                {problemsData.map((item, index) => (
                    <div key={index} className="row g-3 align-items-stretch mb-3">
                        <div className="col-md-6">
                            <Item
                                title={item.ProblemTitle}
                                text={item.Problem}
                                type="problem"
                            />
                        </div>
                        <div className="col-md-6">
                            <Item
                                title={item.SolutionTitle}
                                text={item.Solution}
                                type="solution"
                            />
                        </div>

                    </div>
                ))}

            </Container>
        </section>
    );
}