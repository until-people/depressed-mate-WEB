import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const drawerWidth = 200

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}))

const Header = () => {
   return (
      <AppBar position="" color={'transparent'} sx={{ boxShadow: 'none' }}>
         <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
               Depressed Mate
            </Typography>
            {/* <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search -" inputProps={{ 'aria-label': 'search google maps' }} /> */}
            <Tooltip title="logout">
               <IconButton onClick={() => {}}>
                  <CloseIcon color="inherit" />
               </IconButton>
            </Tooltip>
         </Toolbar>
      </AppBar>
   )
}

export default Header
