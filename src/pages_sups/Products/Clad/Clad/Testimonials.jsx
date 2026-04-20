import React, { useState } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { cladcut_site } from "@/stores/Main/links/links";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function Testimonials() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = cladcut(lang).sections.TESTIMONIALS;
    const testimonials = data.items;

    const videoIds = ["RiODoCvw9Ck", "mWwYByfwWVg"];

    const [isOpen, setOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = (id) => {
        setActiveVideo(id);
        setOpen(true);
    };

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
                            className="col-12 col-md-6 d-flex align-items-stretch"
                        >
                            <div className="card shadow-sm border border-1 border-gray-200 w-100 h-100 rounded-4 overflow-hidden">

                                {/* VIDEO BOX */}
                                <div
                                    className="position-relative"
                                    style={{
                                        height: 300,
                                        background: "linear-gradient(135deg, #e0f2fe, #dbeafe)",
                                    }}
                                >

                                    {/* thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${videoIds[index]}/hqdefault.jpg`}
                                        alt="video"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => openVideo(videoIds[index])}
                                    />

                                    {/* play button */}
                                    <div
                                        onClick={() => openVideo(videoIds[index])}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: 60,
                                            height: 60,
                                            borderRadius: "50%",
                                            background: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ▶
                                    </div>
                                </div>

                                {/* TEXT */}
                                {/* <div className="card-body text-center px-4 py-4">
                                    <h6 className="fw-bold mb-1">{item.name}</h6>
                                </div> */}

                            </div>
                        </div>
                    ))}

                </div>

                {/* MODAL VIDEO */}
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={activeVideo}
                    onClose={() => setOpen(false)}
                />

                {/* BUTTON */}
                <div className="text-center mt-5 flex justify-center">
                    <a
                        style={{ textDecoration: "none" }}
                        href={cladcut_site}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="try-button flex items-center gap-2">
                            {data.cta}
                        </button>
                    </a>
                </div>

            </Container>
        </section>
    );
}