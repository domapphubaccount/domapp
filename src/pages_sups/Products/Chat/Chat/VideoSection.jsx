import ChatPlus_VID from "@/assets/images/chatPlus/ChatPlus_VID.png";
import Video from "@/components/Reuse/Section_Head/Video";
import "react-modal-video/scss/modal-video.scss";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

export default function VideoSection() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { chatplus } = useSelector((state) => state.chatplusRed);

  return (
    <section className="mt-16">
      <Container>
        <div className="my-12" dir={dir}>
          <Video
            title={chatplus(lang).sections.video_section.title}
            body={chatplus(lang).sections.video_section.slogan}
            src={"tdZNU7rZsyI"}
            className={"clad-v-bannar"}
            bannar={ChatPlus_VID}
          />
        </div>
      </Container>
    </section>
  );
}
