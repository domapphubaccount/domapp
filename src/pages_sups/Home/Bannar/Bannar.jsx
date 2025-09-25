import { linksData } from "@/Store/Main/links/linkstider";
import { League_Spartan } from "next/font/google";
import { useSelector } from "react-redux";

export const league = League_Spartan({ subsets: ["latin"] });

export default function Bannar() {
  const lang = useSelector((state) => state.languageSlice.lang);
  const home = useSelector((state) => state.homeRed.home);

  return (
    <section
      data-bs-version="5.1"
      className="menu menu2 cid-u94FdczZb5"
      id="home"
    >
      <div>
        <div className={`home_bannar`}>
          <div class="slideshow">
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
          </div>
          <div className="dark_bannar"></div>
          <div className="bannar_container">
            <div data-aos="fade-left" data-aos-duration="3000">
              <h1 className={league.className}>
                {home(lang).sections.bannar.title}
              </h1>
              <p>{home(lang).sections.bannar.slogan}</p>
              <a
                href={linksData.home.bannar.get_started}
                className="get_started"
              >
                {home(lang).sections.bannar.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
