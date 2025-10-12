import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import arrows from "@/assets/images/Clad/arrows.svg";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import V_bannar from "@/assets/images/Clad/v-bannar.png";
import playIcon from "@/assets/images/Clad/play-button.png";
import Video from "@/components/Reuse/Section_Head/Video";
import { cladcut_fram } from "@/store/Main/links/links";
import { useSelector } from "react-redux";

export default function Section_2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  return (
    <section className="mt-16">
      <Container>
        <div className="my-12" dir={dir}>
          <Video
            title={cladcut(lang).sections.Quick_start.title}
            body={cladcut(lang).sections.Quick_start.slogan}
            src={cladcut_fram}
            className={"clad-v-bannar"}
            bannar={V_bannar}
          />
        </div>
      </Container>
    </section>
  );
}
