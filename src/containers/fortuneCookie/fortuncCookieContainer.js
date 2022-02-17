import React, { PureComponent } from 'react'
import FortuneCookieComponent from './fortuneCookieComponent'
class FortuneCookieContainer extends PureComponent {
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
            <FortuneCookieComponent />
         </>
      )
   }
}
export default FortuneCookieContainer