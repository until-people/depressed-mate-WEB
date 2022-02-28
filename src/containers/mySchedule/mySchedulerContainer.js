import React, { PureComponent } from 'react'
import MySchedule from './myScheduleComponent'

class MyScheduleContainer extends PureComponent {
   constructor(props) {
      super(...arguments)
      this.isFirst = true

      this.state = {
         mainTabIndex: '0',
      }
   }
   componentDidUpdate = async (prevProps, prevState) => {
      if (!prevProps.initialFlag && this.props.initialFlag) {
         this.isFirst = false
      }
   }
   callbackFunction = {}

   render() {

      return (
         <>
            <MySchedule />
         </>
      )
   }
}
export default MyScheduleContainer
