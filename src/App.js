import {useState} from 'react'
import Users from './User/Users'


function App() {
  const [showUsers,setUserView] = useState(true);
  return (
    <div className="App">
      <div>
      <button onClick={e => setUserView(!showUsers)}>{showUsers ? 'Hide component' : 'Show Component'}</button>
      </div>

      { showUsers ? <Users/> : null}

    </div>

  );
}

export default App;
