import React, { useState } from "react";
import { Container } from "reactstrap";
import "react-modal-video/scss/modal-video.scss";
import V_bannar from "@/assets/images/RDApp/v-bannar.png";
import Video from "@/components/Reuse/Section_Head/Video";


export default function RDvideo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <Container>
        <Video title={'Quick Brief'} body={'Discover a seamless experience with RDAPP.'} src={'gUuYk4fycI4?si=JXf-h2JAidvlaLKm'} className={"rd-v-bannar"} bannar={V_bannar} additional={'rd-video'} />
        {/* <div className="mt-40">
          <Row className="justify-center">
            <Col lg={8}>
              <div className="relative">
                <div class="rd-v-bannar absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12"></div>
                <div class="relative">
                  <div
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
                      videoId="IgnZiK_89_o?si=dEXVj-ZcmgJqYWko"
                      onClose={() => setOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </section>
  );
}
