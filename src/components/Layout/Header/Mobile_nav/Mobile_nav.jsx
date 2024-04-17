import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';


export default function MobileNav() {
  const [state, setState] = React.useState({
    top: false,
  });
  const [isOpen, setIsOpen] = React.useState(false);

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
      link:'/cladCut',
      caption: 'Precision cutting made effortless with CladCut',
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
      title: 'Windload',
      link:'/windload',
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
    {
      index: 3,
      title: 'Facade Static',
      link: '/facade',
      caption: 'Section 2',
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
      index: 4,
      title: 'ERP System',
      link: '/erp',
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
      title: 'ChatPlus',
      link: '/chat',
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
      title: 'RD App',
      link: '/rd',
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
    }
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{name:'Home',link:'#home'}, {name:'Products',link:'#products'}, {name:'About-Us' , link: '#about'}].map((text, index) => (
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
                      <li>
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                    <li>
                        <a href='#'>Cladcut</a>
                    </li>
                    <li>
                        <a href='#'>ChatPro</a>
                    </li>
                    <li>
                        <a href='#'>ERP</a>
                    </li>
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