import React, { useState } from "react";
import playIcon from "@/assets/images/Clad/play-button.png";
import ModalVideo from "react-modal-video";
import { Col, Row } from "reactstrap";

function Video({title , body , src , className , bannar}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="my-5">
          <Row>
            <Col sm={12} md={6}>
              <div className="">
                <div className="my-5 text-slate-900">
                  <h3 className="mb-5">{title}</h3>
                  <h1 className="mb-5">{body}</h1>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="">
                <div className="relative">
                  <div class={ `${className} absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12`}></div>
                  <div class="relative">
                    <div title="Magical Scotland - 4K Scenic Relaxation Film with Calming Music">
                      <div className="relative video-screen-border">
                        <img
                          className="w-full aspect-video rounded-2xl"
                          src={bannar.src}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        />
                        <div className="play-icon-clad">
                          <div
                            class="border_circle"
                            onClick={() => setOpen(true)}
                          ></div>
                          <img src={playIcon.src} width={50} />
                        </div>
                      </div>
                      <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId={src}
                        onClose={() => setOpen(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default Video;
