import Bondify_VID from "@/assets/images/BondifyCRM/Bondify_VID.png";
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
            body={bondifycrm(lang).sections.Quick_start.slogan}
            src={"aCwgkONAi7U?si=UqNp8b9bfwohSbMY"}
            className={"clad-v-bannar"}
            bannar={Bondify_VID}
          />
        </div>
      </Container>
    </section>
  );
}
