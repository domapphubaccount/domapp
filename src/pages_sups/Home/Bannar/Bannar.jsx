import { linksData } from "@/Store/Main/links/linkstider";
import { League_Spartan } from "next/font/google";
import { useSelector } from "react-redux";

export const league = League_Spartan({ subsets: ["latin"] });

export default function Bannar() {
  const { home } = useSelector(
    (state) => state.MainData.content.pages.product_page
  );

  return (
    <section
      data-bs-version="5.1"
      className="menu menu2 cid-u94FdczZb5"
      id="home"
    >
      <div>
        <div className={`home_bannar`}>
          <div className="dark_bannar"></div>
          <div className="bannar_container">
            <div data-aos="fade-left" data-aos-duration="3000">
              <h1 className={league.className}>{home.sections.bannar.title}</h1>
              <p>{home.sections.bannar.slogan}</p>
              <a
                href={linksData.home.bannar.get_started}
                className="get_started"
              >
                {home.sections.bannar.button}
              </a>
            </div>
          </div>
          <svg
            className="swction_wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,224L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
