import React, { useState } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { cladcut_site } from "@/stores/Main/links/links";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import V_bannar from "@/assets/images/Clad/v-bannar.png";
import playIcon from "@/assets/images/Clad/play-button.png";

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
              className="col-xl-6 col-md-6 d-flex align-items-stretch"
            >
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                <div className="position-relative">

                  <div
                    className="position-absolute top-0 end-0 w-50 h-100"
                    style={{
                      background: "#cfe8ff",
                      borderRadius: "50px 0 0 50px",
                      zIndex: 0,
                    }}
                  />

                  <div className="position-relative video-screen-border" style={{ height: 300 }}>

                    <img
                      src={V_bannar.src}
                      alt="video"
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        position: "relative",
                        zIndex: 1,
                      }}
                      onClick={() => openVideo(videoIds[index])}
                    />

                    {/* overlay circle + play */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        cursor: "pointer",
                      }}
                      onClick={() => openVideo(videoIds[index])}
                    >

                      {/* circle */}
                      <div
                        className="border_circle"
                        style={{
                          position: "absolute",
                          width: 70,
                          height: 70,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.2)",
                        }}
                      />

                      {/* play icon */}
                      <img
                        src={playIcon.src}
                        alt="play"
                        width={50}
                        style={{
                          position: "relative",
                          zIndex: 3,
                        }}
                      />
                    </div>
                  </div>
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

        {/* MODAL */}
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={activeVideo}
          onClose={() => setOpen(false)}
        />

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