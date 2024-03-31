import './App.css';
import Home  from './Home';
import  Employee  from './Employee';
import Login from './Login';
import Student from './Student';
import { variables } from './Variables';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className='d-flex justify-content-center m'> Reactjs Fontend</h3>
      
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">

          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/login">
              Login
            </NavLink>
          </li>
          
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>

          </li>

          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/student">
              Student
            </NavLink>

          </li>
        </ul>
      </nav>

      <Routes >
        <Route path='/home' element={<Home/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/student' element={<Student/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
