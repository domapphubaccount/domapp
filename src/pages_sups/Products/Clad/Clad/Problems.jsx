import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

export default function Problems() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = cladcut(lang).sections.PROBLEMS;

    // Helper: isArabic
    const isAr = lang && (lang === "ar" || lang.startsWith("ar"));

    // Helper: get proper RTL/LTR classes/dir for wrapping
    const getDirClass = () => (isAr ? "rtl" : "");
    const getDir = () => (isAr ? "rtl" : "ltr");
    const getFlexDir = () => (isAr ? "flex-row-reverse" : "flex-row");
    const getTextDir = () => (isAr ? "text-end" : "");
    const getRowDir = () => (isAr ? "flex-row-reverse" : "");
    // Update Item: reverse icon/card and icon direction in ar
    const Item = ({ title, text, isProblem, noBorder }) => (
        <div
            dir={getDir()}
            className={`d-flex align-items-start gap-3 px-3 py-3 h-100 ${getFlexDir()} ${getDirClass()} ${!noBorder ? "border rounded bg-white" : ""}`}
        >
            {/* If ar, show icon to the right: in markup order, reverse in 'flex-row-reverse' */}
            <span
                className="rounded-circle d-flex justify-content-center align-items-center text-white flex-shrink-0"
                style={{
                    width: 40,
                    height: 40,
                    background: isProblem ? "#dc3545" : "#28a745",
                }}
            >
                {isAr
                    ? (isProblem ? "❌" : "✅") // Red/green emoji for clearer AR distinction
                    : (isProblem ? "✖" : "✔")
                }
            </span>

            <div className={getTextDir()} style={isAr ? { textAlign: "right" } : {}}>
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
        <section dir={getDir()}>
            <Container className="py-5">
                <h2 className={`text-center mb-5 fw-bold ${getTextDir()}`} dir={getDir()}>{data.title}</h2>

                <div className="d-flex flex-column gap-5 align-items-center">

                    <div className={`col-lg-10 position-relative !z-10 ${getDirClass()}`} dir={getDir()}>
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

                    <div className={`col-lg-10 position-relative !z-10 ${getDirClass()}`} dir={getDir()}>
                        {/* <Line /> */}
                        <div className="row g-4 align-items-center">
                            {/* Keep the card RTL in ar */}
                            <div className={`border rounded bg-white p-3 d-flex flex-column gap-4 ${isAr ? "align-items-en" : ""}`} dir={getDir()}>

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

                    <div className={`col-lg-10 position-relative !z-10 isolate ${getDirClass()}`} dir={getDir()}>
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