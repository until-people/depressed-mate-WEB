import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ScheduleIcon from '@mui/icons-material/Schedule'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import SettingsIcon from '@mui/icons-material/Settings'
import { useHistory } from 'react-router-dom'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ListItemButton from '@mui/material/ListItemButton'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'

const drawerWidth = 200

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
}))

const openedMixin = theme => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden',
})

const closedMixin = theme => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
   },
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: 'nowrap',
   boxSizing: 'border-box',
   ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
   }),
}))

const MenuTabs = [
   { title: 'scheduler', icon: <ScheduleIcon />, url: '' },
   { title: 'my schedule', icon: <AutoFixHighIcon />, url: '/my-schedule' },
   { title: 'my information', icon: <EmojiPeopleIcon />, url: '/my-information' },
   { title: 'setting', icon: <SettingsIcon />, url: '/setting', child: [] },
   //  { title: '행위관리', iconName: <ExtensionIcon /> , },
]
export default function Drawers() {
   const history = useHistory()
   const [drawerOpen, setDrawerOpen] = React.useState(false)
   const [settingOpen, setSettingOpen] = React.useState(false)

   const handleDrawerOpen = () => {
      setDrawerOpen(true)
   }
   const handleDrawerClose = () => {
      setDrawerOpen(false)
      // if (settingOpen) handleSettingClose()
   }
   const handleSettingOpen = () => {
      setSettingOpen(true)
   }
   const handleSettingClose = () => {
      setSettingOpen(false)
   }
   return (
      <Drawer
         sx={{
            '& .MuiDrawer-paper': {
               borderRight: '0px',
               borderButtom: '0px',
            },
            display: 'flex',
         }}
         variant="permanent"
         open={drawerOpen}
      >
         <DrawerHeader>
            {/* <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton> */}
         </DrawerHeader>
         <List onPointerOver={handleDrawerOpen} onPointerOut={handleDrawerClose}>
            {MenuTabs.map((value, index) => (
               <ListItem
                  button
                  onClick={() => {
                     if (!value.child) {
                        history.push(value.url)
                        return
                     }
                     if (settingOpen) handleSettingClose()
                     else handleSettingOpen()
                  }}
                  key={value.title}
               >
                  <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText primary={value.title} />
                  {value.title === 'setting' ? settingOpen ? <ExpandLess /> : <ExpandMore /> : <></>}
               </ListItem>
            ))}
            <Collapse in={settingOpen} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                     <ListItemIcon>
                        <StarBorder />
                     </ListItemIcon>
                     <ListItemText primary="Starred" />
                  </ListItemButton>
               </List>
            </Collapse>
         </List>

         <div style={{ height: '100%' }}></div>
         <List>
            {Etc.map((value, index) => (
               <ListItem
                  button
                  onClick={() => {
                     history.push(value.url)
                  }}
                  key={value.title}
                  onPointerOver={handleDrawerOpen}
                  onPointerOut={handleDrawerClose}
               >
                  <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText primary={value.title} />
               </ListItem>
            ))}
         </List>
      </Drawer>
   )
}

const Etc = [{ title: 'admin', icon: <SettingsOutlinedIcon />, url: '/admin' }]
