import './App.css';
import Home from './components/Home';
import  Employee  from './Employee';
import Login from './Login';
import Student from './Student';
import { variables } from './Variables';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';
import Contact from './Contact';
import TopBar from './components/TopBar';
function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    

      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

  
    </BrowserRouter>
  );
}

export default App;
