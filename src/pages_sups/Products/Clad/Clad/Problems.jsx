import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

export default function Problems() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = cladcut(lang).sections.PROBLEMS;

    const Item = ({ title, text, isProblem, noBorder }) => (
        <div className={`d-flex align-items-start gap-3 px-3 py-3 h-100 ${!noBorder ? "border rounded bg-white" : ""}`}>
            <span
                className="rounded-circle d-flex justify-content-center align-items-center text-white flex-shrink-0"
                style={{
                    width: 40,
                    height: 40,
                    background: isProblem ? "#dc3545" : "#28a745",
                }}
            >
                {isProblem ? "✖" : "✔"}
            </span>

            <div>
                {title && <div className="fw-bold mb-1">{title}</div>}
                <div className={isProblem ? "text-secondary" : ""}>{text}</div>
            </div>
        </div>
    );

    const Line = () => (
        <div
            className="d-none d-md-block position-absolute top-50 start-50 translate-middle !z-0"
            style={{ width: 60, height: 2, backgroundColor: "#d3d3d3" }}
        />
    );

    return (
        <section>
            <Container className="py-5">
                <h2 className="text-center mb-5 fw-bold">{data.title}</h2>

                <div className="d-flex flex-column gap-5 align-items-center">

                    <div className="col-lg-10 position-relative !z-10 ">
                        {/* <Line /> */}
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6">
                                <Item title={data.slice1.ProblemTitle} text={data.slice1.Problem} isProblem />
                            </div>
                            <div className="col-md-6">
                                <Item text={data.slice1.Solution} isProblem={false} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 position-relative !z-10 ">
                        {/* <Line /> */}
                        <div className="row g-4 align-items-center">
                            <div className="border rounded bg-white p-3 d-flex flex-column gap-4">


                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6">
                                        <Item title={data.slice2.ProblemTitle1} text={data.slice2.Problem1} isProblem noBorder />
                                    </div>
                                    <div className="col-md-6">
                                        <Item text={data.slice2.Solution1 || data.slice2.Solut1ion} isProblem={false} noBorder />
                                    </div>
                                </div>

                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6">
                                        <Item title={data.slice2.ProblemTitle2} text={data.slice2.Problem2} isProblem noBorder />
                                    </div>

                                </div>

                            </div>




                        </div>
                    </div>





                    <div className="col-lg-10 position-relative !z-10 isolate">
                        {/* <Line /> */}
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6">
                                <Item title={data.slice3.ProblemTitle} text={data.slice3.Problem} isProblem />
                            </div>
                            <div className="col-md-6">
                                <Item text={data.slice3.Solution} isProblem={false} />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}