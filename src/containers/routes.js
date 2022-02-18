import { Route, Switch } from 'react-router-dom'
import MySchedule from './mySchedule/mySchedulerContainer'
import MyInformation from './myInformation/myInformationContainer'
import Scheduler from './scheduler/schedulerContainer'
import Login from './login/loginContainer'
import Setting from './setting/settingContainer'
import Admin from './admin/adminContainer'

import Notification from './notification/notificationContainer'
import CustomSettings from './customSettings/customSettingsContainer'
import FortuneCookie from './fortuneCookie/fortuncCookieContainer'

import CoverContainer from './cover'
import Test from '../components/screens/test'

function Routes(props) {
   const { isLogin } = props
   console.log(isLogin ? '로그인' : '로그아웃')
   return (
      <Switch>
         <CoverContainer isLogin={isLogin}>
            {/* main - scheduler */}
            <Route exact path="/" component={Scheduler} />

            {/* 나만의할일 (@공다혜) */}
            <Route exact path="/my-schedule" component={MySchedule} />

            {/* 설정 (@천비전) */}
            <Route exact path="/setting" render={() => <Setting />} />

            {/* 내정보 (@천비전) */}
            <Route exact path="/my-information" component={MyInformation} />

            {/* user authorization (@이담영) */}
            <Route exact path="/login" component={Login} />

            {/* test page (@천의령) */}
            <Route exact path="/test" component={Test} />

            {/* back office : 필요 시 */}
            <Route exact path="/admin" component={Admin} />

            {/* 알림 */}
            <Route exact path="/notification" component={Notification} />

            {/* 커스텀 */}
            <Route exact path="/customSettings" component={CustomSettings} />

            {/* 포춘쿠키 */}
            <Route exact path="/fortuneCookie" component={FortuneCookie} />
         </CoverContainer>
      </Switch>
   )
}

export default Routes
