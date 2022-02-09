import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import Admin from './screens/admin'
import ActionRecommendation from './screens/actionRecommendation'
import Follow from './screens/follow'
import Scheduler from './screens/scheduler'
import Header from './drawer'
import Login from './screens/login'
import Join from './screens/join'
function Routes(props) {
   const { isLogin } = props
   const history = useHistory()

   const handleClick = () => {
      history.push('/')
   }
   console.log(isLogin ? '로그인' : '로그아웃')
   return true ? (
      <Router>
         <Header>
            <Route path="/admin" component={Admin} />
            <Route path="/recom" component={ActionRecommendation} />
            <Route path="/follow" component={Follow} />
            <Route path="/scheduler" component={Scheduler} />
         </Header>
         <Route path="/login" component={Login} />
         <Route path="/join" component={Join} />
      </Router>
   ) : (
      <Router>
         <Route path="/login" component={Login} />
         <Route path="/join" component={Join} />
      </Router>
   )
}

export default Routes
