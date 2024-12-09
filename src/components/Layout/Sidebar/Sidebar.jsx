"use client";
import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { contact_Toggle } from "@/Store/reducers/Header";

export default function Sidebar({ items }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [openAccordion, setOpenAccordion] = React.useState(2);
  const handleOpen = (value) =>
    setOpenAccordion(openAccordion === value ? 0 : value);
  const dispatch = useDispatch();
  const header = useSelector(state => state.headerRed.header);
  const lang = useSelector(state => state.languageSlice.lang);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <React.Fragment>
      <i
        onClick={openDrawer}
        className="bi bi-list nav_toggle cursor-pointer text-2xl text-gray-700 hover:text-blue-500"
      ></i>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-auto"
      >
        <div className="mb-4 flex items-center justify-between p-1">
          <Typography variant="h5" color="white">
            <Image
              src={header(lang).logo.src}
              width={120}
              height={50}
              alt="logo"
              className="main_logo"
            />
          </Typography>
          <IconButton
            variant="text"
            color="white"
            onClick={closeDrawer}
            className="hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="p-2 space-y-2">
          {header(lang) &&
            header(lang).nav.map((item, i) => (
              <Accordion
                key={i}
                open={openAccordion === i}
                icon={item.list ? <Icon id={i} open={openAccordion} /> : null}
                className="bg-gray-700 rounded-lg"
              >
                <AccordionHeader
                  onClick={() => handleOpen(i)}
                  className="mb-2 p-0 text-lg text-white hover:bg-gray-600 rounded-lg"
                >
                  <Link href={item.link} className="nav-link w-100 p-2" onClick={item.contact ? () => dispatch(contact_Toggle(true)) : ''}>{item.name}</Link>
                </AccordionHeader>
                {item.list && (
                  <AccordionBody className="bg-gray-800 p-1 rounded-lg">
                    {item.list.map((products_section, index) => (
                      <ListItem
                        key={index}
                        className="p-1 text-white hover:bg-gray-700 rounded-lg cursor-pointer"
                      >
                        <div className="w-100">
                          <div className="text-base font-semibold w-100">
                            {products_section.title}
                          </div>
                          <div className="mt-2 space-y-2 w-100">
                            {products_section.products.map((product, index) => (
                              <div
                                key={index}
                                className="space-x-3 p-2 w-100  hover:bg-gray-600"
                              >
                                <Link href={product.link} className="flex items-center no-underline	">
                                  <Image
                                    src={product.img}
                                    width={20}
                                    height={20}
                                    alt={product.name}
                                    className="rounded-full me-2"
                                  />
                                  <span className="text-sm text-gray-300">
                                    {product.name}
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </ListItem>
                    ))}
                  </AccordionBody>
                )}
              </Accordion>
            ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
