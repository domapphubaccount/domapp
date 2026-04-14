"use client";
import React, { useEffect, useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { handle_language } from "@/stores/reducers/Language";
import Image from "next/image";
import USIcon from "@/assets/images/flagicons/united-states.png";
import SAIcon from "@/assets/images/flagicons/saudi-arabia.png";
import DEIcon from "@/assets/images/flagicons/deIcon.png";
import ESIcon from "@/assets/images/flagicons/esIcon.png";
import NLIcon from "@/assets/images/flagicons/nl.png";

export default function LanguageDropdown({ text_color }) {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const dispatch = useDispatch();

  const languages = useMemo(() => [
    { code: "en", label: "English", icon: USIcon, dir: "ltr" },
    { code: "ar", label: "العربية", icon: SAIcon, dir: "rtl" },
    { code: "de", label: "Deutsch", icon: DEIcon, dir: "ltr" },
    { code: "es", label: "Español", icon: ESIcon, dir: "ltr" },
    { code: "nl", label: "Nederlands", icon: NLIcon, dir: "ltr" },
  ], []);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    const langObj = languages.find((l) => l.code === storedLang);

    if (!storedLang) localStorage.setItem("lang", "en");

    dispatch(
      handle_language({
        lang: langObj.code,
        dir: langObj.dir,
      })
    );
  }, [dispatch, languages]);

  const handleLanguage = (code) => {
    const langObj = languages.find((l) => l.code === code);
    if (langObj && code !== localStorage.getItem("lang")) {
      localStorage.setItem("lang", code);
      dispatch(
        handle_language({
          lang: code,
          dir: langObj.dir,
        })
      );
    }
  };

  const currentLanguage = languages.find((l) => l.code === lang);

  return (
    <div className="ms-3">
      <Dropdown dir={dir}>
        <Dropdown.Toggle
          variant=""
          id="dropdown-basic"
          className={`${text_color} d-flex align-items-center p-0`}
        >
          {currentLanguage?.icon && (
            <Image
              loading="lazy"
              alt={`${lang} icon`}
              width={17}
              height={17}
              src={currentLanguage.icon.src}
            />
          )}
          <div className="text-xs m-0 mx-1" style={{ fontSize: ".85rem" }}>
            {currentLanguage?.label}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languages.map((l) => (
            <Dropdown.Item key={l.code}>
              <div
                className="d-flex align-items-center"
                onClick={() => handleLanguage(l.code)}
              >
                {l.icon && (
                  <Image
                    loading="lazy"
                    alt={`${l.code} icon`}
                    width={17}
                    height={17}
                    src={l.icon.src}
                  />
                )}
                <div className="mx-2" style={{ fontSize: ".85rem" }}>
                  {l.label}
                </div>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}