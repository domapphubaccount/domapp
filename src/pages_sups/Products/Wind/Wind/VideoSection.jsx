import Video from "@/components/Reuse/Section_Head/Video";
import React from "react";
import { Container } from "reactstrap";
import V_bannar from "@/assets/images/windmaster/wind.png"
import { useSelector } from "react-redux";

function WindVideo() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);

  return (
    <section dir={dir}>
      <Container>
        <Video
          title={windmaster(lang).sections.Quick_start.title}
          body={windmaster(lang).sections.Quick_start.slogan}
          src={"zlTqxfFgiuA?si=-FJqi77jqaJh0lGx"}
          className={"rd-v-bannar"}
          bannar={V_bannar}
          additional={"rd-video"}
        />
      </Container>
    </section>
  );
}

export default WindVideo;
