import React, { useState } from "react";
import { Container } from "reactstrap";
import "react-modal-video/scss/modal-video.scss";
import V_bannar from "@/assets/images/RDApp/v-bannar.png";
import Video from "@/components/Reuse/Section_Head/Video";
import { useSelector } from "react-redux";


export default function RDvideo() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);

  return (
    <section dir={dir}>
      <Container>
        <Video title={rdapp(lang).sections.Quick_start.title} body={rdapp(lang).sections.Quick_start.slogan} src={'gUuYk4fycI4?si=JXf-h2JAidvlaLKm'} className={"rd-v-bannar"} bannar={V_bannar} additional={'rd-video'} />
      </Container>
    </section>
  );
}
