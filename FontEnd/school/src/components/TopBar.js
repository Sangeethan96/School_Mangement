import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function TopBar() {
    const [isLogin, setIsLogin] = useState(false);
    const [logStatus, setLogStatus] = useState('');

    // Check login status when component mounts and whenever isLogin changes
    useEffect(() => {
        // Convert the value from localStorage to a boolean
        const loginStatus = localStorage.getItem("isLogin") === "true";
        setIsLogin(loginStatus);
        loginStatus ? setLogStatus('LogOut') : setLogStatus('LogIn');
    }, [isLogin]);

    // Function to handle logout
    const handleLogout = () => {
        // Clear the isLogin value from localStorage
        localStorage.removeItem("isLogin");
        // Update the state to reflect logout
        setIsLogin(false);
        // Redirect to the login page
        window.location.href = "/login"; // or use navigate('/login') if you're using React Router
    };

    return (
        <div className="App container">
            <h3 className='d-flex justify-content-center m'> ABC School</h3>
            <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/home">
                            Home
                        </NavLink>
                    </li>
                    
                    <li className="nav-item- m-1">
                        {/* Check if user is logged in */}
                        <button className="btn btn-light btn-outline-primary" onClick={handleLogout}>
                            {logStatus}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );    
}

export default TopBar;
