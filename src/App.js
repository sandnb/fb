
import Users from './Users/Users'
import Routing from './Rounting/Routing'
import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbars from './Navbars'
import Login from "./Login/Login"
import Signup from './Signup/Signup'

function App() {
  const [showUsers, setUserView] = useState(true);

  return (
    <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path='/' element = {
              <div className="App">
                  <div>
                    <button onClick={e => setUserView(!showUsers)}>{showUsers ? 'Hide component' : 'Show Component'}</button>
                  </div>
                  {showUsers ? <Users/> : null}
              </div>
        }/>
        <Route path="/Routing/:term" element={<Routing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;
