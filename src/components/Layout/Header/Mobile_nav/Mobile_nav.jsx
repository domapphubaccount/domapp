import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Link from 'next/link';
import Lang from '../LNG/Lang';
import Sidebar from '@/components/sidebar/Sidebar';
import cladIcon from "@/assets/images/Clad/ICON.png"
import byldIcon from "@/assets/images/Byld/iconlogo.png"
import rdappIcon from "@/assets/images/RDApp/logo.png"
import windmaster from "@/assets/images/windmaster/windmaster.png"
import chatPlus from "@/assets/images/chatPlus/logo.png"
import customization from "@/assets/images/customization/customization.png"
import grass from "@/assets/images/Grasshopper/insect.png"


export default function MobileNav() {
  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const items = [
    {
      index: 1,
      title: 'CladCut',
      link:'/cladcut',
      icon:   <img style={{width:'15px',height:'15px'}} src={cladIcon.src} alt='' /> 
    },
    {
      index: 2,
      title: 'WindMaster',
      link:'/windmaster',
      icon:   <img style={{width:'15px',height:'15px'}} src={windmaster.src} alt='' /> 
    },
    {
      index: 4,
      title: 'Bondify CRM',
      link: '/bondifycrm',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 m-auto" style={{width: "16px"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5L18.75 6.188M21 7.5V9.75M21 7.5L18.75 8.813M3 7.5L5.25 6.188M3 7.5L5.25 8.813M3 7.5V9.75M12 12.75L14.25 11.438M12 12.75L9.75 11.438M12 12.75V15M12 21.75L14.25 20.438M12 21.75V19.5M12 21.75L9.75 20.438M9.75 4.875L12 3.188L14.25 4.875M21 14.25V16.5L18.75 17.813M3 16.5V14.25L5.25 15.563" />
            </svg> 
    },
    {
      index: 5,
      title: 'ChatPlus',
      link: '/chatplus',
      icon: <img style={{width:'15px',height:'15px'}} src={chatPlus.src} alt='' /> 
    },
    {
      index: 6,
      title: 'RDApp',
      link: '/rdapp',
      icon: <img style={{width:'15px',height:'15px'}} src={rdappIcon.src} alt='' /> 
    },
    {
      index: 7,
      title: 'Software And Customization',
      link: '/customization',
      icon: <img style={{width:'15px',height:'15px'}} src={customization.src} alt='' /> 
    },
    {
      index: 8,
      title: 'Grasshopper® 3D',
      link: '/grasshopper',
      icon:  
      <img style={{width:'15px',height:'15px'}} src={grass.src} alt='' /> 
    },
    {
      index: 1,
      title: 'Byld',
      link:'/byld',
      icon:   <img style={{width:'15px',height:'17px'}} src={byldIcon.src} alt='' /> 
    },
  ];

  return (
    <Sidebar items={items}/>
  );
}