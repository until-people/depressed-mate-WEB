import React, { useState } from 'react'
import '../../common/App.css'

// MUI import
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Switch from '@mui/material/Switch';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const MyScheduleComponent = () => {
// const [state, useState] = useState('');
const [style, setStyle] = useState("cont");

const changeStyle = () => {
  setStyle("cont2")
}

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    
   <div>
   
      <h5> 선호태그 해제하기 
        <Switch {...label} defaultChecked size="small" /> 
      </h5> 

      {/* Button */}
      <div className={style}>
        <Button className="button" onClick={ changeStyle }>#활동적인</Button>
      </div>

      <div>
        <Button>#집에서</Button>
        <Button>#바깥에서</Button>
        <Button>#날씨 좋은 날</Button>
        <Button>#집콕하기좋은날</Button>
        <Button>#마음을 따뜻하게</Button>
        <Button>#차분하게</Button>
        <Button>#활기차게</Button>
        <Button>#구독</Button>
        <Button>#다이어리</Button>
        <Button>#알림설정</Button>
        <Button>#선팔</Button>
        <Button>#맞팔</Button>
      </div> <br />

      {/* Accoridon */}
      <div className="AccStyle">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>릴렉스</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - 아로마테라피 하기 <AddIcon></AddIcon> <br />
              - 스트레칭 하기 <AddIcon></AddIcon> <br />
              - 심호흡하기 <AddIcon></AddIcon> <br />
              - 반신욕 하기 <AddIcon></AddIcon> <br />
              - 햇빛 쬐기 (30분) <AddIcon></AddIcon> <br />
              - 창문을 열어 환기 시키기 <AddIcon></AddIcon> <br />
              - 이부자리 정리하기 <AddIcon></AddIcon> <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>움직이기</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - 청소기 돌리기 <AddIcon></AddIcon> <br />
              - 외식하러 나가기 <AddIcon></AddIcon> <br />
              - 가볍게 뛰기 <AddIcon></AddIcon> <br />
              - 빠르게 걷기(40분) <AddIcon></AddIcon> <br />
              - 근처 공원에 들리기 <AddIcon></AddIcon> <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>마음 바라보기</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - 감사한 일 작성하기 <AddIcon></AddIcon> <br />
              - 오늘 일기 쓰기 <AddIcon></AddIcon> <br />
              - 오늘 하루에 대해 계획 작성해보기 <AddIcon></AddIcon> <br />
              - 나에 대한 응원의 말 작성 <AddIcon></AddIcon> <br />
              - 독서하기 <AddIcon></AddIcon> <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>건강한 루틴</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - 전자기기 사용 줄이기 <AddIcon></AddIcon> <br />
              - 건강식 먹기 <AddIcon></AddIcon> <br />
              - 가공식품 안먹기 <AddIcon></AddIcon> <br />
              - 금주/금연하기 <AddIcon></AddIcon> <br />
              - 저녁 11시 잠자기 <AddIcon></AddIcon> <br />
              - 수면 시간 지키기 <AddIcon></AddIcon> <br />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>내가 만들기</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Button onClick={handleOpen}>만들기</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    나만의 할일 만들기
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    그룹 구분 <Button></Button> <br />
                    태그 <br />
                    이름 입력 <TextField id="standard-basic" variant="standard" /> <br />
                    부가 설명 <TextField id="standard-basic" variant="standard" /> 
                  </Typography>
                </Box>
              </Modal>
              <Button>수정</Button>
              <Button>삭제</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>랜덤으로 넣기</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* 랜덤으로 돌리는 창 구현 */}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
   </div>
  

  )
}

export default MyScheduleComponent