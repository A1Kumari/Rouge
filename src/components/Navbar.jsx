import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Assuming you place the CSS code in a file named Navbar.css

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-lg">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand text-gray-800 font-bold" to="/">Rouge</Link>

                {/* Mobile Menu Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/healthcare">Healthcare</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Occasions">Occasions</Link>
                        </li>
                    </ul>
                </div>
                
                {/* Login Button */}
                <div className="d-flex">
                    <Link className="nav-link btn-login" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
