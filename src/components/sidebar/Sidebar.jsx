"use client"
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import Logo from "../../assets/images/Header/dark-logo.png";
import { useRouter } from "next/navigation";

 
export default function Sidebar({items}) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [openAccordion, setOpenAccordion] = React.useState(2);
 
  const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);
 
  const navigate = useRouter()

  const handleNavigate = (link) => {
    navigate.push(link)
  }


  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  const idItems = [
    {
      link:"/#whatwedo",
      title: "WHAT WE DO"
    }
    ,
    {
      link: "/#about",
      title: "ABOUT US"
    }
  ]
 
  return (
    <React.Fragment>
      <i onClick={openDrawer} className="bi bi-list nav_toggle"></i>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            <img src={Logo.src} alt="logo" className="main_logo"/>
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>


        <Accordion open={openAccordion === 2} icon={<Icon id={2} open={openAccordion} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className="p-2 mb-4">
            Products
          </AccordionHeader>
          <AccordionBody>
          {items.map((item,index)=>(

          <ListItem key={index} onClick={()=>handleNavigate(item.link)}>
            <ListItemPrefix>
              <div className="flex">
                <div className="mx-2">{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </ListItemPrefix>
          </ListItem>
          ))}
          </AccordionBody>
        </Accordion>


        {idItems.map((item,index)=>(
            <Accordion key={index} onClick={()=>{navigate.push(item.link);setOpen(false)}}>
              <AccordionHeader  className="p-2">
                    {item.title}
              </AccordionHeader>
            </Accordion>
        
          ))}






        </List>
        {/* <Button className="mt-3 ml-5" size="sm">
          Documentation
        </Button> */}
      </Drawer>
    </React.Fragment>
  );
}