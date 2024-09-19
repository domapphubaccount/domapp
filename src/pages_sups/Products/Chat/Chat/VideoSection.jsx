import ChatPlus_VID from "@/assets/images/chatPlus/ChatPlus_VID.png";
import Video from "@/components/Reuse/Section_Head/Video";
import "react-modal-video/scss/modal-video.scss";
import { Container } from "reactstrap";

export default function VideoSection() {
  return (
    <section className="mt-16">
      <Container>
        <div className="my-12">
          <Video
            title={"Quick Start"}
            body={"Don't forget to watch our quick start tutorial."}
            src={"aCwgkONAi7U?si=UqNp8b9bfwohSbMY"}
            className={"clad-v-bannar"}
            bannar={ChatPlus_VID}
          />
        </div>
      </Container>
    </section>
  );
}
