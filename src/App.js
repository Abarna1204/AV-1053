import './App.css';
import Signup from './Components/Signup';
import { Route, BrowserRouter ,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      
      <Route exact path='/' Component={Login} />
      <Route exact path='/login' Component={Login} />
      <Route exact path='/Signup' Component={Signup} />
      <Route exact path='/Dashboard' Component={Dashboard} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
