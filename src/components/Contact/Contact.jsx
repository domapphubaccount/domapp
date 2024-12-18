"use client";
import React, { useEffect, useState, useRef } from "react";
import cont from "@/assets/images/Home_Page/customer-support.png";
import Email from "./email/Email";
import Link from "next/link";
import { Tooltip } from "reactstrap";
import cross from "@/assets/images/Home_Page/cross.png";
import { useDispatch, useSelector } from "react-redux";
import { contact_Toggle } from "@/Store/reducers/Header";

export default function Contact() {
  const [modal, setModal] = useState(false);
  const [placebox, setPlacebox] = useState(false);
  const [timebox, setTimebox] = useState(false);
  const [whatsTooltipOpen, setWhatsTooltipOpen] = useState(false);
  const [contactTooltipOpen, setContactTooltipOpen] = useState(false);
  const [timeTooltipOpen, setTimeTooltipOpen] = useState(false);
  const [placeTooltipOpen, setPlaceTooltipOpen] = useState(false);
  const { contact_card } = useSelector((state) => state.contactRed);
  const {lang,dir} = useSelector((state) => state.languageSlice);

  const dispatch = useDispatch();
  const contact_toggle = useSelector((state) => state.headerRed.contact_Toggle);

  const boxPlaceRef = useRef(null);
  const boxTimeRef = useRef(null);

  const handlePlaceToggle = () => {
    setPlacebox(!placebox);
  };

  const handleTimeToggle = () => {
    setTimebox(!timebox);
  };

  const toggleTooltip = (tooltip) => {
    switch (tooltip) {
      case "whats":
        setWhatsTooltipOpen(!whatsTooltipOpen);
        break;
      case "contact":
        setContactTooltipOpen(!contactTooltipOpen);
        break;
      case "time":
        setTimeTooltipOpen(!timeTooltipOpen);
        break;
      case "place":
        setPlaceTooltipOpen(!placeTooltipOpen);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        placebox &&
        boxPlaceRef.current &&
        !boxPlaceRef.current.contains(event.target)
      ) {
        setPlacebox(false);
      }
      if (
        timebox &&
        boxTimeRef.current &&
        !boxTimeRef.current.contains(event.target)
      ) {
        setTimebox(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [placebox, timebox]);

  return (
    <div className="contact_center">
      {contact_toggle && (
        <div data-aos="fade-up">
          <div
            className="contact_circle_content pointer"
            id="whats"
            onClick={() => toggleTooltip("whats")}
          >
            <Tooltip
              placement="left"
              isOpen={whatsTooltipOpen}
              autohide={false}
              target="whats"
              toggle={() => toggleTooltip("whats")}
            >
              {contact_card(lang).whatsapp.title}
            </Tooltip>
            <a
              href={contact_card(lang).whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
          <div
            className="contact_circle_content pointer"
            id="contact"
            onClick={() => toggleTooltip("contact")}
          >
            <Tooltip
              placement="left"
              isOpen={contactTooltipOpen}
              autohide={false}
              target="contact"
              toggle={() => toggleTooltip("contact")}
            >
              {contact_card(lang).send_message.title}
            </Tooltip>
            <Link href={contact_card(lang).send_message.link} shallow>
              <i className="bi bi-envelope-at-fill"></i>
            </Link>
          </div>
          <div
            className="contact_circle_content pointer position-relative"
            onClick={handleTimeToggle}
            id="time"
          >
            <Tooltip
              placement="left"
              isOpen={timeTooltipOpen}
              autohide={false}
              target="time"
              toggle={() => toggleTooltip("time")}
            >
              {contact_card(lang).work_time.title}
            </Tooltip>

            <i className="bi bi-clock-history"></i>
            {timebox && (
              <div
                className="box_place"
                data-aos="fade-up"
                data-aos-duration="500"
                ref={boxTimeRef}
              >
                <ul>
                  {contact_card(lang).work_time.slice.map((item, index) => (
                    <li className={`d-flex ${dir === "rtl" && 'text-end'}`} key={index} dir={dir}>
                      <div className="me-2">
                        <i className="bi bi-clock text-dark"></i>
                      </div>
                      <div dir>
                        {item.days}
                        <div className="my-2">
                          <span className="fw-bold text-light bg-primary rounded p-1">
                            {item.from}
                          </span>
                          <span className="fw-bold">- {item.by} -</span>
                          <span className="fw-bold text-light bg-primary rounded p-1">
                            {item.to}
                          </span>
                        </div>
                        <div>
                          <span className="fw-bold">{item.place}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className="contact_circle_content pointer position-relative"
            onClick={handlePlaceToggle}
            id="place"
          >
            <Tooltip
              placement="left"
              isOpen={placeTooltipOpen}
              autohide={false}
              target="place"
              toggle={() => toggleTooltip("place")}
            >
              {contact_card(lang).find_us.title}
            </Tooltip>
            <i className="bi bi-geo-alt-fill"></i>
            {placebox && (
              <div
                className="box_place"
                data-aos="fade-up"
                data-aos-duration="500"
                ref={boxPlaceRef}
              >
                <ul>
                  {contact_card(lang).find_us.slice.map((item, index) => (
                    <li className={`d-flex ${dir === "rtl" && 'text-end'}`} key={index} dir={dir}>
                      <div className="fw-bold me-2">
                        <span>
                          <i className="bi bi-geo-alt text-dark"></i>
                        </span>
                      </div>
                      <span>{item.place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="contact_container">
        <div className="border_circle"></div>
        <div
          className="contact_circle z-1 position-relative pointer"
          onClick={() => dispatch(contact_Toggle(!contact_toggle))}
        >
          <img src={!contact_toggle ? cont.src : cross.src} alt="" />
        </div>
      </div>
      <Email modal={modal} setModal={setModal} />
    </div>
  );
}
