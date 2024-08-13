import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import arrows from "@/assets/images/Clad/arrows.svg";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import V_bannar from "@/assets/images/Clad/v-bannar.png";
import playIcon from "@/assets/images/Clad/play-button.png";
import Video from "@/components/Reuse/Section_Head/Video";

export default function Section_2() {
  return (
    <section className="mt-16">
      <Container>
        <div className="my-12">
          <Video
            title={"Quick Start"}
            body={"Don't forget to watch our quick start tutorial."}
            src={"UmEKrcSRIZE?si=UqNp8b9bfwohSbMY"}
            className={"clad-v-bannar"}
            bannar={V_bannar}
          />
        </div>
      </Container>
    </section>
  );
}
