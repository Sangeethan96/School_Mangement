import React ,{ useState, useEffect } from 'react';
import axios from 'axios';  
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Login(props) {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [LPassword, setLPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin,setIsLogin]= useState(false)
    //const history = useHistory();
  
   
  
    const handleLogin = (e) => {
      e.preventDefault();
      //This URl is using whre you can see when you run the project(ASp.NET)
      const apiUrl = " https://localhost:44375/api/Login";
  
      const data = {
        Email: Email,
        LPassword: LPassword,
      };
  
      axios.post(apiUrl, data)
        .then((response) => {
          const result = response.data;
          //Console log where you can check the fontend data when running in the browser
          console.log(result);
          console.log(result.StatusCode);
          
          if (result.StatusCode === 200) {
            setIsLogin(true); // Update the state
            localStorage.setItem("isLogin", true); // Set isLogin in localStorage
            localStorage.setItem("email", result.email);
            navigate("/Student");
            alert('Login Successful');
            window.location.reload(); // Refresh the page

        } else {
            alert('Invalid email or Password');
        }
        
        })
        .catch((error) => {
          console.log(error);
          alert('An error occurred during login.');
        });
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
  
       
      return (
          <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
              
              onChange={(e) => setEmail(e.target.value)}
               name="Username" 
                type="username"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={(e) => setLPassword(e.target.value)}
               name="LPassword"
               type={showPassword ? 'text' : 'password'}
                className="form-control mt-1"
                placeholder="Enter password"
              />
               <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary"  onClick={(e) => handleLogin(e)}>
                Submit
               
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      );
  }
  
  export default Login;