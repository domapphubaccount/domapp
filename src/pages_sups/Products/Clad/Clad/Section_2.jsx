import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import arrows from "@/assets/images/Clad/arrows.svg";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import V_bannar from "@/assets/images/Clad/v-bannar.png";
import playIcon from "@/assets/images/Clad/play-button.png"

export default function Section_2() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <Container>
        <div className="mt-40">
          <Row className="justify-center">
            <Col lg={8}>
              <div className="relative">
                <div class="clad-v-bannar absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12"></div>
                <div class="relative">
                  <div
                    //   class="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] z-0"
                    title="Magical Scotland - 4K Scenic Relaxation Film with Calming Music"
                  >
                    <div className="relative">
                      <img
                        className="w-full aspect-video rounded-3xl"
                        src={V_bannar.src}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      />
                      <div className="play-icon-clad">
                      <div class="border_circle" onClick={()=> setOpen(true)}></div>
                        <img  src={playIcon.src} width={100} />
                      </div>
                    </div>

                    <ModalVideo
                      channel="youtube"
                      youtube={{ mute: 0, autoplay: 0 }}
                      isOpen={isOpen}
                      videoId="UmEKrcSRIZE?si=pPcp-DdFkQS0llCH"
                      onClose={() => setOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
