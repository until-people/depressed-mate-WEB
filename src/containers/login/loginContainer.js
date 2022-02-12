import React, { PureComponent } from 'react'
import LoginComponent from './loginComponent'
class LoginContainer extends PureComponent {
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
            <LoginComponent callbackFunction={this.callbackFunction} />
         </>
      )
   }
}
export default LoginContainer
