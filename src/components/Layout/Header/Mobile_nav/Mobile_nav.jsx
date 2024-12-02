import * as React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import cladIcon from "@/assets/images/Clad/ICON.png"
import byldIcon from "@/assets/images/Byld/iconlogo.png"
import rdappIcon from "@/assets/images/RDApp/logo.png"
import windmaster from "@/assets/images/windmaster/windmaster.png"
import chatPlus from "@/assets/images/chatPlus/logo.png"
import customization from "@/assets/images/customization/customization.png"
import grass from "@/assets/images/Grasshopper/insect.png"
import bondify from "@/assets/images/BondifyCRM/bondify.png"

import { header } from '@/Store/Main/App/header/header';


export default function MobileNav() {
  const [state, setState] = React.useState({
    top: false,
  });

  const items = [
    {
      index: 1,
      title: 'CladCut',
      link:'/cladcut',
      icon: ''
    },
    {
      index: 2,
      title: 'Wind Master',
      link:'/windmaster',
      icon:   <img style={{width:'15px',height:'15px'}} src={windmaster.src} alt='' /> 
    },
    {
      index: 4,
      title: 'bondify CRM',
      link: '/bondifycrm',
      icon: <img style={{width:'15px',height:'15px'}} src={bondify.src} alt='' /> 
    },
    {
      index: 5,
      title: 'ChatPlus',
      link: '/chatplus',
      icon: <img style={{width:'15px',height:'15px'}} src={chatPlus.src} alt='' /> 
    },
    {
      index: 6,
      title: 'RDAPP',
      link: '/rdapp',
      icon: <img style={{width:'15px',height:'15px'}} src={rdappIcon.src} alt='' /> 
    },
    {
      index: 7,
      title: 'Custom Software',
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
      title: 'BYLD',
      link:'/byld',
      icon:   <img style={{width:'15px',height:'17px'}} src={byldIcon.src} alt='' /> 
    },
  ];

  return (
    <Sidebar items={items}/>
  );
}