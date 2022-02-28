import React, { useState } from 'react'

import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Stack from '@mui/material/Stack';

import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';
import CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';
import getDaysInMonth from 'date-fns/getDaysInMonth';

import { styled } from '@mui/material/styles';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';

const CustomPickersDay = styled(PickersDay, {   //달력일주일색칠(안봐도됨)
   shouldForwardProp: (prop) =>
     prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
 })(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
   ...(dayIsBetween && {
     borderRadius: 0,
     backgroundColor: theme.palette.primary.main,
     color: theme.palette.common.white,
     '&:hover, &:focus': {
       backgroundColor: theme.palette.primary.dark,
     },
   }),
   ...(isFirstDay && {
     borderTopLeftRadius: '50%',
     borderBottomLeftRadius: '50%',
   }),
   ...(isLastDay && {
     borderTopRightRadius: '50%',
     borderBottomRightRadius: '50%',
   }),
 }));

function getRandomNumber(min, max) {   //색칠할 랜덤한 날짜 구하기
   return Math.round(Math.random() * (max - min) + min);
 }

 /**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) { 
   return new Promise((resolve, reject) => { //콜백함수선언
     const timeout = setTimeout(() => {
       const daysInMonth = getDaysInMonth(date);   //그 달의 날짜 저장
       const daysToHighlight = [1, 2, 3, 4, 5].map(() => getRandomNumber(1, daysInMonth));   //날짜를 랜덤하게 받은 실행 결과를 이용해 새로운 배열 생성
 
       resolve({ daysToHighlight });   //이행되면 배열 저장
     }, 500);
 
     signal.onabort = () => {
       clearTimeout(timeout);
       reject(new DOMException('aborted', 'AbortError'));
     };  //0.5초 타임아웃되면실패?
   });
 }
 
 const initialValue = new Date();   //초기값선언


const SchedulerComponent = () => {
   const [value, setValue] = React.useState(new Date()); //달력값으로 사용 할 Date UseState

   const requestAbortController = React.useRef(null); //useRef 모르겠음
   const [isLoading, setIsLoading] = React.useState(false); //초기 state값 false(로딩되는동안회색표시)
   const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

   const fetchHighlightedDays = (date) => {
      const controller = new AbortController();
      fakeFetch(date, { //앞에서 만든 fakeFetch 함수 실행
         signal: controller.signal,
      })
         .then(({ daysToHighlight }) => { //resolve
         setHighlightedDays(daysToHighlight);
         setIsLoading(false);
         })
         .catch((error) => {
         // ignore the error if it's caused by `controller.abort`
         if (error.name !== 'AbortError') {
            throw error;
         }
         });

      requestAbortController.current = controller;
   };

   React.useEffect(() => {
      fetchHighlightedDays(initialValue);
      // abort request on unmount
      return () => requestAbortController.current?.abort();
   }, []);

   const handleMonthChange = (date) => {
      if (requestAbortController.current) {
         // make sure that you are aborting useless requests
         // because it is possible to switch between months pretty quickly
         requestAbortController.current.abort();
      }

      setIsLoading(true);
      setHighlightedDays([]);
      fetchHighlightedDays(date);
   };



   const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => { //일주일색칠(안봐도됨)
      if (!value) {
        return <PickersDay {...pickersDayProps} />;
      }
  
      const start = startOfWeek(value);
      const end = endOfWeek(value);
  
      const dayIsBetween = isWithinInterval(date, { start, end });
      const isFirstDay = isSameDay(date, start);
      const isLastDay = isSameDay(date, end);
  
      return (
        <CustomPickersDay
          {...pickersDayProps}
          disableMargin
          dayIsBetween={dayIsBetween}
          isFirstDay={isFirstDay}
          isLastDay={isLastDay}
        />
      );
    };




   return(
      <div>
         <Stack direction="row" spacing={2}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
               displayStaticWrapperAs="desktop" //직접날짜수정있고없고
               label="scheduler"
               orientation="portrait"  //가로세로방향
               openTo="day"   //초기에날짜창
               inputFormat={"yyyy-MM-dd"} //인풋형식변경
               mask={"____-__-__"}  //인풋형식에 따라 변경
               value={value}
               loading={isLoading}
               shouldDisableDate={isWeekend} //주말색변경
               onChange={(newValue) => {
                  setValue(newValue);
               }} //날짜 변경 시 value를 해당 날짜로 초기화
               onMonthChange={handleMonthChange}
               renderInput={(params) => <TextField {...params} />}
               
               renderLoading={() => <CalendarPickerSkeleton />}
               renderDay={(day, _value, DayComponentProps) => { //패치표시하기
                  const isSelected =
                     !DayComponentProps.outsideCurrentMonth &&
                     highlightedDays.indexOf(day.getDate()) > 0;

                  return ( //배지붙이기
                     <Badge
                     key={day.toString()}
                     overlap="circular"
                     badgeContent={isSelected ? '💙' : undefined}
                     >
                     <PickersDay {...DayComponentProps} />
                     </Badge>
                  );
               }}
            />
         </LocalizationProvider>
         </Stack>
      </div>
      )
}

//()=>{} //함수(중괄호 안에 있는 것을 실행하겠다) 로직이 필요한 경우
//()=>() //뒤에있는 소괄호 안에 있는 것을 바로 리턴하겠다. 로직이 필요 없는 경우

export default SchedulerComponent