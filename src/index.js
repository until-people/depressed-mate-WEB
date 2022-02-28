import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//<React.StrictMode> 개발 시 태그 속에서 발견한 문제를 발견해주는 역할(인지하기 힘든 오류를 잡아줌)