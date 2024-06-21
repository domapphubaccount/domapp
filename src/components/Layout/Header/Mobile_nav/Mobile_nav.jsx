import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Link from 'next/link';
import Lang from '../LNG/Lang';

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
      title: 'CLADCUT',
      link:'/cladCut',
      caption: 'Precision cutting made effortless with CLADCUT',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 2,
      title: 'WINDMASTER',
      link:'/windmaster',
      caption: 'Powerful structural analysis and design .Instant access, directly from your browser',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    // {
    //   index: 3,
    //   title: 'Facade Static',
    //   link: '/facade',
    //   caption: 'Section 2',
    //   Section_2:{
    //     first:{
    //       caption:'',
    //       src:''
    //     },
    //     seconed:{
    //       caption:'',
    //       src:''
    //     }
    //   }
    // },
    {
      index: 4,
      title: 'BONDIFY CRM',
      link: '/crmBondify',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 5,
      title: 'CHATPLUS',
      link: '/chatPlus',
      caption: 'Enable seamless communication with numerous clients simultaneously',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 6,
      title: 'RDAPP',
      link: '/rdApp',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 7,
      title: 'SOFTWARE AND CUSTOMIZATION',
      link: '/customisation',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
    {
      index: 8,
      title: 'GRASSHOPPER® 3D',
      link: '/grasshopper',
      caption: 'Section 3',
      Section_2:{
        first:{
          caption:'',
          src:''
        },
        seconed:{
          caption:'',
          src:''
        }
      }
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{name:'Home',link:'/'}, {name:'Products',link:'#products'}, {name:'About-Us' , link: '#about'} , {name:'Contact-Us' , link: '/contact'} ].map((text, index) => (
          <div key={text} disablePadding>
            {
                text.name === 'Products' ?
            <>
                <a href="#products" className='mobile-link'>
                    {text.name}
                </a>
                <ul className='header-products'>
                  {
                    items.map((item,index)=>(
                      <li key={index}>
                        <Link href={item.link} shallow>
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
            </>
            :
            <a href={text.link} className='mobile-link'>
                {text.name}
            </a>
            }
          </div>
        ))}
      </List>
      {/* <div className='px-3 mb-3'>
      <Lang />
      </div> */}
    </Box>
  );

  return (
    <div>

        <React.Fragment >
          {/* <Button onClick={toggleDrawer('top', true)}> */}
            <i onClick={toggleDrawer('top', true)} className="bi bi-list nav_toggle"></i>
            {/* </Button> */}
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
            {list('top')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}