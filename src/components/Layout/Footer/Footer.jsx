"use client";
import Link from "next/link";
import { Container } from "reactstrap";
import LanguageDropdown from "./Lang";
import { useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { Accordion, useAccordionButton } from "react-bootstrap";

export default function Footer() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { header } = useSelector((state) => state.headerRed);
  const { footer } = useSelector((state) => state.footerRed);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or return loading spinner
  }
console.log(header(lang).nav.filter((item)=> item.list)[0].list.map(item => item.products.filter(item => item.link != "/customization" && item.link != "/grasshopper")))
  return (
    <footer dir={dir}>
      {isMounted && (
        <>
          <Suspense fallback={""}>
            <div className="bg-gray-900 p-4">
              <Container>
                <h3 className="font-semibold text-sm mb-2 text-center text-white">
                  DomApp
                </h3>
                <div className="footer p-8 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-7 gap-6">
                {/* About Us Section */}
                    <div>
                      <div className="mb-3">
                        <h5 className="font-semibold text-sm mb-2">
                          {footer(lang).about.title}
                        </h5>
                        <ul className="space-y-1">
                          {header(lang)
                            .nav.map((item, index) => (
                              item.link != "/#about" &&
                              <li key={index}>
                                <Link
                                  href={item.link}
                                  className="hover:underline"
                                >
                                  {item.name[0]}
                                  {item.name.slice(1).toLowerCase()}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">
                          {footer(lang).legal}
                        </h5>
                        <ul className="space-y-1">
                          <li>
                            <Link href="/privacy" className="hover:underline">
                              {lang === "ar"
                                ? "الشروط والأحكام"
                                : "Privacy policy"}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Services Section */}
                    <div>
                      <h5 className="font-semibold text-sm mb-2">
                        {footer(lang).services.title}
                      </h5>
                      <ul className="space-y-1">
                        {footer(lang).services.slice.map((item, index) => (
                          <li key={index}>
                            {/* <a href="#" className="hover:underline">
                              {item}
                            </a> */}
                            <Accordion>
                              <CustomToggle eventKey={index}>
                                <a>{item.title}</a>
                              </CustomToggle>
                              <ul id={`accordion-${index}`} className="hidden">
                                {item.slice.map((item, index) => (
                                  <li key={index} className="ms-1 text-gray-300	">
                                    <small>{item}</small>
                                  </li>
                                ))}
                              </ul>
                            </Accordion>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Products Section */}
                    <div>
                      <h5 className="font-semibold text-sm mb-2">
                        {footer(lang).products.title}
                      </h5>
                      <ul className="space-y-1">
                        {header(lang).nav.filter((item) => item.list)[0].list.map((item) => item.products.filter((item) => (item.link !== "/grasshopper" && item.link !== "/customization"))).map((item,index)=>(
                              item.length > 0 && item.map((item,index)=>(
                              <li key={index}>
                                <Link
                                  href={item.link}
                                  className="hover:underline"
                                >
                                  {item.name}
                                </Link>
                              </li>
                              ))
                            ))
                          }
                      </ul>
                    </div>
                    {/* Exclusive Dealer Section */}
                    <div>
                      <h5 className="font-semibold text-sm mb-2">
                        {footer(lang).dealers.title}
                      </h5>
                      <ul className="space-y-1">
                        {footer(lang).dealers.slice.map((item, index) => (
                          <li key={index}>
                            <a href="#" className="hover:underline">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Community Section */}
                    <div>
                      <h5 className="font-semibold text-sm mb-2">
                        {footer(lang).community.title}
                      </h5>
                      <ul className="space-y-1">
                        {footer(lang).community.slice.map((item, index) => (
                          <li key={index}>
                            <a href="#" className="hover:underline">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* DomApp Section */}
                    <div className="col-span-2">
                      <LanguageDropdown text_color={"text-white"} />

                      <hr />

                      <div className="text-sm mb-4">
                        <p className="mb-4">{footer(lang).summary[0]}</p>
                        {/* <><div className="my-3"></div></> */}
                        <p>{footer(lang).summary[1]}</p>
                      </div>

                      {/* Social Media Icons */}
                      <div className="flex items-center space-x-4">
                        {/* <p className="mt-[2px] mb-0">{footer(lang).social}</p> */}
                        <Link
                          href="https://www.youtube.com/@DomAppHub"
                          className="ml-3"
                        >
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
                        <Link href="https://www.linkedin.com/company/domapphub/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-gray-800 dark:text-white hover:text-[#5ba2ea]"
                          >
                            <path d="M 18.492188 2.9941406 A 0.50005 0.50005 0 0 0 18.113281 3.1816406 L 13.060547 9.3164062 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.8652344 13.199219 L 4.1132812 20.181641 A 0.50090307 0.50090307 0 1 0 4.8867188 20.818359 L 10.470703 14.037109 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.667969 10.15625 L 18.886719 3.8183594 A 0.50005 0.50005 0 0 0 18.492188 2.9941406 z M 4.4550781 4 L 7.5507812 4 C 7.8257813 4 8.0850937 4.1324687 8.2460938 4.3554688 L 19.544922 20 L 16.451172 20 C 16.176172 20 15.916859 19.867531 15.755859 19.644531 L 4.4550781 4 z"></path>
                          </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/domapphub/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 48 48"
                            className="w-6 h-6 text-gray-800 dark:text-white hover:text-[#6129e9fc]"
                            fill="currentColor"
                          >
                            <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                          </svg>
                        </Link>
                        <Link href="https://wa.me/201501060885" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-gray-800 dark:text-white hover:text-[#5bea61]"
                            fill="currentColor"
                          >
                            <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Suspense>

          <div className="p-4" dir={"ltr"}>
            <Container>
              <div className="footer grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-2">
                <div className="sm:col-span-2">
                  &#169;2024 DomApp. All rights reserved.
                </div>
                {/* <div className="px-3">
              <Link href="/privacy" className="privacy_link">
                {lang === "ar" ? "الشروط والأحكام" : "Privacy policy"}
              </Link>
            </div> */}
              </div>
            </Container>
          </div>
        </>
      )}
    </footer>
  );
}
function CustomToggle({ eventKey, children }) {
  return (
    <button
      type="button"
      onClick={() =>
        document
          .getElementById(`accordion-${eventKey}`)
          .classList.toggle("hidden")
      }
      className="font-semibold hover:underline d-flex justify-content-between align-items-center"
    >
      {children}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-3 ms-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}
