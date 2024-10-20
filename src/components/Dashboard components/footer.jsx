import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2024 Project Name. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
