"use client";
import React, { useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { handle_language } from "@/store/reducers/Language";
import Image from "next/image";
import USIcon from "@/assets/images/flagicons/united-states.png";
import SAIcon from "@/assets/images/flagicons/saudi-arabia.png";

export default function LanguageDropdown({ text_color }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = (e) => {
    if (e !== localStorage.getItem("lang")) {
      e === "ar"
        ? localStorage.setItem("lang", "ar")
        : localStorage.setItem("lang", "en");
      dispatch(
        handle_language({
          lang: e,
          dir: e === "en" ? "ltr" : "rtl",
        })
      );
    }
    handleClose();
  };
  const arIcon = useMemo(() => {
    return (
      <Image
        loading="lazy"
        alt="ar icon"
        width={17}
        height={17}
        src={SAIcon.src}
      />
    );
  }, []);

  const enIcon = useMemo(() => {
    return (
      <Image
        loading="lazy"
        alt="us icon"
        width={17}
        height={17}
        src={USIcon.src}
      />
    );
  }, []);

  return (
    <div className="ms-3">
      <Dropdown dir={dir}>
        <Dropdown.Toggle
          variant=""
          id="dropdown-basic"
          className={`${text_color} d-flex align-items-center p-0`}
        >
          {lang === "ar" ? (
            <div className="d-flex justify-content-between align-items-center">
              {arIcon}
              <div className="text-xs	 m-0 mx-1" style={{ fontSize: ".85rem" }}>
                العربية
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              {enIcon}
              <div className="text-xs	 m-0 mx-1" style={{ fontSize: ".85rem" }}>
                English
              </div>
            </div>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <div
              className="d-flex align-items-center"
              onClick={() => handleLanguage("ar")}
            >
              {arIcon}
              <div className="mx-2" style={{ fontSize: ".85rem" }}>
                العربية
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div
              className="d-flex align-items-center"
              onClick={() => {
                handleLanguage("en");
              }}
            >
              {enIcon}
              <div className="mx-2" style={{ fontSize: ".85rem" }}>
                English
              </div>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
