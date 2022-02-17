import React from 'react'
import './schedulerComponent.css';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import LinearProgress from "@mui/material/LinearProgress";
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const SchedulerComponent = () => (

   <div>
      <h4>
         오늘의 할 일 <AddIcon />
      </h4>
      <LinearProgress variant="determinate" className='progressBar'/>
      
         <FormControlLabel control={<Checkbox defaultChecked />} label="아로마테라피 하기" />
         <CircleIcon />
         <br />
         <FormControlLabel control={<Checkbox defaultChecked />} label="전자기기 사용 줄이기" />
         <CircleIcon />
         <br />
         <FormControlLabel control={<Checkbox defaultChecked />} label="나에 대한 응원의 말 작성" />
         <CircleIcon />
         <br />
         <MoreHorizIcon />
   </div>
)

export default SchedulerComponent

