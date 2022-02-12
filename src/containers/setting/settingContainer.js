import React, { PureComponent } from 'react'
import Setting from './settingComponent'
class SettingContainer extends PureComponent {
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
            <Setting />
         </>
      )
   }
}
export default SettingContainer
