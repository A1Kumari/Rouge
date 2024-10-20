import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // User icon for profile
import './styles/Navbar.css';

const Navbar = ({ userName }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Project Name</h1>
                </div>
                <div className="navbar-profile">
                    <FaUserCircle size={30} color="#FFFFFF" />
                    <span className="username">{userName}</span>
                    <div className="dropdown">
                        <button className="dropdown-btn">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
