import React from 'react'
import './schedulerComponent.css';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import LinearProgress from "@mui/material/LinearProgress";
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

//프로그레스바, 모달창
const SchedulerComponent = () => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
   
      <div>
         <h4>
         <div>오늘의 할 일
            <Button onClick={handleOpen}><AddIcon /></Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={modalStyle}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal1
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.1
               </Typography>
            </Box>
            </Modal>
         </div>
         </h4>
         <LinearProgress variant="determinate" className='progressBar'/>      
         <FormControlLabel control={<Checkbox defaultChecked />} label="아로마테라피 하기" />
         <Button onClick={handleOpen}>•</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title2"
            aria-describedby="modal-modal-description2"
            >
            <Box sx={modalStyle}>
               <Typography id="modal-modal-title2" variant="h6" component="h2">
                  Text in a modal2
               </Typography>
               <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.2
               </Typography>
            </Box>
            </Modal>
         <br />
         <FormControlLabel control={<Checkbox defaultChecked />} label="전자기기 사용 줄이기" />
         <Button onClick={handleOpen}>•</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title3"
            aria-describedby="modal-modal-description3"
            >
            <Box sx={modalStyle}>
               <Typography id="modal-modal-title3" variant="h6" component="h2">
                  Text in a modal3
               </Typography>
               <Typography id="modal-modal-description3" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.3
               </Typography>
            </Box>
            </Modal>
         <br />
         <FormControlLabel control={<Checkbox defaultChecked />} label="나에 대한 응원의 말 작성" />
         <Button onClick={handleOpen}>•</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title4"
            aria-describedby="modal-modal-description4"
            >
            <Box sx={modalStyle}>
               <Typography id="modal-modal-title4" variant="h6" component="h2">
                  Text in a modal4
               </Typography>
               <Typography id="modal-modal-description4" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.4
               </Typography>
            </Box>
            </Modal>
         <br />
         <Button onClick={handleOpen}><MoreHorizIcon /></Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title5"
            aria-describedby="modal-modal-description5"
            >
            <Box sx={modalStyle}>
               <Typography id="modal-modal-title5" variant="h6" component="h2">
                  Text in a modal512
               </Typography>
               <Typography id="modal-modal-description5" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.512
               </Typography>
            </Box>
            </Modal>
      </div>
   )
}

export default SchedulerComponent
//schedulerComponent안에 있는 데이터를 객체에 담아 전달하겠다. 