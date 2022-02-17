import React, { PureComponent } from 'react'
import NotificationComponent from './notificationComponent'
class NotificationContainer extends PureComponent {
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
            <NotificationComponent />
         </>
      )
   }
}
export default NotificationContainer