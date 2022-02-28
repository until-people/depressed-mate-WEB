import React, { PureComponent } from 'react'
import Scheduler from './schedulerComponent' 
//schedulerComponent안에 있는 데이터를 Scheduler라는 객체에 담아 데이터를 가져오겠다

//컴포넌트 초기 생성 api 호출
class SchedulerContainer extends PureComponent {
   constructor(props) { //컴포넌트 생성자 함수(컴포넌트가 마운트 되기 전 호출
      super(...arguments) //React.Component를 상속한 컴포넌트의 생성자를 구현할 때는 super(props) 선언을 권고 ...?
      this.isFirst = true

      this.state = {
         mainTabIndex: '0',
      }
   }

   /*
   컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
   이 안에서 다른 JavaScript 프레임워크를 연동하거나, setTimeout, setInterval 및 AJAX 처리 등을 넣음
   */ 
   componentDidUpdate = async (prevProps, prevState) => { //async, await?? 비동기 동기 promise
      if (!prevProps.initialFlag && this.props.initialFlag) {
         this.isFirst = false
      }
   }
   //리액트 콜백함수
   callbackFunction = {}

   render() {

      return (
         <>
            <Scheduler />
         </>
      )
   }
}

//schedulerContainer안에 있는 데이터를 객체에 담아 전달하겠다. 
export default SchedulerContainer