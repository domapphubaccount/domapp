"use client";
import Link from "next/link";
import { Container } from "reactstrap";
import LanguageDropdown from "./Lang";
import { useSelector } from "react-redux";

export default function Footer() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { policy } = useSelector((state) => state.privacyRed);
  const { header } = useSelector((state) => state.headerRed);
  const { footer } = useSelector((state) => state.footerRed);

  console.log(
    header(lang)
      .nav.filter((item) => item.list)[0]
      .list.map((item) => item.products.map((item, index) => item.name))
  );
  return (
    <footer dir={dir}>
      <div className="bg-gray-900 p-4">
        <Container>
          <h3 className="font-semibold text-lg mb-2 text-center text-white">
            DomApp
          </h3>
          <div className="footer p-8 text-white">
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-6">
              {/* About Us Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">{footer(lang).about.title}</h3>
                <ul className="space-y-1">
                  {header(lang)
                    .nav.slice(0, 3)
                    .map((item, index) => (
                      <li key={index}>
                        <Link href={item.link} className="hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Products Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">{footer(lang).products.title}</h3>
                <ul className="space-y-1">
                  {header(lang)
                    .nav.filter((item) => item.list)[0]
                    .list.map((item) =>
                      item.products.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="hover:underline">
                            {item.name}
                          </Link>
                        </li>
                      ))
                    )}
                </ul>
              </div>

              {/* Services Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">{footer(lang).services.title}</h3>
                <ul className="space-y-1">
                {footer(lang).services.slice.map((item,index)=>(
                  <li key={index}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>))}

                </ul>
              </div>

              {/* DomApp Section */}
              <div className="col-span-2">
                <LanguageDropdown text_color={"text-white"} />

                <hr />

                <p className="text-sm mb-4">
                {footer(lang).summary[0]}
                  <div className="my-3"></div>
                  {footer(lang).summary[1]}
                </p>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-4">
                  <p className="mt-[2px] mb-0">{footer(lang).social}</p>
                  <Link href="https://www.youtube.com/@DomAppHub">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white hover:text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  <Link href="https://www.facebook.com/profile.php?id=61562183760906">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white hover:text-[#1877F2]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  <Link href="https://www.linkedin.com/company/domapphub/">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white hover:text-[#5ba2ea]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="p-4">
        <Container>
          <div className="footer grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-2">
            <div className="sm:col-span-2">
              &#169;2024 DomApp. All rights reserved.
            </div>
            <div className="px-3">
              <Link href="/privacy" className="privacy_link">
                {lang === "ar" ? "الشروط والأحكام" : "Privacy policy"}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
