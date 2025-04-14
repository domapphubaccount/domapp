import Bondify_VID from "@/assets/images/Grasshopper/coverpage.png";
import Video from "@/components/Reuse/Section_Head/Video";
import "react-modal-video/scss/modal-video.scss";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

export default function VideoSection() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { bondifycrm } = useSelector((state) => state.bondifycrmRed);
  return (
    <section className="mt-16">
      <Container>
        <div className="my-12" dir={dir}>
          <Video
            title={bondifycrm(lang).sections.Quick_start.title}
            body={bondifycrm(lang).sections.Quick_start.sloganGrass}
            src={"O-Ws8Gd5l9E"}
            className={"clad-v-bannar"}
            bannar={Bondify_VID}
          />
        </div>
      </Container>
    </section>
  );
}
