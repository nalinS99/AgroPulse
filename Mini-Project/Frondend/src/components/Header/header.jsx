import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import './header.css';
import FadeIn from 'react-fade-in';
import { Slide } from '@mui/material';
import { IoHome, IoDownload, IoHelpCircleOutline, IoInformationCircleOutline, IoLanguage, IoSettings, IoDocumentText, IoCall } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('Language');
  const [selectedNavItem, setSelectedNavItem] = React.useState(null);
  const [openmenu, setOpenmenu] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleMenu = (newOpen) => () => {
    setOpenmenu(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, marginTop:5 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoHome />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
  
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <IoDownload />
            </ListItemIcon>
            <ListItemText primary={"Download"}/>
          </ListItemButton>
        </ListItem>
  
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoHelpCircleOutline />
            </ListItemIcon>
            <ListItemText primary={"Support"} />
          </ListItemButton>
        </ListItem>
  
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoInformationCircleOutline />
            </ListItemIcon>
            <ListItemText primary={"About us"} />
          </ListItemButton>
        </ListItem>
  
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <IoLanguage />
            </ListItemIcon>
            <ListItemText primary={"Language"} />
          </ListItemButton>
        </ListItem>
  
      </List>
      <Divider />
      <List>
  
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoSettings />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
  
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoDocumentText />
            </ListItemIcon>
            <ListItemText primary={"Policy"} />
          </ListItemButton>
        </ListItem>
  
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoCall />
            </ListItemIcon>
            <ListItemText primary={"Contact us"} />
          </ListItemButton>
        </ListItem>
  
      </List>
    </Box>
  );

  const handleLanguageButtonClick = () => {
    setOpen(true);
  };
  

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };
  

  return (
    <div>
      <FadeIn>
      <header>
        <h2> <img src="/images/logo.jpeg" alt="logo" width="219px" height="103px" /> </h2>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  box">
          <li className={selectedNavItem === 'home' ? 'selected' : ''}>
            <Button variant="text" color="success" onClick={() => handleNavItemClick('home')}>Home</Button>
          </li>
          <li className={selectedNavItem === 'download' ? 'selected' : ''}>
            <Button variant="text" onClick={() => handleNavItemClick('download')}>Download</Button>
          </li>
          <li className={selectedNavItem === 'support' ? 'selected' : ''}>
            <Button variant="text" onClick={() => handleNavItemClick('support')}>Support</Button>
          </li>
          <li className={selectedNavItem === 'about' ? 'selected' : ''}>
            <Button variant="text" onClick={() => handleNavItemClick('about')}>About us</Button>
          </li>
          <li>
            <Button variant="contained" className="lang" onClick={handleLanguageButtonClick}>
              {selectedLanguage} <TiArrowSortedDown className="langIcon"/>
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              className="langBox"
              sx={{ color: '#014802'}}
              TransitionComponent={Slide}
            >
              <DialogTitle sx={{ bgcolor:"#014802",color:"white" }}>Select Language</DialogTitle>
              <DialogContent sx={{ color: '#014802',}}>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap',padding:"10px 20px"}}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel sx={{ color: '#014802' }}>Language</InputLabel>
                    <Select
                      native
                      value={selectedLanguage}
                      onChange={handleLanguageChange}
                      input={<OutlinedInput label="Language" id="language-select" />}
                      sx={{ color: '#014802',width:"300px",  }}
                    >
                      <option value="" disabled>Select a language</option>
                      <option value="english" sx={{ color: '#014802',bgcolor:'red' }}>English</option>
                      <option value="spanish">Tamil</option>
                      <option value="spanish">English</option>
                    </Select>
                  </FormControl>
                </Box>
              </DialogContent>
            </Dialog>
          </li>
        </div>
        <Button variant="text" className='menuicon' onClick={toggleMenu(true)}><RiMenu2Fill /></Button>
      </header>
      
      <Drawer open={openmenu} onClose={toggleMenu(false)}>
        {DrawerList}
      </Drawer>
      </FadeIn>
    </div>
  );
}