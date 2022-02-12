import React, { PureComponent } from 'react'
import Drawer from '../../components/drawer'
class CoverContainer extends PureComponent {
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
   callbackFunction = {
      useHistory: () => {
         //  history.push('/')
      },
   }

   render() {
      const { isLogin, children } = this.props
      return (
         <>
            <Drawer isLogin>{children}</Drawer>
         </>
      )
   }
}
export default CoverContainer
