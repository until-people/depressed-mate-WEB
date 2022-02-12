import React, { PureComponent } from 'react'
import AdminComponent from './adminComponent'
class AdminContainer extends PureComponent {
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
      const { initialFlag } = this.props

      return (
         <>
            <AdminComponent />
         </>
      )
   }
}
export default AdminContainer
