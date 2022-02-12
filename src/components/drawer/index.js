import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './header'
import Drawer from './drawer'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
export default function MiniDrawer(props) {
   const { isLogin } = props
   const [view, setView] = React.useState(false)

   const handleClick = () => {
      setView(true)
   }
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return
      }
      setView(false)
   }

   return isLogin ? (
      <>
         <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer />
            <Box sx={{ width: '100%' }}>
               <Header />
               <Stack spacing={2} sx={{ width: '100%' }}>
                  {/* <Button variant="outlined" onClick={handleClick}>
                     Open success snackbar
                  </Button> */}
                  <Snackbar open={view} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                     </Alert>
                  </Snackbar>
               </Stack>
               <Box sx={{ flexGrow: 1, p: 3, height: '100%' }}>{props.children}</Box>
            </Box>
         </Box>
      </>
   ) : (
      <>로그아웃상태</>
   )
}
