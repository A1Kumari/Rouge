import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageEditor from '../components/ImageEditor';
import './styles/ShadesTryOnPage.css';
import UserHistoryComponent from '../components/UserHistoryComponent';

const colorOptions = [
    { category: 'Lipstick Shades', colors: ['#E91E63', '#FF5722', '#9C27B0'] },
    { category: 'Hair Colors', colors: ['#795548', '#FFC107', '#4CAF50'] },
    { category: 'Blush Colors', colors: ['#FFCDD2', '#F48FB1', '#E1BEE7'] }
];

const ShadesTryOnPage = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h2 className="text-center mb-4">Shades Try-On</h2>
                
                <div className="row">
                    {colorOptions.map((option, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <h1>{option.category}</h1>
                            <div className="shade-options">
                                {option.colors.map((color, i) => (
                                    <div key={i} className="shade-item" style={{ backgroundColor: color }}></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='row'>
                    <div className="col">
                        <ImageEditor />
                    </div>
                    <div className="col">
                        <p className="para-content">Experiment with different lipstick, hair, and blush shades to find the perfect look for you. Select from the options below and see how they enhance your style in real-time!
                      Experiment with different lipstick, hair, and blush shades to find the perfect look for you. Select from the options below and see how they enhance your style in real-time!
                        Experiment with different lipstick, hair, and blush shades to find the perfect look for you. Select from the options below and see how they enhance your style in real-time!
                        Experiment with different lipstick, hair, and blush shades to find the perfect look for you. Select from the options below and see how they enhance your style in real-time!
                       Experiment with different lipstick, hair, and blush shades to find the perfect look for you. Select from the options below and see how they enhance your style in real-time!</p>
                    
                    </div>
                </div>
                
                <UserHistoryComponent />
            </div>
            <Footer />
        </>
    );
};

export default ShadesTryOnPage;
