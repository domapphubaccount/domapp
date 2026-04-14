import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { cladcut_site } from "@/stores/Main/links/links";

export default function Testimonials() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = cladcut(lang).sections.TESTIMONIALS;

    const testimonials = data.items;

    return (
        <section className="py-5">
            <Container>

                {/* TITLE */}
                <h2 className="text-center mb-3 fw-bold">
                    {data.title}
                </h2>
                <p className="text-center mb-5 text-muted">
                    {data.subtitle}
                </p>


                {/* GRID */}
                <div className="row g-4 justify-content-center">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-6 col-md-6 d-flex align-items-stretch"
                        >
                            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                                {/* VIDEO PLACEHOLDER */}
                                <div
                                    className="position-relative flex items-center justify-center"
                                    style={{
                                        height: 200,
                                        background:
                                            "linear-gradient(135deg, #e0f2fe, #dbeafe)",
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center w-[55px] h-[55px] rounded-full bg-white shadow-sm font-bold text-2xl text-default cursor-pointer"

                                    >
                                        ▶
                                    </div>
                                </div>

                                {/* TEXT */}
                                <div className="card-body text-center px-4 py-4">

                                    {/* NAME */}
                                    <h6 className="fw-bold mb-1" style={{ fontSize: "1.1rem" }}>
                                        {item.name}
                                    </h6>

                                    {/* TITLE */}
                                    <div className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                                        {item.title}
                                    </div>

                                    {/* SLOGAN */}
                                    <p
                                        className="text-secondary mb-0"
                                        style={{
                                            fontStyle: "italic",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        “{item.slogan}”
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-5">
                    <a style={{ textDecoration: "none" }} href={cladcut_site} target="_blank" rel="noopener noreferrer">
                        <button
                            className="btn btn-default  !h:text-black"
                           

                        >
                            {cladcut(lang).sections.TESTIMONIALS.cta}
                        </button>
                    </a>
                </div>


            </Container>
        </section>
    );

}