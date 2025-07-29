import React, { useState } from "react";
import playIcon from "@/assets/images/Clad/play-button.png";
import ModalVideo from "react-modal-video";
import { Col, Row } from "reactstrap";

function Video({ title, body, src, className, bannar, additional }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={additional}>
      <div className="container">
        <div className="my-5">
          <Row>
            <Col sm={12} md={6}>
              <div className="">
                <div className="my-5 text-slate-900">
                  <h4 className="mb-5">{title}</h4>
                  <h3 className="mb-5">{body}</h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="">
                <div className="relative">
                  <div className={`${className} absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12`}></div>
                  <div className="relative">
                    <div >
                      <div className="relative video-screen-border">
                        <img loading="lazy"
                          className="w-full aspect-video rounded-2xl"
                          src={bannar.src}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                        <div className="play-icon-clad">
                          <div
                            className="border_circle"
                            onClick={() => setOpen(true)}
                          ></div>
                          <img loading="lazy" src={playIcon.src} width={50} />
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
