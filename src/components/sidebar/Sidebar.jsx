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
} from "@material-tailwind/react";
import Link from "next/link";
import Logo from "../../assets/images/Header/dark-logo.png";
import { useRouter } from "next/navigation";

 
export default function Sidebar({items}) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useRouter()

  const handleNavigate = (link) => {
    navigate.push(link)
  }
 
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
            {items.map((item,index)=>(

          <ListItem key={index} onClick={()=>handleNavigate(item.link)}>
            <ListItemPrefix>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 mx-2"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clipRule="evenodd"
                />
              </svg> */}
              <div className="flex">
                <div className="mx-2">{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </ListItemPrefix>


          </ListItem>
        ))}



        </List>
        {/* <Button className="mt-3 ml-5" size="sm">
          Documentation
        </Button> */}
      </Drawer>
    </React.Fragment>
  );
}