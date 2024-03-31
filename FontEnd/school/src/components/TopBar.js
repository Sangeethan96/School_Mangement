import React from 'react';
import { NavLink } from 'react-router-dom';

function TopBar() {
    // Convert the value from localStorage to a boolean
    const isLogin = localStorage.getItem("isLogin") === "true";

    // Function to handle logout
    const handleLogout = () => {
        // Clear the isLogin value from localStorage
        localStorage.removeItem("isLogin");
        // Redirect to the login page
        window.location.href = "/login"; // or use navigate('/login') if you're using React Router
    };

    return (
        <div className="App container">
            <h3 className='d-flex justify-content-center m'> ABC SChool</h3>
            <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/home">
                            Home
                        </NavLink>
                    </li>
                    
                    <li className="nav-item- m-1">
                        {/* Check if user is logged in */}
                        {isLogin ? (
                            <button className="btn btn-light btn-outline-primary" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <NavLink className="btn btn-light btn-outline-primary" to="/login">
                                Login
                            </NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );    
}

export default TopBar;
