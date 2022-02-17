import React, { PureComponent } from 'react'
import CustomSettingsComponent from './customSettingsComponent'
class CustomSettingsContainer extends PureComponent {
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
            <CustomSettingsComponent />
         </>
      )
   }
}
export default CustomSettingsContainer