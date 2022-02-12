import Header from './components/drawer'
import Routes from './containers/routes'
import { BrowserRouter } from 'react-router-dom'
function App() {
   return (
      <BrowserRouter>
         <Routes isLogin={true} />
      </BrowserRouter>
   )
}

export default App
