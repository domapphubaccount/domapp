import Video from "@/components/Reuse/Section_Head/Video";
import React from "react";
import { Container } from "reactstrap";
import V_bannar from "@/assets/images/Byld/v-bannar.png"
import { useSelector } from "react-redux";

function ByldVideo() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { byld } = useSelector((state) => state.byldRed);

  return (
    <section>
      <Container>
        <Video
          title={byld(lang).sections.Quick_start.title}
          body={byld(lang).sections.Quick_start.slogan}
          src={"X4SlALLTSpE?si=jJ_LttMc1lvbKjK6"}
          className={"rd-v-bannar"}
          bannar={V_bannar}
          additional={"rd-video"}
        />
      </Container>
    </section>
  );
}

export default ByldVideo;
