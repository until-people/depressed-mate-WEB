import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import Avatar from '@mui/material/Avatar';
import TagIcon from '@mui/icons-material/Tag';

import PropTypes from 'prop-types';
import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';
import { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Switch from '@mui/material/Switch';

const MyInformationComponent = () => (
   <div>
      
      <Avatar 
      sx={{ width: 56, height: 56 }}
      />
      <br></br>
     <h4>닉네임 표시</h4>
     <h4>이메일 표시</h4>
     <h4>선호해시태그 표시</h4>
     <Stack direction="row" spacing={1}>
       <Chip icon={<FaceIcon />} label="내정보 수정" variant="outlined" />
     </Stack>
     <br></br>
     <Stack direction="row" spacing={1}>
       <Chip icon={<TagIcon />} label="선호태그 설정" variant="outlined" />
     </Stack>
     <h4>오늘의 할 일 추가 알림 설정</h4>
     <CustomMultiSelect defaultValue={[10]}>
      <StyledOption value={10}>AM 9:00</StyledOption>
      <StyledOption value={20}>AM 10:00</StyledOption>
      <StyledOption value={30}>AM 11:00</StyledOption>
      <StyledOption value={40}>PM 12:00</StyledOption>
      <StyledOption value={50}>PM 13:00</StyledOption>
    </CustomMultiSelect>
    <h4>오늘의 미완료 할 일 알림 설정</h4>
     <CustomMultiSelect defaultValue={[10]}>
      <StyledOption value={10}>AM 9:00</StyledOption>
      <StyledOption value={20}>AM 10:00</StyledOption>
      <StyledOption value={30}>AM 11:00</StyledOption>
      <StyledOption value={40}>PM 12:00</StyledOption>
      <StyledOption value={50}>PM 13:00</StyledOption>
    </CustomMultiSelect>
    <h4>글꼴 크기</h4>
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={2}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={2}
        marks
        min={0}
        max={10}
      />
    </Box>

    <h4>색상 선택</h4>
    <Checkbox {...label} defaultChecked /> 기본
      <Checkbox {...label}  color="secondary" /> 보라
      <Checkbox {...label}  color="success" /> 그린
      <Checkbox {...label} color="default" /> 회색
      <Checkbox
        {...label}
        
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      /> 핑크
    <h4>배경</h4>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="기본" />
        <FormControlLabel value="male" control={<Radio />} label="어둡게" />
        <FormControlLabel value="other" control={<Radio />} label="완전히 어둡게" />
        
      </RadioGroup>
   

      <h4>빈도 설정</h4>
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={2}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={2}
        marks
        min={0}
        max={10}
      />
    </Box>
    <h4>선호 태그 적용</h4>
    <Switch {...label} defaultChecked />


   </div>
)
const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomMultiSelect = React.forwardRef(function CustomMultiSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <MultiSelectUnstyled {...props} ref={ref} components={components} />;
});

CustomMultiSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
};
function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default MyInformationComponent
