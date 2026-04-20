import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { cladcut_site } from "@/stores/Main/links/links";

export default function Testimonials() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = cladcut(lang).sections.TESTIMONIALS;
    const testimonials = data.items;

    const videoIds = ["RiODoCvw9Ck", "mWwYByfwWVg"];

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

                                {/* VIDEO */}
                                <div
                                    className="position-relative"
                                    style={{
                                        height: 200,
                                        background: "linear-gradient(135deg, #e0f2fe, #dbeafe)",
                                    }}
                                >
                                    {videoIds[index] ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${videoIds[index]}`}
                                            title="YouTube video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{ objectFit: "cover" }}
                                        />
                                    ) : (
                                        <div className="d-flex align-items-center justify-content-center h-100">
                                            No Video
                                        </div>
                                    )}
                                </div>

                                {/* TEXT */}
                                <div className="card-body text-center px-4 py-4">

                                    <h6 className="fw-bold mb-1" style={{ fontSize: "1.1rem" }}>
                                        {item.name}
                                    </h6>

                                    <div className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                                        {item.title}
                                    </div>

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

                {/* BUTTON */}
                <div className="text-center mt-5">
                    <a
                        style={{ textDecoration: "none" }}
                        href={cladcut_site}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn btn-default !h:text-black">
                            {data.cta}
                        </button>
                    </a>
                </div>

            </Container>
        </section>
    );
}