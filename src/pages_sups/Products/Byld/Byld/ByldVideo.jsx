import Video from "@/components/Reuse/Section_Head/Video";
import React from "react";
import { Container } from "reactstrap";
import V_bannar from "@/assets/images/Byld/v-bannar.png"

function ByldVideo() {
  return (
    <section>
      <Container>
        <Video
          title={"Quick Brief"}
          body={"Revolutionize Construction Compliance with BYLD AI."}
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
